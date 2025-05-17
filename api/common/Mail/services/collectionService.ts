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


    const mailOptions: EmailOptions = {
      from: process.env.SMTP_USER as string,
      to,
      subject,
      html,
    };

    if (attachmentConfig) {
      const attachments = attachmentConfig
        ? [
          {
            filename: attachmentConfig.filename,
            path: attachmentConfig.pdfTemplatePath,
          },
        ]
        : [];

      mailOptions.attachments = attachments;
    }
    
    console.log(`email: ${to}`);

    await transporter.sendMail(mailOptions);
  }
}

export default CollectionService;
