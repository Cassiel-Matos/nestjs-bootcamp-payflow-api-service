import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User, Ticket } from '@prisma/client';
import { FlowService } from 'src/services/flow.service';

@ApiTags('payflow')
@Controller('v1')
export class FlowController {
  constructor(private readonly flowService: FlowService) {}

  //Trás todas as informações do usuario (brings the user information)
  @Get('about/:email')
  async about(@Param('email') email: string): Promise<User> {
    return this.flowService.about(email);
  }

  //Delete a conta do usuario (Delete user account)
  @Delete('delete_user/:id')
  async Delete(@Param('id') id: string): Promise<User> {
    // return this.flowController.delete_user(id);
    return this.flowService.delete_user(id);
  }

  //Salva as informações do usuario
  @Post('user')
  async create_user(@Body() body: User) {
    return this.flowService.create_user(body);
  }

  //Cria lista de boletos (Create tickets list)
  @Post('create_ticket')
  async create_ticket(@Body() body: Ticket) {
    return this.flowService.create_ticket(body);
  }

  //Trás o boleto  (Bring ticket)
  @Get('ticket/:id')
  async ticket(@Param('id') id: string): Promise<Ticket> {
    return this.flowService.ticket(id);
  }

  //Trás a lista de boletos criados pelo usuario (Bring the list of tickets created by the user)
  @Get('list_ticket/:email')
  async list_ticket(@Param('email') email: string): Promise<Ticket[]> {
    return this.flowService.list_ticket(email);
  }

  //Trás a lista de boletos pagos pelo usuario (Bring the list of tickets payed by the user)
  @Get('list_payed/:email')
  async list_payed(@Param('email') email: string): Promise<Ticket[]> {
    return this.flowService.list_payed(email);
  }

  //Trás a lista de boletos não pagos pelo usuario (Bring the list of tickets not payed by the user)
  @Get('list_nopayed/:email')
  async list_nopayed(@Param('email') email: string): Promise<Ticket[]> {
    return this.flowService.list_nopayed(email);
  }

  //Atualiza boleto (update tickets)
  @Put('pay/:id')
  async update_ticket(@Param('id') id: string): Promise<Ticket> {
    return this.flowService.update_ticket(id);
  }

  //Delete lista de boletos (Delete list of tickets)
  @Delete('delete_ticket/:id')
  async delete_ticket(@Param('id') id: string): Promise<Ticket> {
    return this.flowService.delete_ticket(id);
  }
}
