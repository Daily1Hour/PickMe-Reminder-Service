declare global {
    namespace NodeJS {
        interface ProcessEnv {
            COGNITO_USER_POOL_ID: string;
            COGNITO_CLIENT_ID: string;
            PORT: number;
            MS_PORT: number;

            DB_TYPE: "mysql" | "postgres" | "sqlite" | "mariadb" | "mongodb";
            DB_HOST: string;
            DB_SCHEMA: string;
            DB_USERNAME: string;
            DB_PASSWORD: string;
            DB_PORT: number;

            WORKER_PORT: number;

            ONESIGNAL_APP_ID: string;
            ONESIGNAL_API_KEY: string
        }
    }
}

export {};
