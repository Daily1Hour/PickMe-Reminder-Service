import { NestFactory } from "@nestjs/core";

import { WorkerModule } from "./module";

async function bootstrap() {
    const app = await NestFactory.create(WorkerModule);

    await app.init();
}
bootstrap();
