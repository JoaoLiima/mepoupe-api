import { CalculateAverageOutput } from '@/common/interfaces';
import { AverageInput } from '../dtos/average/calculate-average.input';

export interface IAverageService {
  calculate(input: AverageInput): CalculateAverageOutput;
}
