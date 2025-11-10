import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, EmailOptions } from '../../../utils/smtp';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to, subject, text, html, from, replyTo } = body;

    // Validate required fields
    if (!to || !subject || (!text && !html)) {
      return NextResponse.json(
        { error: 'Missing required fields: to, subject, and text/html are required' },
        { status: 400 }
      );
    }

    const emailOptions: EmailOptions = {
      to,
      subject,
      text,
      html,
      from,
      replyTo,
    };

    await sendEmail(emailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error in send-email API:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email', 
        message: error.message || 'Unknown error occurred' 
      },
      { status: 500 }
    );
  }
}

