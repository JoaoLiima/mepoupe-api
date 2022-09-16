import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AverageModule } from './packages/calculator/modules/average/average.module';

@Module({
  imports: [AverageModule],
  controllers: [AppController],
})
export class AppModule {}
