import { Test, TestingModule } from '@nestjs/testing';
import { PayflowController } from './payflow.controller';
import { PayflowService } from './payflow.service';

describe('PayflowController', () => {
  let controller: PayflowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayflowController],
      providers: [PayflowService],
    }).compile();

    controller = module.get<PayflowController>(PayflowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
