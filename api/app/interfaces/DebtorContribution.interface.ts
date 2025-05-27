import { z } from "zod";
import {
    DebtorContributionSchema,
    CreateDebtorContributionSchema,
    UpdateDebtorContributionStatusSchema,
    PartialCompanyContributionSchema,
    DebtorContributionStatusQuerySchema
} from "../schemas/debtorContribution.shemas";

export type IDebtorContribution = z.infer<typeof DebtorContributionSchema>;
export type ICreateDebtorContribution = z.infer<typeof CreateDebtorContributionSchema>;
export type IUpdateDebtorContributionStatus = z.infer<typeof UpdateDebtorContributionStatusSchema>;
export type IPartialCompanyContribution = z.infer<typeof PartialCompanyContributionSchema>;
export type IDebtorContributionStatusQuery = z.infer<typeof DebtorContributionStatusQuerySchema>;