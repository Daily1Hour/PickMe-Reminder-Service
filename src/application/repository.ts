import NotificationEntity from "src/domain/entity";

export default interface INotificationRepository {
    save(entity: NotificationEntity): Promise<NotificationEntity>;
}
