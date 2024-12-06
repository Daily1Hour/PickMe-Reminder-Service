import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";

import NotificationEntity from "@notification/domain/entity";

import NotificationORMEntity from "@notification/infrastructure/ormEntity";

import NotificationService from "./service";
import {
    NotificationStatus,
    RegisterRequestDTO,
    ReadRequestDTO,
    UpdateRequestDTO,
    OptionsDTO,
} from "./dto";

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

            await service.register(dto);

            expect(repository.create).toHaveBeenCalledWith(entity);
            expect(repository.save).toHaveBeenCalledWith(ormEntity);
        });

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

                    await service.register(dto);

                    expect(repository.create).toHaveBeenCalledWith(entity);
                    expect(repository.save).toHaveBeenCalledWith(ormEntity);
                });
            });

            describe("updateNotification", () => {
                it("should update an existing notification", async () => {
                    const paramDTO: ReadRequestDTO = { event_id: "1" };
                    const bodyDTO: UpdateRequestDTO = {
                        send_at: new Date(),
                        status: NotificationStatus.Sent,
                    };
                    const existingEntity = new NotificationORMEntity();
                    jest.spyOn(service, "get").mockResolvedValue(existingEntity);
                    jest.spyOn(service, "register").mockResolvedValue(undefined);

                    await service.update(paramDTO, bodyDTO);

                    expect(service.get).toHaveBeenCalledWith(paramDTO);
                    expect(service.register).toHaveBeenCalledWith({
                        ...paramDTO,
                        ...bodyDTO,
                        ...existingEntity,
                    });
                });

                it("should throw an error if notification does not exist", async () => {
                    const paramDTO: ReadRequestDTO = { event_id: "1" };
                    const bodyDTO: UpdateRequestDTO = {
                        send_at: new Date(),
                        status: NotificationStatus.Sent,
                    };
                    jest.spyOn(service, "get").mockResolvedValue(null);

                    await expect(service.update(paramDTO, bodyDTO)).rejects.toThrow(
                        "Entity not found.",
                    );
                });
            });

            describe("getNotification", () => {
                it("should return a notification by event_id", async () => {
                    const dto: ReadRequestDTO = { event_id: "1" };
                    const ormEntity = new NotificationORMEntity();
                    jest.spyOn(repository, "findOne").mockResolvedValue(ormEntity);

                    const result = await service.get(dto);

                    expect(repository.findOne).toHaveBeenCalledWith({
                        where: { event_id: dto.event_id },
                    });
                    expect(result).toEqual(ormEntity);
                });
            });

            describe("getFilteredList", () => {
                it("should return a list of notifications based on filters", async () => {
                    const dto: OptionsDTO = {
                        start_time: new Date(),
                        end_time: new Date(),
                        status: NotificationStatus.Pending,
                    };
                    const ormEntities = [new NotificationORMEntity()];
                    jest.spyOn(repository, "createQueryBuilder").mockReturnValue({
                        andWhere: jest.fn().mockReturnThis(),
                        getMany: jest.fn().mockResolvedValue(ormEntities),
                    } as any);

                    const result = await service.getFilteredList(dto);

                    expect(result).toEqual(ormEntities);
                });
            });

            describe("deleteNotification", () => {
                it("should delete a notification by event_id", async () => {
                    const dto: ReadRequestDTO = { event_id: "1" };
                    const deleteResult = new DeleteResult();
                    jest.spyOn(repository, "delete").mockResolvedValue(deleteResult);

                    const result = await service.delete(dto);

                    expect(repository.delete).toHaveBeenCalledWith({ event_id: dto.event_id });
                    expect(result).toEqual(deleteResult);
                });
            });
        });
    });
});
