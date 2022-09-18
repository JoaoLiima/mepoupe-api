import { AverageInput } from '@/domain/dtos/average/calculate-average.input';
import { ICalculateAverageService } from '@/domain/use-cases/service/average/calculate-average.interface';
import { LoggerService } from '@/infra/logger/logger.service';

export class CalculateAverageServiceImplementation
  implements ICalculateAverageService
{
  execute({ n1, n2 }: AverageInput): number {
    LoggerService.log(`Números recebidos: ${n1} e ${n2}`);
    const total = n1 + n2;
    LoggerService.log(`Total: ${total}`);
    const average = (total / 2).toFixed(2);
    LoggerService.log(`Média: ${average}`);

    return +average;
  }
}
