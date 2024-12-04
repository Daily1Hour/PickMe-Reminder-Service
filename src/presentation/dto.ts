import { Type } from "class-transformer";
import { IsString, IsDate } from "class-validator";

import { NotificationStatus } from "src/application/dto";

export class CreateRequestDTO {
    @IsString()
    event_id: string;

    @IsDate()
    @Type(() => Date)
    send_at: Date;

    @IsString()
    status: NotificationStatus;
}

export class ReadRequestDTO {
    @IsString()
    event_id: string;
}
