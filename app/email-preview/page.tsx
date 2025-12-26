'use client';

import { useMemo, useState } from 'react';
import {
  buildAdminEmailTemplate,
  buildConfirmationEmailTemplate
} from '@/lib/emailTemplates';
import { EMAIL_LOGO_BASE64 } from '@/lib/emailBranding';

const sampleData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  subject: 'Inquiry about AI Solutions',
  message:
    'Hello,\n\nI am interested in learning more about your AI and digital transformation services. Could you please provide more information about your offerings?\n\nThank you!'
};

export default function EmailPreview() {
  const [emailType, setEmailType] = useState<'admin' | 'confirmation'>('admin');

  const adminEmailHTML = useMemo(
    () =>
      buildAdminEmailTemplate({
        name: sampleData.name,
        email: sampleData.email,
        subject: sampleData.subject,
        message: sampleData.message,
        submittedAt: new Date().toLocaleString(),
        logoSrc: EMAIL_LOGO_BASE64
      }),
    []
  );

  const confirmationEmailHTML = useMemo(
    () =>
      buildConfirmationEmailTemplate({
        name: sampleData.name,
        subject: sampleData.subject,
        logoSrc: EMAIL_LOGO_BASE64
      }),
    []
  );

  const activeHtml = emailType === 'admin' ? adminEmailHTML : confirmationEmailHTML;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0e0e0e', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            backgroundColor: '#111',
            padding: '20px',
            borderRadius: '12px',
            marginBottom: '20px',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.08)'
          }}
        >
          <h1 style={{ marginTop: 0 }}>Email Template Preview</h1>
          <p style={{ color: '#888', marginBottom: '20px' }}>
            Toggle between the admin notification and client confirmation emails exactly as they
            send from the API.
          </p>

          <label style={{ marginRight: '20px', cursor: 'pointer' }}>
            <input
              type="radio"
              checked={emailType === 'admin'}
              onChange={() => setEmailType('admin')}
              style={{ marginRight: '8px' }}
            />
            Admin Email
          </label>

          <label style={{ cursor: 'pointer' }}>
            <input
              type="radio"
              checked={emailType === 'confirmation'}
              onChange={() => setEmailType('confirmation')}
              style={{ marginRight: '8px' }}
            />
            Confirmation Email
          </label>
        </div>

        <div
          style={{
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#000'
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: activeHtml
            }}
          />
        </div>
      </div>
    </div>
  );
}
