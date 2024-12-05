import { Injectable } from "@nestjs/common";

import NotificationService from "src/notification/application/service";

@Injectable()
export class WorkerService {
    constructor(private readonly notificationService: NotificationService) {}

    async start() {
        const notifications = await this.notificationService.getFilteredList({
            start_time: new Date(),
            end_time: new Date(new Date().getTime() + 60 * 60 * 1000), // 1시간 후
        });

        console.log(notifications);
    }
}
