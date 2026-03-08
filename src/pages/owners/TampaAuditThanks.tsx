import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function setRobotsMeta(content: string) {
  let el = document.querySelector('meta[name="robots"]');
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', 'robots');
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function TampaAuditThanks() {
  useEffect(() => {
    document.title = 'Thanks for your property audit request | Between Stays Collective';
    setRobotsMeta('noindex, nofollow');

    return () => {
      setRobotsMeta('index, follow');
    };
  }, []);

  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-8">
          Thanks for requesting your property audit.
        </h1>
        <div className="body-text space-y-6 text-left">
          <p>
            We&apos;ll review your property and follow up with a numbers-first breakdown of how your current setup compares to what a local, full-service partner could deliver for you.
          </p>
          <p>
            Depending on what we find, we may reach out with a few quick questions so we can tailor the audit to your specific situation—especially around your current agreement and timeline.
          </p>
          <p>
            You can expect to hear from us within 2–3 business days.
          </p>
        </div>
        <Link to="/" className="inline-block mt-10 btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
