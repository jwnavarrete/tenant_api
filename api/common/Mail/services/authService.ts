import transporter from "@/common/Mail/config/nodemailer";
import renderTemplate from "@/common/Mail/utils/templateRenderer";
import { EmailOptions } from "@/common/Mail/types/emailTypes";

class AuthMailService {
  static async sendWelcomeEmail(to: string, name: string): Promise<void> {
    const html = renderTemplate("auth/welcome", { name });
    const mailOptions: EmailOptions = {
      from: process.env.SMTP_USER as string,
      to,
      subject: `Welcome to ${process.env.APP_DOMAIN} 🎉`,
      html,
    };
    await transporter.sendMail(mailOptions);
  }

  static async sendVerificationEmail(to: string, link: string): Promise<void> {
    const html = renderTemplate("auth/verify-email", { link });
    const mailOptions: EmailOptions = {
      from: process.env.SMTP_USER as string,
      to,
      subject: "[Confirm your email]",
      html,
    };
    await transporter.sendMail(mailOptions);
  }

  static async sendResetPasswordEmail(to: string, link: string): Promise<void> {
    const html = renderTemplate("reset-password", { link });
    const mailOptions: EmailOptions = {
      from: process.env.SMTP_USER as string,
      to,
      subject: "Restablecer contraseña",
      html,
    };
    await transporter.sendMail(mailOptions);
  }

  // You can add more email services here for each module
}

export default AuthMailService;
