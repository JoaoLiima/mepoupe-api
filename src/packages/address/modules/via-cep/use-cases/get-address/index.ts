import { IGetAddressService } from '@/domain/use-cases/service/address/get-address.interface';
import { BadRequestError, NotFoundError } from '@/error';
import { validateCEP } from '@/common/helpers/validate-cep';
import { Address } from '@/common/interfaces';
import { HttpService } from '@/infra/http-service/http-service.service';
import { forwardRef, Inject } from '@nestjs/common';
import { GetAddressOutput } from '@/common/interfaces';
import { LoggerService } from '@/infra/logger/logger.service';

export class GetAddressServiceImplementation implements IGetAddressService {
  constructor(
    @Inject(forwardRef(() => HttpService))
    private readonly httpService: HttpService,
  ) {}

  async execute(cep: string): Promise<GetAddressOutput> {
    const isValid = validateCEP(cep);

    if (isValid) {
      const response = await this.httpService.get<Address>(
        `https://viacep.com.br/ws/${cep}/json`,
      );
      const address = response.data;
      const keys = Object.keys(address);
      const emptyFields = keys.filter((key) => !address[key]);

      if (keys.includes('erro')) {
        throw new NotFoundError(`Nenhum endereço encontrado para o CEP ${cep}`);
      }

      if (emptyFields.length > 0) {
        return {
          ...address,
          message: `O CEP ${cep} não contém as informações: ${emptyFields.join(
            ', ',
          )}`,
        };
      }

      return address;
    } else {
      LoggerService.error(`CEP ${cep} não é válido`);
      throw new BadRequestError(`O CEP ${cep} não é válido`);
    }
  }
}
