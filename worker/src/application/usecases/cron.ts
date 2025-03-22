import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";

import { WorkerService } from "./service";

const CRON_SCHEDULE =
    process.env.CRON_SCHEDULE in CronExpression
        ? CronExpression[process.env.CRON_SCHEDULE] // 환경 변수 값이 CronExpression 키에 있으면 설정
        : process.env.CRON_SCHEDULE || CronExpression.EVERY_HOUR; // Cron 표현식 입력이거나 기본값으로 설정

@Injectable()
export class WorkerCronService {
    constructor(private readonly useCaseService: WorkerService) {}

    @Cron(CRON_SCHEDULE)
    async handleCron() {
        console.log("잡 수행 시간:", new Date());
        this.useCaseService.start();
    }
}
