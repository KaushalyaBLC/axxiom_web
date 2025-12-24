'use client'

import { useEffect, useState } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";

export default function LoadingDemoPage() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) {
      return;
    }
    setProgress(0);
    setIsComplete(false);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.random() * 0.15, 1);
        if (next >= 1) {
          setIsComplete(true);
          clearInterval(interval);
          setTimeout(() => setIsRunning(false), 600);
        }
        return next;
      });
    }, 250);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleRestart = () => {
    setIsRunning(true);
    setIsComplete(false);
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-8 p-8">
      {isRunning && <LoadingOverlay progress={progress} isComplete={isComplete} />}

      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-semibold tracking-[0.35em] uppercase">
          Loading Overlay Demo
        </h1>
        <p className="max-w-xl text-sm text-white/70 leading-relaxed">
          This page lets you preview the standalone loading animation. Click the button
          below to replay the glow/zoom loop and ensure it behaves as expected before
          wiring it into other flows.
        </p>
        <button
          type="button"
          onClick={handleRestart}
          className="rounded-full border border-white/30 px-6 py-2 text-xs uppercase tracking-[0.35em] hover:bg-white hover:text-black transition-colors"
        >
          Replay Loader
        </button>
      </div>
    </div>
  );
}
