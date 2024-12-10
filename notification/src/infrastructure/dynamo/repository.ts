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
        return this.model.create(eventData);
    }

    async findById(event_id: string) {
        return this.model.get(event_id);
    }

    async findByReservationTime(send_at: Date) {
        return this.model.query("send_at").eq(send_at).exec();
    }

    async deleteById(event_id: string) {
        return this.model.delete(event_id);
    }
}
