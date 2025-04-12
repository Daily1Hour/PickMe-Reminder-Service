import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import NotificationService from "./application/service";

import NotificationHttpController from "presentation/controllers/httpController";
import NotificationsMessageController from "presentation/controllers/messageController";
import HealthCheckController from "presentation/controllers/healthCheckController";

import DynamooseProvider from "infrastructure/dynamo/provider";
import DynamoRepository from "infrastructure/dynamo/repository";
import DynamooseModel from "infrastructure/dynamo/model";

/**
 * NotificationModule
 *
 * 이 모듈은 알림 서비스를 제공하기 위한 구성 요소를 정의합니다.
 *
 * - `providers`: 서비스와 리포지토리, 그리고 Dynamoose 모델을 제공하는 프로바이더를 정의합니다.
 *   - `DynamooseProvider`: Dynamoose 관련 설정 및 초기화를 담당합니다.
 *   - `NotificationService`: 알림 관련 비즈니스 로직을 처리하는 서비스입니다.
 *   - `INotificationRepository`: 알림 리포지토리 인터페이스를 제공하며, `DynamoRepository` 구현체와 연결됩니다.
 *   - `DynamooseModel`: Dynamoose 모델을 제공합니다.
 *
 * - `controllers`: HTTP 요청 및 메시지 처리를 담당하는 컨트롤러를 정의합니다.
 *   - `NotificationHttpController`: HTTP 기반 알림 요청을 처리합니다.
 *   - `NotificationsMessageController`: 메시지 기반 알림 요청을 처리합니다.
 *   - `HealthCheckController`: 서비스 상태를 확인하는 헬스 체크 컨트롤러입니다.
 *
 * - `imports`: 모듈에서 사용하는 외부 모듈을 가져옵니다.
 *   - `ConfigModule`: 환경 변수 설정을 글로벌로 적용하며, `.env.local` 및 `.env` 파일을 로드합니다.
 */
@Module({
    providers: [
        DynamooseProvider,
        NotificationService,
        {
            provide: "INotificationRepository", // 인터페이스 제공
            useClass: DynamoRepository, // 구현체 연결
        },
        DynamooseModel,
    ],
    controllers: [
        NotificationHttpController,
        NotificationsMessageController,
        HealthCheckController,
    ],
    imports: [
        // 환경 변수 글로벌 설정
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [".env.local", ".env"],
        }),
    ],
    exports: [],
})
export class NotificationModule {}
