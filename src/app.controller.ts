import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import * as pack from '../package.json';

@ApiTags('Healthz')
@Controller()
export class AppController {
  @ApiOperation({ summary: 'Verifica o status da API' })
  @ApiResponse({
    status: 200,
    description: 'Status e versão da API',
  })
  @Get('/healthz')
  httpStatus() {
    return {
      status: 'ok',
      version: pack.version,
    };
  }
}
