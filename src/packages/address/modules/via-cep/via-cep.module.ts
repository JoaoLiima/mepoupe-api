import { Module } from '@nestjs/common';
import { ViaCepController } from './via-cep.controller';
import { ViaCepService } from './via-cep.service';
import UseCases from './use-cases';
import { HttpServiceModule } from '@/infra/http-service/http-service.module';

@Module({
  providers: [ViaCepService, ...UseCases],
  imports: [HttpServiceModule],
  controllers: [ViaCepController],
  exports: [ViaCepService],
})
export class ViaCepModule {}
