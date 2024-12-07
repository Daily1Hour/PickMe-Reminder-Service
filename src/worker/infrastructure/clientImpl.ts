import { Injectable } from "@nestjs/common";
import { ClientTCP } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";

import { IWorkerClient } from "../application/client";

@Injectable()
export class WorkerClientImpl implements IWorkerClient {
    private client: ClientTCP;

    constructor() {
        // 마이크로서비스 TCP 연결
        this.client = new ClientTCP({
            host: "localhost",
            port: process.env.MS_PORT || 3001, // Notification 서비스의 포트
        });
    }

    async onModuleInit() {
        setTimeout(async () => {
            await this.client.connect();
        }, 1000 * 10); // 10초 후에 연결
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
