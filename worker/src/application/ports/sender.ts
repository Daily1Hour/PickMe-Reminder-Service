import { EventDetail } from "../dto";

export interface INotificationSender {
    dispatch(notification: EventDetail): Promise<void>;
}
