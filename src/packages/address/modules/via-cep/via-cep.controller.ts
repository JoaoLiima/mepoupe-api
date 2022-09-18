import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ViaCepService } from './via-cep.service';

@ApiTags('Via CEP')
@Controller('get-address')
export class ViaCepController {
  constructor(private viaCepService: ViaCepService) {}

  @ApiOperation({ summary: 'Busca o endereço do CEP fornecido' })
  @ApiResponse({
    status: 200,
    description: 'Endereço do CEP fornecido',
  })
  @Get(':cep')
  async get(@Param('cep') cep: string) {
    return this.viaCepService.getAddress(cep);
  }
}
