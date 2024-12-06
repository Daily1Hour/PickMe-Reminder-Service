import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { Client, ClientTCP, Transport } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";

import dispatch from "./dispatch";
import { NotificationStatus } from "./dto";

@Injectable()
export class WorkerService {
    // 마이크로서비스로 TCP 연결
    @Client({ transport: Transport.TCP, options: { host: "localhost", port: 3001 } })
    private client: ClientTCP;

    async readByOptions(query: any) {
        // 마이크로서비스로 요청
        return firstValueFrom(this.client.send({ cmd: "readByOptions" }, query));
    }

    async start() {
        const start_time = new Date();
        const end_time = new Date(start_time.getTime() + 60 * 60 * 1000); // 1시간 후

        // 발송할 알림들
        const notifications = await this.readByOptions({
            start_time,
            end_time,
            status: NotificationStatus.Pending,
        });

        // 발송 처리
        await dispatch(notifications);
    }

    @Cron("0 * * * *") // 매 정시에 실행
    async handleCron() {
        console.log("잡 수행 시간:", new Date());
        await this.start();
    }
}
