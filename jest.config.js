module.exports = {
    projects: ["<rootDir>/notification", "<rootDir>/worker"],

    rootDir: ".", // 루트 경로 지정
    moduleFileExtensions: ["js", "json", "ts"], // jest가 해석할 파일 확장자 지정
    testRegex: ".*\\.(spec|test)\\.ts$", // 테스트 파일 이름 지정
    collectCoverageFrom: ["**/*.(t|j)s"], // 테스트 커버리지 측정 대상 파일 지정
    coverageDirectory: "../coverage", // 커버리지 보고서
    testEnvironment: "node",

    // html 리포터 설정
    reporters: [
        "default",
        [
            "jest-html-reporters",
            {
                publicPath: "./dist",
                filename: "test-report.html",
                includeFailureMsg: true, // 실패한 테스트 케이스의 실패 메시지
                expand: true, // 테스트 케이스의 세부 정보
            },
        ],
    ],
};
