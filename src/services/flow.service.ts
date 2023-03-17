import { Injectable } from '@nestjs/common';
import { User, Ticket } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class FlowService {
  constructor(private prisma: PrismaService) {}

  //Trás todas as informações do usuario (brings the user information)
  async about(email: string): Promise<User> {
    const abouts = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    return abouts;
  }

  //Deleta conta de usuario (Delete account user)
  async delete_user(id: string): Promise<User> {
    console.log(id);

    const delete_user = await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return delete_user;
  }

  //Salva as informações do usuario
  async create_user(body) {
    console.log(body);

    const findUser = await this.prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (findUser)
      return {
        message: 'success',
      };

    const create_user = await this.prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        picture: body.image,
      },
    });

    if (create_user)
      return {
        message: 'success',
      };

    return {
      message: 'fail',
    };
  }

  //Criar Boleto (Create ticket )
  async create_ticket(body: Ticket): Promise<Ticket> {
    const create_ticket = await this.prisma.ticket.create({
      data: body,
    });
    return create_ticket;
  }

  //Trás boleto (Bring ticket)
  async ticket(id: string): Promise<Ticket> {
    const ticket = await this.prisma.ticket.findFirst({
      where: {
        id: id,
      },
    });
    return ticket;
  }

  //Trás a lista de boletos criados pelo usuario (Bring the list of tickets created by the user)
  async list_ticket(email: string): Promise<Ticket[]> {
    const list_ticket = await this.prisma.ticket.findMany({
      where: {
        Email: email,
      },
    });
    return list_ticket;
  }

  //Trás a lista de boletos pagos pelo usuario (Bring the list of tickets payed by the user)
  async list_payed(email: string): Promise<Ticket[]> {
    const list_payed = await this.prisma.ticket.findMany({
      where: {
        Email: email,
        AND: {
          payed: true,
        },
      },
    });
    return list_payed;
  }

  //Trás a lista de boletos não pagos pelo usuario (Bring the list of tickets not payed by the user)
  async list_nopayed(email: string): Promise<Ticket[]> {
    const list_nopayed = await this.prisma.ticket.findMany({
      where: {
        Email: email,
        AND: {
          payed: false,
        },
      },
    });
    return list_nopayed;
  }

  //Altera as informações do boleto (Change ticket information)
  async update_ticket(id: string): Promise<Ticket> {
    const update_ticket = await this.prisma.ticket.update({
      where: {
        id,
      },
      data: {
        payed: true,
      },
    });
    return update_ticket;
  }

  //Deleta boletos do usuario (delete user ticket)
  async delete_ticket(id: string): Promise<Ticket> {
    const delete_ticket = await this.prisma.ticket.delete({
      where: {
        id,
      },
    });
    return delete_ticket;
  }
}
