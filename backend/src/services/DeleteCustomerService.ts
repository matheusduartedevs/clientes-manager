import { FastifyReply, FastifyRequest } from "fastify";
import prismaClient from "../prisma";

export interface DeleteCustomerProps {
  id: string;
}

export class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {
    if (!id) throw new Error("Solicitação inválida");

    const findCustomer = await prismaClient.custormer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) throw new Error("Cliente não existe!");

    await prismaClient.custormer.delete({
      where: {
        id: findCustomer.id,
      },
    });

    return { message: "Deletado com sucesso!" };
  }
}
