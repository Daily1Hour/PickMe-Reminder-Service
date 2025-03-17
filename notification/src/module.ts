import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import NotificationService from "./application/service";

import NotificationHttpController from "presentation/controllers/httpController";
import NotificationsMessageController from "presentation/controllers/messageController";

import DynamooseProvider from "infrastructure/dynamo/provider";
import DynamoRepository from "infrastructure/dynamo/repository";
import DynamooseModel from "infrastructure/dynamo/model";

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
    controllers: [NotificationHttpController, NotificationsMessageController],
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
