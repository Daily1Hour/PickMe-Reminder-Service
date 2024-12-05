import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";

import NotificationService from "src/notification/application/service";
import { NotificationStatus } from "src/notification/application/dto";

import NotificationController from "./controller";
import { CreateRequestDTO } from "./dtos";

describe("NotificationController", () => {
    let app: INestApplication;
    let service: NotificationService;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            controllers: [NotificationController],
            providers: [
                {
                    provide: NotificationService,
                    useValue: {
                        register: jest.fn().mockResolvedValue({}),
                    },
                },
            ],
        }).compile();

        app = moduleFixture.createNestApplication();
        service = moduleFixture.get<NotificationService>(NotificationService);
        await app.init();
    });

    it("/POST create", async () => {
        const dto: CreateRequestDTO = {
            event_id: "1",
            send_at: new Date(),
            status: NotificationStatus.Pending,
        };
        const response = null;

        jest.spyOn(service, "register").mockResolvedValue(response);

        return request(app.getHttpServer()).post("/").send(dto).expect(201);
    });

    afterAll(async () => {
        await app.close();
    });
});
