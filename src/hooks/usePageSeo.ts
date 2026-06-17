import { useEffect } from 'react';
import type { PageSeo } from '@/types/seo';

export function usePageSeo(seo: PageSeo) {
  useEffect(() => {
    document.title = seo.title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', seo.description);
    setMeta('og:title', seo.title, true);
    setMeta('og:description', seo.description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', seo.canonical, true);
    if (seo.ogImage) setMeta('og:image', seo.ogImage, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', seo.title);
    setMeta('twitter:description', seo.description);
    if (seo.ogImage) setMeta('twitter:image', seo.ogImage);

    // Schema JSON-LD
    const SCHEMA_ID = 'page-schema-jsonld';
    document.getElementById(SCHEMA_ID)?.remove();
    if (seo.schemaJson) {
      const script = document.createElement('script');
      script.id = SCHEMA_ID;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(seo.schemaJson);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(SCHEMA_ID)?.remove();
    };
  }, [seo.title, seo.description, seo.canonical, seo.ogImage, seo.schemaJson]);
}
