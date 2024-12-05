import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, IsDate, IsOptional } from "class-validator";

import { NotificationStatus } from "src/notification/domain/entity";

export default class UpdateRequestDTO {
    @IsDate()
    @Type(() => Date)
    @IsOptional()
    @ApiProperty({ description: "알림 발송 시간", required: false })
    send_at?: Date;

    @IsString()
    @IsOptional()
    @ApiProperty({
        description: "알림 상태",
        enum: NotificationStatus,
        required: false,
        example: "Pending",
    })
    status?: NotificationStatus;
}
