import { GetAddressOutput } from '@/common/interfaces';

export interface IViaCepService {
  getAddress(url: string): Promise<GetAddressOutput>;
}
