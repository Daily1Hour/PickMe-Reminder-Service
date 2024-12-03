import { Module } from "@nestjs/common";

import { NotificationService } from "./service";
import NotificationController from "src/presentation/controller";

@Module({
    providers: [NotificationService],
    controllers: [NotificationController],
})
export class NotificationModule {}
