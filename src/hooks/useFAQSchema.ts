import { useEffect } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

export function useFAQSchema(faqs: FAQ[]) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
    // Remove any existing FAQ schema before appending
    document.getElementById('faq-schema')?.remove();
    document.head.appendChild(script);
    return () => { document.getElementById('faq-schema')?.remove(); };
  }, [faqs]);
}
