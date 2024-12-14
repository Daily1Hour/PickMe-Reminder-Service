import { EventDetail } from "application/dto";

export interface INotificationSender {
    dispatch(notification: EventDetail): Promise<void>;
}
