import { AverageService } from './average.service';
import { CalculateAverageServiceImplementation } from './use-cases/calculate-average';

describe('AverageService', () => {
  let service: AverageService;
  let calculateAverageService: CalculateAverageServiceImplementation;

  beforeEach(() => {
    calculateAverageService = new CalculateAverageServiceImplementation();
    service = new AverageService(calculateAverageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Calculate average using the half round up method', () => {
    it('should round up positive numbers', () => {
      const n1 = 1.25;
      const n2 = 2;

      const result = service.calculate({ n1, n2 });

      expect(result).toEqual(1.63);
    });

    it('should round up negative numbers', () => {
      const n1 = -1.25;
      const n2 = -2;

      const result = service.calculate({ n1, n2 });

      expect(result).toEqual(-1.63);
    });
  });
});
