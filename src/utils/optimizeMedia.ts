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

  // BunnyCDN (Atomicat Media): supports on-the-fly resizing, quality compression, and WebP format
  if (url.includes('media.atomicatmedia.net')) {
    const baseUrl = url.split('?')[0];
    return `${baseUrl}?width=${width}&quality=80&format=webp`;
  }

  // Imgur: supports .webp natively with full alpha transparency preservation and ~90% file size reduction
  if (url.includes('i.imgur.com')) {
    if (url.includes('.mp4')) return url;
    return url.replace(/\.(png|jpe?g)(\?.*)?$/i, '.webp');
  }

  return url;
}

/**
 * Derives an ultra-lightweight JPEG poster (approx 40KB) for Imgur video files
 * to render the first frame instantaneously before playback.
 */
export function getVideoPoster(videoUrl?: string): string | undefined {
  if (!videoUrl) return undefined;
  if (videoUrl.includes('i.imgur.com')) {
    return videoUrl.replace(/\.mp4(\?.*)?$/i, '.jpg');
  }
  return undefined;
}
