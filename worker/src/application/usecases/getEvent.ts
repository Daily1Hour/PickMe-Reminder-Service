import axios from "axios";

import { EventDetails } from "application/dto";

export default async function getEvent({ event_id }: { event_id: string }) {
    const {
        clientId,
        eventDetails: {
            company: { name: companyName, location },
            interviewTime,
            position,
            category,
            description,
        },
    }: { clientId: string; eventDetails: EventDetails } = await axios.get(
        "http://localhost:8081/calendar/interviews",
        {
            params: {
                interviewDetailId: event_id,
            },
        },
    );

    console.log(clientId, companyName, location, interviewTime, position, category, description);
}
