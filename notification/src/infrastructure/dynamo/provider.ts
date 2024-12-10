import * as dynamoose from "dynamoose";

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || "8000";

export default {
    provide: "DYNAMOOSE",
    useFactory: () => {
        dynamoose.aws.ddb.local(`${DB_HOST}:${DB_PORT}`); // 로컬 설정
        return dynamoose;
    },
};
