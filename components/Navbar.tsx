'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling down 100px
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const navbarHeight = 60; // Approximate navbar height with padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    // Close mobile menu if open
    setOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-10 py-6 pointer-events-none transition-transform duration-300 ${
      showNavbar ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between gap-4 rounded-full border border-white/15 bg-white/5 px-5 py-3 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.55)] pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-[160px]">
            <Image
              src="/white-3.png"
              alt="Axxiom Technologies"
              fill
              sizes="160px"
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden sm:inline text-[10px] tracking-[0.6em] text-white/70 uppercase">
            Axxiom Technologies
          </span>
        </div>

        <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.3em]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group relative overflow-hidden rounded-full px-4 py-2 text-white/70 transition-all duration-300 hover:text-white"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100" />
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="rounded-full bg-white text-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] hover:bg-white/90 transition-colors"
          >
            Let's Collaborate
          </Link>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 p-2 text-white"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="mt-4 rounded-3xl border border-white/15 bg-white/5 px-6 py-6 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.55)] md:hidden pointer-events-auto">
          <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.3em] text-white/70">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-full border border-white/10 px-4 py-3 text-center hover:bg-white/10 hover:text-white transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="#contact"
              className="block rounded-full bg-white text-black px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em]"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Let's Collaborate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
