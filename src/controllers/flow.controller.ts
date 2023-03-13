import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { User, Ticket } from '@prisma/client';
import { FlowService } from 'src/services/flow.service';

@Controller('v1')
export class FlowController {
  constructor(private readonly flowService: FlowService) {}

  //Trás todas as informações do usuario (brings the user information)
  @Get('about/:about')
  async about(@Param('id') id: string): Promise<User | null> {
    return this.flowService.about(id);
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
  @Post('ticket')
  async create_ticket(@Body() body: Ticket) {
    return this.flowService.create_ticket(body);
  }

  //Trás a lista de boletos criados pelo usuario (Bring the list of tickets created by the user)
  @Get('list_ticket/:user')
  async list_ticket(@Param('user') user: string): Promise<Ticket[]> {
    return this.flowService.list_ticket(user);
  }

  //Trás a lista de boletos pagos pelo usuario (Bring the list of tickets payed by the user)
  @Get('list_payed/:user')
  async list_payed(@Param('user') user: string): Promise<Ticket[]> {
    return this.flowService.list_payed(user);
  }

  //Trás a lista de boletos não pagos pelo usuario (Bring the list of tickets not payed by the user)
  @Get('list_nopayed/:user')
  async list_nopayed(@Param('user') user: string): Promise<Ticket[]> {
    return this.flowService.list_nopayed(user);
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
