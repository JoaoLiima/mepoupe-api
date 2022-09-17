import { IGetAddressService } from '@/domain/use-cases/service/address/get-address.interface';
import { BadRequestError } from '@/error';
import { validateCEP } from '@/common/helpers/validate-cep';
import { Address } from '@/common/interfaces';
import { HttpService } from '@/infra/http-service/http-service.service';
import { forwardRef, Inject } from '@nestjs/common';
import { GetAddress } from '@/common/interfaces';

export class GetAddressServiceImplementation implements IGetAddressService {
  constructor(
    @Inject(forwardRef(() => HttpService))
    private readonly httpService: HttpService,
  ) {}

  async execute(cep: string): Promise<GetAddress> {
    const isValid = validateCEP(cep);

    if (isValid) {
      const response = await this.httpService.get<Address>(
        `https://viacep.com.br/ws/${cep}/json`,
        { name: 'Nome', age: 'Idade' },
      );
      const address = response.data;
      const { bairro } = address;

      if (!bairro) {
        return {
          ...address,
          message: 'Não foi possível identificar o bairro do CEP fornecido',
        };
      }

      return address;
    } else {
      throw new BadRequestError('CEP inválido');
    }
  }
}
