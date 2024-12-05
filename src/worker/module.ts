import { Module } from "@nestjs/common";

import { NotificationModule } from "../notification/module";

import { WorkerService } from "./service";

@Module({
    imports: [NotificationModule],
    providers: [WorkerService],
})
export class WorkerModule {}
