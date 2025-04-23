import transporter from "../config/nodemailer";
import renderTemplate from "../utils/templateRenderer";
import { EmailOptions } from "../types/emailTypes";
import renderPDF from "../../PDF/renderPDF";
import { InvoiceINotification } from "../../../app/interfaces/notification.interface";
class CollectionService {
  //
  static async sendAanmaning(
    to: string,
    data: InvoiceINotification
  ): Promise<void> {
    //
    // const templatePath = "user/invitation-debtor";
    const templatePath = "collection/Aanmaning";

    const html = renderTemplate(templatePath, {
      ...data,
      companyName: "Dazzsoft",
    });
    //
    const filename = "Aanmaning.pdf";
    const PDF = await renderPDF("collection/Aanmaning", filename, data);
    //
    const mailOptions: EmailOptions = {
      from: process.env.SMTP_USER as string,
      to,
      subject: "Aanmaning",
      html,
      attachments: [
        {
          filename: filename, // Nombre del archivo adjunto
          path: PDF, // Ruta al archivo PDF
        },
      ],
    };
    await transporter.sendMail(mailOptions);
  }

  // You can add more email services here for each module
}

export default CollectionService;
