'use client';

import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const footerBackground = encodeURIComponent(`
    <svg width="1600" height="400" viewBox="0 0 1600 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.15)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0.03)" />
        </linearGradient>
        <linearGradient id="footerArc" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.25)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0.05)" />
        </linearGradient>
        <pattern id="footerDots" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="rgba(255,255,255,0.05)" />
        </pattern>
      </defs>
      <rect width="1600" height="400" fill="#020202" />
      <rect width="1600" height="400" fill="url(#footerDots)" />
      <g stroke="url(#footerGradient)" stroke-width="0.6" opacity="0.7">
        <path d="M0 120 H1600" />
        <path d="M0 220 H1600" />
        <path d="M0 320 H1600" />
      </g>
      <g stroke="url(#footerArc)" stroke-width="2" fill="none">
        <path d="M-200 280 Q400 120 1100 260 T2200 300" />
        <path d="M-150 360 Q420 200 1120 320 T2150 360" stroke-opacity="0.5" />
      </g>
      <g stroke="rgba(255,255,255,0.08)" stroke-width="0.9" stroke-dasharray="8 18">
        <path d="M0 60 Q800 140 1600 50" />
      </g>
      <g fill="rgba(255,255,255,0.1)">
        <circle cx="200" cy="150" r="3" />
        <circle cx="620" cy="240" r="2.5" />
        <circle cx="1040" cy="180" r="3" />
        <circle cx="1420" cy="220" r="2.5" />
        <circle cx="820" cy="320" r="2" />
      </g>
    </svg>
  `);

  const footerContentBackground = encodeURIComponent(`
    <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="contentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.14)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0.02)" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="rgba(0,0,0,0.65)" />
      <path d="M-100 620 Q300 500 720 620 T1300 650" stroke="rgba(255,255,255,0.08)" stroke-width="3" fill="none" />
      <path d="M-100 700 Q340 560 760 700 T1300 720" stroke="rgba(255,255,255,0.05)" stroke-width="2" fill="none" />
      <circle cx="280" cy="200" r="160" fill="url(#contentGradient)" opacity="0.6" />
      <circle cx="950" cy="120" r="140" fill="url(#contentGradient)" opacity="0.4" />
      <g fill="rgba(255,255,255,0.09)">
        <circle cx="180" cy="360" r="3" />
        <circle cx="600" cy="280" r="2.5" />
        <circle cx="980" cy="420" r="3" />
      </g>
    </svg>
  `);

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'AI Solutions',
    'Cloud Services',
    'Chatbot Development',
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer
      className="relative w-full bg-black text-white border-t border-white/10"
      style={{
        backgroundImage: `url("data:image/svg+xml,${footerBackground}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-[5%] py-16">
        <div
          className="relative rounded-[36px] border border-white/15 bg-white/5 px-8 py-12 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.5)]"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.08), rgba(0,0,0,0.4)), url("data:image/svg+xml,${footerContentBackground}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold tracking-[0.3em] mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                AXXIOM
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Redefining digital transformation with cutting-edge technology solutions.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <IconComponent size={18} strokeWidth={1.5} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wider">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-sm text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail size={18} className="mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:hello@axxiom.tech" className="hover:text-white transition-colors duration-300">
                  hello@axxiom.tech
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone size={18} className="mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+94713017267" className="hover:text-white transition-colors duration-300">
                  +94713017267
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span>Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Axxiom Technologies. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
