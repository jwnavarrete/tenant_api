import { prisma } from "../../index";

class RoleService {
  async getRoleByName(roleName: string) {
    const role = await prisma.role.findUnique({
      where: { name: roleName },
    });

    if (!role) {
      throw new Error(`Role with name ${roleName} not found`);
    }

    return role;
  }
}

export const roleService = new RoleService();
