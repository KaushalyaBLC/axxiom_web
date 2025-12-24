'use client';

import Image from "next/image";
import Beams from "@/components/Beam";
import { getScaledImageDimensions } from "@/lib/imageDimensions";

const heroBackground = encodeURIComponent(`
  <svg width="1600" height="900" viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#f7f7f7" stop-opacity="0.1" />
        <stop offset="100%" stop-color="#040404" stop-opacity="0" />
      </radialGradient>
    </defs>
    <rect width="1600" height="900" fill="#040404" />
    <circle cx="800" cy="450" r="420" fill="url(#heroGlow)" />
    <g stroke="rgba(255,255,255,0.05)" stroke-width="0.5">
      <path d="M0 300 H1600" />
      <path d="M0 600 H1600" />
      <path d="M400 0 V900" />
      <path d="M1200 0 V900" />
    </g>
    <g stroke="rgba(255,255,255,0.08)" stroke-width="0.8" fill="none">
      <circle cx="800" cy="450" r="320" />
      <circle cx="800" cy="450" r="520" />
    </g>
  </svg>
`);

const heroLogoDimensions = getScaledImageDimensions("/white-3.png", 830, 150);

export default function HeroSection() {
  const scrollToNextSection = () => {
    window.scrollBy({
      top: 500,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className="hero-root w-full h-screen relative text-white overflow-hidden bg-black"
      style={{
        fontSize: 'clamp(28px, 6vw, 64px)',
        fontWeight: 700,
        fontFamily: 'var(--font-geist-sans, sans-serif)',
        backgroundColor: '#050505',
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1), transparent 45%),
          radial-gradient(circle at 70% 10%, rgba(170, 170, 170, 0.08), transparent 50%),
          url("data:image/svg+xml,${heroBackground}")`,
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-grid" />
        <div className="hero-gradient hero-gradient--one" />
        <div className="hero-gradient hero-gradient--two" />
        <div className="hero-orbit hero-orbit--one" />
        <div className="hero-orbit hero-orbit--two" />
      </div>
      <div className="hero-content">
        <Image
          src="/white-3.png"
          alt="Axxiom logo"
          width={heroLogoDimensions.width}
          height={heroLogoDimensions.height}
          sizes="(max-width: 640px) 90vw, (max-width: 1280px) 40vw, 640px"
          priority
          className="hero-logo"
        />
        <span className="hero-title">- AXXIOM TECHNOLOGIES -</span>
        <span className="hero-tagline">Simplifying technology for all</span>
      </div>
      <Beams
        beamWidth={3}
        beamHeight={36}
        beamNumber={28}
        lightColor="#f5f5f5"
        speed={2.6}
        noiseIntensity={2.1}
        scale={0.28}
        rotation={30}
        position={[3, 0, 0]}
      />
      <button
        className="hero-scroll-hint"
        onClick={scrollToNextSection}
        aria-label="Scroll to next section"
      >
        <span className="hero-scroll-hint__text">Scroll Down</span>
        <span className="hero-scroll-hint__chevron" />
      </button>
      <style jsx>{`
        .hero-root {
          min-height: 100vh;
        }
        .hero-content {
          position: absolute;
          top: 50%;
          left: 5%;
          transform: translateY(-50%);
          z-index: 10;
          text-align: left;
          letter-spacing: 0.2em;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-start;
          max-width: 90%;
        }
        .hero-logo {
          width: clamp(320px, 40vw, 640px);
          height: auto;
        }
        .hero-title {
          font-size: clamp(18px, 3vw, 32px);
          letter-spacing: 0.4em;
          font-weight: 500;
        }
        .hero-tagline {
          font-size: clamp(12px, 2.4vw, 20px);
          letter-spacing: 0.25em;
          font-weight: 400;
          text-transform: uppercase;
        }
        @keyframes heroGridDrift {
          0% {
            transform: translate3d(-5%, -5%, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(5%, 5%, 0) rotate(0.5deg);
          }
          100% {
            transform: translate3d(-5%, -5%, 0) rotate(0deg);
          }
        }
        @keyframes heroPulse {
          0%,
          100% {
            transform: scale(0.95) translate3d(-5%, -5%, 0);
            opacity: 0.35;
          }
          50% {
            transform: scale(1) translate3d(5%, 5%, 0);
            opacity: 0.55;
          }
        }
        @keyframes heroOrbit {
          0% {
            transform: rotate(0deg) translateX(12px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(12px) rotate(-360deg);
          }
        }
        .hero-grid {
          position: absolute;
          inset: -10%;
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(180, 180, 180, 0.08) 1px, transparent 1px);
          background-size: 140px 140px;
          opacity: 0.15;
          animation: heroGridDrift 18s ease-in-out infinite;
          mix-blend-mode: screen;
        }
        .hero-gradient {
          position: absolute;
          width: 45vw;
          height: 45vw;
          border-radius: 9999px;
          filter: blur(90px);
          opacity: 0.2;
          mix-blend-mode: screen;
          animation: heroPulse 22s ease-in-out infinite;
        }
        .hero-gradient--one {
          top: -20%;
          left: -10%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.25), transparent 60%);
        }
        .hero-gradient--two {
          bottom: -25%;
          right: -15%;
          background: radial-gradient(circle, rgba(180, 180, 180, 0.2), transparent 60%);
          animation-delay: 4s;
        }
        .hero-orbit {
          position: absolute;
          width: 32rem;
          height: 32rem;
          border: 1px solid rgba(248, 250, 252, 0.1);
          border-radius: 9999px;
          mix-blend-mode: screen;
          opacity: 0.25;
        }
        .hero-orbit::after {
          content: '';
          position: absolute;
          top: -6px;
          right: 50%;
          width: 12px;
          height: 12px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 16px rgba(255, 255, 255, 0.65);
          animation: heroOrbit 16s linear infinite;
        }
        .hero-orbit--one {
          top: 10%;
          right: 15%;
        }
        .hero-orbit--two {
          bottom: 12%;
          left: 10%;
          width: 24rem;
          height: 24rem;
        }
        .hero-orbit--two::after {
          animation-duration: 22s;
          animation-delay: 3s;
        }
        .hero-scroll-hint {
          position: absolute;
          left: 50%;
          bottom: clamp(24px, 5vh, 52px);
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0.75;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          transition: all 0.3s ease;
        }
        .hero-scroll-hint:hover {
          opacity: 1;
        }
        .hero-scroll-hint:active {
          transform: translateX(-50%) scale(0.95);
        }
        .hero-scroll-hint__text {
          font-size: 9px;
          font-weight: 300;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          font-family: var(--font-geist-sans, sans-serif);
        }
        .hero-scroll-hint__chevron {
          width: 16px;
          height: 16px;
          border-right: 3px solid rgba(255, 255, 255, 1);
          border-bottom: 3px solid rgba(255, 255, 255, 1);
          transform: rotate(45deg);
          animation: heroChevronPulse 1.6s ease-in-out infinite;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.6));
        }
        @keyframes heroChevronPulse {
          0%,
          100% {
            transform: translateY(0) rotate(45deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(8px) rotate(45deg);
            opacity: 1;
          }
        }
        @media (max-width: 1024px) {
          .hero-content {
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            align-items: center;
            letter-spacing: 0.15em;
            padding: 0 1.5rem;
          }
          .hero-title {
            letter-spacing: 0.3em;
          }
          .hero-gradient {
            width: 60vw;
            height: 60vw;
          }
        }
        @media (max-width: 640px) {
          .hero-root {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .hero-content {
            gap: 2.5rem;
            padding: 2rem 1.5rem;
            position: relative;
            top: auto;
            left: auto;
            transform: none;
          }
          .hero-logo {
            width: min(90vw, 600px);
            filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.15));
          }
          .hero-title {
            letter-spacing: 0.25em;
            margin-top: 0.5rem;
            font-size: clamp(16px, 4vw, 28px);
          }
          .hero-tagline {
            letter-spacing: 0.2em;
            font-size: clamp(11px, 3vw, 18px);
            margin-top: 0.25rem;
          }
          .hero-grid {
            background-size: 80px 80px;
            opacity: 0.2;
          }
          .hero-gradient {
            width: 85vw;
            height: 85vw;
            filter: blur(70px);
            opacity: 0.25;
          }
          .hero-gradient--one {
            top: -15%;
            left: -20%;
          }
          .hero-gradient--two {
            bottom: -15%;
            right: -20%;
          }
          .hero-orbit {
            width: 20rem;
            height: 20rem;
            opacity: 0.22;
          }
          .hero-orbit--one {
            top: 15%;
            right: -10%;
          }
          .hero-orbit--two {
            bottom: 15%;
            left: -10%;
            width: 16rem;
            height: 16rem;
          }
        }
      `}</style>
    </div>
  );
}
