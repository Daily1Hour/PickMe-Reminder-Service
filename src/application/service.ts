import { Inject, Injectable } from "@nestjs/common";

import NotificationEntity from "src/domain/entity";

import INotificationRepository from "src/application/repository";

import { RegisterRequestDTO } from "./dto";

@Injectable()
export default class NotificationService {
    constructor(
        @Inject("INotificationRepository")
        private readonly repository: INotificationRepository,
    ) {}

    async registerNotification({ event_id, send_at, status }: RegisterRequestDTO) {
        const entity = new NotificationEntity(event_id, send_at, status);

        await this.repository.save(entity);
    }
}
