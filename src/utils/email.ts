/**
 * Helper functions for sending emails from contact forms
 */

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  subject?: string;
  language?: string;
}

/**
 * Send a contact form email
 * Sends TWO emails:
 * 1. Notification to info@modacrealestate.com
 * 2. Confirmation/reply to the form submitter
 */
export async function sendContactEmail(
  formData: ContactFormData,
  recipientEmail: string = 'info@modacrealestate.com'
): Promise<Response> {
  const subject = formData.subject || `New Contact Form Submission from ${formData.name}`;
  
  // Email to info@modacrealestate.com (notification)
  const notificationHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e40af;">New Contact Form Submission</h2>
      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
        ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
        ${formData.language ? `<p><strong>Preferred Language:</strong> ${formData.language}</p>` : ''}
      </div>
      ${formData.message ? `
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #1e40af; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>
      ` : ''}
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
      <p style="color: #6b7280; font-size: 12px;">
        This email was sent from the contact form on modacrealestate.com
      </p>
    </div>
  `;

  const notificationText = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ''}
${formData.language ? `Preferred Language: ${formData.language}` : ''}

${formData.message ? `Message:\n${formData.message}` : ''}
  `.trim();

  // Confirmation email to the form submitter
  const confirmationSubject = formData.subject?.includes('Newsletter') 
    ? 'Thank You for Subscribing to Modac Real Estate Newsletter'
    : 'Thank You for Contacting Modac Real Estate';
  
  const confirmationHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #0a4b6f; margin: 0;">Modac Real Estate</h1>
      </div>
      
      <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; border: 1px solid #e5e7eb;">
        <h2 style="color: #0a4b6f; margin-top: 0;">${formData.subject?.includes('Newsletter') ? 'Thank You for Subscribing!' : 'Thank You for Your Inquiry!'}</h2>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          Dear ${formData.name},
        </p>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          ${formData.subject?.includes('Newsletter') 
            ? 'Thank you for subscribing to our newsletter! You will now receive the latest property updates, market insights, and exclusive offers from Modac Real Estate.'
            : 'Thank you for contacting Modac Real Estate. We have received your inquiry and our team will get back to you within 24 hours.'}
        </p>
        
        ${formData.message ? `
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0a4b6f;">
            <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0;"><strong>Your Message:</strong></p>
            <p style="color: #374151; font-size: 14px; margin: 0; white-space: pre-wrap;">${formData.message}</p>
          </div>
        ` : ''}
        
        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="color: #0a4b6f; font-size: 14px; margin: 0 0 10px 0;"><strong>What's Next?</strong></p>
          <p style="color: #374151; font-size: 14px; margin: 0; line-height: 1.6;">
            Our team will review your inquiry and contact you shortly. In the meantime, feel free to explore our properties or contact us directly at <a href="mailto:info@modacrealestate.com" style="color: #0a4b6f;">info@modacrealestate.com</a> or call us at <a href="tel:+97145758035" style="color: #0a4b6f;">+971 4 575 8035</a>.
          </p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 12px; margin: 5px 0;">
          <strong>Modac Real Estate</strong><br/>
          Dubai, United Arab Emirates<br/>
          <a href="mailto:info@modacrealestate.com" style="color: #0a4b6f;">info@modacrealestate.com</a> | 
          <a href="tel:+97145758035" style="color: #0a4b6f;">+971 4 575 8035</a>
        </p>
        <p style="color: #9ca3af; font-size: 11px; margin: 10px 0 0 0;">
          This is an automated confirmation email. Please do not reply to this message.
        </p>
      </div>
    </div>
  `;

  const confirmationText = `
${formData.subject?.includes('Newsletter') ? 'Thank You for Subscribing!' : 'Thank You for Your Inquiry!'}

Dear ${formData.name},

${formData.subject?.includes('Newsletter') 
  ? 'Thank you for subscribing to our newsletter! You will now receive the latest property updates, market insights, and exclusive offers from Modac Real Estate.'
  : 'Thank you for contacting Modac Real Estate. We have received your inquiry and our team will get back to you within 24 hours.'}

${formData.message ? `Your Message:\n${formData.message}\n` : ''}

What's Next?
Our team will review your inquiry and contact you shortly. In the meantime, feel free to explore our properties or contact us directly.

Modac Real Estate
Dubai, United Arab Emirates
info@modacrealestate.com | +971 4 575 8035

This is an automated confirmation email. Please do not reply to this message.
  `.trim();

  try {
    // Send notification email to info@modacrealestate.com
    const notificationResponse = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: recipientEmail,
        subject,
        text: notificationText,
        html: notificationHtml,
        replyTo: formData.email,
      }),
    });

    if (!notificationResponse.ok) {
      const error = await notificationResponse.json();
      throw new Error(error.message || 'Failed to send notification email');
    }

    // Send confirmation email to the form submitter
    const confirmationResponse = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: formData.email,
        subject: confirmationSubject,
        text: confirmationText,
        html: confirmationHtml,
        replyTo: recipientEmail,
      }),
    });

    if (!confirmationResponse.ok) {
      const error = await confirmationResponse.json();
      console.warn('Failed to send confirmation email:', error);
      // Don't throw error for confirmation email failure, just log it
    }

    return notificationResponse;
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
}

