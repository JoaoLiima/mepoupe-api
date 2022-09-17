import { GetAddress } from '@/common/interfaces';
import { IViaCepService } from '@/domain/services/via-cep-service.interface';
import { Injectable } from '@nestjs/common';
import { GetAddressServiceImplementation } from './use-cases/get-address';

@Injectable()
export class ViaCepService implements IViaCepService {
  constructor(
    private readonly getAddressService: GetAddressServiceImplementation,
  ) {}

  getAddress(cep: string): Promise<GetAddress> {
    return this.getAddressService.execute(cep);
  }
}
