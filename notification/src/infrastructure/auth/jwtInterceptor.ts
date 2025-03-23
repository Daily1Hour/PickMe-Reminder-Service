import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    UnauthorizedException,
} from "@nestjs/common";
import { Observable } from "rxjs";

import verifier from "./verifier";

@Injectable()
export class JwtInterceptor implements NestInterceptor {
    async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest(); // request 객체 가져오기
        const token = request.headers["authorization"]?.split(" ")[1]; // 'Bearer <token>'

        const controller = context.getClass();
        if (controller.name === "HealthCheckController") {
            return next.handle(); // 헬스체크 경로에서는 인터셉터를 적용하지 않음
        }

        if (!token) {
            throw new UnauthorizedException("JWT token is missing");
        }

        try {
            const decoded = await verifier.verify(token); // cognito의 jwt token 검증
            request.user = decoded; // request에 user 정보 추가
        } catch (error) {
            throw new UnauthorizedException("Invalid JWT token", error);
        }

        return next.handle(); // 다음 핸들러 실행
    }
}
