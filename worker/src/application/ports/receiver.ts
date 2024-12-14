import { EventDetail } from "application/dto";

export interface IEventReceiver {
    receive(params: any): Promise<EventDetail>;
}
