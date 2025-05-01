import { z } from "zod";
import {
  PaymentApplicationSchema,
  RegisterPaymentAgreementSchema,
  RegisterPaymentSchema,
} from "../schemas/Payments.schemas";

export type IPaymentApplication = z.infer<typeof PaymentApplicationSchema>;
export type IRegisterPaymentAgreement = z.infer<
  typeof RegisterPaymentAgreementSchema
>;
export type IRegisterPayment = z.infer<typeof RegisterPaymentSchema>;
