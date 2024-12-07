import { NotificationEntity } from "./dto";

export default async function dispatch(notifications: NotificationEntity[]) {
    console.log(notifications);
}
