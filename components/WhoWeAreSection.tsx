'use client';

import { Award, Globe2, Zap, Users, Building2 } from 'lucide-react';

export default function WhoWeAreSection() {
  const whoWeAreBackground = encodeURIComponent(`
    <svg width="1600" height="1200" viewBox="0 0 1600 1200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="whoGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#f5f5f5" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#040404" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="1200" fill="#030303" />
      <circle cx="800" cy="400" r="500" fill="url(#whoGlow)" />
      <g stroke="rgba(255,255,255,0.08)" stroke-width="0.6">
        <path d="M0 350 H1600" />
        <path d="M0 700 H1600" />
        <path d="M400 0 V1200" />
        <path d="M1200 0 V1200" />
      </g>
      <g stroke="rgba(255,255,255,0.1)" stroke-width="1" fill="none">
        <circle cx="800" cy="700" r="360" />
      </g>
      <g fill="rgba(255,255,255,0.1)">
        <circle cx="320" cy="940" r="4" />
        <circle cx="1320" cy="260" r="3" />
        <circle cx="980" cy="540" r="4" />
      </g>
    </svg>
  `);

  const highlights = [
    {
      icon: Award,
      title: "Registered Company",
      description: "Officially registered software development company"
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Serving clients in Sri Lanka and overseas"
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "Committed to cutting-edge technology solutions"
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Dedicated to helping businesses grow"
    }
  ];

  return (
    <div
      className="w-full min-h-screen relative bg-black text-white flex flex-col justify-center items-center px-[5%] py-20 overflow-x-hidden"
      style={{
        backgroundColor: '#040404',
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.08), transparent 45%),
          radial-gradient(circle at 80% 10%, rgba(180, 180, 180, 0.08), transparent 50%),
          url("data:image/svg+xml,${whoWeAreBackground}")`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="relative z-10 w-full max-w-7xl">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <Building2 size={32} className="text-white/80" strokeWidth={1.5} />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>

        <h2 className="text-6xl font-bold tracking-[0.2em] mb-4 text-center bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
          WHO WE ARE
        </h2>

        <div className="max-w-4xl mx-auto mt-16 mb-16">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed text-center font-light">
            We are a <span className="font-semibold text-white">Registered Software Development Company</span> with years of experience delivering high quality web and mobile applications and AI solutions for clients in <span className="font-semibold text-white">Sri Lanka and Overseas</span>. With proven expertise and commitment to innovation, we build reliable, modern digital solutions that help businesses grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-12">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-xl text-center transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                    <IconComponent size={32} strokeWidth={1.5} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-wide">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
