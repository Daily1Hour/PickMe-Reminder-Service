import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiResponse } from "@nestjs/swagger";

import NotificationService from "src/notification/application/service";

import { CreateRequestDTO, ReadRequestDTO } from "./dto";

@Controller("/")
@ApiBearerAuth()
@ApiResponse({ status: 401, description: "권한 없음" })
@ApiResponse({ status: 400, description: "입력 값 오류" })
export default class NotificationController {
    constructor(private readonly service: NotificationService) {}

    @Post()
    @ApiOperation({ summary: "알림 등록" })
    @ApiResponse({ status: 201, description: "성공적으로 등록" })
    async create(@Body() dto: CreateRequestDTO) {
        return this.service.registerNotification(dto);
    }

    @Get(":event_id")
    @ApiOperation({ summary: "알림 조회" })
    @ApiResponse({ status: 200, description: "성공적으로 조회" })
    async read(@Param() dto: ReadRequestDTO) {
        return this.service.getNotifications(dto);
    }

    @Put()
    @ApiOperation({ summary: "알림 수정" })
    @ApiResponse({ status: 200, description: "성공적으로 수정" })
    async update(@Body() dto: CreateRequestDTO) {
        return this.service.registerNotification(dto);
    }

    @Delete(":event_id")
    @ApiOperation({ summary: "알림 삭제" })
    @ApiResponse({ status: 200, description: "성공적으로 수정" })
    async delete(@Param() dto: ReadRequestDTO) {
        return this.service.deleteNotifications(dto);
    }
}
