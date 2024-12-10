import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import NotificationService from "./application/service";

import NotificationHttpController from "./presentation/controllers/httpController";
import NotificationsMessageController from "./presentation/controllers/messageController";
import DynamoRepository from "infrastructure/dynamoRepository";
import * as dynamoose from "dynamoose";

const DynamooseProvider = {
    provide: "DYNAMOOSE",
    useFactory: () => {
        dynamoose.aws.ddb.local("http://localhost:8000"); // 로컬 설정
        return dynamoose;
    },
};

@Module({
    providers: [DynamooseProvider, NotificationService, DynamoRepository],
    controllers: [NotificationHttpController, NotificationsMessageController],
    imports: [
        // 환경 변수 글로벌 설정
        ConfigModule.forRoot(),
    ],
    exports: [],
})
export class NotificationModule {}
