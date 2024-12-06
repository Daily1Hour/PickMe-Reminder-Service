import NotificationEntity from "@notification/domain/entity";

export default async function dispatch(notifications: NotificationEntity[]) {
    console.log(notifications);
}
