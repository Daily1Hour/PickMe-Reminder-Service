import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import NotificationService from "src/application/service";

import NotificationORMEntity from "src/infrastructure/ormEntity";

import NotificationController from "src/presentation/controller";

@Module({
    providers: [NotificationService],
    controllers: [NotificationController],
    imports: [
        // 환경 변수 글로벌 설정
        ConfigModule.forRoot(),
        // TypeORM 설정
        TypeOrmModule.forRoot({
            type: process.env.DB_TYPE,
            host: process.env.DB_HOST,
            database: process.env.DB_SCHEMA,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
            entities: [NotificationORMEntity],
            synchronize: true,
        }),
        // TypeORM ORM 엔티티 설정
        TypeOrmModule.forFeature([NotificationORMEntity]),
    ],
})
export class NotificationModule {}
