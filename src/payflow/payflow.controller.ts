import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PayflowService } from './payflow.service';
import { CreatePayflowDto } from './dto/create-payflow.dto';
import { UpdatePayflowDto } from './dto/update-payflow.dto';

@Controller('payflow')
export class PayflowController {
  constructor(private readonly payflowService: PayflowService) {}

  @Post()
  create(@Body() createPayflowDto: CreatePayflowDto) {
    return this.payflowService.create(createPayflowDto);
  }

  @Get()
  findAll() {
    return this.payflowService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payflowService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePayflowDto: UpdatePayflowDto) {
    return this.payflowService.update(+id, updatePayflowDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payflowService.remove(+id);
  }
}
