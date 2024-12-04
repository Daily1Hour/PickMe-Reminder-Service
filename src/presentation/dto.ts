import { Type } from "class-transformer";
import { IsString, IsDate } from "class-validator";

export class CreateRequestDTO {
    @IsString()
    event_id: string;

    @IsDate()
    @Type(() => Date)
    send_at: Date;

    @IsString()
    status: "Pending" | "Sent" | "Failed";
}

export class ReadRequestDTO {
    @IsString()
    event_id: string;
}
