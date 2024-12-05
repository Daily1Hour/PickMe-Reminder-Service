import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, IsDate, IsOptional, ValidateIf } from "class-validator";

import { NotificationStatus } from "src/notification/application/dto";

import { AtLeastOneOption, IsTimeRange, TrimSeconds } from "src/notification/utility/decorators";

export class CreateRequestDTO {
    @IsString()
    @ApiProperty({ description: "수행될 이벤트 ID", example: "507f1f77bcf86cd799439011" })
    event_id: string;

    @IsDate()
    @TrimSeconds() 
    @Type(() => Date)
    @ApiProperty({ description: "알림 발송 시간" })
    send_at: Date;

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

export class ReadRequestDTO {
    @IsString()
    @ApiProperty({ description: "수행될 이벤트 ID", example: "507f1f77bcf86cd799439011" })
    event_id: string;
}

export class OptionsDTO {
    @IsDate()
    @IsOptional()
    @ValidateIf((o) => o.end_time) // end_time과 엮음
    @Type(() => Date)
    @ApiProperty({ description: "시작 시간", required: false })
    start_time?: Date;

    @IsDate()
    @IsOptional()
    @ValidateIf((o) => o.start_time) // start_time과 엮음
    @Type(() => Date)
    @ApiProperty({ description: "종료 시간", required: false })
    end_time?: Date;

    @IsTimeRange({ message: "시작 시간과 종료 시간은 짝으로 제공되거나 없어야합니다." })
    time_range?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        description: "알림 상태",
        enum: NotificationStatus,
        required: false,
        example: "Pending",
    })
    status?: NotificationStatus;

    @AtLeastOneOption({ message: "적어도 하나의 옵션이 필요합니다." })
    filter_options?: any;
}
