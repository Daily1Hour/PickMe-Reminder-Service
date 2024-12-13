import { Injectable } from "@nestjs/common";

import { INotificationSender } from "application/ports/sender";
import { NotificationEntity } from "application/dto";

import { OnesignalClient } from "./api/onesignalClient";

@Injectable()
export class WebNotificationSender implements INotificationSender {
    constructor(private readonly client: OnesignalClient) {}

    async dispatch(payload: NotificationEntity[]): Promise<void> {
        try {
            const external_id = ["user_id"];

            const response = await this.client.post(null, {
                target_channel: "push",
                contents: {
                    en: "알림 메시지",
                },
                include_aliases: {
                    external_id,
                },
            });

            console.log("Notification sent successfully:", response.data);
        } catch (error) {
            console.error("Error sending notification:", error.response?.data || error.message);
        }
    }
}
