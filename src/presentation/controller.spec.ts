import { Test, TestingModule } from "@nestjs/testing";

import NotificationController from "./controller";
import NotificationService from "src/application/service";
import DefaultNotificationRepository from "src/infrastructure/default-repository";

describe("NotificationController", () => {
    let controller: NotificationController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationService,
                {
                    provide: "INotificationRepository",
                    useClass: DefaultNotificationRepository,
                },
            ],
            controllers: [NotificationController],
        }).compile();

        controller = module.get<NotificationController>(NotificationController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
