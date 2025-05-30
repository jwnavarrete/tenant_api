import { z } from "zod";
import { InvitationCampanySchema, CompanySchema } from "../schemas/company.schemas";

export type ICompanyResponse = z.infer<typeof CompanySchema>;
export type InvitationCompany = z.infer<typeof InvitationCampanySchema>;
