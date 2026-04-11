import { useState, useEffect } from 'react';

function setRobotsMeta(content: string) {
  let el = document.querySelector('meta[name="robots"]');
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', 'robots');
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function TampaAuditThanks() {
  const [formData, setFormData] = useState({
    phone: '',
    currentSituation: '',
    biggestHeadache: '',
  });
  const [isProfileSubmitted, setIsProfileSubmitted] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    document.title = 'Thanks for your property audit request | Between Stays Collective';
    setRobotsMeta('noindex, nofollow');

    return () => {
      setRobotsMeta('index, follow');
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(
        "https://drivewayzusa.app.n8n.cloud/webhook/betweenstays-tampa-audit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: "profile-update",
            phone: formData.phone,
            currentSituation: formData.currentSituation,
            biggestHeadache: formData.biggestHeadache,
          }),
        }
      );
    } catch (err) {
      console.error("Webhook error:", err);
    }
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'lead_submit', { page_location: window.location.href });
    }
    setIsProfileSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkip = () => {
    setIsSkipped(true);
  };

  const showThankYouMessage = isProfileSubmitted || isSkipped;

  return (
    <div className="bg-white min-h-screen">
      {/* Minimal header - logo only, non-clickable */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm py-5">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <span className="font-serif text-sm uppercase tracking-[0.2em] text-gray-900 cursor-default">
            Between Stays Collective
          </span>
        </div>
      </header>

      <div className="pt-32 pb-20 flex items-center justify-center min-h-screen">
        <div className="max-w-2xl mx-auto px-6 w-full">
          <h1 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-6">
            Your Tampa property audit is being prepared.
          </h1>
          <p className="body-text text-lg mb-10">
            Check your email within 15 minutes for your personalized report.
          </p>

          {!showThankYouMessage ? (
            <>
              <form onSubmit={handleSubmit} className="space-y-6 mb-8">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 min-h-[48px] border border-gray-200 focus:border-gray-900 transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="currentSituation" className="block text-sm font-medium text-gray-700 mb-2">Current situation</label>
                  <select
                    id="currentSituation"
                    name="currentSituation"
                    value={formData.currentSituation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 min-h-[48px] border border-gray-200 focus:border-gray-900 transition-colors bg-white"
                  >
                    <option value="">Select</option>
                    <option value="Evolve">Evolve</option>
                    <option value="Vacasa">Vacasa</option>
                    <option value="Casago">Casago</option>
                    <option value="Self-managing">Self-managing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="biggestHeadache" className="block text-sm font-medium text-gray-700 mb-2">Biggest headache right now</label>
                  <textarea
                    id="biggestHeadache"
                    name="biggestHeadache"
                    rows={3}
                    value={formData.biggestHeadache}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 transition-colors resize-none"
                    placeholder="Tell us what's frustrating you"
                  />
                </div>
                <button type="submit" className="w-full btn-primary py-4 min-h-[48px]">
                  Complete My Profile
                </button>
              </form>
              <p className="body-text text-sm text-gray-600 mb-2">
                These details help us tailor your audit. You can also{' '}
                <button
                  type="button"
                  onClick={handleSkip}
                  className="text-[#5A7A6A] hover:underline font-medium text-sm"
                >
                  Skip
                </button>
              </p>
            </>
          ) : (
            <p className="font-serif text-xl text-gray-900">
              Thanks! We&apos;ll be in touch shortly.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
