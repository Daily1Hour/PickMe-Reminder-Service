# 1. 빌드 단계
FROM node:18-alpine AS builder

## 작업 디렉토리 설정
WORKDIR /app

## 패키지 파일 복사 및 의존성 설치
COPY package*.json ./
RUN npm install

## 소스 코드 복사
COPY . .

## 애플리케이션 빌드
RUN npm run build

# 2. 실행 단계
FROM node:18-alpine

## 작업 디렉토리 설정
WORKDIR /app

## 빌드된 애플리케이션과 필요한 파일 복사
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

## 포트 설정
EXPOSE 3000

## 애플리케이션 실행
CMD ["node", "dist/main.js"]
