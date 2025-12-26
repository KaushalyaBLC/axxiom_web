import { EMAIL_LOGO_URL } from './emailBranding';

export const baseEmailStyles = `
    :root {
      color-scheme: dark;
    }
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 32px 0;
      background-color: #020202;
      font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif;
      color: #f6f6f6;
    }
    table {
      border-collapse: separate;
      border-spacing: 0;
    }
    a {
      color: #9ce6ff;
    }
    .wrapper {
      width: 100%;
    }
    .container {
      width: 100%;
      max-width: 640px;
      background-color: #060606;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 28px;
      overflow: hidden;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.65);
    }
    .header {
      padding: 48px 40px 36px;
      text-align: center;
      background: radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.18), transparent 55%), linear-gradient(135deg, #020202, #141414 60%, #1d1d1d);
    }
    .eyebrow {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.4em;
      color: rgba(255, 255, 255, 0.6);
      margin-bottom: 14px;
    }
    .logo {
      width: 160px;
      margin: 0 auto 18px;
      display: block;
    }
    .title {
      margin: 0 0 10px;
      font-size: 28px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #ffffff;
    }
    .intro {
      margin: 0 auto;
      max-width: 420px;
      font-size: 15px;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.75);
    }
    .content {
      padding: 40px 40px 32px;
      background: #040404;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 7px 18px;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.35em;
    }
    .badge--alert {
      background: rgba(255, 89, 89, 0.1);
      border-color: rgba(255, 89, 89, 0.4);
      color: #ff9b9b;
    }
    .badge--success {
      background: rgba(124, 252, 212, 0.08);
      border-color: rgba(124, 252, 212, 0.35);
      color: #7cfcd4;
    }
    .section-title {
      margin: 32px 0 12px;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.45em;
      color: rgba(255, 255, 255, 0.55);
    }
    .card {
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0));
      padding: 22px;
      margin-bottom: 16px;
    }
    .card--ghost {
      background: rgba(255, 255, 255, 0.02);
    }
    .label {
      margin: 0 0 8px;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.35em;
      color: rgba(255, 255, 255, 0.55);
    }
    .value {
      margin: 0;
      font-size: 15px;
      line-height: 1.6;
      color: #f4f4f4;
    }
    .message-block {
      margin-top: 20px;
      border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      background: #0b0b0b;
      padding: 24px;
    }
    .message-content {
      margin: 0;
      font-size: 15px;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.85);
      white-space: pre-line;
    }
    .body-copy {
      margin: 16px 0 0;
      font-size: 15px;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.78);
    }
    .greeting {
      margin: 28px 0 6px;
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 0.25em;
      color: #ffffff;
    }
    .highlight {
      color: #ffffff;
      font-weight: 600;
    }
    .cta {
      display: inline-block;
      margin-top: 28px;
      padding: 14px 32px;
      border-radius: 999px;
      background: linear-gradient(135deg, #ffffff, #cfcfcf);
      color: #060606;
      text-decoration: none;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.35em;
    }
    .muted {
      margin-top: 20px;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
    }
    .meta-row {
      margin-top: 24px;
    }
    .meta-chip {
      display: inline-block;
      margin: 4px 8px 0 0;
      padding: 8px 18px;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 11px;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.55);
    }
    .info-table {
      width: 100%;
    }
    .info-table td {
      width: 50%;
      vertical-align: top;
      padding: 0 0 16px;
    }
    .info-table td:first-child {
      padding-right: 12px;
    }
    .info-table td:last-child {
      padding-left: 12px;
    }
    .contact-links {
      width: 100%;
      margin-top: 18px;
    }
    .contact-links td {
      width: 50%;
      padding: 6px;
    }
    .contact-links a {
      display: block;
      border-radius: 18px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(255, 255, 255, 0.04);
      padding: 14px;
      text-align: center;
      text-decoration: none;
      color: #f8f8f8;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }
    .contact-links span {
      display: block;
      margin-top: 8px;
      font-size: 14px;
      letter-spacing: 0.05em;
      color: #9ce6ff;
      text-transform: none;
    }
    .signature {
      margin-top: 28px;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.4em;
      color: rgba(255, 255, 255, 0.7);
    }
    .footer {
      padding: 32px;
      background: #020202;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      text-align: center;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }
    @media only screen and (max-width: 540px) {
      body {
        padding: 16px;
      }
      .container {
        border-radius: 20px;
      }
      .header,
      .content {
        padding: 32px 22px;
      }
      .title {
        font-size: 22px;
      }
      .info-table td,
      .contact-links td {
        width: 100%;
        display: block;
        padding: 0 0 16px;
      }
      .cta {
        letter-spacing: 0.25em;
        width: 100%;
        text-align: center;
      }
    }
  `;

type AdminEmailInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt?: string;
  logoSrc?: string;
};

export const buildAdminEmailTemplate = ({
  name,
  email,
  subject,
  message,
  submittedAt = new Date().toLocaleString(),
  logoSrc = EMAIL_LOGO_URL
}: AdminEmailInput) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
${baseEmailStyles}
  </style>
</head>

<body>
  <table role="presentation" width="100%" class="wrapper" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" class="container" cellpadding="0" cellspacing="0">
          <tr>
            <td class="header">
              <div class="eyebrow">Contact Intake</div>
              <img src="${logoSrc}" alt="Axxiom Technologies" class="logo" />
              <p class="title">New Inbound Lead</p>
              <p class="intro">
                A visitor just reached out through axxiom.tech. Review the details below so we can respond quickly.
              </p>
            </td>
          </tr>
          <tr>
            <td class="content">
              <span class="badge badge--alert">New Lead</span>

              <p class="section-title">Lead Summary</p>
              <table role="presentation" class="info-table" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div class="card">
                      <p class="label">Name</p>
                      <p class="value">${name}</p>
                    </div>
                  </td>
                  <td>
                    <div class="card">
                      <p class="label">Email</p>
                      <p class="value">
                        <a href="mailto:${email}">${email}</a>
                      </p>
                    </div>
                  </td>
                </tr>
              </table>

              <div class="card">
                <p class="label">Subject</p>
                <p class="value">${subject}</p>
              </div>

              <div class="message-block">
                <p class="label">Message</p>
                <p class="message-content">${message}</p>
              </div>

              <a href="mailto:${email}" class="cta">Reply Now</a>

              <div class="meta-row">
                <span class="meta-chip">Submitted ${submittedAt}</span>
                <span class="meta-chip">Channel Website Form</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="footer">
              Axxiom Technologies - Digital Transformation & AI Solutions
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

type ConfirmationEmailInput = {
  name: string;
  subject: string;
  logoSrc?: string;
};

export const buildConfirmationEmailTemplate = ({
  name,
  subject,
  logoSrc = EMAIL_LOGO_URL
}: ConfirmationEmailInput) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
${baseEmailStyles}
  </style>
</head>

<body>
  <table role="presentation" width="100%" class="wrapper" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" class="container" cellpadding="0" cellspacing="0">
          <tr>
            <td class="header">
              <img src="${logoSrc}" alt="Axxiom Technologies" class="logo" />
              <div class="eyebrow">Axxiom Technologies</div>
              <p class="title">Thank You For Reaching Out</p>
            </td>
          </tr>
          <tr>
            <td class="content">
              <span class="badge badge--success">Message Received</span>

              <p class="greeting">Hi ${name},</p>
              <p class="body-copy">
                Thank you for contacting <span class="highlight">Axxiom Technologies</span>. Your inquiry is with our solutions team and we typically respond within 24-48 hours on business days.
              </p>

              <div class="card card--ghost">
                <p class="label">What You Asked About</p>
                <p class="value">${subject}</p>
              </div>

              <p class="section-title">Need To Reach Us Sooner?</p>
              <table role="presentation" class="contact-links" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <a href="tel:+94713017267">
                      Call Us
                      <span>+94 71 301 7267</span>
                    </a>
                  </td>
                  <td>
                    <a href="mailto:hello@axxiom.tech">
                      Email
                      <span>hello@axxiom.tech</span>
                    </a>
                  </td>
                </tr>
              </table>

              <div class="body-copy">
                In the meantime, explore our case studies and services on axxiom.tech for more inspiration.
              </div>

              <a href="https://axxiom.tech/" class="cta">Visit axxiom.tech</a>

              <p class="body-copy">
                Best regards,<br />
                <span class="highlight">Axxiom Technologies Team</span>
              </p>
            </td>
          </tr>
          <tr>
            <td class="footer">
              You received this email because you contacted axxiom.tech
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
