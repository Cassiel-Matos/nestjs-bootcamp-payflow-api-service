import { Injectable } from '@nestjs/common';
import { CreatePayflowDto } from './dto/create-payflow.dto';
import { UpdatePayflowDto } from './dto/update-payflow.dto';

@Injectable()
export class PayflowService {
  create(createPayflowDto: CreatePayflowDto) {
    return 'This action adds a new payflow';
  }

  findAll() {
    return `This action returns all payflow`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payflow`;
  }

  update(id: number, updatePayflowDto: UpdatePayflowDto) {
    return `This action updates a #${id} payflow`;
  }

  remove(id: number) {
    return `This action removes a #${id} payflow`;
  }
}
