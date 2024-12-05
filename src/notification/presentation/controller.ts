import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiResponse } from "@nestjs/swagger";

import NotificationService from "src/notification/application/service";

import { CreateRequestDTO, OptionsDTO, ReadRequestDTO } from "./dto";

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
        return this.service.register(dto);
    }

    @Get(":event_id")
    @ApiOperation({ summary: "알림 조회" })
    @ApiResponse({ status: 200, description: "성공적으로 조회" })
    async read(@Param() dto: ReadRequestDTO) {
        return this.service.get(dto);
    }

    @Get()
    @ApiOperation({ summary: "알림 옵션 조회" })
    @ApiResponse({ status: 200, description: "성공적으로 조회" })
    async readByOptions(@Query() { send_at, status }: OptionsDTO) {
        return this.service.getFilteredList({ send_at, status });
    }

    @Put()
    @ApiOperation({ summary: "알림 수정" })
    @ApiResponse({ status: 200, description: "성공적으로 수정" })
    async update(@Body() dto: CreateRequestDTO) {
        return this.service.register(dto);
    }

    @Delete(":event_id")
    @ApiOperation({ summary: "알림 삭제" })
    @ApiResponse({ status: 200, description: "성공적으로 수정" })
    async delete(@Param() dto: ReadRequestDTO) {
        return this.service.delete(dto);
    }
}
