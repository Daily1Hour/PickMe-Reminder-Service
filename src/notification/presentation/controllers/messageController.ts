import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiTags, ApiBody } from "@nestjs/swagger";
import { MessagePattern, Payload } from "@nestjs/microservices";

import NotificationService from "src/notification/application/service";

import { ParametersDTO } from "../dtos";

@Controller("message")
@ApiTags("TCP API")
export default class NotificationsMessageController {
    constructor(private readonly service: NotificationService) {}

    @Get("docs")
    @ApiOperation({
        summary: "알림 옵션 조회",
        description: "이 API는 메시지 브로커를 통해 동작하며, HTTP 요청으로는 사용되지 않습니다.",
    })
    @ApiBody({ type: ParametersDTO })
    @MessagePattern({ cmd: "readByOptions" })
    async readByOptions(@Payload() payload: ParametersDTO) {
        return this.service.getFilteredList(payload);
    }
}
