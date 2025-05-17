import { prisma } from "../../index";
import { CollectionService } from "../../common/Mail";
import { accountsReceivableService } from "../services/accountsReceivable.service";
import { InvoiceINotification } from "../interfaces/notification.interface";
import { tenantService } from "./tenant.service";
import { IInvoiceResponse } from "../interfaces/accountsReceivable.interface";
import { userService } from "./user.service";
import renderPDF from "../../common/PDF/renderPDF";
import { parameterService } from "./parameter.service";
import { paymentsService } from "./Payments.service";

class NotificationService {
  //
  async sendNotification(tenantId: string, invoiceId: string, notificationType: string) {
    if (!invoiceId) {
      throw new Error("Invoice not found");
    }
    // Check if the tenant exists
    const tenant = await tenantService.validateTenantById(tenantId);
    // Check if the invoice exists
    const invoice: IInvoiceResponse =
      await accountsReceivableService.getReceivableById(invoiceId);

    // console.log("Invoice", invoice);
    if (!invoice) {
      throw new Error("Invoice not found");
    }

    // Send Notification By Collection Status
    console.log("invoice.collectionStatus", invoice.collectionStatus);

    if (notificationType === "AANMANING") {
      return await this.sendAanmaning(tenant.subdomain, invoice);
    }

    // Send Notification By Collection Status
    if (notificationType === "SOMMATIE") {
      return await this.sendSommatie(tenant.subdomain, invoice);
    }

    if (notificationType === "INGEBREKESTELLING") {
      return await this.sendIngebrekestelling(tenant.subdomain, invoice);
    }

    if (notificationType === "BLOKKADE") {
      return await this.sendBlokkade(tenant.subdomain, invoice);
    }

  }

  async sendAanmaning(
    slug: string,
    invoice: IInvoiceResponse
  ): Promise<string> {
    try {
      const User = invoice.debtor?.user;

      const calculatedCollection = parseFloat(invoice.clientCollectionAmount.toFixed(2));
      const calculatedABB = parseFloat(invoice.clientAbbAmount.toFixed(2));

      const totalAmount = parseFloat(
        (invoice.invoiceAmount + calculatedCollection + calculatedABB).toFixed(
          2
        )
      );
      //
      const fine = 0; // This should be calculated based on the invoice and the days overdue
      let urlRegister = "";
      let invitationToken = "";
      // Create a temporary access code

      // Check if the user exists
      if (!User?.id) {
        throw new Error("User ID not found");
      }

      // 
      if (User.status !== "active") {
        // Set Temporary Password
        invitationToken = await userService.saveInvitationToken(User?.id);

        // Generate the registration link
        urlRegister = await userService.generateRegistrationLink(
          slug,
          "register-debtor",
          User?.id,
          User?.email,
          invitationToken
        );
      } else {
        urlRegister = `https://${slug}.${process.env.APP_DOMAIN}/pending-invoices`;
        invitationToken = "";
      }

      const dueDays = Math.ceil(
        (new Date().getTime() - new Date(invoice.dueDate).getTime()) / (1000 * 60 * 60 * 24)
      );
      const validDays = await this.getNotificationDays(invoice);

      // Create the notification object
      const notification: InvoiceINotification = {
        sendDate: new Date().toISOString(),
        invoiceNumber: invoice.invoiceNumber,
        invoiceAmount: invoice.invoiceAmount,
        days: dueDays,
        accountNumber: "123456789",
        urlRegister: urlRegister,
        collectionPercentage: invoice.clientCollectionPercentage,
        calculatedCollection: calculatedCollection,
        abbPercentage: invoice.clientAbbPercentage,
        calculatedABB: calculatedABB,
        totalAmount: totalAmount,
        fine: fine,
        validDays: validDays,
        temporaryAccessCode: invitationToken,
      };

      const debtorEmail = invoice.debtor?.email;
      const templatePath = "collection/Aanmaning";
      const subject = `Aanmaning - ${invoice.invoiceNumber}`;

      if (debtorEmail) {
        // const fileName = `Aanmaning_${invoice.invoiceNumber}`;
        // Render the PDF
        // const pdfPath = await renderPDF(
        //   templatePath,
        //   fileName,
        //   notification
        // )

        // attachments = {
        //   filename: fileName,
        //   pdfTemplatePath: pdfPath,
        // }

        await CollectionService.sendEmail(debtorEmail, templatePath, subject, notification);
      }

      return "Aanmaning sent successfully";
    } catch (error) {
      console.error("Error sending Aanmaning:", error);
      throw new Error("Failed to send Aanmaning");
    }
  }

