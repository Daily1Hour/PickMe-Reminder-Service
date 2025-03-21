declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CALENDAR_API_URL: string;
            ONESIGNAL_APP_ID: string;
            ONESIGNAL_API_KEY: string;

            MS_HOST: string;
            MS_PORT: number;

            WORKER_PORT: number;
        }
    }
}

export {};
