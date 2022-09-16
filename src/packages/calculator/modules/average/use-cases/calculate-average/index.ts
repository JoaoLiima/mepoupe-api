import { AverageInput } from '@/domain/dtos/average/calculate-average.input';
import { ICalculateAverageService } from '@/domain/use-cases/service/average/calculate-average.interface';

export class CalculateAverageServiceImplementation
  implements ICalculateAverageService
{
  execute({ n1, n2 }: AverageInput): number {
    const total = n1 + n2;
    const average = total / 2;

    return +average.toFixed(2);
  }
}
