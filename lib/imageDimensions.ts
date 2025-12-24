type AssetDimensions = {
  naturalWidth: number
  naturalHeight: number
}

const assetDimensions: Record<string, AssetDimensions> = {
  '/white-3.png': { naturalWidth: 3733, naturalHeight: 568 },
  '/clients/buffalo_contractors.png': { naturalWidth: 216, naturalHeight: 81 },
  '/clients/ceylone_marine.png': { naturalWidth: 600, naturalHeight: 300 },
  '/clients/legacy_liquour_logo.png': { naturalWidth: 150, naturalHeight: 150 },
  '/clients/lichaly_store_logo.png': { naturalWidth: 504, naturalHeight: 495 },
  '/clients/machma_logo.png': { naturalWidth: 500, naturalHeight: 380 },
  '/team/chamika.jpg': { naturalWidth: 1200, naturalHeight: 1200 },
  '/team/chanupa.jpg': { naturalWidth: 1280, naturalHeight: 1280 },
  '/team/ashan.jpg': {
    naturalWidth: 2403,
    naturalHeight: 2566,
  },
  '/team/yomal.jpg': {
    naturalWidth: 2046,
    naturalHeight: 2046,
  },
  '/team/arman.jpg': {
    naturalWidth: 969,
    naturalHeight: 910,
  },
} as const

export function getNaturalImageDimensions(
  src: string,
): AssetDimensions | undefined {
  return assetDimensions[src]
}

export function getScaledImageDimensions(
  src: string,
  targetWidth: number,
  fallbackHeight = targetWidth,
) {
  const natural = getNaturalImageDimensions(src)
  if (!natural) {
    return {
      width: targetWidth,
      height: fallbackHeight,
    }
  }

  const scaledHeight = Math.max(
    1,
    Math.round((targetWidth * natural.naturalHeight) / natural.naturalWidth),
  )

  return {
    width: targetWidth,
    height: scaledHeight,
  }
}
