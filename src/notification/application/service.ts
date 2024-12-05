import { Injectable } from "@nestjs/common";
import { DeleteResult, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import NotificationEntity from "src/notification/domain/entity";

import NotificationORMEntity from "src/notification/infrastructure/ormEntity";

import { OptionsDTO, ReadRequestDTO, RegisterRequestDTO, UpdateRequestDTO } from "./dto";

@Injectable()
export default class NotificationService {
    constructor(
        @InjectRepository(NotificationORMEntity)
        private repository: Repository<NotificationORMEntity>,
    ) {}

    async register({ event_id, send_at, status }: RegisterRequestDTO) {
        const entity = new NotificationEntity(event_id, send_at, status); // 도메인 객체 생성

        const ormEntity = this.repository.create(entity); // ORM 엔티티 생성
        await this.repository.save(ormEntity); // 레포지토리에 저장
    }

    async update(paramDTO: ReadRequestDTO, bodyDTO: UpdateRequestDTO) {
        const entity = await this.get(paramDTO); // 해당 엔티티가 있는지 확인
        if (!entity) {
            throw new Error("Entity not found.");
        }

        return this.register({ ...paramDTO, ...bodyDTO, ...entity });
    }

    async get({ event_id }: ReadRequestDTO): Promise<NotificationEntity> {
        return this.repository.findOne({ where: { event_id } });
    }

    async getFilteredList({
        start_time,
        end_time,
        status,
    }: OptionsDTO): Promise<NotificationEntity[]> {
        return this.repository
            .createQueryBuilder("item")
            .andWhere("item.send_at >= :start_time", { start_time })
            .andWhere("item.send_at <= :end_time", { end_time })
            .andWhere("item.status = :status", { status })
            .getMany();
    }

    async delete({ event_id }: ReadRequestDTO): Promise<DeleteResult> {
        return this.repository.delete({ event_id });
    }
}
