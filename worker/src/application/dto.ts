export enum NotificationStatus {
    Pending = "Pending",
    Sent = "Sent",
    Failed = "Failed",
}

export interface NotificationEntity {
    event_id: string; // 알림 할당한 이벤트 ID
    send_at: Date; // 알림 발송 시간
    status: NotificationStatus; // 알림 상태
}
