import NotificationEntity from "./entity";

export default interface INotificationRepository {
    save(entity: NotificationEntity): Promise<NotificationEntity>;
}
