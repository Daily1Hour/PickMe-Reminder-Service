module.exports = {
    projects: ["<rootDir>/notification", "<rootDir>/worker"],

    rootDir: ".", // 루트 경로 지정
    moduleFileExtensions: ["js", "json", "ts"], // jest가 해석할 파일 확장자 지정
    testRegex: ".*\\.(spec|test)\\.ts$", // 테스트 파일 이름 지정
    collectCoverageFrom: ["**/*.(t|j)s"], // 테스트 커버리지 측정 대상 파일 지정
    coverageDirectory: "../coverage", // 커버리지 보고서
    testEnvironment: "node",
};
