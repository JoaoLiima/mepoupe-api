import { Controller, Get, Param } from '@nestjs/common';
import { ViaCepService } from './via-cep.service';

@Controller('get-address')
export class ViaCepController {
  constructor(private viaCepService: ViaCepService) {}

  @Get(':cep')
  async get(@Param('cep') cep: string) {
    return this.viaCepService.getAddress(cep);
  }
}
