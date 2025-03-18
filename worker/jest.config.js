module.exports = {
    moduleNameMapper: {
        // 모듈 이름을 매핑
        "^domain/(.*)$": "<rootDir>/src/domain/$1",
        "^application/(.*)$": "<rootDir>/src/application/$1",
        "^presentation/(.*)$": "<rootDir>/src/presentation/$1",
        "^infrastructure/(.*)$": "<rootDir>/src/infrastructure/$1",
        "^utility/(.*)$": "<rootDir>/src/utility/$1",
    },
    transform: {
        // ts-jest를 사용하여 테스트 파일을 해석
        "^.+\\.(t|j)s$": "ts-jest",
    },
};
