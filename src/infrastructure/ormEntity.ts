import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("Notification")
export default class NotificationORMEntity {
    @PrimaryColumn()
    event_id: string;

    @Column({ type: "date" })
    send_at: Date;

    @Column({ default: "Pending" })
    status: "Pending" | "Sent" | "Failed";
}
