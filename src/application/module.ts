import { Module } from "@nestjs/common";

import { NotificationService } from "./service";
import NotificationController from "src/presentation/controller";
import NotificationRepository from "src/infrastructure/repository";

@Module({
    providers: [NotificationService, NotificationRepository],
    controllers: [NotificationController],
})
export class NotificationModule {}
