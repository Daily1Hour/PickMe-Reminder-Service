import { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import * as dynamoose from "dynamoose";

export default {
    provide: "DYNAMOOSE",
    useFactory: () => {
        const DB_LOCAL = process.env.DB_LOCAL === "true";
        const DB_HOST = process.env.DB_HOST || "localhost";
        const DB_PORT = process.env.DB_PORT || 8000;

        let config: DynamoDBClientConfig;
        if (DB_LOCAL) {
            config = {
                credentials: {
                    // 로컬에서는 fake 자격 증명을 사용
                    accessKeyId: "fakeKey",
                    secretAccessKey: "fakeSecretKey",
                },
                endpoint: `http://${DB_HOST}:${DB_PORT}`,
                region: "local", // 로컬 설정
            };
        } else {
            config = {
                // AWS 자격 증명을 사용
                region: "ap-northeast-2",
            };
        }

        const ddb = new dynamoose.aws.ddb.DynamoDB(config);
        dynamoose.aws.ddb.set(ddb);

        return dynamoose;
    },
};
