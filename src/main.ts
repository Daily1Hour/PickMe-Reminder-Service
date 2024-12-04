import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";

import { NotificationModule } from "./module";
import { JwtInterceptor } from "./infrastructure/auth/jwtInterceptor";

async function bootstrap() {
    const app = await NestFactory.create(NotificationModule);

    // 전역 파이프 설정
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true, // 요청 데이터를 DTO로 변환
            whitelist: true, // DTO에 없는 속성은 무시
            forbidNonWhitelisted: true, // DTO에 없는 속성이 있으면 에러
        }),
    );

    app.useGlobalInterceptors(new JwtInterceptor()); // 전역 인터셉터 설정

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
