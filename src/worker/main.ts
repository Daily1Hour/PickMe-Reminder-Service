import { NestFactory } from "@nestjs/core";

import { WorkerModule } from "./module";
import { WorkerService } from "./service";

const WORKER_PORT = process.env.WORKER_PORT || 3002;

async function bootstrap() {
    const app = await NestFactory.create(WorkerModule);

    await app.listen(WORKER_PORT);

    const service = app.get(WorkerService);
    await service.start();
}
bootstrap();
