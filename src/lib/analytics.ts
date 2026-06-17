declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type EventName =
  | 'audit_cta_click'
  | 'faq_expand'
  | 'internal_link_click'
  | 'exit_intent_modal_show'
  | 'exit_intent_email_capture'
  | 'scroll_25'
  | 'scroll_50'
  | 'scroll_75'
  | 'scroll_100';

export function trackEvent(name: EventName, params: Record<string, unknown> = {}): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, { page_location: window.location.href, ...params });
  }
}

export function initScrollDepth(): () => void {
  const marks = [25, 50, 75, 100];
  const fired = new Set<number>();

  const handler = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const pct = Math.round((scrollTop / docHeight) * 100);
    marks.forEach((m) => {
      if (pct >= m && !fired.has(m)) {
        fired.add(m);
        trackEvent(`scroll_${m}` as EventName);
      }
    });
  };

  window.addEventListener('scroll', handler, { passive: true });
  return () => window.removeEventListener('scroll', handler);
}
