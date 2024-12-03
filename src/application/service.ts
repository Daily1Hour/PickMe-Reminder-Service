import { Injectable } from "@nestjs/common";

import NotificationEntity from "src/domain/entity";
import { CreateRequestDTO } from "src/presentation/dto";

@Injectable()
export class NotificationService {
    async registerNotification({ event_id, send_at, status }: CreateRequestDTO) {
        const entity = new NotificationEntity(event_id, send_at, status);

        console.log("entity", entity);
    }
}
