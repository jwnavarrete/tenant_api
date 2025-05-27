import {createTransporter} from "../config/nodemailer";
import renderTemplate from "../utils/templateRenderer";
import { EmailOptions } from "../types/emailTypes";

class DebtorServiceMail {
  static async sendContribution(
    to: string,
    companyName: string,
    debtorName: string,
    link: string
  ): Promise<void> {
    const templateParam = { companyName, debtorName, link };

    const html = renderTemplate("debtor/contribution", templateParam);
    const mailOptions: EmailOptions = {
      from: process.env.SMTP_USER as string,
      to,
      subject: `Ayúdanos a obtener más información del deudor para la cobranza colectiva de ${companyName}`,
      html,
    };

    await createTransporter().sendMail(mailOptions);
  }
}

export default DebtorServiceMail;