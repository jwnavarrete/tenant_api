import { z } from "zod";
import { DebtorSchema, RegisterDebtorSchema } from "../schemas/debtor.schemas";

export type IDebtor = z.infer<typeof DebtorSchema>;
export type IRegisterDebtor = z.infer<typeof RegisterDebtorSchema>;
