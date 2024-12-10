import * as dynamoose from "dynamoose";

export default {
    provide: "DYNAMOOSE",
    useFactory: () => {
        const DB_HOST = process.env.DB_HOST || "localhost";
        const DB_PORT = process.env.DB_PORT || "8000";

        const ddb = new dynamoose.aws.ddb.DynamoDB({
            credentials: {
                accessKeyId: "fakeKey",
                secretAccessKey: "fakeSecretKey",
            },
            endpoint: `http://${DB_HOST}:${DB_PORT}`,
            region: "local", // 로컬 설정
        });
        dynamoose.aws.ddb.set(ddb);

        return dynamoose;
    },
};
