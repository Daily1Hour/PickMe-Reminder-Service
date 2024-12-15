import { Injectable } from "@nestjs/common";

import { IEventReceiver } from "application/ports/receiver";
import { EventDetail } from "application/dto";

import { CalendarClient } from "infrastructure/api/calendarClient";

@Injectable()
export class CalendarEventReceiver implements IEventReceiver {
    constructor(private readonly client: CalendarClient) {}

    async receive({ event_id }: { event_id: string }) {
        const { status, data } = await this.client.get(null, {
            params: {
                interviewDetailId: event_id,
            },
        });

        if (status === 200) {
            const {
                clientId,
                interviewDetails,
            }: { clientId: string; interviewDetails: EventDetail[] } = data;

            if (interviewDetails.length) {
                return { clientId, ...interviewDetails[0] };
            } else {
                throw new Error("해당 이벤트 ID에 대한 상세 정보가 없습니다.");
            }
        } else {
            throw new Error("캘린더 API 호출 실패");
        }
    }
}