  async sendSommatie(
    slug: string,
    invoice: IInvoiceResponse
  ): Promise<string> {
    try {
      // Create the notification object
      const _dias = await this.getNotificationDays(invoice);
      const lastNotificationDate = await this.getLastNotificationDate(invoice, 'AANMANING');

      const notification = {
        sendDate: new Date().toISOString(),
        destinatario: invoice.debtor?.fullname,
        previousDate: lastNotificationDate,
        days: _dias,
        totalAmount: invoice.invoiceAmount,
        accountNumber: "123456789",
        extraCosts: 0,
      };

      const debtorEmail = invoice.debtor?.email;
      const templatePath = "collection/Sommatie";
      const subject = `Sommatie - ${invoice.invoiceNumber}`;

      if (debtorEmail) {
        await CollectionService.sendEmail(debtorEmail, templatePath, subject, notification);
      }


      return "Sommatie sent successfully";
    } catch (error) {
      console.error("Error sending Aanmaning:", error);
      throw new Error("Failed to send Aanmaning");
    }
  }

  // INGEBREKESTELLING
  async sendIngebrekestelling(
    slug: string,
    invoice: IInvoiceResponse
  ): Promise<string> {
    try {
      const firstReminderDate = await this.getLastNotificationDate(invoice, 'AANMANING');
      const secondReminderDate = await this.getLastNotificationDate(invoice, 'SOMMATIE');
      // Create the notification object
      const notification = {
        sendDate: new Date().toISOString(),
        recipient: invoice.debtor?.fullname,
        firstReminderDate,
        secondReminderDate
      };

      const debtorEmail = invoice.debtor?.email;
      const templatePath = "collection/Ingebrekestelling";
      const subject = `Ingebrekestelling - ${invoice.invoiceNumber}`;

      if (debtorEmail) {
        await CollectionService.sendEmail(debtorEmail, templatePath, subject, notification);
      }

      return "Ingebrekestelling sent successfully";
    } catch (error) {
      console.error("Error sending Aanmaning:", error);
      throw new Error("Failed to send Aanmaning");
    }
  }

  async sendBlokkade(
    slug: string,
    invoice: IInvoiceResponse
  ): Promise<string> {
    try {
      // Create the notification object
      const notification = {
        sendDate: new Date().toISOString(),
        recipient: invoice.debtor?.fullname,
        // destinatario: invoice.debtor?.fullname,
        serviceCost: 0,
        registerCost: 0,
        totalAmount: invoice.invoiceAmount,
        totalPayment: invoice.totalDueToday,
        accountNumber: "123456789",
      };

      const debtorEmail = invoice.debtor?.email;
      const templatePath = "collection/FinancieleBlokkade";
      const subject = `FinancieleBlokkade - ${invoice.invoiceNumber}`;

      if (debtorEmail) {
        await CollectionService.sendEmail(debtorEmail, templatePath, subject, notification);
      }

      return "Blokkade sent successfully";
    } catch (error) {
      console.error("Error sending Aanmaning:", error);
      throw new Error("Failed to send Aanmaning");
    }
  }

  // BETALINGSBEWIJS
  async sendBetalingsbewijs(
    debtorName: string,
    paymentMethod: string,
    paymentAmount: number,
    referenceNumber: string,
    email: string,
    invoiceNumber: string,
  ): Promise<string> {
    try {

      // Create the notification object
      const notification = {
        paymentDate: new Date().toISOString(),
        debtorName,
        paymentMethod,
        paymentAmount,
        referenceNumber,
      };
      console.log("notification", notification);

      const debtorEmail = email;
      const templatePath = "collection/Betalingsbewijs";
      const subject = `Betalingsbewijs - ${invoiceNumber}`;

      if (debtorEmail) {
        console.log("debtorEmail", debtorEmail);
        await CollectionService.sendEmail(debtorEmail, templatePath, subject, notification);
      }

      return "Betalingsbewijs sent successfully";
    } catch (error) {
      console.error("Error sending Betalingsbewijs:", error);
      throw new Error("Failed to send Betalingsbewijs");
    }
  }

  private async getNotificationDays(invoice: IInvoiceResponse): Promise<number> {
    const PARAMETER_ID = process.env.PARAMETER_ID || "";
    const _parameter = await parameterService.getParameterById(PARAMETER_ID);

    if (!_parameter) {
      throw new Error("Parameter not found");
    }

    if (invoice.collectionStatus === "aanmaning") {
      return invoice.debtor?.personType === "individual"
        ? _parameter.diasPlazoConsumidorSommatie
        : _parameter.diasPlazoEmpresaSommatie;
    }

    if (invoice.collectionStatus === "sommatie") {
      return invoice.debtor?.personType === "individual"
        ? _parameter.diasPlazoConsumidorSommatie
        : _parameter.diasPlazoEmpresaSommatie;
    }

    return 0;
  }

  private async getLastNotificationDate(
    invoice: IInvoiceResponse,
    type: 'AANMANING' | 'SOMMATIE' | 'INGEBREKESTELLING'
  ): Promise<Date> {
    // Fetch the notification collection record based on invoice and type
    const notificationRecord = await prisma.notificationCollection.findFirst({
      where: {
        accountsReceivableId: invoice.id,
        type: type, // Replace with the appropriate type if needed
        status: "SENT", // Ensure the status is SENT
      },
      orderBy: {
        sentAt: "desc", // Get the most recent notification
      },
    });

    if (!notificationRecord) {
      throw new Error(`Notification of type ${type} not found`);
    }

    return notificationRecord.sentAt;
  }
}

export const notificationService = new NotificationService();
