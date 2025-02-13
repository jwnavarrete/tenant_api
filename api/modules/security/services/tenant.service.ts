import { prisma } from "@/index";

export const getAllTenant = async () => {
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
};

export const getAllTenantsByUser = async (_email: string) => {
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
};
