export default class NotificationEntity {
    constructor(
        public event_id: string, // 알림 할당한 이벤트 ID
        public send_at: Date, // 알림 발송 시간
        public status: "Pending" | "Sent" | "Failed" = "Pending", // 알림 상태
    ) {}
}
