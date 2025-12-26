'use client';

import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 76 699 2183',
    href: 'tel:+94766992183',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 71 301 7267',
    href: 'tel:+94713017267',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@axxiom.tech',
    href: 'mailto:hello@axxiom.tech',
  },
];

const socialLinks = [
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/axxiom-technologies',
  },
  {
    icon: FaFacebook,
    label: 'Facebook',
    href: 'https://web.facebook.com/profile.php?id=61584180597837',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/axxiom.tech/',
  },
];

export default function ContactSection() {
  const contactBackground = encodeURIComponent(`
    <svg width="1600" height="900" viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0d0d0d" />
          <stop offset="100%" stop-color="#050505" />
        </linearGradient>
        <radialGradient id="contactGlow" cx="20%" cy="20%" r="40%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.12)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </radialGradient>
        <radialGradient id="contactGlow2" cx="80%" cy="60%" r="35%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.1)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#contactGradient)" />
      <rect width="1600" height="900" fill="url(#contactGlow)" />
      <rect width="1600" height="900" fill="url(#contactGlow2)" />
      <path d="M-200 500 Q400 300 1100 520 T2200 560" stroke="rgba(255,255,255,0.08)" stroke-width="2" fill="none" />
      <path d="M-200 640 Q420 440 1180 660 T2200 700" stroke="rgba(255,255,255,0.05)" stroke-width="1.5" fill="none" />
      <g stroke="rgba(255,255,255,0.04)" stroke-width="0.8">
        <path d="M0 260 Q800 340 1600 240" />
        <path d="M0 360 Q900 440 1600 320" />
      </g>
      <g fill="rgba(255,255,255,0.35)">
        <circle cx="200" cy="120" r="1.5" />
        <circle cx="430" cy="220" r="1.3" />
        <circle cx="780" cy="140" r="1.4" />
        <circle cx="1120" cy="200" r="1.2" />
        <circle cx="1350" cy="300" r="1.4" />
      </g>
    </svg>
  `);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundColor: '#050505',
        backgroundImage: `url("data:image/svg+xml,${contactBackground}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60 mb-2">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Get In Touch</h2>
          <p className="text-base text-white/60 max-w-2xl mx-auto">
            Ready to start your next project? Contact us today and let's bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="order-2 lg:order-1 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
            {submitStatus.type && (
              <div
                className={`mb-5 rounded-xl p-4 ${
                  submitStatus.type === 'success'
                    ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                    : 'bg-red-500/10 border border-red-500/30 text-red-400'
                }`}
              >
                <p className="text-sm">{submitStatus.message}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.4em] text-white/70 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-white/40 focus:bg-white/10 focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-[0.4em] text-white/70 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-white/40 focus:bg-white/10 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs uppercase tracking-[0.4em] text-white/70 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-white/40 focus:bg-white/10 focus:outline-none"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.4em] text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-white/40 focus:bg-white/10 focus:outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full rounded-2xl bg-white text-black px-6 py-4 font-semibold uppercase tracking-[0.3em] transition-all duration-200 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className={`h-5 w-5 transition-transform ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-xs uppercase tracking-[0.4em] text-white/70 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 hover:border-white/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-white" />
                        <div className="flex flex-col">
                          <span className="text-[11px] uppercase tracking-[0.4em] text-white/70">
                            {contact.label}
                          </span>
                          <span className="text-white text-base">{contact.value}</span>
                        </div>
                      </div>
                      <span className="text-white/40 text-sm">&rarr;</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-xs uppercase tracking-[0.4em] text-white/70 mb-4">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group rounded-full border border-white/15 bg-black/40 p-3 transition-colors hover:border-white/40 hover:bg-white/10"
                    >
                      <Icon className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-xs uppercase tracking-[0.4em] text-white/70 mb-3">
                Visit Us
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                No. 115, Level 03, Ward City Shopping Complex, Queen Mary's Rd, Gampaha 11000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
