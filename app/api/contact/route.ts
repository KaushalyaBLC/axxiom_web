import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Email content
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME || 'Axxiom Contact Form'}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .header {
                background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
                color: #ffffff;
                padding: 30px;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
              }
              .content {
                padding: 30px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                color: #666;
                margin-bottom: 5px;
              }
              .field-value {
                font-size: 15px;
                color: #333;
                padding: 12px;
                background-color: #f8f8f8;
                border-left: 3px solid #0d0d0d;
                border-radius: 4px;
              }
              .message-field {
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                background-color: #f8f8f8;
                padding: 20px;
                text-align: center;
                font-size: 12px;
                color: #666;
                border-top: 1px solid #e0e0e0;
              }
              .divider {
                height: 1px;
                background-color: #e0e0e0;
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">From</div>
                  <div class="field-value">${name}</div>
                </div>

                <div class="field">
                  <div class="field-label">Email</div>
                  <div class="field-value">
                    <a href="mailto:${email}" style="color: #0d0d0d; text-decoration: none;">${email}</a>
                  </div>
                </div>

                <div class="field">
                  <div class="field-label">Subject</div>
                  <div class="field-value">${subject}</div>
                </div>

                <div class="divider"></div>

                <div class="field">
                  <div class="field-label">Message</div>
                  <div class="field-value message-field">${message}</div>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from the Axxiom Technologies contact form at ${new Date().toLocaleString('en-US', {
                  dateStyle: 'medium',
                  timeStyle: 'short'
                })}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent at: ${new Date().toLocaleString()}
      `.trim(),
    };

    // Email to admin (notification)
    await transporter.sendMail(mailOptions);

    // Confirmation email to user
    const confirmationEmail = {
      from: `"${process.env.EMAIL_FROM_NAME || 'Axxiom Technologies'}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting Axxiom Technologies',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .header {
                background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
                color: #ffffff;
                padding: 40px 30px;
                text-align: center;
              }
              .header h1 {
                margin: 0 0 10px 0;
                font-size: 28px;
                font-weight: 600;
              }
              .header p {
                margin: 0;
                font-size: 14px;
                opacity: 0.9;
              }
              .content {
                padding: 40px 30px;
              }
              .greeting {
                font-size: 18px;
                color: #333;
                margin-bottom: 20px;
              }
              .message-box {
                background-color: #f8f8f8;
                border-left: 4px solid #0d0d0d;
                padding: 20px;
                margin: 25px 0;
                border-radius: 4px;
              }
              .message-box h3 {
                margin: 0 0 10px 0;
                font-size: 14px;
                color: #666;
                text-transform: uppercase;
                letter-spacing: 0.05em;
              }
              .message-box p {
                margin: 0;
                color: #333;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .info-text {
                color: #666;
                font-size: 15px;
                line-height: 1.8;
                margin-bottom: 15px;
              }
              .footer {
                background-color: #f8f8f8;
                padding: 30px;
                text-align: center;
                border-top: 1px solid #e0e0e0;
              }
              .footer-text {
                font-size: 13px;
                color: #666;
                margin: 5px 0;
              }
              .footer-link {
                color: #0d0d0d;
                text-decoration: none;
              }
              .footer-link:hover {
                text-decoration: underline;
              }
              .highlight {
                color: #0d0d0d;
                font-weight: 600;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Reaching Out!</h1>
                <p>We've received your message</p>
              </div>
              <div class="content">
                <p class="greeting">Hi ${name},</p>

                <p class="info-text">
                  Thank you for contacting <span class="highlight">Axxiom Technologies</span>.
                  We've successfully received your message and our team will review it shortly.
                </p>

                <div class="message-box">
                  <h3>Your Message Summary</h3>
                  <p><strong>Subject:</strong> ${subject}</p>
                </div>

                <p class="info-text">
                  One of our team members will get back to you as soon as possible, typically within
                  <span class="highlight">24-48 hours</span> during business days.
                </p>

                <p class="info-text">
                  If you have any urgent questions, feel free to call us at
                  <span class="highlight">+94 71 301 7267</span> or email us directly at
                  <a href="mailto:hello@axxiom.tech" class="footer-link highlight">hello@axxiom.tech</a>.
                </p>

                <p class="info-text" style="margin-top: 30px;">
                  Best regards,<br>
                  <span class="highlight">The Axxiom Technologies Team</span>
                </p>
              </div>
              <div class="footer">
                <p class="footer-text">
                  <strong>Axxiom Technologies</strong><br>
                  Digital Transformation & AI Solutions
                </p>
                <p class="footer-text">
                  <a href="https://axxiom.tech" class="footer-link">axxiom.tech</a> |
                  <a href="mailto:hello@axxiom.tech" class="footer-link">hello@axxiom.tech</a> |
                  <a href="tel:+94713017267" class="footer-link">+94 71 301 7267</a>
                </p>
                <p class="footer-text" style="margin-top: 15px; font-size: 11px; color: #999;">
                  This is an automated confirmation email. Please do not reply to this message.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
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
