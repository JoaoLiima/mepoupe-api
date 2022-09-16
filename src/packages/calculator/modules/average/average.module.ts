import { Module } from '@nestjs/common';
import { AverageController } from './average.controller';
import { AverageService } from './average.service';
import UserCases from './use-cases';

@Module({
  providers: [AverageService, ...UserCases],
  controllers: [AverageController],
})
export class AverageModule {}
