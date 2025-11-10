/**
 * Test script to send email via API route
 * Make sure Next.js dev server is running (npm run dev)
 * Run: node test-email-api.js
 */

async function testEmailViaAPI() {
  try {
    console.log('📧 Sending test email to rahulsarswat57@gmail.com via API...');
    
    const response = await fetch('http://localhost:3000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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
              Sent from: Modac@2025<br>
              Server: smtp-mail.outlook.com<br>
              Port: 587
            </p>
          </div>
        `,
      }),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Test email sent successfully!');
      console.log('📬 Check rahulsarswat57@gmail.com inbox');
      console.log('Response:', result);
    } else {
      console.error('❌ Error sending test email:', result);
      if (result.message && result.message.includes('credentials')) {
        console.log('\n💡 Tip: Make sure you have SMTP_PASSWORD or OAuth2 credentials in .env file');
      }
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\nNote: Make sure the Next.js dev server is running (npm run dev)');
  }
}

testEmailViaAPI();

