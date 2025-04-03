import { prisma } from "../../index";

class TenantService {
  async getAllTenant() {
    const tenants = await prisma.tenant.findMany({
      select: {
        id: true,
        subdomain: true,
        client: {
          select: {
            name: true,
            type: true,
            kvk: true,
            contactEmail: true,
            numberOfEmployees: true,
            country: true,
            address: true,
          },
        },
      },
    });

    return tenants;
  }

  async getAllTenantsByUser(_email: string) {
    const tenants = await prisma.tenant.findMany({
      select: {
        id: true,
        subdomain: true,
        client: {
          select: {
            name: true,
            type: true,
            kvk: true,
            contactEmail: true,
            numberOfEmployees: true,
            country: true,
            address: true,
          },
        },
      },
      where: {
        users: {
          some: {
            email: _email,
          },
        },
      },
    });

    return tenants;
  }

  async validateTenantById(tenantId: string) {
    const tenant = await prisma.tenant.findUnique({
      where: {
        id: tenantId,
      },
    });

    if (!tenant) {
      throw new Error(`Tenant with ID ${tenantId} not found`);
    }

    return tenant;
  }

  async validaSubdomain(subdomain: string): Promise<boolean> {
    if (!subdomain) {
      throw new Error("Subdomain is required");
    }

    const exists = await prisma.tenant.findUnique({
      where: { subdomain },
    });

    return !!exists;
  }
}

export const tenantService = new TenantService();
