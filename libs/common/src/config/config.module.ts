import { configuration } from '@app/common/config/configuration';
import { Module } from '@nestjs/common';
import {
  ConfigService,
  ConfigModule as NestConfigModule,
} from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      load: [configuration],
      validationSchema: Joi.object({
        DATABASE_PORT: Joi.number().required(),
        DATABASE_HOST: Joi.string().required(),
        DATABASE_ROOT: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        HTTP_AUTH_PORT: Joi.number().required(),
        TCP_AUTH_PORT: Joi.number().required(),
        HTTP_USER_PORT: Joi.number().required(),
        TCP_USER_PORT: Joi.number().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
