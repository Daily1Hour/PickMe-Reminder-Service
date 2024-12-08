import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

import { NotificationModule } from "./module";
import { JwtInterceptor } from "./infrastructure/auth/jwtInterceptor";
import generatorSwagger from "./utility/generatorSwagger";

async function bootstrap() {
    // 알림 서비스 생성
    const app = await NestFactory.create(NotificationModule);

    // Swagger 설정
    generatorSwagger(app);

    // 전역 파이프 설정
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true, // 요청 데이터를 DTO로 변환
            whitelist: true, // DTO에 없는 속성은 무시
            forbidNonWhitelisted: true, // DTO에 없는 속성이 있으면 에러
        }),
    );

    // 전역 인터셉터 설정
    app.useGlobalInterceptors(new JwtInterceptor());

    await app.listen(process.env.PORT || 3000);

    // 마이크로서비스 설정
    app.connectMicroservice<MicroserviceOptions>({
        transport: Transport.TCP, // TCP 프로토콜 사용
        options: {
            host: "0.0.0.0",
            port: process.env.MS_PORT || 3001,
        },
    });

    await app.startAllMicroservices();
}
bootstrap();
