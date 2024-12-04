import { Module } from "@nestjs/common";

import NotificationService from "src/application/service";

import DefaultNotificationRepository from "src/infrastructure/default-repository";

import NotificationController from "src/presentation/controller";

@Module({
    providers: [
        NotificationService,
        {
            provide: "INotificationRepository", // 인터페이스 제공
            useClass: DefaultNotificationRepository, // 구현체 연결
        },
    ],
    controllers: [NotificationController],
})
export class NotificationModule {}
