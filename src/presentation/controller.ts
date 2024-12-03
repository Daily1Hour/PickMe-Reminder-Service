import { Body, Controller, Post } from "@nestjs/common";

import { NotificationService } from "src/application/service";

@Controller("/")
export default class NotificationController {
    constructor(private readonly service: NotificationService) {}

    @Post()
    async create(@Body() dto) {
        console.log("post", dto);
    }
}
