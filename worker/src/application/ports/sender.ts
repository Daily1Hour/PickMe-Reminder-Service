export interface INotificationSender {
    dispatch(notification: any[]): Promise<void>;
}
