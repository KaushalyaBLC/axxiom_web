import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
  buildAdminEmailTemplate,
  buildConfirmationEmailTemplate
} from '@/lib/emailTemplates';
import { EMAIL_LOGO_URL } from '@/lib/emailBranding';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const formattedTimestamp = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
    const logoSrc =
      process.env.EMAIL_LOGO_URL || process.env.EMAIL_LOGO_DATA_URL || EMAIL_LOGO_URL;

    const adminEmailHTML = buildAdminEmailTemplate({
      name,
      email,
      subject,
      message,
      submittedAt: formattedTimestamp,
      logoSrc
    });

    // Email content
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME || 'Axxiom Technologies'}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Contact: ${subject}`,
      html: adminEmailHTML,
      text: `
New Contact Form Submission

From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent at: ${formattedTimestamp}
      `.trim(),
    };

    // Email to admin (notification)
    await transporter.sendMail(mailOptions);

    // Confirmation email to user
    const confirmationEmailHTML = buildConfirmationEmailTemplate({
      name,
      subject,
      logoSrc
    });

    const confirmationEmail = {
      from: `"${process.env.EMAIL_FROM_NAME || 'Axxiom Technologies'}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'We received your message - Axxiom Technologies',
      html: confirmationEmailHTML,
      text: `
Hi ${name},

Thank you for contacting Axxiom Technologies. We've successfully received your message and our team will review it shortly.

Your Message Summary:
Subject: ${subject}

One of our team members will get back to you as soon as possible, typically within 24-48 hours during business days.

If you have any urgent questions, feel free to call us at +94 71 301 7267 or email us directly at hello@axxiom.tech.

Best regards,
The Axxiom Technologies Team

---
Axxiom Technologies
Digital Transformation & AI Solutions
axxiom.tech | hello@axxiom.tech | +94 71 301 7267
      `.trim(),
    };

    await transporter.sendMail(confirmationEmail);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
