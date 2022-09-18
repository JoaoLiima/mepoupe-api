import { AverageInput } from '@/domain/dtos/average/calculate-average.input';
import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AverageService } from './average.service';

@ApiTags('Média')
@UsePipes(new ValidationPipe())
@Controller('average')
export class AverageController {
  constructor(private averageService: AverageService) {}

  @ApiOperation({ summary: 'Calcula a média de dois números' })
  @ApiResponse({
    status: 200,
    description: 'Retorna a média calculada entre os dois números fornecidos',
  })
  @Post()
  async calcAverage(@Body() input: AverageInput) {
    return this.averageService.calculate(input);
  }
}
