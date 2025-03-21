import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ScheduleModule } from "@nestjs/schedule";

import { WorkerService } from "application/usecases/service";
import { WorkerCronService } from "application/usecases/cron";

import { WorkerClientImpl } from "infrastructure/clientImpl";
import { WebNotificationSender } from "infrastructure/senders/webSender";
import { CalendarEventReceiver } from "infrastructure/receivers/calendarReceiver";
import { OnesignalClient, CalendarClient } from "infrastructure/api";

@Module({
    imports: [
        ScheduleModule.forRoot(),
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [".env.local", ".env"],
        }),
    ],
    providers: [
        /** 유즈케이스 */
        WorkerService,
        WorkerCronService,

        /** 인프라스트럭처 */
        {
            // Notification 마이크로서비스 TCP 송발신 인프라
            provide: "IWorkerClient", // 인터페이스 제공
            useClass: WorkerClientImpl, // 구현체 연결
        },
        {
            // 알림 발송하는 인프라
            provide: "INotificationSender",
            useClass: WebNotificationSender,
        },
        {
            // 캘린더 이벤트 수신하는 인프라
            provide: "IEventReceiver",
            useClass: CalendarEventReceiver,
        },

        /** API 래핑 */
        OnesignalClient,
        CalendarClient,
    ],
})
export class WorkerModule {}
