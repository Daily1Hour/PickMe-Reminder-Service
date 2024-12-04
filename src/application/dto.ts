export interface RegisterRequestDTO {
    event_id: string;
    send_at: Date;
    status: "Pending" | "Sent" | "Failed";
}

export interface ReadRequestDTO {
    event_id: string;
}
