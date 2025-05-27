import {createTransporter} from "../config/nodemailer";
import renderTemplate from "../utils/templateRenderer";
import { EmailOptions } from "../types/emailTypes";
import { iAccountUrls } from "../../../app/interfaces/auth.intercace";
class AuthMailService {
  static async sendWelcomeEmail(to: string, name: string): Promise<void> {
    const templateParam = {
      clientName: name,
      companyName: process.env.COMPANY_NAME || "",
      emailSuport: process.env.SUPPORT_EMAIL || "",
    };
    const html = renderTemplate("auth/welcome", templateParam);
    const mailOptions: EmailOptions = {
      from: process.env.SMTP_USER as string,
      to,
      subject: `Welcome to ${process.env.APP_DOMAIN} 🎉`,
      html,
    };
    await createTransporter().sendMail(mailOptions);
  }

  static async sendVerificationEmail(to: string, link: string): Promise<void> {
    const templateParam = {
      companyName: process.env.COMPANY_NAME || "",
      emailSuport: process.env.SUPPORT_EMAIL || "",
      link: link,
    };
    const html = renderTemplate("auth/verify-email", templateParam);
    const mailOptions: EmailOptions = {
      from: process.env.SMTP_USER as string,
      to,
      subject: "[Confirm your email]",
      html,
    };
    const transporter = createTransporter();
    await transporter.sendMail(mailOptions);
  }

  static async sendResetPasswordEmail(to: string, link: string): Promise<void> {
    const templateParam = {
      companyName: process.env.COMPANY_NAME || "",
      link: link,
    };
    const html = renderTemplate("auth/reset-password", templateParam);
    const mailOptions: EmailOptions = {
      from: process.env.SMTP_USER as string,
      to,
      subject: "[Reset password]",
      html,
    };
    await createTransporter().sendMail(mailOptions);
  }

  static async sendRecoveryUrl(
    to: string,
    accountUrls: iAccountUrls
  ): Promise<void> {
    const templateParam = {
      companyName: process.env.COMPANY_NAME || "",
      accountUrls: accountUrls,
    };
    const html = renderTemplate("auth/recovery-url", templateParam);
    const mailOptions: EmailOptions = {
      from: process.env.SMTP_USER as string,
      to,
      subject: "Forgot your account URL?",
      html,
    };
    await createTransporter().sendMail(mailOptions);
  }
}

export default AuthMailService;
