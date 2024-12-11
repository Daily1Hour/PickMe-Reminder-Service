# 알림 서비스

> API를 통해 알림 시간을 관리하고, 스케쥴러가 매시간 알림을 발송하는 서비스

## 🛠️ 기술 스택

[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)](https://nestjs.com/) [![Amazon DynamoDB](https://img.shields.io/badge/DynamoDB-4053D6?style=flat&logo=amazondynamodb&logoColor=white)](https://nestjs.com/)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=javascript&logoColor=white)  
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=Docker&logoColor=white)](https://www.docker.com/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)](https://jestjs.io/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)](https://eslint.org/)

## 📄 API 명세서

[![Swagger](https://img.shields.io/badge/Swagger-Green?style=flat&logo=swagger&logoColor=white)](https://daily1hour.github.io/PickMe-Reminder-Service/)

| Method | URI         | Summary   | Request Header                     | Query String                                              | Request Body                                             | Code                                                |
| ------ | ----------- | --------- | ---------------------------------- | --------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------- |
| POST   | /           | 등록      | Authorization:<br> Bearer \<token> |                                                           | event_id: string <br> send_at: date <br> status: enum    | 201: 성공 <br> 400: 입력값 오류 <br> 401: 권한 없음 |
| GET    | /           | 옵션 조회 | Authorization:<br> Bearer \<token> | start_date?: date <br> end_date?: date <br> status?: enum |                                                          | 200: 성공 <br> 400: 입력값 오류 <br> 401: 권한 없음 |
| GET    | /{event_id} | 조회      | Authorization:<br> Bearer \<token> |                                                           |                                                          | 200: 성공 <br> 400: 입력값 오류 <br> 401: 권한 없음 |
| PUT    | /{event_id} | 수정      | Authorization:<br> Bearer \<token> |                                                           | event_id: string <br> send_at: date <br> status: enum    | 200: 성공 <br> 400: 입력값 오류 <br> 401: 권한 없음 |
| PATCH  | /{event_id} | 부분 수정 | Authorization:<br> Bearer \<token> |                                                           | event_id?: string <br> send_at?: date <br> status?: enum | 200: 성공 <br> 400: 입력값 오류 <br> 401: 권한 없음 |
| DELETE | /{event_id} | 삭제      | Authorization:<br> Bearer \<token> |                                                           |                                                          | 200: 성공 <br> 400: 입력값 오류 <br> 401: 권한 없음 |

## 🚀 실행 방법

### 도커환경

```sh
# build
$ docker-compose up --build

# run
$ docker-compose -d
```

### 로컬환경

```sh
$ npm install

# build
$ npm run build

# development
$ npm run start:dev

# production
$ npm run start:prod
```

## 🖧 배치 다이어그램

![Microservice](https://github.com/user-attachments/assets/05fbf436-1b2d-4e2f-837f-e6e4bcb4e9f0)

## 📂 폴더 구조

> Monorepo + Microservice  
> Clean Architecture

```python
PickMe-Reminder-Service
├─ .eslintrc.js # eslint 린터 설정
├─ .github
│  └─ workflows # 깃헙액션 워크플로어
│     └─ auto-assign.yml
├─ .gitignore
├─ .prettierrc # 포맷터
├─ notification # 알림 마이크로서비스
│  ├─ src
│  │  ├─ application # 유즈케이스 계층
│  │  │  ├─ dto.ts
│  │  │  ├─ service.spec.ts
│  │  │  └─ service.ts # 유즈케이스
│  │  ├─ domain # 도메인 계층
│  │  │  ├─ entity.ts # 엔티티 객체
│  │  │  └─ repository.ts # 레포지토리 인터페이스
│  │  ├─ infrastructure # 인프라스트럭쳐 계층
│  │  │  ├─ auth
│  │  │  │  ├─ jwtInterceptor.ts # JWT 토큰 인터셉터
│  │  │  │  └─ verifier.ts # Cognito로 토큰 인증
│  │  │  └─ dynamo # DynamoDB
│  │  │     ├─ model.ts # 스키마
│  │  │     ├─ provider.ts # 프로바이더 의존성
│  │  │     └─ repository.ts # 레포지토리 구현체
│  │  ├─ main.ts # 서버 실행 진입점
│  │  ├─ module.ts # 의존성 주입 모듈
│  │  ├─ presentation # 프레임워크 계층
│  │  │  ├─ controllers
│  │  │  │  ├─ httpController.spec.ts
│  │  │  │  ├─ httpController.ts # Http API
│  │  │  │  └─ messageController.ts # Tcp API
│  │  │  └─ dtos # 데이터 전송 객체
│  │  │     ├─ CreateRequestDTO.ts
│  │  │     ├─ index.ts
│  │  │     ├─ ParametersDTO.ts
│  │  │     ├─ ReadRequestDTO.ts
│  │  │     └─ UpdateRequestDTO.ts
│  │  └─ utility
│  │     ├─ decorators # 커스텀 데코레이터
│  │     │  ├─ AtLeastOneOption.ts # 옵션 하나 이상 유효성 검사
│  │     │  ├─ index.ts
│  │     │  ├─ IsTimeRange.ts # 시간 범위 유효성 검사
│  │     │  ├─ PayloadEX.ts # Payload를 dto 변환하고 데코레이터 기반 유효성 검사
│  │     │  └─ TrimSeconds.ts # 시간 데이터의 분초 삭제 변환
│  │     ├─ downloadOpenAPI.ts # yaml 파일로 스웨거 문서 다운로드
│  │     └─ generatorSwagger.ts # 스웨거 문서 생성
│  ├─ tsconfig.build.json
│  └─ tsconfig.json # typescript 설정
├─ worker # 알림 워커 서비스
│  ├─ src
│  │  ├─ application
│  │  │  ├─ client.ts # 마이크로서비스 호출 인터페이스
│  │  │  ├─ dispatch.ts # 발송 처리
│  │  │  ├─ dto.ts # 페이로드 DTO
│  │  │  └─ service.ts # 알림 TCP 요청, 발송 처리, 완료 처리
│  │  ├─ infrastructure
│  │  │  ├─ clientImpl.ts # 마이크로서비스 호출 구현체
│  │  │  └─ cron.ts # 잡 스케줄러
│  │  ├─ main.ts # 서버 실행 진입점
│  │  └─ module.ts # 의존성 주입 모듈
│  ├─ tsconfig.build.json
│  └─ tsconfig.json
├─ nest-cli.json # nestjs 모듈 구조 설정
├─ docker-compose.yml # 도커컴포즈
│  ├─ Dockerfile.notification # 알림 마이크로서비스 도커파일
│  └─ Dockerfile.worker # 워커 마이크로서비스 도커파일
├─ global.d.ts # 환경변수 타입
├─ package.json # 의존성 관리
│  └─ package-lock.json
├─ jest.config.js # jest 테스트툴 설정
└─ test # 통합 테스트
   ├─ app.e2e-spec.ts
   └─ jest-e2e.json
```
