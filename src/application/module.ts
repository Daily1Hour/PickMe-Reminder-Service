import { Module } from "@nestjs/common";

import { NotificationService } from "./service";
import NotificationController from "src/presentation/controller";
import DefaultNotificationRepository from "src/infrastructure/default-repository";

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
