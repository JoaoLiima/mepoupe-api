import { AverageInput } from '@/domain/dtos/average/calculate-average.input';
import { IAverageService } from '@/domain/services/average-service.interface';
import { Injectable } from '@nestjs/common';
import { CalculateAverageServiceImplementation } from './use-cases/calculate-average';

@Injectable()
export class AverageService implements IAverageService {
  constructor(
    private calculateAverageService: CalculateAverageServiceImplementation,
  ) {}

  calculate({ n1, n2 }: AverageInput) {
    return this.calculateAverageService.execute({
      n1: Number(n1),
      n2: Number(n2),
    });
  }
}
