import NotificationEntity, { NotificationStatus } from "./entity";

export default interface INotificationRepository {
    create(entity: NotificationEntity): Promise<NotificationEntity>;

    findById(event_id: string): Promise<NotificationEntity>;

    findByReservationTime(
        start_time: Date,
        end_time: Date,
        status: NotificationStatus,
    ): Promise<NotificationEntity[]>;

    deleteById(event_id: string): Promise<boolean>;
}
