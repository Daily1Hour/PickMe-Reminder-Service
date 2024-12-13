import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";

@Injectable()
export class OnesignalClient {
    private readonly instance: AxiosInstance;

    constructor() {
        const ONESIGNAL_API_URL = "https://api.onesignal.com/notifications";
        const ONESIGNAL_API_KEY = process.env.ONESIGNAL_API_KEY;
        const ONESIGNAL_APP_ID = process.env.ONESIGNAL_APP_ID;

        // Axios 인스턴스 생성
        this.instance = axios.create({
            baseURL: ONESIGNAL_API_URL,
            headers: {
                Authorization: ONESIGNAL_API_KEY,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        // 요청 인터셉터
        this.instance.interceptors.request.use((config) => {
            if (config.method === "post" || config.method === "put") {
                config.data = {
                    ...config.data,
                    app_id: ONESIGNAL_APP_ID, // 앱 ID 추가
                };
            }
            return config;
        });
    }

    get post() {
        return this.instance.post;
    }
}
