import { Body, Controller, Get, Post } from "@nestjs/common";

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
}
