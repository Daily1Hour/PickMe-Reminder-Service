import { Injectable } from "@nestjs/common";

import { INotificationSender } from "application/ports/sender";
import { EventDetail } from "application/dto";

import { OnesignalClient } from "../api/onesignalClient";

@Injectable()
export class WebNotificationSender implements INotificationSender {
    constructor(private readonly client: OnesignalClient) {}

    async dispatch({
        company: { name: companyName, location },
        interviewTime,
        position,
        category,
        description,
        clientId,
    }: EventDetail): Promise<void> {
        try {
            const external_id = [clientId];

            const response = await this.client.post(null, {
                target_channel: "push",
                contents: {
                    en: `${companyName}\n${description}\n${location}\n${new Date(interviewTime).toLocaleTimeString()}\n${position} ${category}`,
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
