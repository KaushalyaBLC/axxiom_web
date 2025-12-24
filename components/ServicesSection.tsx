'use client';

import { useState } from 'react';
import { Globe, Smartphone, Layout, MessageSquare, Workflow, BrainCircuit, Settings } from 'lucide-react';

export default function ServicesSection() {
  const backgroundSvg = encodeURIComponent(`
    <svg width="1600" height="1000" viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="servicesGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="diagLines" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.08" />
          <stop offset="100%" stop-color="#666666" stop-opacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="1600" height="1000" fill="#000000" />
      <circle cx="800" cy="380" r="520" fill="url(#servicesGlow)" />
      <g stroke="url(#diagLines)" stroke-width="1">
        <path d="M-200 200 L200 600" />
        <path d="M0 200 L400 600" />
        <path d="M200 200 L600 600" />
        <path d="M400 200 L800 600" />
        <path d="M600 200 L1000 600" />
        <path d="M800 200 L1200 600" />
        <path d="M1000 200 L1400 600" />
        <path d="M1200 200 L1600 600" />
        <path d="M1400 200 L1800 600" />
      </g>
      <g stroke="rgba(255,255,255,0.08)" stroke-width="0.5">
        <path d="M0 260 H1600" />
        <path d="M0 520 H1600" />
        <path d="M0 780 H1600" />
        <path d="M200 0 V1000" />
        <path d="M1400 0 V1000" />
      </g>
      <g fill="rgba(255,255,255,0.12)">
        <circle cx="300" cy="820" r="4" />
        <circle cx="1340" cy="240" r="3" />
        <circle cx="960" cy="520" r="4" />
      </g>
    </svg>
  `);

  const services = [
    {
      title: "Web Application Development",
      description: "Custom, scalable web solutions built with modern technologies",
      icon: Globe
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android",
      icon: Smartphone
    },
    {
      title: "Website Development",
      description: "Responsive, fast, and SEO-optimized websites for your business",
      icon: Layout
    },
    {
      title: "Chatbot & Conversational Agents",
      description: "Intelligent chatbots that enhance customer engagement 24/7",
      icon: MessageSquare
    },
    {
      title: "Agentic Workflow Automation",
      description: "Streamline operations with intelligent automation solutions",
      icon: Workflow
    },
    {
      title: "AI Transformation Solution",
      description: "Transform your business with cutting-edge AI integration",
      icon: BrainCircuit
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className="w-full min-h-screen relative text-white flex flex-col justify-center items-center px-[5%] py-20 overflow-x-hidden"
      style={{
        backgroundColor: '#000000',
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.15), transparent 48%),
          radial-gradient(circle at 80% 0%, rgba(128, 128, 128, 0.12), transparent 45%),
          url("data:image/svg+xml,${backgroundSvg}")`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
      }}
    >

      <div className="relative z-10 w-full max-w-7xl">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <Settings size={32} className="text-white/80" strokeWidth={1.5} />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>

        <h2 className="text-6xl font-bold tracking-[0.2em] mb-4 text-center bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
          OUR SERVICES
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg tracking-wide">
          Empowering your business with cutting-edge technology solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl text-center cursor-pointer transition-all duration-500 ease-out ${
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
                <div className="relative z-10 flex flex-col items-center gap-4">
                  {/* Icon */}
                  <div className={`transition-transform duration-500 ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}>
                    <IconComponent size={48} strokeWidth={1.5} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold tracking-wide leading-relaxed">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {service.description}
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
    </div>
  );
}
