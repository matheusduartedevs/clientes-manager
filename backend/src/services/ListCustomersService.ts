import { FastifyRequest, FastifyReply } from "fastify";
import prismaClient from "../prisma";

export class ListCustomersService {
  async execute() {
    const customers = prismaClient.custormer.findMany();

    return customers;
  }
}
