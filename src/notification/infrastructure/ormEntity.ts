import { Column, Entity, PrimaryColumn } from "typeorm";

import { NotificationStatus } from "@notification/application/dto";

@Entity("Notification")
export default class NotificationORMEntity {
    @PrimaryColumn()
    event_id: string;

    @Column({ type: "datetime" })
    send_at: Date;

    @Column({ type: "enum", enum: NotificationStatus, default: NotificationStatus.Pending })
    status: NotificationStatus;
}
