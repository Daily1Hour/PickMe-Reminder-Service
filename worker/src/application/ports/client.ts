import { NotificationEntity, ParametersDTO } from "../dto";

export interface IWorkerClient {
    ensureConnected(): Promise<void>;

    readByOptions(query: ParametersDTO): Promise<NotificationEntity[]>;

    updatePartial(query: ParametersDTO & { event_id: string }): Promise<NotificationEntity>;
}
