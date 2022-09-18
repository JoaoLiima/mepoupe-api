import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class AverageInput {
  @ApiProperty({
    description: 'Primeiro número para o cálculo da média',
    default: 1,
  })
  @IsNumber()
  @Type(() => Number)
  n1: number;

  @ApiProperty({
    description: 'Segundo número para o cálculo da média',
    default: 1,
  })
  @IsNumber()
  @Type(() => Number)
  n2: number;
}
