import { useEffect, useMemo, useState } from 'react';

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function useImagePreloader(urls: string[]) {
  const assets = useMemo(
    () => Array.from(new Set((urls ?? []).filter(Boolean))),
    [urls]
  );
  const [progress, setProgress] = useState(() =>
    assets.length === 0 ? 1 : 0
  );
  const [isLoaded, setIsLoaded] = useState(() => assets.length === 0);

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

  return {
    isLoaded,
    progress,
  };
}
