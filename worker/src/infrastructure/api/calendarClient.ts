import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";

@Injectable()
export class CalendarClient {
    private readonly instance: AxiosInstance;

    constructor() {
        const CALENDAR_API_URL = process.env.CALENDAR_API_URL;
        const ACCESS_TOKEN = "";

        this.instance = axios.create({
            baseURL: CALENDAR_API_URL,
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
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
