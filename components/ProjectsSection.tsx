'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Package, GraduationCap, DollarSign, Smartphone, ShoppingCart, Briefcase } from 'lucide-react';

export default function ProjectsSection() {

  const curvedLineBackground = encodeURIComponent(`
    <svg width="1600" height="1200" viewBox="0 0 1600 1200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="curveStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.25)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0.05)" />
        </linearGradient>
      </defs>
      <path d="M-200 900 Q400 650 1000 870 T2200 920" fill="none" stroke="url(#curveStroke)" stroke-width="3" stroke-linecap="round" />
      <path d="M-200 1040 Q420 840 1080 1060 T2200 1080" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2" stroke-linecap="round" />
      <path d="M-150 760 Q360 500 1050 740 T2150 760" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1.5" stroke-linecap="round" />
      <path d="M-150 620 Q360 420 1080 650 T2150 660" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1.2" stroke-linecap="round" />
      <path d="M-100 500 Q420 280 1030 480 T2100 520" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" stroke-linecap="round" />
    </svg>
  `);

  const projects = [
    {
      title: "Inventory Management System",
      client: "Legacy Liquor",
      location: "Calgary, Alberta, Canada",
      description: "A custom-built inventory management system to streamline stock tracking, reporting, and operational efficiency.",
      icon: Package,
      logo: "/clients/legacy_liquour_logo.png"
    },
    {
      title: "Learning Management System",
      client: "Machma College",
      location: "Colombo 04, Sri Lanka",
      description: "A comprehensive LMS platform to manage courses, students, instructors, and online learning activities.",
      icon: GraduationCap,
      logo: "/clients/machma_logo.png"
    },
    {
      title: "Payroll Management System",
      client: "Ceylon Maritime Services (Pvt) Ltd",
      location: "Colombo 15, Sri Lanka",
      description: "An automated payroll solution to handle salary calculations, deductions, and employee records efficiently.",
      icon: DollarSign,
      logo: "/clients/ceylone_marine.png"
    },
    {
      title: "Mobile Application",
      client: "Buffalo Contractors",
      location: "New York, United States",
      description: "A mobile application designed to support business operations and on-the-go access to critical services.",
      icon: Smartphone,
      logo: "/clients/buffalo_contractors.png"
    },
    {
      title: "POS System",
      client: "Lichaly Stores",
      location: "Gampaha, Sri Lanka",
      description: "A reliable POS system for sales management, inventory tracking, and daily reporting.",
      icon: ShoppingCart,
      logo: "/clients/lichaly_store_logo.png"
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="relative w-full min-h-screen bg-black text-white flex flex-col justify-center items-center px-[5%] py-24 overflow-hidden"
      style={{
        backgroundColor: '#050505',
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.12), transparent 45%),
          radial-gradient(circle at 80% 10%, rgba(200, 200, 200, 0.09), transparent 50%)`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Curved line layer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url("data:image/svg+xml,${curvedLineBackground}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Top and bottom separators to emphasize independent background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-black/70 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <Briefcase size={32} className="text-white/80" strokeWidth={1.5} />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>

        <h2 className="text-6xl font-bold tracking-[0.2em] mb-4 text-center bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
          OUR RECENT WORK
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg tracking-wide">
          Our Recent Clients / Projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl cursor-pointer transition-all duration-500 ease-out ${
                  hoveredIndex === index
                    ? 'scale-105 -translate-y-2'
                    : 'scale-100'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: hoveredIndex === index
                    ? 'rgba(255, 255, 255, 0.15)'
                    : 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  boxShadow: hoveredIndex === index
                    ? '0 8px 32px 0 rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)'
                    : '0 4px 16px 0 rgba(0, 0, 0, 0.2)',
                }}
              >
                {/* Gradient border effect on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(156, 163, 175, 0.3))',
                    padding: '1px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-4">
                  {/* Icon and Logo */}
                  <div className="flex items-center justify-between">
                    <div className={`transition-transform duration-500 ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}>
                      <IconComponent size={40} strokeWidth={1.5} className="text-white" />
                    </div>
                    {/* Client Logo */}
                    <div className="w-16 h-16 flex items-center justify-center">
                      <Image
                        src={project.logo}
                        alt={`${project.client} logo`}
                        width={64}
                        height={64}
                        className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold tracking-wide leading-relaxed">
                    {project.title}
                  </h3>

                  {/* Client & Location */}
                  <div className="space-y-1">
                    <p className="text-sm text-gray-300">
                      <span className="font-medium">Client:</span> {project.client}
                    </p>
                    <p className="text-sm text-gray-300">
                      <span className="font-medium">Location:</span> {project.location}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Shine effect on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
