import { Test, TestingModule } from "@nestjs/testing";

import NotificationService from "./service";
import DefaultNotificationRepository from "src/infrastructure/default-repository";

describe("NotificationService", () => {
    let service: NotificationService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationService,
                {
                    provide: "INotificationRepository",
                    useClass: DefaultNotificationRepository,
                },
            ],
        }).compile();

        service = module.get<NotificationService>(NotificationService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
