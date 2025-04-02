import { z } from "zod";

const ClientSchema = z.object({
  name: z.string(),
  contactEmail: z.string().email(),
});

const TenantSchema = z.object({
  subdomain: z.string(),
  client: ClientSchema.optional(),
});

const RoleSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
});

const InvitedBySchema = z.object({
  // id: z.string().uuid(),
  email: z.string().email(),
  fullname: z.string().max(100),
  tenant: TenantSchema.optional(),
});

const UserSchema = z.object({
  id: z.string().uuid(),
  tenantId: z.string().nullable().optional(),
  tenant: TenantSchema.optional(),
  email: z.string().email(),
  fullname: z.string().nullable().optional(),
  password: z.string().min(8).nullable().optional(),
  country: z.string().max(50).nullable().optional(),
  phone: z.string().max(20).nullable().optional(),
  typeIdentification: z.string().max(50).nullable().optional(),
  identification: z.string().max(50).nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  emailVerified: z.boolean(),
  verificationToken: z.string().nullable().optional(),
  resetPasswordToken: z.string().optional(),
  invitationToken: z.string().nullable().optional(),
  invitedById: z.string().uuid().nullable().optional(),
  roleId: z.string().uuid().nullable().optional(),
  role: RoleSchema.nullable().optional(),
  invitedBy: InvitedBySchema.nullable().optional(),
  joined: z.date().nullable().optional(),
  lastActive: z.date().nullable().optional(),
  status: z.string().max(50).nullable().optional(),
});

const UserResponseSchema = UserSchema.omit({
  password: true,
  verificationToken: true,
  resetPasswordToken: true,
  invitationToken: true,
});

const ChangeRoleSchema = z.object({
  roleId: z.string().uuid(),
});

const UserStatusSchema = z.object({
  status: z.enum(["active", "inactive", "pending", "cancelled"]),
});

const UpdateUserSchema = z.object({
  status: z.enum(["active", "inactive", "pending", "cancelled"]).optional(),
  email: z.string().email().optional(),
  roleId: z.string().optional(),
  invitationToken: z.string().optional(),
  password: z.string().optional(),
  fullname: z.string().optional(),
  country: z.string().optional(),
  phone: z.string().optional(),
  typeIdentification: z.string().optional(),
  identification: z.string().optional(),
});

const UserIdSchema = z.object({
  userId: z.string().uuid(),
});

const InviteUserSchema = z.object({
  emails: z.array(z.string().email()),
  roleId: z.string().max(100),
});

const VerifyInvitationToken = z.object({
  token: z.string(),
});

const RegisterInvitedUserSchema = z.object({
  token: z.string(),
  userId: z.string().uuid(),
  fullname: z.string().max(100),
  password: z.string().min(8),
});

export {
  UserIdSchema,
  UserSchema,
  UserResponseSchema,
  InviteUserSchema,
  VerifyInvitationToken,
  RegisterInvitedUserSchema,
  ChangeRoleSchema,
  UserStatusSchema,
  UpdateUserSchema,
};
