import { useMemo } from 'react';
import type { CSSProperties } from 'react';

type LoadingOverlayProps = {
  progress: number;
  isComplete: boolean;
};

export default function LoadingOverlay({ progress, isComplete }: LoadingOverlayProps) {
  const safeProgress = Math.min(Math.max(progress, 0), 1);
  const glowStrength = 0.6 + safeProgress * 0.4;
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
        '--glow-strength': glowStrength,
      }) as CSSProperties,
    [glowStrength]
  );
  const textStyle = useMemo(
    () =>
      ({
        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
        letterSpacing: '0.8em',
        textTransform: 'uppercase',
        color: '#fff',
        textShadow: `0 0 30px rgba(255, 255, 255, ${glowStrength})`,
        fontWeight: 600,
      }) as CSSProperties,
    [glowStrength]
  );

  return (
    <div
      className={`loading-overlay ${isComplete ? 'loading-overlay--done' : ''}`}
      style={overlayStyle}
    >
      <span className="loading-overlay__text" style={textStyle}>
        AXXIOM
      </span>

      <style jsx>{`
        .loading-overlay {
          transition: opacity 0.6s ease, visibility 0.6s ease;
          opacity: 1;
          visibility: visible;
        }

        .loading-overlay--done {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
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
      `}</style>
    </div>
  );
}
