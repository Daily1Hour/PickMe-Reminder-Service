import { Inject, Injectable } from "@nestjs/common";

import { IWorkerClient, INotificationSender, IEventReceiver } from "../ports";
import { EventDetail, NotificationStatus } from "../dto";

// 알림 조회 범위
const NOTIFICATION_READ_RANGE = Number(process.env.READ_RANGE) || 60 * 60 * 1000; // 1시간

@Injectable()
export class WorkerService {
    constructor(
        @Inject("IWorkerClient") private readonly client: IWorkerClient,
        @Inject("INotificationSender") private readonly sender: INotificationSender,
        @Inject("IEventReceiver") private readonly receiver: IEventReceiver,
    ) {}

    async start() {
        const start_time = new Date();
        const end_time = new Date(start_time.getTime() + NOTIFICATION_READ_RANGE);

        // 발송할 알림들
        const notifications = await this.client.readByOptions({
            start_time,
            end_time,
            status: NotificationStatus.Pending,
        });

        notifications
            // 알림 내용 조회
            .map(this.receiver.receive.bind(this.receiver))
            // 발송 처리
            .forEach(async (message: Promise<EventDetail>) => {
                try {
                    this.sender.dispatch(await message);
                    console.log("발송 완료");

                    // 발송 완료 처리
                    const { interviewDetailId: event_id } = await message;

                    await this.client.updatePartial({
                        event_id,
                        status: NotificationStatus.Sent,
                    });
                } catch (error) {
                    console.error("발송 처리 중 에러 발생", error);
                }
            });
    }
}
