import { GetAddressOutput } from '@/common/interfaces';

export interface IGetAddressService {
  execute(cep: string): Promise<GetAddressOutput>;
}
