# 알림 서비스

> API를 통해 알림 시간을 관리하고, 스케쥴러가 매시간 알림을 발송하는 서비스

[![docs ci/cd](https://github.com/Daily1Hour/PickMe-Reminder-Service/actions/workflows/document-hosting.yml/badge.svg)](https://github.com/Daily1Hour/PickMe-Reminder-Service/actions/workflows/document-hosting.yml)
[![codecov](https://codecov.io/gh/Daily1Hour/PickMe-Reminder-Service/branch/main/graph/badge.svg)](https://codecov.io/gh/Daily1Hour/PickMe-Reminder-Service)

## 🚩 목차

- [🛠️ 기술 스택](#️-기술-스택)
- [💡 주요 기능](#-주요-기능)
- [📖 개발 문서](#-개발-문서)
    - [📄 API 명세서](#-api-명세서)
    - [📘 타입 문서](#-타입-문서)
    - [🧪 테스트 리포트](#-테스트-리포트)
- [📊 다이어그램](#-다이어그램)
    - [🔹 유즈케이스 다이어그램](#-유즈케이스-다이어그램)
    - [🔀 데이터 흐름 다이어그램](#-데이터-흐름-다이어그램)
    - [📦 배치 다이어그램](#-배치-다이어그램)
    - [🗺️ AWS 아키텍처 다이어그램](#️-aws-아키텍처-다이어그램)
- [📂 폴더 구조](#-폴더-구조)
- [🚀 실행 방법](#-실행-방법)

## 🛠️ 기술 스택

[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![OneSignal](https://img.shields.io/badge/OneSignal-E54B4D.svg?logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQ5LjcwMiAwQzY2Ljk0NC4xNjEtLjQ2OCA2OC4xMS4wMDIgMTUwLjg2N2MuNDE0IDc3LjI5MiA1OS4zNTYgMTQwLjc0NiAxMzQuNzU4IDE0OC4zNTVhMS43MjcgMS43MjcgMCAwIDAgMS44OTYtMS43MjRWMTQ5Ljk5OWgtMTEuNjJhMS43MjUgMS43MjUgMCAwIDEtMS43MjQtMS43MjR2LTIzLjI1M2ExLjcyIDEuNzIgMCAwIDEgMS43MjQtMS43MjRoMzYuNTg2YTEuNzI1IDEuNzI1IDAgMCAxIDEuNzI0IDEuNzI0djE3Mi40NzZhMS43MTggMS43MTggMCAwIDAgLjU2MiAxLjI4MiAxLjczOCAxLjczOCAwIDAgMCAxLjMyOS40NDJDMjQwLjkyIDI5MS41ODQgMzAwIDIyNy42OTQgMzAwIDE0OS45OTkgMzAwIDY3LjA1NyAyMzIuNjc5LS4xNjEgMTQ5LjcwMiAwem00Mi42NjcgMjY1LjgwM2ExLjcyNCAxLjcyNCAwIDAgMS0yLjI5OS0xLjYyN3YtMjQuNjJhMi41OSAyLjU5IDAgMCAxIDEuNDgzLTIuMzM0IDk2LjcyNyA5Ni43MjcgMCAwIDAgNTUuMDU3LTg3LjIyM2MwLTUzLjc3NS00NC4xNjEtOTcuNDI0LTk4LjExNS05Ni41OTctNTEuMzIxLjc4Mi05My40MTggNDIuMTU1LTk1LjA1NiA5My40NTNhOTYuNzA5IDk2LjcwOSAwIDAgMCA1NS4wMjIgOTAuMzY3IDIuNTkgMi41OSAwIDAgMSAxLjQ4OSAyLjMzNHYyNC42MjZhMS43MjMgMS43MjMgMCAwIDEtMi4yOTkgMS42MjZDNjAuMTI4IDI0OC4zNzcgMjYuMjE1IDIwMi40NyAyNi43MDMgMTQ4Ljg1IDI3LjMwNyA4MS44NjcgODIuMDI1IDI3LjIxOCAxNDkuMDMgMjYuNzAxIDIxNy40NiAyNi4xNzIgMjczLjI5OSA4MS42OSAyNzMuMjk5IDE1MGMwIDUzLjEyLTMzLjc2NCA5OC40OTktODAuOTMgMTE1LjgwNHoiIGZpbGw9IiNGRkYiLz48L3N2Zz4=&style=flat&logoColor)](https://onesignal.com/)
[![Amazon DynamoDB](https://img.shields.io/badge/DynamoDB-4053D6?style=flat&logo=amazondynamodb&logoColor=white)](https://aws.amazon.com/ko/dynamodb/)  
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=Docker&logoColor=white)](https://www.docker.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=swagger&logoColor=black)](https://swagger.io/)
[![Codecov](https://img.shields.io/badge/Codecov-F01F7A?style=flat&logo=codecov&logoColor=white)](https://about.codecov.io/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)](https://jestjs.io/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)](https://eslint.org/)

## 💡 주요 기능

- **NestJS 프레임워크**

    - NestJS 애플리케이션 아키텍처를 활용하여 모듈과 공급자 간의 의존성 주입을 설정
    - NestJS의 전송 계층 마이크로서비스 기능을 사용하여 마이크로서비스 간 TCP 통신을 구현

- **MSA (마이크로서비스아키텍처)**

    1. **Notification 서비스**
        - 알림 리소스를 관리하는 _REST API_ 제공
        - 알림 데이터는 _Key-Value_ 데이터베이스인 **DynamoDB**에 저장
        - _DynamoDB의 TTL(Time to Live)_ 설정을 활용하여, 예약된 알림이 지나면 자동으로 삭제됨
    2. **Worker 서비스**
        - *Cron 스케줄러*를 사용하여 매시간 주기적인 작업 수행
        - Notification 서비스와 *TCP 통신*을 통해 알림 데이터를 조회
        - **OneSignal** 서비스를 통해 알림 메시지를 전송

## 📖 개발 문서

### 📄 API 명세서

<a href="https://daily1hour.github.io/PickMe-Reminder-Service">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" width='50px' >열기</img>
</a>

| Method | URI                  | Summary   | Request Header                     | Query String                                              | Request Body                                             | Code                                                |
| ------ | -------------------- | --------- | ---------------------------------- | --------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------- |
| POST   | /reminder/           | 등록      | Authorization:<br> Bearer \<token> |                                                           | event_id: string <br> send_at: date <br> status: enum    | 201: 성공 <br> 400: 입력값 오류 <br> 401: 권한 없음 |
| GET    | /reminder/           | 옵션 조회 | Authorization:<br> Bearer \<token> | start_date?: date <br> end_date?: date <br> status?: enum |                                                          | 200: 성공 <br> 400: 입력값 오류 <br> 401: 권한 없음 |
| GET    | /reminder/{event_id} | 조회      | Authorization:<br> Bearer \<token> |                                                           |                                                          | 200: 성공 <br> 400: 입력값 오류 <br> 401: 권한 없음 |
| PUT    | /reminder/{event_id} | 수정      | Authorization:<br> Bearer \<token> |                                                           | event_id: string <br> send_at: date <br> status: enum    | 200: 성공 <br> 400: 입력값 오류 <br> 401: 권한 없음 |
| PATCH  | /reminder/{event_id} | 부분 수정 | Authorization:<br> Bearer \<token> |                                                           | event_id?: string <br> send_at?: date <br> status?: enum | 200: 성공 <br> 400: 입력값 오류 <br> 401: 권한 없음 |
| DELETE | /reminder/{event_id} | 삭제      | Authorization:<br> Bearer \<token> |                                                           |                                                          | 200: 성공 <br> 400: 입력값 오류 <br> 401: 권한 없음 |
| GET    | /                    | 헬스체크  |                                    |                                                           |                                                          | 200: 성공                                           |

### 📘 타입 문서

> 프로젝트에서 사용되는 타입 정의를 문서화한 자료입니다.  
> 이 타입 문서는 매 릴리즈 업데이트 시 자동으로 최신 상태로 배포됩니다.

<a href="https://daily1hour.github.io/PickMe-Reminder-Service/docs">
<img src="https://github.com/user-attachments/assets/dee55d3d-0690-4c19-8c12-130338565d3a" width='50px' >타입 문서 바로가기</img>
</a>

### 🧪 테스트 리포트

> 테스트 통과 여부와 커버리지 현황은 시각적으로 제공되며, 매 릴리즈 시 자동으로 최신 상태로 반영됩니다.  
> 커버리지는 Codecov를 통해 측정됩니다.

<a href="https://daily1hour.github.io/PickMe-Reminder-Service/test-report">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" width='50px' >테스트 리포트 열기</img>
</a>
<a href="https://codecov.io/gh/Daily1Hour/PickMe-Reminder-Service">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codecov/codecov-plain.svg" width='50px' >커버리지 열기</img>
</a>

<br>

## 📊 다이어그램

### 🔹 유즈케이스 다이어그램

![usecase](https://github.com/user-attachments/assets/d1527c03-5d4a-40d2-aa51-e4b31920c25e)

1. _사용자 (Actor)_
    - 웹사이트 사용자: 이벤트를 등록하고 알림을 받는 사용자
    - 알림 워커: 정기적으로 메시지를 처리하고 전송하는 시스템
2. _유즈케이스 (Use Case)_
    - 알림 등록: 사용자가 새로운 이벤트 알림을 등록하는 기능
    - 알림 삭제: 사용자가 기존에 등록된 알림을 삭제하는 기능
    - 알림 확인: 사용자가 등록된 알림 목록을 확인하는 기능
    - 메시지 상태 확인:알림 워커가 이벤트를 읽는 기능
    - 메시지 전송: 알림 워커가 메시지를 사용자에게 전송하는 기능
3. _상호작용 (Interaction)_
    - 웹사이트 사용자 ↔ 알림 서비스: 웹사이트 사용자가 이벤트 정보를 입력하여 알림 등록을 요청
    - 알림 워커 ↔ 알림 서비스: 알림 워커가 알림 서비스에 등록된 이벤트 정보를 확인
    - 알림 워커 ↔ OneSignal: 알림 워커가 OneSignal을 통해 알림 메시지를 사용자에게 전송

### 🔀 데이터 흐름 다이어그램

```mermaid
flowchart LR
   Web["웹사이트"]
   click Web "https://github.com/Daily1Hour/PickMe-Calendar-Application"
   event@{ shape: bow-rect, label: "이벤트 정보" }

   Web --> event --> |REST/HTTP| Notification/server

   subgraph Reminder
      subgraph Worker
         Worker/Cron@{ shape: circle, label: "스케줄러" }
      end

      subgraph Notification
         Notification/server@{ shape: circle, label: "등록 서버" }
         Notification/db@{ shape: lin-cyl, label: "DynamoDB" }

         Notification/server <--> Notification/db
      end

      Worker/Cron <-.-> |TCP| Notification/server
   end

   Calendar
   click Calendar "https://github.com/Daily1Hour/PickMe-Calendar-Service"
   data@{ shape: bow-rect, label: "이벤트 상세 정보" }

   Calendar --> data --> Worker/Cron
   Worker/Cron --> |HTTP| message@{ shape: bow-rect, label: "메시지" } --> OneSignal
```

1. 웹사이트에서 *이벤트 정보*를 Notification 서비스 등록 서버에 REST 방식으로 전송
2. Notification 서비스는 데이터를 DynamoDB로 관리
3. Worker 서비스의 스케줄러가 정기적으로 등록 서버에서 TCP 연결로 데이터 읽음
4. 데이터가 존재하면 외부 Calendar 서비스에서 *상세 정보*를 가져옴
5. 데이터를 통합하여 *메시지*로 만들어 OneSignal로 전송

### 📦 배치 다이어그램

![deployment](https://github.com/user-attachments/assets/8f36e425-cc3f-4d7a-9f5c-66e133bbfc81)

1. **NestJS 프레임워크**를 사용해 백엔드 서비스 구축
2. NestJS의 *MicroService 모듈*을 사용해 두 개의 마이크로서비스로 구현
3. **Notification 서비스**
    - _REST API_ 방식으로 외부 요청을 처리
    - **DynamoDB**를 사용해 데이터베이스 관리
4. **Worker 서비스**
    - *NestJS Schedule 라이브러리*를 사용해 _Cron Job_ 설정으로 주기 작업 처리
    - 마이크로서비스 간 *TCP 연결*을 통해 Notification 서비스에서 데이터 읽기
    - REST API로 외부 서비스 (Calendar 서비스)에서 데이터 요청
    - 데이터 통합하고 **OneSignal**를 통해 알림을 전송
5. 각 마이크로 서비스는 **Docker Image** 생성하여 컨테이너화
6. **Docker Compose**로 마이크로서비스와 관련 서비스(DB)를 관리하고 배포

### 🗺️ AWS 아키텍처 다이어그램

![aws-architecture](https://github.com/user-attachments/assets/92c1a636-5431-45d3-82ba-ce8c94d384fa)

1. **ECR(Elastic Container Registery)** 에 Docker 이미지 업로드
2. **ECS(Elastic Container Service) Cluster** 생성
    - 두 서비스 간의 연결을 위해 **브릿지 모드** 설정
3. ECS의 *용량 공급자*로 **EC2 인스턴스** 생성 (_Auto Scaling_ 적용)
4. *ECR 이미지*를 기반으로 _Task Definition_ 생성
5. **Task Definition**을 바탕으로 _ECS 서비스_ 생성
6. **ECS 서비스**에서 태스크 실행 (**Auto Scaling** 적용)
7. **ALB(Application Load Balencer)** 연결을 통해 외부 트래픽 라우팅

## 📂 폴더 구조

<details>
<summary>열기</summary>

> Monorepo + Microservice  
> Clean Architecture

```python
PickMe-Reminder-Service
├─ .eslintrc.js # eslint 린터 설정
├─ .github
│  ├─ workflows # 깃헙액션 워크플로어
│  │  └─ document-hosting.yml # 스웨거 및 테스터 리포트 작성
│  └─ document-index.html # 깃헙 페이지 진입점
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
│  │  │  │  ├─ healthCheckController.ts # 헬스체크
│  │  │  │  ├─ healthCheckController.spec.ts
│  │  │  │  ├─ httpController.ts # Http API
│  │  │  │  ├─ httpController.spec.ts
│  │  │  │  ├─ messageController.ts # Tcp API
│  │  │  │  └─ messageController.test.ts
│  │  │  └─ dtos # 데이터 전송 객체
│  │  │     ├─ index.ts
│  │  │     ├─ CreateRequestDTO.ts
│  │  │     ├─ ParametersDTO.ts
│  │  │     ├─ ReadRequestDTO.ts
│  │  │     └─ UpdateRequestDTO.ts
│  │  └─ utility
│  │     ├─ decorators # 커스텀 데코레이터
│  │     │  ├─ index.ts
│  │     │  ├─ AtLeastOneOption.ts # 옵션 하나 이상 유효성 검사
│  │     │  ├─ IsTimeRange.ts # 시간 범위 유효성 검사
│  │     │  ├─ PayloadEX.ts # Payload를 dto 변환하고 데코레이터 기반 유효성 검사
│  │     │  └─ TrimSeconds.ts # 시간 데이터의 분초 삭제 변환
│  │     ├─ downloadOpenAPI.ts # yaml 파일로 스웨거 문서 다운로드
│  │     └─ generatorSwagger.ts # 스웨거 문서 생성
│  ├─ .env
│  ├─ global.d.ts # 환경변수 타입
│  ├─ jest.config.js
│  ├─ package.json # 워크스페이스 의존성 관리
│  ├─ tsconfig.build.json
│  └─ tsconfig.json # typescript 설정
├─ worker # 알림 워커 서비스
│  ├─ src
│  │  ├─ application
│  │  │  ├─ dto.ts # 페이로드 DTO
│  │  │  ├─ ports # 인터페이스
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ client.ts # 알림 저장 서비스
│  │  │  │  ├─ receiver.ts # 메시지 수신
│  │  │  │  └─ sender.ts # 메시지 발송
│  │  │  └─ usecases
│  │  │     ├─ cron.ts # 잡 스케줄러
│  │  │     ├─ cron.test.ts
│  │  │     ├─ service.ts # 알림 TCP 요청, 발송 처리, 완료 처리
│  │  │     └─ service.test.ts
│  │  ├─ infrastructure
│  │  │  ├─ api # axios API 인터셉터
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ calendarClient.ts
│  │  │  │  └─ onesignalClient.ts
│  │  │  ├─ receivers
│  │  │  │  ├─ calendarReceiver.ts # 캘린더 서비스 구현체
│  │  │  │  └─ calendarReceiver.test.ts
│  │  │  ├─ senders
│  │  │  │  ├─ webSender.ts # 웹 메시지 발송 구현체
│  │  │  │  └─ webSender.test.ts
│  │  │  ├─ clientImpl.ts # 마이크로서비스 호출 구현체
│  │  │  └─ clientImpl.test.ts
│  │  ├─ main.ts # 서버 실행 진입점
│  │  └─ module.ts # 의존성 주입 모듈
│  ├─ .env
│  ├─ global.d.ts
│  ├─ jest.config.js
│  ├─ package.json
│  ├─ tsconfig.build.json
│  └─ tsconfig.json
├─ .env # 공용 환경변수
├─ nest-cli.json # nestjs 모듈 구조 설정
├─ docker-compose.yml # 도커컴포즈
│  ├─ Dockerfile.notification # 알림 마이크로서비스 도커파일
│  └─ Dockerfile.worker # 워커 마이크로서비스 도커파일
├─ package.json # 의존성 관리
│  └─ package-lock.json
├─ jest.config.js # jest 테스트 설정
└─ test # 통합 테스트
   ├─ app.e2e-spec.ts
   └─ jest-e2e.json
```

</details>

## 🚀 실행 방법

### 도커환경

```sh
# build
$ docker-compose build

# run
$ docker-compose up -d
```

### 로컬환경

```sh
$ npm install

# build
$ npm run build

# development
$ npm run start
```
