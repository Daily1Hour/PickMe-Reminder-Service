import { Injectable } from "@nestjs/common";
import axios from "axios";

import { IEventReceiver } from "application/ports/receiver";
import { EventDetail } from "application/dto";

@Injectable()
export class CalendarEventReceiver implements IEventReceiver {
    async receive({ event_id }: { event_id: string }): Promise<void> {
        const CALENDAR_API_URL = process.env.CALENDAR_API_URL;
        const ACCESS_TOKEN = "";

        const { status, data } = await axios.get(CALENDAR_API_URL, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
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
                const {
                    company: { name: companyName, location },
                    interviewTime,
                    position,
                    category,
                    description,
                } = interviewDetails[0];

                console.log(
                    clientId,
                    companyName,
                    location,
                    interviewTime,
                    position,
                    category,
                    description,
                );
            } else {
                throw new Error("해당 이벤트 ID에 대한 상세 정보가 없습니다.");
            }
        } else {
            throw new Error("캘린더 API 호출 실패");
        }
    }
}
