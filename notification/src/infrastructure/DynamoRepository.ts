import dynamoose from "dynamoose";
import { Inject, Injectable } from "@nestjs/common";

import NotificationEntity, { NotificationStatus } from "domain/entity";
import INotificationRepository from "domain/repository";

@Injectable()
export default class DynamoRepository implements INotificationRepository {
    private readonly model;

    constructor(@Inject("DYNAMOOSE") private readonly dynamooseInstance: typeof dynamoose) {
        this.model = dynamooseInstance.model(
            "PickMe-Reminder",
            new dynamooseInstance.Schema({
                event_id: { type: String, hashKey: true },
                send_at: Date,
                status: {
                    type: String,
                    enum: Object.values(NotificationStatus),
                },
            }),
        );
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
