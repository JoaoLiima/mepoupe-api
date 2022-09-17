import { GetAddress } from '@/common/interfaces';

export interface IViaCepService {
  getAddress(url: string): Promise<GetAddress>;
}
