import { z } from "zod";

export const PaymentApplicationSchema = z.object({
  paymentDetailId: z.string(),
  accountsReceivableId: z.string(),
  amountApplied: z.number(),
  appliedTo: z.enum([
    "CAPITAL",
    "INTEREST",
    "TAX",
    "CLIENT_COLLECTION_FEE",
    "CLIENT_ABB_FEE",
    "ADMIN_COLLECTION_FEE",
    "ADMIN_ABB_FEE"
  ]),
});

export const RegisterPaymentAgreementSchema = z.object({
  invoiceId: z.string(),
  initialPayment: z.number().min(0),
  numberOfInstallments: z.number().int().min(1),
  validityPeriodInDays: z.number().int().min(1),
});

export const RegisterPaymentSchema = z.object({
  invoiceId: z.string(),
  amount: z.number().min(0),
  paymentMethod: z.string(),
  referenceNumber: z.string(),
  notes: z.string().optional(),
});
