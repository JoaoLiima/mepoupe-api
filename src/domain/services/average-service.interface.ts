import { AverageInput } from '../dtos/average/calculate-average.input';

export interface IAverageService {
  calculate(input: AverageInput): number;
}
