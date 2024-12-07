import { Injectable } from "@nestjs/common";
import { Client, ClientTCP, Transport } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";

import { IWorkerClient } from "../application/client";

@Injectable()
export class WorkerClientImpl implements IWorkerClient {
    // 마이크로서비스로 TCP 연결
    @Client({ transport: Transport.TCP, options: { host: "localhost", port: 3001 } })
    private client: ClientTCP;

    constructor() {
        // 마이크로서비스 TCP 연결
        this.client = new ClientTCP({
            host: process.env.MS_HOST || "localhost", // Notification 서비스의 호스트
            port: process.env.MS_PORT || 3001, // Notification 서비스의 포트
        });
    }

    async onModuleInit() {
        await this.client.connect();
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
