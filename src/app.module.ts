import { Module } from '@nestjs/common';
import { FlowModule } from './modules/flow.module';
// import { GoogleModule } from './modules/google.module';
import { PayflowModule } from './payflow/payflow.module';

@Module({
  imports: [FlowModule, PayflowModule],
})
export class AppModule {}
