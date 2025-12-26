'use client';

import Image from 'next/image';
import { getScaledImageDimensions } from '@/lib/imageDimensions';

export default function ClientBanner() {
  const clients = [
    { name: "Machma College", location: "No. 323, LBS Building, 3rd Floor, Galle Rd, Colombo 04", logo: "/clients/machma_logo.png", theme: "white" as const },
    { name: "Legacy Liquor", location: "421 / 350, 32nd Avenue NE , Calgary, Alberta, Canada", logo: "/clients/legacy_liquour_logo.png", theme: "black" as const },
    { name: "Ceylon Maritime Services", location: "No. 72, St. Andreews Place, Mutwall, Colombo 15", logo: "/clients/ceylone_marine.png", theme: "white" as const },
    { name: "Buffalo Contractors", location: "66 Frederick Rd, Tonawanda, New York, United States", logo: "/clients/buffalo_contractors.png", theme: "white" as const },
    { name: "Lichaly Stores", location: "Oruthota Road, Yagoda, Gampaha", logo: "/clients/lichaly_store_logo.png", theme: "black" as const },
  ];

  const logoDimensions: Record<string, { width: number; height: number }> = Object.fromEntries(
    clients.map((client) => [
      client.logo,
      getScaledImageDimensions(client.logo, 70, 70),
    ]),
  );

  // Triple the clients array for seamless infinite loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="relative w-full overflow-hidden bg-black text-white py-12">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
      </div>

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
        <div className="particle particle-4" />
        <div className="particle particle-5" />
      </div>

      <div className="relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <span className="text-xs font-light tracking-[0.3em] text-white/60 uppercase">
              Our Clients
            </span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>

        </div>

        {/* Scrolling Logos Container */}
        <div className="relative w-full">
          <div className="overflow-hidden py-6">
            <div className="flex items-center gap-6 md:gap-32 animate-scroll-smooth">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="client-card group"
                >
                  {/* Glow effect on hover */}
                  <div className="client-card__glow" />

                  {/* Logo container */}
                  <div className="client-card__logo-container">
                    <div
                      className="client-card__logo-bg"
                      data-theme={client.theme}
                    />
                    <div className="relative z-10">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={logoDimensions[client.logo]?.width ?? 70}
                        height={logoDimensions[client.logo]?.height ?? 70}
                        sizes="70px"
                        className="object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-125 filter brightness-110"
                      />
                    </div>
                  </div>

                  {/* Client info */}
                  <div className="client-card__info">
                    <h3 className="client-card__name">
                      {client.name}
                    </h3>
                    <span className="client-card__location">
                      {client.location}
                    </span>
                  </div>

                  {/* Decorative corner accents */}
                  <div className="client-card__corner client-card__corner--tl" />
                  <div className="client-card__corner client-card__corner--br" />
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>

      <style jsx>{`
        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        @keyframes gridMove {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(50px) translateY(50px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        .animate-scroll-smooth {
          animation: scroll-smooth 40s linear infinite;
          width: max-content;
        }

        .animate-scroll-smooth:hover {
          animation-play-state: paused;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, rgba(255,255,255,0.8), transparent);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
        }

        .particle-1 {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .particle-2 {
          top: 60%;
          left: 30%;
          animation-delay: 2s;
        }

        .particle-3 {
          top: 40%;
          right: 20%;
          animation-delay: 4s;
        }

        .particle-4 {
          top: 80%;
          left: 60%;
          animation-delay: 1s;
        }

        .particle-5 {
          top: 30%;
          right: 40%;
          animation-delay: 3s;
        }

        .client-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          min-width: 220px;
          padding: 1.5rem 1.25rem;
          background: transparent;
          border: none;
          border-radius: 20px;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .client-card:hover {
          transform: translateY(-8px);
          background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
        }

        .client-card__glow {
          position: absolute;
          inset: -100%;
          background: radial-gradient(
            circle at center,
            rgba(255,255,255,0.15),
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .client-card:hover .client-card__glow {
          opacity: 1;
        }

        .client-card__logo-container {
          position: relative;
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .client-card__logo-bg {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          transition: all 0.5s ease;
        }

        /* Black background theme (transparent/subtle) */
        .client-card__logo-bg[data-theme="black"] {
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255,255,255,0.08),
            rgba(255,255,255,0.02)
          );
          border: 1px solid rgba(255,255,255,0.08);
        }

        .client-card:hover .client-card__logo-bg[data-theme="black"] {
          transform: scale(1.1) rotate(10deg);
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255,255,255,0.12),
            rgba(255,255,255,0.04)
          );
          border-color: rgba(255,255,255,0.15);
        }

        /* White background theme (solid white circle) */
        .client-card__logo-bg[data-theme="white"] {
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255,255,255,0.95),
            rgba(255,255,255,0.85)
          );
          border: 1px solid rgba(255,255,255,0.3);
        }

        .client-card:hover .client-card__logo-bg[data-theme="white"] {
          transform: scale(1.1) rotate(10deg);
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255,255,255,1),
            rgba(255,255,255,0.95)
          );
          border-color: rgba(255,255,255,0.5);
          box-shadow: 0 0 20px rgba(255,255,255,0.3);
        }

        .client-card__info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          text-align: center;
        }

        .client-card__name {
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.95);
          transition: color 0.3s ease;
        }

        .client-card:hover .client-card__name {
          color: rgba(255,255,255,1);
        }

        .client-card__location {
          font-size: 0.7rem;
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.95);
          transition: color 0.3s ease;
          max-width: 220px;
          word-wrap: break-word;
          white-space: normal;
          line-height: 1.3;
        }

        .client-card:hover .client-card__location {
          color: rgba(255,255,255,1);
        }

        .client-card__corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 1px solid rgba(255,255,255,0.2);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .client-card:hover .client-card__corner {
          opacity: 1;
        }

        .client-card__corner--tl {
          top: 12px;
          left: 12px;
          border-right: none;
          border-bottom: none;
        }

        .client-card__corner--br {
          bottom: 12px;
          right: 12px;
          border-left: none;
          border-top: none;
        }

        .stat-card {
          text-align: center;
          padding: 1.5rem;
          background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.15);
          background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
        }

        .stat-card__value {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff, #a0a0a0);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .stat-card__label {
          font-size: 0.75rem;
          color: rgba(156,163,175,0.8);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
      `}</style>
    </section>
  );
}
