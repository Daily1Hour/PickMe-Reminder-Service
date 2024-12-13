import axios from "axios";

export default async function getEvent(event_id: { event_id: string }) {
    type InterviewDetails = {
        interviewDetailId: string;
        company: {
            name: string;
            location: string;
        };
        interviewTime: Date;
        position: string;
        category: string;
        description: string;
    };

    const {
        clientId,
        interviewDetails: {
            company: { name: companyName, location },
            interviewTime,
            position,
            category,
            description,
        },
    }: { id: string; clientId: string; interviewDetails: InterviewDetails } = await axios.get(
        "http://localhost:8081/calendar/interviews",
        {
            params: {
                interviewDetailId: event_id,
            },
        },
    );

    console.log(clientId, companyName, location, interviewTime, position, category, description);
}
