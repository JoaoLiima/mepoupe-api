import { Module } from '@nestjs/common';
import { HttpService } from './http-service.service';

@Module({
  providers: [HttpService],
  exports: [HttpService],
})
export class HttpServiceModule {}
