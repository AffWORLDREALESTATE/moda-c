/**
 * Script to send test email via SMTP
 * Run: node send-test-email.js
 */

require('dotenv').config();
const nodemailer = require('nodemailer');

async function sendTestEmail() {
  try {
    console.log('📧 Preparing to send test email...');
    console.log('SMTP Configuration:');
    console.log('  Host:', process.env.SMTP_HOST || 'smtp-mail.outlook.com');
    console.log('  Port:', process.env.SMTP_PORT || '587');
    console.log('  User:', process.env.SMTP_USER || 'Modac@2025');
    console.log('  Auth Type:', process.env.SMTP_AUTH_TYPE || 'login');
    
    if (!process.env.SMTP_PASSWORD && !process.env.SMTP_CLIENT_SECRET) {
      console.error('\n❌ Error: SMTP_PASSWORD or OAuth2 credentials are required in .env file');
      console.log('\nPlease add to .env file:');
      console.log('  SMTP_PASSWORD=your_app_password');
      console.log('\nOr for OAuth2:');
      console.log('  SMTP_AUTH_TYPE=OAuth2');
      console.log('  SMTP_CLIENT_ID=your_client_id');
      console.log('  SMTP_CLIENT_SECRET=your_client_secret');
      console.log('  SMTP_REFRESH_TOKEN=your_refresh_token');
      process.exit(1);
    }

    const config = {
      host: process.env.SMTP_HOST || 'smtp-mail.outlook.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // STARTTLS
      auth: {
        user: process.env.SMTP_USER || 'Modac@2025',
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
      },
    };

    // OAuth2 configuration if provided
    if (process.env.SMTP_AUTH_TYPE === 'OAuth2' && process.env.SMTP_CLIENT_ID) {
      config.auth = {
        type: 'OAuth2',
        user: process.env.SMTP_USER || 'Modac@2025',
        clientId: process.env.SMTP_CLIENT_ID,
        clientSecret: process.env.SMTP_CLIENT_SECRET,
        refreshToken: process.env.SMTP_REFRESH_TOKEN,
        accessToken: process.env.SMTP_ACCESS_TOKEN,
      };
    }

    const transporter = nodemailer.createTransport(config);

    // Verify connection
    console.log('\n🔍 Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified!');

    // Send email
    console.log('\n📤 Sending email to rahulsarswat57@gmail.com...');
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER || 'Modac@2025',
      to: 'rahulsarswat57@gmail.com',
      subject: 'Test Email from Modac Properties',
      text: 'This is a test email from the Modac Properties SMTP configuration.',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e40af;">✅ Test Email - SMTP Configuration Working!</h2>
          <p>This is a test email from the Modac Properties SMTP configuration.</p>
          <p>If you receive this email, the SMTP setup is working correctly!</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">
            Sent from: ${process.env.SMTP_USER || 'Modac@2025'}<br>
            Server: ${process.env.SMTP_HOST || 'smtp-mail.outlook.com'}<br>
            Port: ${process.env.SMTP_PORT || '587'}<br>
            Encryption: STARTTLS
          </p>
        </div>
      `,
    });

    console.log('\n✅ Email sent successfully!');
    console.log('📬 Message ID:', info.messageId);
    console.log('📧 Check rahulsarswat57@gmail.com inbox');
    
  } catch (error) {
    console.error('\n❌ Error sending email:', error.message);
    if (error.code === 'EAUTH') {
      console.log('\n💡 Authentication failed. Please check:');
      console.log('  1. Your SMTP_PASSWORD is correct (use App Password for Outlook)');
      console.log('  2. Your email address is correct');
      console.log('  3. Two-factor authentication is enabled and you\'re using an App Password');
    } else if (error.code === 'ECONNECTION') {
      console.log('\n💡 Connection failed. Please check:');
      console.log('  1. Your internet connection');
      console.log('  2. SMTP server address is correct');
      console.log('  3. Port number is correct');
    }
    process.exit(1);
  }
}

sendTestEmail();

