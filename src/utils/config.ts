export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTA1OSwicm9sZV9pZHMiOlsxMDBdLCJ0eXBlIjoiYWdlbnQiLCJleHAiOjE4MTUwMjcxMTN9.2IGDKYQUUNiNsobTcxoimWSr4644VR5QPi_S2k5qrwI";

// SMTP Configuration
export const SMTP_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp-mail.outlook.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  user: process.env.SMTP_USER || '',
  password: process.env.SMTP_PASSWORD || '',
  authType: process.env.SMTP_AUTH_TYPE || 'login',
  clientId: process.env.SMTP_CLIENT_ID,
  clientSecret: process.env.SMTP_CLIENT_SECRET,
  refreshToken: process.env.SMTP_REFRESH_TOKEN,
  accessToken: process.env.SMTP_ACCESS_TOKEN,
};
