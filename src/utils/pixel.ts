// Helper for Meta / Facebook Pixel events

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const trackPixelEvent = (event: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      if (params) {
        window.fbq('track', event, params);
      } else {
        window.fbq('track', event);
      }
    } catch (e) {
      console.error('Meta Pixel error:', e);
    }
  }
};
