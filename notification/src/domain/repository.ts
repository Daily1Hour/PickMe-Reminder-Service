import NotificationEntity from "./entity";

export default interface INotificationRepository {
    create(entity: NotificationEntity): Promise<NotificationEntity>;

    findById(event_id: string): Promise<NotificationEntity>;

    findByReservationTime(send_at: Date): Promise<NotificationEntity[]>;

    deleteById(event_id: string): Promise<boolean>;
}
