import { CollectionService } from "../../common/Mail";
import { accountsReceivableService } from "../services/accountsReceivable.service";
import { InvoiceINotification } from "../interfaces/notification.interface";
import { tenantService } from "./tenant.service";
import { IInvoiceResponse } from "../interfaces/accountsReceivable.interface";
import { COLLECTION_STATUS } from "../../common/lib/constant";
import { userService } from "./user.service";
import renderPDF from "../../common/PDF/renderPDF";

class NotificationService {
  //
  async sendNotification(tenantId: string, invoiceId: string) {
    if (!invoiceId) {
      throw new Error("Invoice not found");
    }
    // Check if the tenant exists
    const tenant = await tenantService.validateTenantById(tenantId);
    // Check if the invoice exists
    const invoice: IInvoiceResponse =
      await accountsReceivableService.getReceivableById(invoiceId);

    console.log("Invoice", invoice);
    if (!invoice) {
      throw new Error("Invoice not found");
    }

    // Send Notification By Collection Status
    if (invoice.collectionStatus === COLLECTION_STATUS.AANMANING) {
      return await this.sendAanmaning(tenant.subdomain, invoice);
    }

    // Send Notification By Collection Status
    if (invoice.collectionStatus === COLLECTION_STATUS.SOMMATIE) {
      return await this.sendSommatie(tenant.subdomain, invoice);
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
      const days = 5; // This should be calculated based on the invoice and the days overdue
      const validDays = 5;
      const fine = 93; // This should be calculated based on the invoice and the days overdue
      // Create a temporary access code

      // Check if the user exists
      if (!User?.id) {
        throw new Error("User ID not found");
      }
      // Set Temporary Password
      const invitationToken = await userService.saveInvitationToken(User?.id);

      // Generate the registration link
      const urlRegister = await userService.generateRegistrationLink(
        slug,
        "register-debtor",
        User?.id,
        User?.email,
        invitationToken
      );

      // Create the notification object
      const notification: InvoiceINotification = {
        sendDate: new Date().toISOString(),
        invoiceNumber: invoice.invoiceNumber,
        invoiceAmount: invoice.invoiceAmount,
        days: days,
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
        const fileName = `Aanmaning_${invoice.invoiceNumber}.pdf`;
        // Render the PDF
        const pdfPath = await renderPDF(
          templatePath,
          fileName,
          notification
        )

        await CollectionService.sendEmail(debtorEmail, templatePath, subject, notification, {
          filename: fileName,
          pdfTemplatePath: pdfPath,
        });
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
      const notification = {
        sendDate: new Date().toISOString(),
        destinatario: invoice.debtor?.fullname,
        previousDate: "xxxxx",
        days: 5,
        totalAmount: invoice.invoiceAmount,
        accountNumber: "123456789",
        extraCosts: 0,        
      };
      
      const debtorEmail = invoice.debtor?.email;
      const templatePath = "collection/Sommatie";
      const subject = `Sommatie - ${invoice.invoiceNumber}`;

      if (debtorEmail) {
        const fileName = `Sommatie_${invoice.invoiceNumber}.pdf`;
        // Render the PDF
        const pdfPath = await renderPDF(
          templatePath,
          fileName,
          notification
        )

        await CollectionService.sendEmail(debtorEmail, templatePath, subject, notification, {
          filename: fileName,
          pdfTemplatePath: pdfPath,
        });
      }


      return "Aanmaning sent successfully";
    } catch (error) {
      console.error("Error sending Aanmaning:", error);
      throw new Error("Failed to send Aanmaning");
    }
  }
}

export const notificationService = new NotificationService();
