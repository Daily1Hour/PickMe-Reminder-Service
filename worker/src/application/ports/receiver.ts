import { EventDetail } from "../dto";

export interface IEventReceiver {
    receive(params: any): Promise<EventDetail>;
}
