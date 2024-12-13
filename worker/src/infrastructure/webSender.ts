import axios from "axios";

import { INotificationSender } from "application/sender";
import { NotificationEntity } from "application/dto";

export class WebNotificationSender implements INotificationSender {
    private readonly ONESIGNAL_APP_ID = process.env.ONESIGNAL_APP_ID;
    private readonly ONESIGNAL_API_KEY = process.env.ONESIGNAL_API_KEY;
    private readonly ONESIGNAL_API_URL = "https://api.onesignal.com/notifications";

    async dispatch(payload: NotificationEntity[]): Promise<void> {
        try {
            const external_id = ["user_id"];

            const response = await axios.post(
                this.ONESIGNAL_API_URL,
                {
                    app_id: this.ONESIGNAL_APP_ID,
                    target_channel: "push",
                    contents: {
                        en: "알림 메시지",
                    },
                    include_aliases: {
                        external_id,
                    },
                },
                {
                    headers: {
                        Authorization: this.ONESIGNAL_API_KEY,
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                },
            );

            console.log("Notification sent successfully:", response.data);
        } catch (error) {
            console.error("Error sending notification:", error.response?.data || error.message);
        }
    }
}
