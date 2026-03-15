import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useCanonical() {
  const { pathname } = useLocation();
  useEffect(() => {
    const url = `https://www.betweenstaysco.com${pathname === '/' ? '' : pathname}`;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }, [pathname]);
}
