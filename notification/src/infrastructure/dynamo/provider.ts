import * as dynamoose from "dynamoose";

export default {
    provide: "DYNAMOOSE",
    useFactory: () => {
        dynamoose.aws.ddb.local("http://localhost:8000"); // 로컬 설정
        return dynamoose;
    },
};
