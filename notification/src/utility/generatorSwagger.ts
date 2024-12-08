import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export default function generatorSwagger(app: INestApplication<any>) {
    // Swagger
    const swagger_config = new DocumentBuilder()
        .setTitle("알림 API")
        .setDescription("API 명세서")
        .setVersion("1.0")
        .addBearerAuth() // Bearer Auth 추가
        .build();

    // Swagger 설정
    const document = SwaggerModule.createDocument(app, swagger_config);
    // Swagger UI 설정
    SwaggerModule.setup("api", app, document);

    return document;
}
