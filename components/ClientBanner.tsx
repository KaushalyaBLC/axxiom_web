'use client';

import Image from 'next/image';
import { getScaledImageDimensions } from '@/lib/imageDimensions';

export default function ClientBanner() {
  const bannerBackground = encodeURIComponent(`
    <svg width="1600" height="200" viewBox="0 0 1600 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bannerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.15" />
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0.25" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.15" />
        </linearGradient>
        <linearGradient id="glowStroke" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.18)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0.04)" />
        </linearGradient>
      </defs>
      <rect width="1600" height="200" fill="#101010" />
      <rect width="1600" height="200" fill="url(#bannerGradient)" />
      <g stroke="url(#glowStroke)" stroke-width="0.75">
        <path d="M0 60 H1600" />
        <path d="M0 120 H1600" />
        <path d="M320 0 V200" />
        <path d="M640 0 V200" />
        <path d="M960 0 V200" />
        <path d="M1280 0 V200" />
        <path d="M0 200 L200 0" />
        <path d="M320 200 L520 0" />
        <path d="M640 200 L840 0" />
        <path d="M960 200 L1160 0" />
        <path d="M1280 200 L1480 0" />
      </g>
      <g fill="rgba(255,255,255,0.35)">
        <circle cx="180" cy="80" r="3" />
        <circle cx="580" cy="140" r="2.5" />
        <circle cx="940" cy="70" r="3" />
        <circle cx="1340" cy="110" r="2.5" />
      </g>
    </svg>
  `);

  const clients = [
    { name: "Legacy Liquor", location: "Calgary, Canada", logo: "/clients/legacy_liquour_logo.png" },
    { name: "Machma College", location: "Colombo, Sri Lanka", logo: "/clients/machma_logo.png" },
    { name: "Ceylon Maritime Services", location: "Colombo, Sri Lanka", logo: "/clients/ceylone_marine.png" },
    { name: "Buffalo Contractors", location: "New York, USA", logo: "/clients/buffalo_contractors.png" },
    { name: "Lichaly Stores", location: "Gampaha, Sri Lanka", logo: "/clients/lichaly_store_logo.png" },
  ];
  const logoDimensions: Record<string, { width: number; height: number }> = Object.fromEntries(
    clients.map((client) => [
      client.logo,
      getScaledImageDimensions(client.logo, 64, 64),
    ]),
  );

  // Triple the clients array for seamless infinite loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section
      className="relative w-full overflow-hidden border-y border-white/10 text-white bg-black"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), transparent 45%),
          radial-gradient(circle at 80% 0%, rgba(255,255,255,0.08), transparent 40%),
          linear-gradient(120deg, rgba(8,8,8,0.95), rgba(26,26,26,0.98)),
          url("data:image/svg+xml,${bannerBackground}")
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Monochrome glow accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        <div className="absolute -top-24 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-white/25 via-gray-500/20 to-transparent blur-[140px] opacity-80" />
        <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-gradient-to-bl from-white/20 via-gray-500/15 to-transparent blur-[160px] opacity-75" />
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-4/5 h-60 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[120px] opacity-70" />
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              'linear-gradient(120deg, rgba(255,255,255,0.12) 0.5px, transparent 0.5px), linear-gradient(300deg, rgba(255,255,255,0.08) 0.5px, transparent 0.5px)',
            backgroundSize: '120px 120px',
          }}
        />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black via-transparent to-transparent opacity-50" />
      </div>

      <div className="relative z-10 py-10">
        <div className="flex items-center justify-center gap-4 mb-10 text-xs uppercase tracking-[0.4em] text-gray-400">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <span className="font-light">Trusted by</span>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <div className="flex items-center gap-10 animate-scroll">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="client-chip group"
            >
              <div className="client-chip__logo">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={logoDimensions[client.logo]?.width ?? 112}
                  height={logoDimensions[client.logo]?.height ?? 112}
                  sizes="64px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="client-chip__meta">
                <span className="client-chip__name">
                  {client.name}
                </span>
                <span className="client-chip__location">
                  {client.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-scroll {
          animation: scroll 50s linear infinite;
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .client-chip {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          min-width: 260px;
          padding: 0.7rem 1.4rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(8, 8, 8, 0.5);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(18px);
          position: relative;
          overflow: hidden;
          transition: transform 0.4s ease, border-color 0.4s ease;
        }

        .client-chip::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0)
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .client-chip:hover {
          transform: translateY(-4px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.45);
        }

        .client-chip:hover::after {
          opacity: 1;
        }

        .client-chip__logo {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.05) 70%
          );
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .client-chip__meta {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          text-align: left;
        }

        .client-chip__name {
          font-size: 0.85rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.85);
        }

        .client-chip__location {
          font-size: 0.65rem;
          color: rgba(200, 200, 200, 0.7);
          letter-spacing: 0.3em;
          text-transform: uppercase;
        }
      `}</style>
    </section>
  );
}
