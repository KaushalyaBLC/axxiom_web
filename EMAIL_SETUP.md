# Email Setup Guide

This guide will help you configure the contact form email functionality for the Axxiom Technologies website.

## Prerequisites

- A working email account with SMTP access
- Access to your `.env.local` file

## Supported Email Providers

### Gmail
1. **Enable 2-Factor Authentication** on your Google account
2. **Create an App Password**:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

3. **Environment Variables**:
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
EMAIL_TO=hello@axxiom.tech
EMAIL_FROM_NAME=Axxiom Contact Form
```

### Outlook/Hotmail
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
EMAIL_TO=hello@axxiom.tech
EMAIL_FROM_NAME=Axxiom Contact Form
```

### SendGrid
1. Create a SendGrid account and get an API key
2. Use these settings:
```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=apikey
EMAIL_PASSWORD=your-sendgrid-api-key
EMAIL_TO=hello@axxiom.tech
EMAIL_FROM_NAME=Axxiom Contact Form
```

### Custom SMTP Server
```env
EMAIL_HOST=your-smtp-server.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-username
EMAIL_PASSWORD=your-password
EMAIL_TO=hello@axxiom.tech
EMAIL_FROM_NAME=Axxiom Contact Form
```

## Setup Instructions

1. **Copy the example environment file**:
   ```bash
   cp .env.example .env.local
   ```

2. **Edit `.env.local`** with your email provider settings (see examples above)

3. **Test the configuration**:
   - Start the development server: `npm run dev`
   - Navigate to the contact section
   - Submit a test message
   - Check your inbox (EMAIL_TO) for the email

## Environment Variables Explained

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_HOST` | SMTP server hostname | `smtp.gmail.com` |
| `EMAIL_PORT` | SMTP server port | `587` (TLS) or `465` (SSL) |
| `EMAIL_SECURE` | Use SSL? | `false` for port 587, `true` for port 465 |
| `EMAIL_USER` | SMTP authentication username | Your email address |
| `EMAIL_PASSWORD` | SMTP authentication password | Your password or app password |
| `EMAIL_TO` | Email address to receive contact form submissions | `hello@axxiom.tech` |
| `EMAIL_FROM_NAME` | Display name in the "From" field | `Axxiom Contact Form` |

## Security Notes

- **Never commit** your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- Use app-specific passwords when available (Gmail, Outlook)
- For production, use environment variables in your hosting platform (Vercel, Netlify, etc.)

## Troubleshooting

### "Failed to send email" error
- Check that all environment variables are set correctly
- Verify your SMTP credentials are correct
- Make sure your email provider allows SMTP access
- Check if you need to enable "Less secure app access" (not recommended) or use app passwords

### Gmail "Username and Password not accepted" error
- You must use an App Password, not your regular Gmail password
- Enable 2-Factor Authentication first
- Generate a new App Password from Google Account settings

### Emails not arriving
- Check your spam/junk folder
- Verify the `EMAIL_TO` address is correct
- Check your email provider's sending limits
- Look at the server logs for error messages

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables in your hosting platform's dashboard
2. Use the same variable names as in `.env.local`
3. Redeploy your application
4. Test the contact form in production

### Vercel
1. Go to Project Settings → Environment Variables
2. Add each variable (EMAIL_HOST, EMAIL_PORT, etc.)
3. Redeploy

### Netlify
1. Go to Site settings → Environment variables
2. Add each variable
3. Trigger a new deploy

## Email Template

The contact form sends a professionally formatted HTML email with:
- Sender's name and email
- Subject line
- Message content
- Timestamp
- Responsive design
- Plain text fallback

You can customize the email template in `/app/api/contact/route.ts`.
