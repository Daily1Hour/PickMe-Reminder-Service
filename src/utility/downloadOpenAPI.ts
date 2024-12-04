import { writeFile } from "fs";

import { NestFactory } from "@nestjs/core";

import { NotificationModule } from "../module";
import generatorSwagger from "./generatorSwagger";

async function openapi() {
    const app = await NestFactory.create(NotificationModule);

    // Swagger 명세서 생성
    const document = generatorSwagger(app);

    // JSON 파일로 Swagger 명세서 저장
    writeFile("./swagger-spec.json", JSON.stringify(document, null, 2), (err) => {
        if (err) {
            console.error("Error writing file", err);
        } else {
            console.log("Swagger spec saved to swagger-spec.json");
            process.exit(0);
        }
    });
}

openapi();
