'use client';

import Image from 'next/image';
import { Target, Users, Lightbulb } from 'lucide-react';

export default function AboutUsSection() {
  const aboutSvgBackground = encodeURIComponent(`
    <svg width="1600" height="1200" viewBox="0 0 1600 1200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="aboutHalo" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.15" />
          <stop offset="60%" stop-color="#ffffff" stop-opacity="0.05" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="aboutStrand" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.3)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0.05)" />
        </linearGradient>
        <pattern id="dotGrid" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="rgba(255,255,255,0.07)" />
        </pattern>
      </defs>
      <rect width="1600" height="1200" fill="#020202" />
      <rect width="1600" height="1200" fill="url(#dotGrid)" />
      <circle cx="800" cy="350" r="420" fill="url(#aboutHalo)" />
      <g stroke="url(#aboutStrand)" stroke-width="2.5" fill="none">
        <path d="M-200 1040 Q400 780 1100 1020 T2200 1100" />
        <path d="M-150 900 Q460 600 1080 840 T2150 880" stroke-opacity="0.5" />
        <path d="M-100 760 Q520 480 1040 700 T2100 740" stroke-opacity="0.35" />
      </g>
      <g stroke="rgba(255,255,255,0.15)" stroke-width="0.9" fill="none">
        <path d="M0 260 Q800 340 1600 220" />
        <path d="M0 420 Q900 520 1600 360" stroke-dasharray="6 12" />
      </g>
      <g fill="rgba(255,255,255,0.12)">
        <circle cx="300" cy="900" r="4" />
        <circle cx="1300" cy="300" r="3" />
        <circle cx="950" cy="580" r="4" />
        <circle cx="600" cy="200" r="3" />
      </g>
    </svg>
  `);
  const teamMembers = [
    {
      name: "Chanupa Athsara",
      role: "Co-Founder & CEO",
      photo: "/team/co_founder-ceo-chanupa.jpg"
    },
    {
      name: "Chamika Dilshan",
      role: "Co-Founder & CTO",
      photo: "/team/chamika.jpg"
    },
    {
      name: "Ashan Chalinda",
      role: "Co-Founder & Frontend Engineer",
      photo: "/team/co_founder-frontend_engineer-ashan.jpg"
    },
    {
      name: "Kaveesha Yomal",
      role: "Co-Founder & Project Manager",
      photo: "/team/co_founder-project_manager-yomal.jpg"
    },
    {
      name: "Arman Shalik",
      role: "Co-Founder & Business Analyst",
      photo: "/team/co_founuder-bussiness_analysit-arman.jpg"
    },
    {
      name: "Chamath Kaushalya",
      role: "Software Engineer",
      photo: "/team/chamath.webp"
    }
  ];

  return (
    <section
      className="relative w-full min-h-screen bg-black text-white flex flex-col justify-center items-center px-[5%] py-24 overflow-hidden"
      style={{
        backgroundColor: '#000000',
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08), transparent 50%),
          radial-gradient(circle at 10% 80%, rgba(255,255,255,0.05), transparent 40%),
          url("data:image/svg+xml,${aboutSvgBackground}")
        `,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-white/15 via-gray-400/10 to-transparent blur-[120px] opacity-60" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-bl from-white/12 via-gray-500/8 to-transparent blur-[140px] opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-7xl space-y-24">
        {/* About Us Section */}
      

        {/* Vision Section */}
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <Target size={32} className="text-white/80" strokeWidth={1.5} />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-[0.2em] bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            VISION
          </h2>

          <div className="max-w-4xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed tracking-wide">
              To be a trusted partner in digital transformation,
              creating solutions that drive growth, efficiency,
              and lasting value.
            </p>
          </div>

         
        </div>

        {/* Team Section */}
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <Users size={32} className="text-white/80" strokeWidth={1.5} />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-[0.2em] bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            TEAM
          </h2>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="flex flex-col items-center gap-4">
                  {/* Team Member Photo */}
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5">
                    <Image
                      src={member.photo}
                      alt={`${member.name} - ${member.role}`}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-semibold tracking-wider text-white">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-xs font-light text-gray-400 text-center leading-relaxed">
                    {member.role}
                  </p>
                </div>

                {/* Hover Effect */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
                  }}
                />
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
}
