import { Test, TestingModule } from "@nestjs/testing";

import { WorkerCronService } from "./cron";
import { WorkerService } from "./service";

describe("WorkerCronService", () => {
    let workerCronService: WorkerCronService;
    let workerService: WorkerService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WorkerCronService,
                {
                    provide: WorkerService,
                    useValue: {
                        start: jest.fn(),
                    },
                },
            ],
        }).compile();

        workerCronService = module.get<WorkerCronService>(WorkerCronService);
        workerService = module.get<WorkerService>(WorkerService);
    });

    it("서비스 정의", () => {
        expect(workerCronService).toBeDefined();
    });

    it("handleClone으로 WorkerService 수행", async () => {
        const consoleSpy = jest.spyOn(console, "log");

        await workerCronService.handleCron();

        const commentArg = consoleSpy.mock.calls[0][0];
        const timestampArg = consoleSpy.mock.calls[0][1];
        expect(commentArg).toContain("잡 수행 시간:");
        expect(timestampArg).toBeInstanceOf(Date);
    });
});
