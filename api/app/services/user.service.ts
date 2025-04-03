import { hash } from "bcryptjs";
import {
  IInviteUser,
  IUserResponse,
  IUserUpdate,
} from "../interfaces/user.intercace";
import { prisma } from "../../index";
import { QueryParams } from "../../common/interfaces/query.interface";
import { UserResponseSchema } from "../schemas/user.schemas";
import { UserMailService } from "../../common/Mail";
import { CLIENT_STATUS } from "../../common/lib/constant";

class UserService {
  async getUsers(
    params: QueryParams,
    tenantId: string
  ): Promise<{
    data: IUserResponse[];
    total: number;
    page: number;
    limit: number;
  }> {
    const { page, limit, search } = params;

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where: {
          tenantId: tenantId,
          OR: [
            { fullname: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
          ],
        },
        skip: (page - 1) * limit,
        take: limit,
        include: {
          tenant: {
            include: {
              client: true,
            },
          },
          role: true,
          invitedBy: true, // Incluir la información del usuario que invitó
        },
      }),
      prisma.user.count({
        where: {
          tenantId: tenantId,
          OR: [
            { fullname: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
          ],
        },
      }),
    ]);

    const parsedUsers = users.map((user) => UserResponseSchema.parse(user));
    return {
      data: parsedUsers,
      total,
      page,
      limit,
    };
  }

  async inviteUser(
    inviteParam: IInviteUser,
    tenantId: string,
    invitedById: string
  ): Promise<any> {
    const { emails, roleId } = inviteParam;

    // Verificar que el usuario que invita exista y esté verificado
    const inviteUser = await this.getUserById(invitedById);

    if (!inviteUser || !inviteUser.emailVerified) {
      throw new Error(
        `Inviting user with ID ${invitedById} does not exist or is not verified`
      );
    }

    // Verificar que los correos no estén ya registrados
    for (const email of emails) {
      const existingUser = await this.findUserTenant(tenantId, email);

      if (existingUser) {
        throw new Error(`User with email ${email} already exists`);
      }
    }

    // Crear las invitaciones
    const invitations = emails.map(async (email) => {
      const invitationToken = Math.random().toString(36).substring(2, 15);

      const newUser = await prisma.user.create({
        data: {
          email,
          roleId,
          tenantId,
          invitedById,
        },
      });

      const companyName = inviteUser.tenant.client.name;
      const slug = inviteUser.tenant.subdomain;

      this.sendInvitation(
        slug,
        email,
        companyName,
        invitationToken,
        newUser.id
      );

      return {
        id: newUser.id,
        email: newUser.email,
        invitationToken: invitationToken,
      };
    });

    return Promise.all(invitations);
  }

  async sendInvitation(
    slug: string,
    email: string,
    companyName: string,
    token: string,
    userId: string
  ): Promise<void> {
    const recoveryUrlLink = `https://${slug}.${process.env.APP_DOMAIN}/users/register?token=${token}&dl_userid=${userId}`;

    UserMailService.sendInvitation(email, companyName, recoveryUrlLink);

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        invitationToken: token,
        status: CLIENT_STATUS.PENDING,
      },
    });
  }

  async resendInvitation(userId: string): Promise<boolean> {
    const user = await this.getUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    if (user.status === CLIENT_STATUS.ACTIVE) {
      throw new Error("User is already active");
    }

    const UserData = UserResponseSchema.parse(user);

    const companyName = UserData.tenant?.client?.name;
    const slug = UserData.tenant?.subdomain;

    if (!companyName || !slug) {
      throw new Error("Company name or slug not found");
    }

    const invitationToken = Math.random().toString(36).substring(2, 15);

    this.sendInvitation(
      slug,
      UserData.email,
      companyName,
      invitationToken,
      userId
    );

    return true;
  }

  async registerInvitedUser(
    userId: string,
    password: string,
    fullname: string
  ): Promise<IUserResponse> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user || !user.invitationToken) {
      throw new Error("Invalid or expired invitation token");
    }

    const encryptedPassword = await hash(password, 10);

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        password: encryptedPassword, // You should hash the password before saving it
        fullname,
        emailVerified: true,
        invitationToken: null,
        joined: new Date(),
        status: CLIENT_STATUS.ACTIVE,
      },
    });

    const newUser = await this.getUserById(updatedUser.id);

    return UserResponseSchema.parse(newUser);
  }

  async verifyInvitationToken(userId: string, token: string): Promise<boolean> {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
        invitationToken: token,
      },
    });

    if (!user) {
      throw new Error("Invalid or expired invitation token");
    }

    return true;
  }

  async findUserTenant(tenantId: string, email: string) {
    const existingUser = await prisma.user.findUnique({
      where: {
        tenantId_email: {
          tenantId,
          email,
        },
      },
    });

    return existingUser;
  }

  async getUserById(userId: string) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        tenant: {
          include: {
            client: true,
          },
        },
      },
    });

    return user;
  }

  async updateUser(
    userId: string,
    updateData: Partial<IUserUpdate>
  ): Promise<IUserResponse> {
    const user = await this.getUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        ...updateData,
      },
    });
    return UserResponseSchema.parse(updatedUser);
  }

  async getUserByEmail(tenantId: string, email: string) {
    const user = await prisma.user.findFirst({
      where: {
        tenantId,
        email,
      },
    });

    return user;
  }
}

export const userService = new UserService();
