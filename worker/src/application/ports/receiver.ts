export interface IEventReceiver {
    receive(params: any): Promise<void>;
}
