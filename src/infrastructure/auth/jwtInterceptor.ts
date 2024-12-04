import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    UnauthorizedException,
} from "@nestjs/common";
import { Observable } from "rxjs";
import * as jwt from "jsonwebtoken";

@Injectable()
export class JwtInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers["authorization"]?.split(" ")[1]; // 'Bearer <token>'

        if (!token) {
            throw new UnauthorizedException("JWT token is missing");
        }

        try {
            const decoded = jwt.decode(token);
            request.user = decoded;
        } catch (error) {
            throw new UnauthorizedException("Invalid JWT token", error);
        }

        return next.handle();
    }
}
