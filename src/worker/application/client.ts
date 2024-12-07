export interface IWorkerClient {
    readByOptions(query: any): Promise<any>;

    updatePartial(query: any): Promise<any>;
}
