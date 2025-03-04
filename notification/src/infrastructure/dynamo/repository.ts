import { Injectable } from "@nestjs/common";
import { ModelType } from "dynamoose/dist/General";

import NotificationEntity, { NotificationStatus } from "domain/entity";
import INotificationRepository from "domain/repository";

import DynamoModel from "./model";

@Injectable()
export default class DynamoRepository implements INotificationRepository {
    private readonly model: ModelType<any>;

    constructor(model: DynamoModel) {
        this.model = model.getModel();
    }

    async create(eventData: NotificationEntity) {
        return this.model.update({
            ...eventData,
            ttl: Math.floor(eventData.send_at.getTime() / 1000) + 60 * 60, // 1시간 후 삭제
        });
    }

    async findById(event_id: string) {
        return this.model.get(event_id);
    }

    async findByReservationTime(start_time: Date, _end_time: Date, status: NotificationStatus) {
        const start_ts = new Date(start_time).getTime();

        return this.model
            .query("send_at")
            .eq(start_ts)
            .where("status")
            .eq(status)
            .using("send_at-status-index")
            .exec();
    }

    async deleteById(event_id: string) {
        return this.model.delete(event_id);
    }
}
