import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class AverageInput {
  @IsNumber()
  @Type(() => Number)
  n1: number;

  @IsNumber()
  @Type(() => Number)
  n2: number;
}
