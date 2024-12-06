import { writeFile } from "fs";

import * as YAML from "yamljs";
import { NestFactory } from "@nestjs/core";

import { NotificationModule } from "../module";
import generatorSwagger from "./generatorSwagger";

async function openapi() {
    const app = await NestFactory.create(NotificationModule);

    // Swagger 명세서 생성
    const document = generatorSwagger(app);

    // Swagger JSON을 YAML로 변환
    const yamlDocument = YAML.stringify(document, 10, 2);

    // JSON 파일로 Swagger 명세서 저장
    writeFile("./openapi.yaml", yamlDocument, (err) => {
        if (err) {
            console.error("Error writing file", err);
        } else {
            console.log("Swagger spec saved to openapi.yaml");
            process.exit(0);
        }
    });
}

openapi();
