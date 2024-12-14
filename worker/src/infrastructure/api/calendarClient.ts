import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";

@Injectable()
export class CalendarClient {
    private readonly instance: AxiosInstance;

    constructor() {
        const CALENDAR_API_URL = process.env.CALENDAR_API_URL;

        this.instance = axios.create({
            baseURL: CALENDAR_API_URL,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
    }

    // POST 요청
    get get() {
        return this.instance.get;
    }
}
