import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HttpServiceModule } from './infra/http-service/http-service.module';
import { AverageModule } from './packages/calculator/modules/average/average.module';
import { ViaCepModule } from './packages/address/modules/via-cep/via-cep.module';
import { LoggerModule } from './infra/logger/logger.module';

@Module({
  imports: [AverageModule, HttpServiceModule, ViaCepModule, LoggerModule],
  controllers: [AppController],
})
export class AppModule {}
