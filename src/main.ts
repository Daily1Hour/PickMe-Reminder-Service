import { NestFactory } from "@nestjs/core";

async function bootstrap() {
    const app = await NestFactory.create(null);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
