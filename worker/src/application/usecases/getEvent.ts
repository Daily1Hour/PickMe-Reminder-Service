import axios from "axios";

import { EventDetails } from "application/dto";

export default async function getEvent({ event_id }: { event_id: string }) {
    const CALENDAR_API_URL = process.env.CALENDAR_API_URL;

    const {
        clientId,
        eventDetails: {
            company: { name: companyName, location },
            interviewTime,
            position,
            category,
            description,
        },
    }: { clientId: string; eventDetails: EventDetails } = await axios.get(CALENDAR_API_URL, {
        params: {
            interviewDetailId: event_id,
        },
    });

    console.log(clientId, companyName, location, interviewTime, position, category, description);
}
