import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";

import NotificationService from "src/application/service";

import { CreateRequestDTO, ReadRequestDTO } from "./dto";

@Controller("/")
export default class NotificationController {
    constructor(private readonly service: NotificationService) {}

    @Post()
    async create(@Body() dto: CreateRequestDTO) {
        return this.service.registerNotification(dto);
    }

    @Get()
    async read(@Body() dto: ReadRequestDTO) {
        return this.service.getNotifications(dto);
    }

    @Put()
    async update(@Body() dto: CreateRequestDTO) {
        return this.service.registerNotification(dto);
    }

    @Delete()
    async delete(@Body() dto: ReadRequestDTO) {
        return this.service.deleteNotifications(dto);
    }
}
