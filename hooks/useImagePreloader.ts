import { useEffect, useMemo, useState } from 'react';

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function useImagePreloader(urls: string[]) {
  const assets = useMemo(
    () => Array.from(new Set((urls ?? []).filter(Boolean))),
    [urls]
  );
  const initialProgress = assets.length === 0 ? 1 : 0;
  const [progress, setProgress] = useState(initialProgress);
  const [smoothedProgress, setSmoothedProgress] = useState(initialProgress);
  const [isLoaded, setIsLoaded] = useState(() => assets.length === 0);

  useEffect(() => {
    const nextInitial = assets.length === 0 ? 1 : 0;
    setProgress(nextInitial);
    setSmoothedProgress(nextInitial);
    setIsLoaded(assets.length === 0);
  }, [assets]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (assets.length === 0) {
      return;
    }

    let cancelled = false;
    let loadedCount = 0;

    const handleAssetComplete = () => {
      if (cancelled) {
        return;
      }
      loadedCount += 1;
      const nextProgress = loadedCount / assets.length;
      setProgress(clamp(nextProgress, 0, 1));
      if (loadedCount >= assets.length) {
        setIsLoaded(true);
      }
    };

    const imageElements = assets.map((url) => {
      const img = new window.Image();
      let settled = false;
      const finalize = () => {
        if (settled) {
          return;
        }
        settled = true;
        handleAssetComplete();
      };

      img.onload = finalize;
      img.onerror = finalize;
      img.src = url;

      if (img.complete) {
        finalize();
      }

      return img;
    });

    return () => {
      cancelled = true;
      imageElements.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [assets]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setSmoothedProgress(progress);
      return;
    }

    let animationFrame: number;

    const step = () => {
      let shouldContinue = false;
      setSmoothedProgress((previous) => {
        const easingCeiling =
          progress === 1
            ? 1
            : Math.max(progress, Math.min(previous + 0.0025, 0.92));
        const difference = easingCeiling - previous;
        if (Math.abs(difference) < 0.002) {
          shouldContinue = progress < 1;
          return easingCeiling;
        }
        shouldContinue = true;
        return clamp(previous + difference * 0.35, 0, 1);
      });

      if (shouldContinue) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };

    animationFrame = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [progress]);

  return {
    isLoaded,
    progress: smoothedProgress,
  };
}
