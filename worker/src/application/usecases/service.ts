import { Inject, Injectable } from "@nestjs/common";

import { IWorkerClient } from "application/ports/client";
import { IEventReceiver } from "application/ports/receiver";
import { INotificationSender } from "application/ports/sender";

import { NotificationStatus } from "../dto";

@Injectable()
export class WorkerService {
    constructor(
        @Inject("IWorkerClient") private readonly client: IWorkerClient,
        @Inject("INotificationSender") private readonly sender: INotificationSender,
        @Inject("IEventReceiver") private readonly receiver: IEventReceiver,
    ) {}

    async start() {
        const start_time = new Date();
        const end_time = new Date(start_time.getTime() + 60 * 60 * 1000); // 1시간 후

        try {
            // 발송할 알림들
            const notifications = await this.client.readByOptions({
                start_time,
                end_time,
                status: NotificationStatus.Pending,
            });

            // 알림 내용 조회
            const messages = await Promise.all(notifications.map(this.receiver.receive));

            // 발송 처리
            await this.sender.dispatch(messages);

            console.log("발송 완료 처리");
            // 발송 완료 처리
            for (const notification of notifications) {
                await this.client.updatePartial({
                    event_id: notification.event_id,
                    status: NotificationStatus.Sent,
                });
            }
        } catch (error) {
            console.error("발송 처리 중 에러 발생", error);
        }
    }
}
