import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

export class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };

    const customerService = new DeleteCustomerService();

    const customerDeleted = customerService.execute({ id });

    reply.send(customerDeleted);
  }
}
