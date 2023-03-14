import { Test, TestingModule } from '@nestjs/testing';
import { PayflowService } from './payflow.service';

describe('PayflowService', () => {
  let service: PayflowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayflowService],
    }).compile();

    service = module.get<PayflowService>(PayflowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
