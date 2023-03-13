import { Module } from '@nestjs/common';
import { FlowController } from 'src/controllers/flow.controller';
import { PrismaService } from 'src/database/prisma.service';
import { FlowService } from 'src/services/flow.service';

@Module({
  imports: [],
  controllers: [FlowController],
  providers: [FlowService, PrismaService],
})
export class FlowModule {}
