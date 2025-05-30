import { z } from "zod";

// Schema for CompanyInvitation
export const CompanySchema = z.object({
  id: z.string().uuid(),
  invitedEmail: z.string().email("Invalid email format"),
  invitedCompany: z.string().min(1, "Company name is required"),
  country: z.string().min(1, "Country is required"),
  invitingCompanyId: z.string().uuid(),
  invitationToken: z.string(),
  status: z.enum(["PENDING", "ACCEPTED", "EXPIRED", "CANCELLED"]),
  sentAt: z.date(),
  acceptedAt: z.date().nullable().optional(),
  expiresAt: z.date().nullable().optional(),
});

export const InvitationCampanySchema = z.object({
  invitedEmail: z.string().email("Invalid email format"),
  invitedCompany: z.string(),
  country: z.string(),
});


