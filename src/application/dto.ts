export interface RegisterRequestDTO {
    event_id: string;
    send_at: Date;
    status: "Pending" | "Sent" | "Failed";
}
