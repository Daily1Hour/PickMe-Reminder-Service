import { Injectable } from "@nestjs/common";
import { DeleteResult, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import NotificationEntity from "src/domain/entity";

import NotificationORMEntity from "src/infrastructure/ormEntity";

import { ReadRequestDTO, RegisterRequestDTO } from "./dto";

@Injectable()
export default class NotificationService {
    constructor(
        @InjectRepository(NotificationORMEntity)
        private repository: Repository<NotificationORMEntity>,
    ) {}

    async registerNotification({ event_id, send_at, status }: RegisterRequestDTO) {
        const entity = new NotificationEntity(event_id, send_at, status); // 도메인 객체 생성

        const ormEntity = this.repository.create(entity); // ORM 엔티티 생성
        await this.repository.save(ormEntity); // 레포지토리에 저장
    }

    async getNotifications({ event_id }: ReadRequestDTO): Promise<NotificationORMEntity> {
        return this.repository.findOne({ where: { event_id } });
    }

    async deleteNotifications({ event_id }: ReadRequestDTO): Promise<DeleteResult> {
        return this.repository.delete({ event_id });
    }
}
