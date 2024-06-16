import { ConfigModule } from '@app/common/config';
import { DatabaseModule } from '@app/common/database';
import { LoggerModule } from '@app/common/logger';
import { Module } from '@nestjs/common';

@Module({
  imports: [LoggerModule, ConfigModule, DatabaseModule],
})
export class CommonModule {}
