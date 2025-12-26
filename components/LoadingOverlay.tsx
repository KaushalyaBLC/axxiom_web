import { useMemo } from 'react';
import type { CSSProperties } from 'react';

type LoadingOverlayProps = {
  progress: number;
  isComplete: boolean;
};

export default function LoadingOverlay({ progress, isComplete }: LoadingOverlayProps) {
  const safeProgress = Math.min(Math.max(progress, 0), 1);
  const glowStrength = 0.35 + safeProgress * 0.45;
  const overlayStyle = useMemo(
    () =>
      ({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        zIndex: 9999,
        fontFamily: "var(--font-geist-sans, 'Geist', system-ui, sans-serif)",
        willChange: 'opacity',
        '--glow-strength': glowStrength,
        '--loader-progress': safeProgress,
      }) as CSSProperties,
    [glowStrength]
  );
  const textStyle = useMemo(
    () =>
      ({
        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
        letterSpacing: '0.6em',
        textTransform: 'uppercase',
        color: '#fff',
        textShadow: `0 0 25px rgba(255, 255, 255, ${glowStrength})`,
        fontWeight: 600,
        willChange: 'transform, opacity',
      }) as CSSProperties,
    [glowStrength]
  );

  return (
    <div
      className={`loading-overlay ${isComplete ? 'loading-overlay--done' : ''}`}
      style={overlayStyle}
    >
      <div className="loading-overlay__shell">
        <span className="loading-overlay__text" style={textStyle}>
          AXXIOM
        </span>
      </div>

      <style jsx>{`
        .loading-overlay {
          transition: opacity 0.6s ease, visibility 0.6s ease;
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }

        .loading-overlay--done {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .loading-overlay__shell {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }

        .loading-overlay__text {
          animation: loaderZoom 2.4s ease-in-out infinite;
        }

        @keyframes loaderZoom {
          0% {
            transform: scale(0.9);
            opacity: 0.7;
            text-shadow: 0 0 20px rgba(255, 255, 255, var(--glow-strength));
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
            text-shadow: 0 0 45px rgba(255, 255, 255, var(--glow-strength));
          }
          100% {
            transform: scale(0.9);
            opacity: 0.7;
            text-shadow: 0 0 20px rgba(255, 255, 255, var(--glow-strength));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loading-overlay__text {
            animation: none;
          }
        }

        @media (max-width: 768px) {
          .loading-overlay__text {
            letter-spacing: 0.4em;
            padding: 0 1rem;
          }
        }

        @media (max-width: 640px) {
          .loading-overlay__shell {
            gap: 1rem;
            padding: 0 1.5rem;
            width: 100%;
          }

          .loading-overlay__text {
            font-size: clamp(1.8rem, 10vw, 3.5rem);
            letter-spacing: 0.3em;
            text-align: center;
          }

          @keyframes loaderZoom {
            0% {
              transform: scale(0.92);
              opacity: 0.75;
              text-shadow: 0 0 15px rgba(255, 255, 255, var(--glow-strength));
            }
            50% {
              transform: scale(1.02);
              opacity: 1;
              text-shadow: 0 0 35px rgba(255, 255, 255, var(--glow-strength));
            }
            100% {
              transform: scale(0.92);
              opacity: 0.75;
              text-shadow: 0 0 15px rgba(255, 255, 255, var(--glow-strength));
            }
          }
        }

        @media (max-width: 480px) {
          .loading-overlay__text {
            font-size: clamp(1.5rem, 12vw, 2.5rem);
            letter-spacing: 0.25em;
          }
        }
      `}</style>
    </div>
  );
}
