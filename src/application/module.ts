import { Module } from '@nestjs/common';
import { NotificationController } from 'src/presentation/controller';

@Module({
  controllers: [NotificationController]
})
export class NotificationModule {}
