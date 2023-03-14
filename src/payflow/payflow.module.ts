import { Module } from '@nestjs/common';
import { PayflowService } from './payflow.service';
import { PayflowController } from './payflow.controller';

@Module({
  controllers: [PayflowController],
  providers: [PayflowService]
})
export class PayflowModule {}
