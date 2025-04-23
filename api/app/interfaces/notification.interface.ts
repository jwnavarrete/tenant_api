import { z } from "zod";
import { InvoiceNotificationSchema } from "../schemas/notification.schemas";

export type InvoiceINotification = z.infer<typeof InvoiceNotificationSchema>;
