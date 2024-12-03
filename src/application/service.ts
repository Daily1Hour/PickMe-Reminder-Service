import { Injectable } from "@nestjs/common";

import NotificationEntity from "src/domain/entity";
import NotificationRepository from "src/infrastructure/repository";
import { CreateRequestDTO } from "src/presentation/dto";

@Injectable()
export class NotificationService {
    constructor(private readonly repository: NotificationRepository) {}

    async registerNotification({ event_id, send_at, status }: CreateRequestDTO) {
        const entity = new NotificationEntity(event_id, send_at, status);

        await this.repository.save(entity);
    }
}
