import nodemailer from 'nodemailer';

export function createTransporter() {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_SECURE, SMTP_PASS } = process.env;
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
        throw new Error("Missing SMTP configuration");
    }

    return nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
        },
    });
}