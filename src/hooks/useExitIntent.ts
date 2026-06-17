import { useEffect, useState } from 'react';

const COOKIE_NAME = 'bsc_exit_intent_shown';
const COOKIE_DAYS = 7;

function setCookie(name: string, value: string, days: number) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

export function useExitIntent(): { show: boolean; dismiss: () => void; markSubmitted: () => void } {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (getCookie(COOKIE_NAME)) return;

    const handler = (e: MouseEvent) => {
      if (e.clientY <= 0 && !getCookie(COOKIE_NAME)) {
        setShow(true);
        setCookie(COOKIE_NAME, '1', COOKIE_DAYS);
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'exit_intent_modal_show', { page_location: window.location.href });
        }
      }
    };

    // Small delay so it doesn't fire on initial pageload mouse position
    const timer = setTimeout(() => {
      document.addEventListener('mouseout', handler);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseout', handler);
    };
  }, []);

  return {
    show,
    dismiss: () => setShow(false),
    markSubmitted: () => {
      setShow(false);
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'exit_intent_email_capture', { page_location: window.location.href });
      }
    },
  };
}
