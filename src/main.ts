import { NestFactory } from "@nestjs/core";

import { NotificationModule } from "./application/module";

async function bootstrap() {
    const app = await NestFactory.create(NotificationModule);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
