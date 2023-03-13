import { Module } from '@nestjs/common';
import { FlowModule } from './modules/flow.module';
// import { GoogleModule } from './modules/google.module';

@Module({
  imports: [FlowModule],
})
export class AppModule {}
