import  {createTransporter} from "../config/nodemailer";
import renderTemplate from "../utils/templateRenderer";
import { EmailOptions } from "../types/emailTypes";

class UserMailService {
  static async sendInvitation(
    to: string,
    companyName: string,
    link: string
  ): Promise<void> {
    const templateParam = { companyName, link };

    const html = renderTemplate("user/invitation", templateParam);
    const mailOptions: EmailOptions = {
      from: process.env.SMTP_USER as string,
      to,
      subject: `Invitation to join ${companyName} on ${process.env.APP_DOMAIN}`,
      html,
    };
    await createTransporter().sendMail(mailOptions);
  }
}

export default UserMailService;
