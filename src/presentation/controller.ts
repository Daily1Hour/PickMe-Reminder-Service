import { Body, Controller, Post } from "@nestjs/common";

import NotificationService from "src/application/service";

import { CreateRequestDTO } from "./dto";

@Controller("/")
export default class NotificationController {
    constructor(private readonly service: NotificationService) {}

    @Post()
    async create(@Body() dto: CreateRequestDTO) {
        return this.service.registerNotification(dto);
    }
}
