import prismaClient from "../prisma";

interface CreateCustomerProps {
  name: string;
  email: string;
}

export class CreateCustomerService {
  async execute({ name, email }: CreateCustomerProps) {
    if (!name || !email) {
      throw new Error("Preencha todos os campos");
    }

    const customer = await prismaClient.custormer.create({
      data: {
        name,
        email,
        status: true,
      },
    });

    return customer;
  }
}
