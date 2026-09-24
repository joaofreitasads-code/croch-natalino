/**
 * Utility functions to optimize media delivery for mobile performance.
 */

/**
 * Optimizes image URLs by requesting appropriate dimensions and formats from CDNs.
 * - Atomicat Media (BunnyCDN): adds responsive width & compression parameters while preserving PNG alpha transparency.
 * - Imgur: Do NOT append suffixes to PNG images because Imgur converts them to JPEGs, turning transparent backgrounds solid black.
 */
export function optimizeImageUrl(url: string, width = 600): string {
  if (!url) return url;

  // BunnyCDN (Atomicat Media) supports on-the-fly resizing and quality reduction while preserving transparent PNGs
  if (url.includes('media.atomicatmedia.net')) {
    if (url.includes('?')) return url;
    return `${url}?width=${width}&quality=85`;
  }

  // Preserve Imgur PNG images untouched to maintain 100% transparent backgrounds
  return url;
}

/**
 * Derives an ultra-lightweight JPEG poster (approx 40KB) for Imgur video files
 * to prevent mobile network starvation during page load.
 */
export function getVideoPoster(videoUrl?: string): string | undefined {
  if (!videoUrl) return undefined;
  if (videoUrl.includes('i.imgur.com')) {
    return videoUrl.replace(/\.mp4(\?.*)?$/i, '.jpg');
  }
  return undefined;
}
