import { NotificationStatus } from "src/notification/domain/entity";

export { NotificationStatus };

export interface RegisterRequestDTO {
    event_id: string;
    send_at: Date;
    status?: NotificationStatus;
}

export interface UpdateRequestDTO {
    send_at?: Date;
    status?: NotificationStatus;
}

export interface ReadRequestDTO {
    event_id: string;
}

export interface OptionsDTO {
    start_time?: Date;
    end_time?: Date;
    status?: NotificationStatus;
}