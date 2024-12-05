import NotificationEntity from "src/notification/domain/entity";

export default async function dispatch(notifications: NotificationEntity[]) {
    console.log(notifications);
}
