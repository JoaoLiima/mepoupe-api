import { Module } from '@nestjs/common';
import { AverageController } from './average.controller';
import { AverageService } from './average.service';
import UseCases from './use-cases';

@Module({
  providers: [AverageService, ...UseCases],
  controllers: [AverageController],
})
export class AverageModule {}
