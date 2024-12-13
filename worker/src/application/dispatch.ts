import axios from "axios";

import { NotificationEntity } from "./dto";

const ONESIGNAL_APP_ID = "";
const ONESIGNAL_API_KEY = "";
const ONESIGNAL_API_URL = "https://api.onesignal.com/notifications";

export default async function dispatch(data: NotificationEntity[]) {
    try {
        const external_id = ["user_id"];

        const response = await axios.post(
            ONESIGNAL_API_URL,
            {
                app_id: ONESIGNAL_APP_ID,
                target_channel: "push",
                contents: {
                    ko: "알림 메시지",
                },
                include_aliases: {
                    external_id,
                },
            },
            {
                headers: {
                    Authorization: ONESIGNAL_API_KEY,
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
