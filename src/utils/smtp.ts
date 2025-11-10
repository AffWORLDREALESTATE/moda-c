import nodemailer from 'nodemailer';

export interface SMTPConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass?: string;
    type?: 'OAuth2' | 'login';
    clientId?: string;
    clientSecret?: string;
    refreshToken?: string;
    accessToken?: string;
  };
}

export function getSMTPConfig(): SMTPConfig {
  return {
    host: process.env.SMTP_HOST || 'smtp-mail.outlook.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports (STARTTLS)
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASSWORD || '',
      type: (process.env.SMTP_AUTH_TYPE as 'OAuth2' | 'login') || 'login',
      clientId: process.env.SMTP_CLIENT_ID,
      clientSecret: process.env.SMTP_CLIENT_SECRET,
      refreshToken: process.env.SMTP_REFRESH_TOKEN,
      accessToken: process.env.SMTP_ACCESS_TOKEN,
    },
  };
}

export async function createTransporter() {
  const config = getSMTPConfig();

  // For OAuth2, we need to use a different approach
  if (config.auth.type === 'OAuth2' && config.auth.clientId && config.auth.clientSecret) {
    // OAuth2 configuration for Outlook
    return nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        type: 'OAuth2',
        user: config.auth.user,
        clientId: config.auth.clientId,
        clientSecret: config.auth.clientSecret,
        refreshToken: config.auth.refreshToken,
        accessToken: config.auth.accessToken,
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
      },
    });
  }

  // Standard authentication (username/password)
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.auth.user,
      pass: config.auth.pass,
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false,
    },
  });
}

export interface EmailOptions {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  from?: string;
  replyTo?: string;
}

export async function sendEmail(options: EmailOptions): Promise<void> {
  const transporter = await createTransporter();
  const config = getSMTPConfig();

  const fromEmail = options.from || process.env.SMTP_FROM_EMAIL || config.auth.user;
  
  const mailOptions = {
    from: fromEmail,
    to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
    replyTo: options.replyTo || fromEmail,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

