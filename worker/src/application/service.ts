import { Inject, Injectable } from "@nestjs/common";

import dispatch from "./dispatch";
import { NotificationStatus } from "./dto";
import { IWorkerClient } from "./client";

@Injectable()
export class WorkerService {
    constructor(@Inject("IWorkerClient") private readonly client: IWorkerClient) {}

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

            // 발송 처리
            await dispatch(notifications);

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
