import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";

import { NotificationModule } from "../notification/module";

import { WorkerService } from "./service";

@Module({
    imports: [ScheduleModule.forRoot(), NotificationModule],
    providers: [WorkerService],
})
export class WorkerModule {}
