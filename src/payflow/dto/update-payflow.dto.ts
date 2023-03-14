import { PartialType } from '@nestjs/swagger';
import { CreatePayflowDto } from './create-payflow.dto';

export class UpdatePayflowDto extends PartialType(CreatePayflowDto) {}
