import { Injectable } from "@nestjs/common";
import { DeleteResult } from "typeorm";

import NotificationEntity from "domain/entity";

import { OptionsDTO, ReadRequestDTO, RegisterRequestDTO, UpdateRequestDTO } from "./dto";
import DynamoRepository from "infrastructure/dynamoRepository";

@Injectable()
export default class NotificationService {
    constructor(private repository: DynamoRepository) {}

    async register({ event_id, send_at, status }: RegisterRequestDTO) {
        const entity = new NotificationEntity(event_id, send_at, status); // 도메인 객체 생성

        return this.repository.create(entity); // ORM 엔티티 생성
    }

    async update(paramDTO: ReadRequestDTO, bodyDTO: UpdateRequestDTO) {
        const entity = await this.get(paramDTO); // 해당 엔티티가 있는지 확인
        if (!entity) {
            throw new Error("Entity not found.");
        }

        return this.register({ ...entity, ...paramDTO, ...bodyDTO });
    }

    async get({ event_id }: ReadRequestDTO): Promise<NotificationEntity> {
        return this.repository.findById(event_id);
    }

    async getFilteredList({
        start_time,
        end_time,
        status,
    }: OptionsDTO): Promise<NotificationEntity[]> {
        return this.repository.findByReservationTime(start_time);
    }

    async delete({ event_id }: ReadRequestDTO): Promise<DeleteResult> {
        return this.repository.deleteById(event_id);
    }
}
