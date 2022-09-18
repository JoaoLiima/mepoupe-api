import { Test, TestingModule } from '@nestjs/testing';
import { ViaCepService } from './via-cep.service';

const mockedAddress = {
  cep: '18150-000',
  logradouro: '',
  complemento: '',
  bairro: '',
  localidade: 'Ibiúna',
  uf: 'SP',
  ibge: '3519709',
  gia: '3451',
  ddd: '15',
  siafi: '6495',
  message: 'Não foi possível identificar o bairro do CEP fornecido',
};

describe('ViaCepService', () => {
  let service: ViaCepService;

  const mockViaCepService = {
    getAddress: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ViaCepService,
        {
          provide: ViaCepService,
          useFactory: () => mockViaCepService,
        },
      ],
    }).compile();
    service = module.get<ViaCepService>(ViaCepService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be able to retrieve and address through a CEP', async () => {
    mockViaCepService.getAddress.mockReturnValue(mockedAddress);

    const address = await service.getAddress('18150000');

    expect(address).toMatchObject(mockedAddress);
  });
});
