import { Injectable, OnModuleInit } from "@nestjs/common";
import { CronExpression, SchedulerRegistry } from "@nestjs/schedule";
import { CronJob } from "cron";

import { WorkerService } from "./service";

@Injectable()
export class WorkerCronService implements OnModuleInit {
    constructor(
        private readonly useCaseService: WorkerService,
        private readonly schedulerRegistry: SchedulerRegistry,
    ) {}

    async handleCron() {
        console.log("잡 수행 시간:", new Date());
        this.useCaseService.start();
    }

    onModuleInit() {
        const CRON_SCHEDULE =
            process.env.CRON_SCHEDULE in CronExpression
                ? CronExpression[process.env.CRON_SCHEDULE] // 환경 변수 값이 CronExpression 키에 있으면 설정
                : process.env.CRON_SCHEDULE || CronExpression.EVERY_HOUR; // Cron 표현식 입력이거나 기본값으로 설정

        // 스케쥴 시간을 동적으로 크론잡 생성
        const job = new CronJob(CRON_SCHEDULE, this.handleCron.bind(this));
        this.schedulerRegistry.addCronJob("workerCronJob", job);
        // 크론잡 수행
        job.start();
    }
}
