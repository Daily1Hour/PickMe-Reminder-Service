import { Injectable } from "@nestjs/common";

import NotificationEntity from "src/domain/entity";

@Injectable()
export default class DefaultNotificationRepository {
    async save(entity: NotificationEntity) {
        console.log("save", entity);
    }
}
