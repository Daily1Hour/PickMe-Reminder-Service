import { Injectable } from "@nestjs/common";
import { ClientTCP } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";

import { IWorkerClient } from "application/ports";

@Injectable()
export class WorkerClientImpl implements IWorkerClient {
    private client: ClientTCP;
    private isConnected = false;

    constructor() {
        // 마이크로서비스 TCP 연결
        this.client = new ClientTCP({
            host: process.env.MS_HOST || "localhost", // Notification 서비스의 호스트
            port: process.env.MS_PORT || 3001, // Notification 서비스의 포트
        });

        // 연결 에러 처리
        this.client.handleError = (error) => {
            console.error("Connection error", error);
            this.isConnected = false;
        };
    }

    async onModuleInit() {
        await this.connectClient();
    }

    // 연결 상태 확인
    public async ensureConnected() {
        return new Promise<void>((resolve) => {
            if (this.isConnected) {
                resolve();
            }

            const iv = setInterval(
                async () => {
                    if (await this.connectClient()) {
                        clearInterval(iv);
                        resolve();
                    }
                },
                1000 * 60 * 10, // 10분마다 연결 확인
            );
        });
    }

    // 연결 시도
    async connectClient(): Promise<boolean> {
        if (this.isConnected) {
            return true;
        }

        try {
            console.log(`Trying to connect... ${this.client["host"]}:${this.client["port"]}`);
            await this.client.connect();
            console.log("Connected successfully!");
            this.isConnected = true;
        } catch (error) {
            console.error("Connection failed. Retrying in 10 minutes...", error);
        }
        return this.isConnected;
    }

    async readByOptions(query: any) {
        // 마이크로서비스로 요청
        return firstValueFrom(this.client.send({ cmd: "readByOptions" }, query));
    }
    async updatePartial(query: any) {
        // 마이크로서비스로 요청
        return firstValueFrom(this.client.send({ cmd: "updatePartial" }, query));
    }
}
