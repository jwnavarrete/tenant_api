import { prisma } from "../../index";

class ClientService {
    async getAll(): Promise<any[]> {
        const clients = await prisma.client.findMany({
            include: { tenant: true }
        });
        return clients
    }
}

export const clientService = new ClientService();