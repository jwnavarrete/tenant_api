import { z } from "zod";
import {
  InvoiceSchema,
  ExcelImportSchema,
  ExcelImportSchemaArray,
  InvoiceResponseSchema
} from "../schemas/accountsReceivable.schemas";

export type IInvoice = z.infer<typeof InvoiceSchema>;
export type IExcelImport = z.infer<typeof ExcelImportSchema>;
export type IExcelImportArray = z.infer<typeof ExcelImportSchemaArray>;
export type IInvoiceResponse = z.infer<typeof InvoiceResponseSchema>;