import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";

import { NotificationStatus } from "src/notification/application/dto";
import NotificationService from "src/notification/application/service";
import dispatch from "./dispatch";

@Injectable()
export class WorkerService {
    constructor(private readonly notificationService: NotificationService) {}

    async start() {
        const start_time = new Date();
        const end_time = new Date(start_time.getTime() + 60 * 60 * 1000); // 1시간 후

        // 발송할 알림들
        const notifications = await this.notificationService.getFilteredList({
            start_time,
            end_time,
            status: NotificationStatus.Pending,
        });

        // 발송 처리
        await dispatch(notifications);

        // 발송 완료 처리
        for (const notification of notifications) {
            await this.notificationService.update(
                { event_id: notification.event_id },
                {
                    status: NotificationStatus.Sent,
                },
            );
        }
    }

    @Cron("0 * * * *") // 매 정시에 실행
    async handleCron() {
        console.log("잡 수행 시간:", new Date());
        await this.start();
    }
}
