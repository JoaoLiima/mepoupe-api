import { Address } from './address.interface';

export interface GetAddressOutput extends Address {
  message?: string;
}
