import { AverageInput } from '@/domain/dtos/average/calculate-average.input';
import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AverageService } from './average.service';

@UsePipes(new ValidationPipe())
@Controller('average')
export class AverageController {
  constructor(private averageService: AverageService) {}

  @Post()
  async calcAverage(@Body() input: AverageInput) {
    return this.averageService.calculate(input);
  }
}
