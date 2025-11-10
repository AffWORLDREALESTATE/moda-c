/**
 * Simple test script to send email
 * Make sure to set SMTP_PASSWORD in .env file
 * Run: node test-email-simple.js
 */

require('dotenv').config();
const { sendEmail } = require('./src/utils/smtp');

async function testEmail() {
  try {
    console.log('📧 Sending test email to rahulsarswat57@gmail.com...');
    console.log('SMTP Config:', {
      host: process.env.SMTP_HOST || 'smtp-mail.outlook.com',
      port: process.env.SMTP_PORT || '587',
      user: process.env.SMTP_USER || 'Modac@2025',
      authType: process.env.SMTP_AUTH_TYPE || 'login',
    });
    
    if (!process.env.SMTP_PASSWORD && !process.env.SMTP_CLIENT_SECRET) {
      console.error('❌ Error: SMTP_PASSWORD or SMTP_CLIENT_SECRET is required in .env file');
      console.log('\nFor OAuth2, you need:');
      console.log('  SMTP_CLIENT_ID=your_azure_client_id');
      console.log('  SMTP_CLIENT_SECRET=your_azure_client_secret');
      console.log('  SMTP_REFRESH_TOKEN=your_refresh_token');
      console.log('\nFor basic auth, you need:');
      console.log('  SMTP_PASSWORD=your_app_password');
      process.exit(1);
    }
    
    await sendEmail({
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
            Port: ${process.env.SMTP_PORT || '587'}
          </p>
        </div>
      `,
    });
    
    console.log('✅ Test email sent successfully!');
    console.log('📬 Check rahulsarswat57@gmail.com inbox');
  } catch (error) {
    console.error('❌ Error sending test email:', error.message);
    if (error.code === 'EAUTH') {
      console.log('\n💡 Tip: Make sure you have:');
      console.log('  1. Correct SMTP_PASSWORD (app password for Outlook)');
      console.log('  2. Or OAuth2 credentials set up in .env');
    }
    process.exit(1);
  }
}

testEmail();

