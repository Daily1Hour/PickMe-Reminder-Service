import dynamoose from "dynamoose";
import { ModelType } from "dynamoose/dist/General";
import { AnyItem } from "dynamoose/dist/Item";
import { Inject, Injectable } from "@nestjs/common";

import { NotificationStatus } from "domain/entity";

@Injectable()
export default class DynamooseModel {
    private readonly model: ModelType<AnyItem>;

    constructor(@Inject("DYNAMOOSE") private readonly instance: typeof dynamoose) {
        const schema = new instance.Schema({
            event_id: { type: String, hashKey: true },
            send_at: {
                type: Date,
                index: {
                    type: "global",
                    name: "send_at-status-index",
                    rangeKey: "status",
                },
            },
            status: {
                type: String,
                enum: Object.values(NotificationStatus),
            },
        });

        this.model = this.instance.model("PickMe-Reminder", schema);
    }

    getModel() {
        return this.model;
    }
}
