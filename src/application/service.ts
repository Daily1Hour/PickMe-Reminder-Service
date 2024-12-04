import { Inject, Injectable } from "@nestjs/common";

import NotificationEntity from "src/domain/entity";
import INotificationRepository from "src/domain/repository";
import { CreateRequestDTO } from "src/presentation/dto";

@Injectable()
export class NotificationService {
    constructor(
        @Inject("INotificationRepository")
        private readonly repository: INotificationRepository,
    ) {}

    async registerNotification({ event_id, send_at, status }: CreateRequestDTO) {
        const entity = new NotificationEntity(event_id, send_at, status);

        await this.repository.save(entity);
    }
}
