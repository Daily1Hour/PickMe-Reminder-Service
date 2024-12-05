import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import NotificationEntity from "src/notification/domain/entity";

import NotificationORMEntity from "src/notification/infrastructure/ormEntity";

import NotificationService from "./service";
import { NotificationStatus, RegisterRequestDTO } from "./dto";

describe("NotificationService", () => {
    let service: NotificationService;
    let repository: Repository<NotificationORMEntity>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationService,
                {
                    provide: getRepositoryToken(NotificationORMEntity), // 테스트용 레포지토리 설정
                    useClass: Repository,
                },
            ],
        }).compile();

        service = module.get<NotificationService>(NotificationService);
        repository = module.get<Repository<NotificationORMEntity>>(
            getRepositoryToken(NotificationORMEntity),
        );
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });

    describe("registerNotification", () => {
        it("should create and save a notification", async () => {
            const dto: RegisterRequestDTO = {
                event_id: "1",
                send_at: new Date(),
                status: NotificationStatus.Pending,
            };
            const entity = new NotificationEntity(dto.event_id, dto.send_at, dto.status);
            const ormEntity = { ...entity, id: 1 };

            jest.spyOn(repository, "create").mockReturnValue(ormEntity as any);
            jest.spyOn(repository, "save").mockResolvedValue(ormEntity as any);

            await service.registerNotification(dto);

            expect(repository.create).toHaveBeenCalledWith(entity);
            expect(repository.save).toHaveBeenCalledWith(ormEntity);
        });
    });
});
