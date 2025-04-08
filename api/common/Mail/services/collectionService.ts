import transporter from "../config/nodemailer";
import renderTemplate from "../utils/templateRenderer";
import { EmailOptions } from "../types/emailTypes";
import path from "path";
import { INotification } from "../../../app/interfaces/accountsReceivable.interface";

class CollectionService {
  static async sendAanmaning(to: string, data: INotification): Promise<void> {
    // 
    const html = renderTemplate("collection/Aanmaning", data);
    const mailOptions: EmailOptions = {
      from: process.env.SMTP_USER as string,
      to,
      subject: "Aanmaning",
      html,
      attachments: [
        {
          filename: "document.pdf", // Nombre del archivo adjunto
          path: path.resolve(__dirname, "../files/prueba.pdf"), // Ruta al archivo PDF
        },
      ],
    };
    await transporter.sendMail(mailOptions);
  }

  // You can add more email services here for each module
}

export default CollectionService;
