import { NotificationEntity } from "./dto";

export interface INotificationSender {
    dispatch(notification: NotificationEntity[]): Promise<void>;
}
