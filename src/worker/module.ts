import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";

import { NotificationModule } from "../notification/module";

import { WorkerService } from "./application/service";

import { WorkerClientImpl } from "./infrastructure/clientImpl";

@Module({
    imports: [ScheduleModule.forRoot(), NotificationModule],
    providers: [
        WorkerService,
        {
            provide: "IWorkerClient", // 인터페이스 제공
            useClass: WorkerClientImpl, // 구현체 연결
        },
    ],
})
export class WorkerModule {}
