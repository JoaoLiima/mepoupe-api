import { CalculateAverageOutput } from '@/common/interfaces';
import { AverageInput } from '@/domain/dtos/average/calculate-average.input';

export interface ICalculateAverageService {
  execute(input: AverageInput): CalculateAverageOutput;
}
