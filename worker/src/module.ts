import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ScheduleModule } from "@nestjs/schedule";

import { WorkerService } from "application/usecases/service";

import { WorkerCronService } from "infrastructure/cron";
import { WorkerClientImpl } from "infrastructure/clientImpl";
import { OnesignalClient } from "infrastructure/api/onesignalClient";
import { WebNotificationSender } from "infrastructure/webSender";

@Module({
    imports: [ScheduleModule.forRoot(), ConfigModule.forRoot()],
    providers: [
        WorkerService,
        {
            provide: "IWorkerClient", // 인터페이스 제공
            useClass: WorkerClientImpl, // 구현체 연결
        },
        {
            provide: "INotificationSender",
            useClass: WebNotificationSender,
        },
        WorkerCronService,
        OnesignalClient,
    ],
})
export class WorkerModule {}
