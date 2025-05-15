import transporter from "../config/nodemailer";
import renderTemplate from "../utils/templateRenderer";
import { EmailOptions } from "../types/emailTypes";
import renderPDF from "../../PDF/renderPDF";

class CollectionService {
  // This method is used to send an email with a PDF attachment
  static async sendEmail(
    to: string,
    templatePath: string,
    subject: string,
    data: any,
    attachmentConfig?: { filename: string; pdfTemplatePath: string }
  ): Promise<void> {
    const html = renderTemplate(templatePath, {
      ...data,
      companyName: "Dazzsoft",
    });

    const attachments = attachmentConfig
      ? [
        {
          filename: attachmentConfig.filename,
          path: await renderPDF(
            attachmentConfig.pdfTemplatePath,
            attachmentConfig.filename,
            data
          ),
        },
      ]
      : [];

    const mailOptions: EmailOptions = {
      from: process.env.SMTP_USER as string,
      to,
      subject,
      html,
      attachments,
    };

    await transporter.sendMail(mailOptions);
  }
}

export default CollectionService;
