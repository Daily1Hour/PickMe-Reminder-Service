window.jest_html_reporters_callback__({"numFailedTestSuites":0,"numFailedTests":0,"numPassedTestSuites":7,"numPassedTests":26,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":7,"numTotalTests":26,"startTime":1742380291471,"success":false,"testResults":[{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1742380296748,"runtime":5074,"slow":true,"start":1742380291674},"testFilePath":"/home/runner/work/PickMe-Reminder-Service/PickMe-Reminder-Service/worker/src/application/usecases/service.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["WorkerService"],"duration":23,"failureMessages":[],"fullName":"WorkerService 서비스 정의","status":"passed","title":"서비스 정의"},{"ancestorTitles":["WorkerService"],"duration":24,"failureMessages":[],"fullName":"WorkerService 알림 처리","status":"passed","title":"알림 처리"}]},{"numFailingTests":0,"numPassingTests":7,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1742380297377,"runtime":5700,"slow":true,"start":1742380291677},"testFilePath":"/home/runner/work/PickMe-Reminder-Service/PickMe-Reminder-Service/notification/src/application/service.spec.ts","failureMessage":null,"testResults":[{"ancestorTitles":["NotificationService"],"duration":23,"failureMessages":[],"fullName":"NotificationService 서비스 정의","status":"passed","title":"서비스 정의"},{"ancestorTitles":["NotificationService","register"],"duration":5,"failureMessages":[],"fullName":"NotificationService register 새로운 알림 엔터티를 생성","status":"passed","title":"새로운 알림 엔터티를 생성"},{"ancestorTitles":["NotificationService","update"],"duration":4,"failureMessages":[],"fullName":"NotificationService update 알림 엔터티를 업데이트","status":"passed","title":"알림 엔터티를 업데이트"},{"ancestorTitles":["NotificationService","update"],"duration":15,"failureMessages":[],"fullName":"NotificationService update 엔터티를 찾을 수 없으면 오류를 발생","status":"passed","title":"엔터티를 찾을 수 없으면 오류를 발생"},{"ancestorTitles":["NotificationService","get"],"duration":4,"failureMessages":[],"fullName":"NotificationService get id로 알림 엔터티를 반환","status":"passed","title":"id로 알림 엔터티를 반환"},{"ancestorTitles":["NotificationService","getFilteredList"],"duration":3,"failureMessages":[],"fullName":"NotificationService getFilteredList 알림 엔터티 목록을 반환","status":"passed","title":"알림 엔터티 목록을 반환"},{"ancestorTitles":["NotificationService","delete"],"duration":2,"failureMessages":[],"fullName":"NotificationService delete ID로 알림 엔터티를 삭제","status":"passed","title":"ID로 알림 엔터티를 삭제"}]},{"numFailingTests":0,"numPassingTests":3,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1742380297509,"runtime":722,"slow":false,"start":1742380296787},"testFilePath":"/home/runner/work/PickMe-Reminder-Service/PickMe-Reminder-Service/worker/src/infrastructure/receivers/calendarReceiver.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["CalendarEventReceiver"],"duration":6,"failureMessages":[],"fullName":"CalendarEventReceiver 이벤트 세부 정보를 반환","status":"passed","title":"이벤트 세부 정보를 반환"},{"ancestorTitles":["CalendarEventReceiver"],"duration":9,"failureMessages":[],"fullName":"CalendarEventReceiver 세부 정보가 없는 경우 오류","status":"passed","title":"세부 정보가 없는 경우 오류"},{"ancestorTitles":["CalendarEventReceiver"],"duration":2,"failureMessages":[],"fullName":"CalendarEventReceiver 호출 실패","status":"passed","title":"호출 실패"}]},{"numFailingTests":0,"numPassingTests":7,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1742380298426,"runtime":6765,"slow":true,"start":1742380291661},"testFilePath":"/home/runner/work/PickMe-Reminder-Service/PickMe-Reminder-Service/notification/src/presentation/controllers/httpController.spec.ts","failureMessage":null,"testResults":[{"ancestorTitles":["NotificationController"],"duration":71,"failureMessages":[],"fullName":"NotificationController /POST create","status":"passed","title":"/POST create"},{"ancestorTitles":["NotificationController","NotificationController"],"duration":6,"failureMessages":[],"fullName":"NotificationController NotificationController /POST create","status":"passed","title":"/POST create"},{"ancestorTitles":["NotificationController","NotificationController"],"duration":3,"failureMessages":[],"fullName":"NotificationController NotificationController /GET read","status":"passed","title":"/GET read"},{"ancestorTitles":["NotificationController","NotificationController"],"duration":7,"failureMessages":[],"fullName":"NotificationController NotificationController /GET readByOptions","status":"passed","title":"/GET readByOptions"},{"ancestorTitles":["NotificationController","NotificationController"],"duration":7,"failureMessages":[],"fullName":"NotificationController NotificationController /PUT update","status":"passed","title":"/PUT update"},{"ancestorTitles":["NotificationController","NotificationController"],"duration":4,"failureMessages":[],"fullName":"NotificationController NotificationController /PATCH updatePartial","status":"passed","title":"/PATCH updatePartial"},{"ancestorTitles":["NotificationController","NotificationController"],"duration":3,"failureMessages":[],"fullName":"NotificationController NotificationController /DELETE delete","status":"passed","title":"/DELETE delete"}]},{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1742380300539,"runtime":3153,"slow":false,"start":1742380297386},"testFilePath":"/home/runner/work/PickMe-Reminder-Service/PickMe-Reminder-Service/worker/src/infrastructure/senders/webSender.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["WebNotificationSender"],"duration":10,"failureMessages":[],"fullName":"WebNotificationSender 알림 성공","status":"passed","title":"알림 성공"},{"ancestorTitles":["WebNotificationSender"],"duration":3,"failureMessages":[],"fullName":"WebNotificationSender 알림 실패","status":"passed","title":"알림 실패"}]},{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1742380301256,"runtime":2824,"slow":false,"start":1742380298432},"testFilePath":"/home/runner/work/PickMe-Reminder-Service/PickMe-Reminder-Service/worker/src/application/usecases/cron.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["WorkerCronService"],"duration":9,"failureMessages":[],"fullName":"WorkerCronService 서비스 정의","status":"passed","title":"서비스 정의"},{"ancestorTitles":["WorkerCronService"],"duration":16,"failureMessages":[],"fullName":"WorkerCronService handleClone으로 WorkerService 수행","status":"passed","title":"handleClone으로 WorkerService 수행"}]},{"numFailingTests":0,"numPassingTests":3,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1742380301307,"runtime":3793,"slow":false,"start":1742380297514},"testFilePath":"/home/runner/work/PickMe-Reminder-Service/PickMe-Reminder-Service/notification/src/presentation/controllers/messageController.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["NotificationsMessageController"],"duration":3,"failureMessages":[],"fullName":"NotificationsMessageController 서비스 정의","status":"passed","title":"서비스 정의"},{"ancestorTitles":["NotificationsMessageController"],"duration":2,"failureMessages":[],"fullName":"NotificationsMessageController 알림 옵션 조회","status":"passed","title":"알림 옵션 조회"},{"ancestorTitles":["NotificationsMessageController"],"duration":1,"failureMessages":[],"fullName":"NotificationsMessageController 알림 부분 수정","status":"passed","title":"알림 부분 수정"}]}],"config":{"bail":0,"changedFilesWithAncestor":false,"ci":true,"collectCoverage":false,"collectCoverageFrom":["**/*.(t|j)s"],"coverageDirectory":"/home/runner/work/PickMe-Reminder-Service/coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":3,"noStackTrace":false,"nonFlagArgs":[],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"openHandlesTimeout":1000,"passWithNoTests":false,"projects":["/home/runner/work/PickMe-Reminder-Service/PickMe-Reminder-Service/notification","/home/runner/work/PickMe-Reminder-Service/PickMe-Reminder-Service/worker"],"reporters":[["default",{}],["/home/runner/work/PickMe-Reminder-Service/PickMe-Reminder-Service/node_modules/jest-html-reporters/index.js",{"publicPath":"./dist","filename":"test-report.html","includeFailureMsg":true,"expand":true}]],"rootDir":"/home/runner/work/PickMe-Reminder-Service/PickMe-Reminder-Service","runTestsByPath":false,"seed":-999729947,"skipFilter":false,"snapshotFormat":{"escapeString":false,"printBasicPrototype":false},"testFailureExitCode":1,"testPathPattern":"","testSequencer":"/home/runner/work/PickMe-Reminder-Service/PickMe-Reminder-Service/node_modules/@jest/test-sequencer/build/index.js","updateSnapshot":"none","useStderr":false,"watch":false,"watchAll":false,"watchman":true,"workerThreads":false},"endTime":1742380301382,"_reporterOptions":{"publicPath":"./dist","filename":"test-report.html","expand":true,"pageTitle":"","hideIcon":false,"testCommand":"","openReport":false,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false,"stripSkippedTest":false,"includeFailureMsg":true},"logInfoMapping":{},"attachInfos":{}})