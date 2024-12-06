import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";

import { WorkerService } from "../application/service";

@Injectable()
export class WorkerCronService {
    constructor(private readonly useCaseService: WorkerService) {}

    @Cron(CronExpression.EVERY_HOUR)
    async handleCron() {
        console.log("잡 수행 시간:", new Date());
        this.useCaseService.start();
    }
}
