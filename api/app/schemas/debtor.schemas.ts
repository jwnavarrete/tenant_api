import { z } from "zod";

// Schema for User (relation)
export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email("Invalid email format"),
  fullname: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  status: z.enum(["active", "inactive", "pending"]),
});

// Schema for Debtor
export const DebtorSchema = z.object({
  id: z.string().uuid(),
  tenantId: z.string().uuid(),
  userId: z.string().uuid().nullable(),
  user: UserSchema.optional(),
  fullname: z.string().min(1, "Fullname is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().optional(),
  address: z.string().optional(),
  identification: z.string(),
  employeeId: z.string().uuid().nullable(),
  identificationType: z.string().optional(),
  personType: z.string().optional(),
  updatedAt: z.date(),
});

// Schema for registering a Debtor
export const RegisterDebtorSchema = z.object({
  identification: z.string(),
  fullname: z.string().min(1, "Fullname is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().optional(),
  address: z.string().optional(),
  employeeId: z.string().uuid().nullable().optional(),
  identificationType: z.enum([
    "sedula",
    "passport",
    "residence_permit",
    "foreign_id",
    "kvk_number",
    "tax_id",
    "business_registry",
  ]),
  personType: z.enum(["individual", "company"]),
});
