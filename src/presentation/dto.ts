import { IsString, IsDate } from "class-validator";

export class CreateRequestDTO {
    @IsString()
    event_id: string;

    @IsDate()
    send_at: Date;

    @IsString()
    status: "Pending" | "Sent" | "Failed";
}
