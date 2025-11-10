import { sendEmail } from './src/utils/smtp';

async function testEmail() {
  try {
    console.log('Sending test email...');
    
    await sendEmail({
      to: 'rahulsarswat57@gmail.com',
      subject: 'Test Email from Modac Properties',
      text: 'This is a test email from the Modac Properties SMTP configuration.',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">Test Email</h2>
          <p>This is a test email from the Modac Properties SMTP configuration.</p>
          <p>If you receive this email, the SMTP setup is working correctly!</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">
            Sent from: ${process.env.SMTP_USER || 'Modac@2025'}
          </p>
        </div>
      `,
    });
    
    console.log('✅ Test email sent successfully!');
  } catch (error: any) {
    console.error('❌ Error sending test email:', error.message);
    process.exit(1);
  }
}

testEmail();

