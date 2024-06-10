import { ConfigModule } from '@app/common/config';
import { LoggerModule } from '@app/common/logger';
import { Module } from '@nestjs/common';

@Module({
  imports: [LoggerModule, ConfigModule],
})
export class CommonModule {}
