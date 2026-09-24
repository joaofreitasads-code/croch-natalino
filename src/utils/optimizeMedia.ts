/**
 * Utility functions to optimize media delivery for mobile performance.
 */

/**
 * Optimizes image URLs by requesting appropriate dimensions and formats from CDNs.
 * - Atomicat Media (BunnyCDN): adds responsive width & compression parameters.
 * - Imgur: requests huge (1024px) / large (640px) thumbnails instead of raw multi-megabyte PNG files.
 */
export function optimizeImageUrl(url: string, width = 600): string {
  if (!url) return url;

  // BunnyCDN (Atomicat Media) supports on-the-fly resizing and quality reduction
  if (url.includes('media.atomicatmedia.net')) {
    if (url.includes('?')) return url;
    return `${url}?width=${width}&quality=85`;
  }

  // Imgur images: append 'h' (huge 1024px) or 'l' (640px) for 10x-20x smaller file sizes
  if (url.includes('i.imgur.com')) {
    if (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.gif')) {
      return url;
    }
    const match = url.match(/https:\/\/i\.imgur\.com\/([a-zA-Z0-9]+)\.(png|jpg|jpeg|webp)/i);
    if (match) {
      const id = match[1];
      const ext = match[2];
      // Only append if it's a standard ID not already suffixed with a size code
      if (!id.endsWith('h') && !id.endsWith('l') && id.length <= 7) {
        return `https://i.imgur.com/${id}h.${ext}`;
      }
    }
  }

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
