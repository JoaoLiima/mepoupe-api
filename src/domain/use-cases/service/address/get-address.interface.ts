import { GetAddress } from '@/common/interfaces';

export interface IGetAddressService {
  execute(cep: string): Promise<GetAddress>;
}
