import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { Phone } from 'lucide-react';

const CONDENSED_ROWS = [
  { feature: 'Who handles cleaners & vendors', managerValue: 'You do', betweenStaysValue: 'We do' },
  { feature: 'Your weekly time commitment', managerValue: '10+ hours', betweenStaysValue: '0 hours' },
  { feature: 'Reviews if you leave', managerValue: 'Lost', betweenStaysValue: 'Yours to keep' },
];

const COMPARISON_ROWS = [
  { feature: 'Cleaning coordination', managerValue: 'You or your cleaner handle it', betweenStaysValue: 'We schedule, inspect, and coordinate turnovers' },
  { feature: 'Maintenance & vendors', managerValue: 'You chase vendors and quotes', betweenStaysValue: 'We manage vetted local vendors for you' },
  { feature: 'Emergency response', managerValue: 'You get the 2 AM calls', betweenStaysValue: 'Our local team handles guest issues 24/7' },
  { feature: 'Your weekly time', managerValue: '10+ hours/week on logistics', betweenStaysValue: '0 hours/week on operations' },
  { feature: 'Listing ownership', managerValue: 'Often on their account', betweenStaysValue: 'Always on your account' },
  { feature: 'Reviews if you leave', managerValue: 'You may start from scratch', betweenStaysValue: 'You keep your hard-earned reviews' },
  { feature: 'Effective total cost', managerValue: '30–40% once your time is included', betweenStaysValue: '18–25% for full-service management' },
];

const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Free consultation',
    text: 'We review your current performance, calendar, and guest feedback, then give you a straightforward opinion on whether switching to local full-service management makes sense.',
  },
  {
    step: 2,
    title: 'Contract + timing',
    text: 'We look at your existing agreement and help you choose the right time to give notice so you don\'t lose momentum or upcoming revenue.',
  },
  {
    step: 3,
    title: 'Setup during the notice period',
    text: 'While the notice period runs, we set up your listing under your account, connect co-host access, and get our local vendor team ready.',
  },
  {
    step: 4,
    title: 'Smooth handover',
    text: "We coordinate the changeover so there's no gap in guest support or cleaning—and you keep your reviews and listing history intact.",
  },
];

const FAQ_ITEMS = [
  {
    q: 'Will I lose my reviews if I switch?',
    a: "Our model keeps your listing under your account, not ours. That means your Airbnb or Vrbo reviews stay with you instead of being tied to a manager's profile, so you're not starting from zero when you change partners.",
  },
  {
    q: "Isn't 18–25% more expensive than the 10% I see advertised?",
    a: "Those low headline fees often assume you'll coordinate cleaners, vendors, and guest issues yourself. Once you factor in 10+ hours a week of your time, most owners find full-service local management actually costs less and earns more.",
  },
  {
    q: 'How long does it take to switch from a national manager?',
    a: "Most transitions run 90–120 days end-to-end, driven by your current contract and notice terms. We start prep work right away so we can protect future bookings and avoid gaps on your calendar.",
  },
];

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

export default function TampaAudit() {
  const [formData, setFormData] = useState({
    propertyAddress: '',
    email: '',
  });
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Tampa Bay Owners Leaving National Managers | Between Stays Collective';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Done-for-you Airbnb management for Tampa Bay owners leaving Evolve, Vacasa, Casago, or similar. Keep your reviews, work 0 hours/week, and typically earn more with a local full-service partner.');
    }
    setRobotsMeta('noindex, nofollow');

    return () => {
      setRobotsMeta('index, follow');
    };
  }, []);

  useEffect(() => {
    const heroElements = heroRef.current?.querySelectorAll('.hero-animate');
    if (heroElements && heroElements.length > 0) {
      gsap.fromTo(heroElements,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', delay: 0.1 }
      );
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', { page_location: window.location.href });
    }
    navigate('/owners/tampa-audit/thanks');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCallClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'call_click', { location: 'mobile_sticky_bar' });
    }
  };

  return (
    <div className="bg-white" id="hero-form">
      {/* Minimal header - logo only, non-clickable */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm py-5">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <span className="font-serif text-sm uppercase tracking-[0.2em] text-gray-900 cursor-default">
            Between Stays Collective
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h1 className="hero-animate font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-6">
                Still Coordinating Cleaners While Your &ldquo;Full-Service&rdquo; Manager Takes 30%?
              </h1>
              <p className="hero-animate body-text text-lg mb-4">
                Tampa Bay owners are switching from Evolve, Vacasa & Casago to keep their reviews, reclaim 10+ hours/week, and typically earn more—with a local team that actually handles everything.
              </p>
              <div className="hero-animate flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mb-0">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded bg-gray-100 text-gray-700">
                  Join 200+ Tampa Bay owners who&apos;ve switched
                </span>
                <span>·</span>
                <span>+31% avg revenue increase</span>
                <span>·</span>
                <span>0 hours/week</span>
              </div>
            </div>

            <div className="hero-animate bg-gray-50 border border-gray-100 p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700 mb-2">Property Address *</label>
                  <input
                    id="propertyAddress"
                    type="text"
                    name="propertyAddress"
                    required
                    autoComplete="street-address"
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 min-h-[48px] border border-gray-200 focus:border-gray-900 transition-colors"
                    placeholder="Enter your Tampa Bay property address"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 min-h-[48px] border border-gray-200 focus:border-gray-900 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <button type="submit" className="w-full btn-primary py-4 min-h-[48px]">
                  See My Property&apos;s Potential
                </button>
                <p className="body-text text-sm text-gray-600">
                  Limited to 15 free audits per month. Spring booking season starts now.
                </p>
                <p className="body-text text-xs text-gray-500">
                  No spam. No obligation. Just numbers.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Condensed 3-row comparison table */}
      <section className="py-8 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="font-serif text-left py-2 px-3 text-gray-900 font-semibold">Feature</th>
                  <th className="font-serif text-left py-2 px-3 text-gray-900 font-semibold">Big national manager</th>
                  <th className="font-serif text-left py-2 px-3 text-gray-900 font-semibold">Between Stays Collective</th>
                </tr>
              </thead>
              <tbody>
                {CONDENSED_ROWS.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="py-2 px-3 text-gray-900 font-medium">{row.feature}</td>
                    <td className="py-2 px-3 text-gray-600">{row.managerValue}</td>
                    <td className="py-2 px-3 text-[#5A7A6A] font-medium">{row.betweenStaysValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Full Comparison Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-6">
            National &ldquo;online-first&rdquo; managers vs. true full-service local management
          </h2>
          <p className="body-text text-lg mb-10 max-w-3xl">
            Big national brands handle the listing and booking—but you end up coordinating cleaners, chasing vendors, and answering 2 AM guest texts. Here&apos;s how that compares to a local team that runs everything for you.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="font-serif text-left py-3 px-4 text-gray-900 font-semibold">Feature</th>
                  <th className="font-serif text-left py-3 px-4 text-gray-900 font-semibold">Big national manager</th>
                  <th className="font-serif text-left py-3 px-4 text-gray-900 font-semibold">Between Stays Collective</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="py-3 px-4 text-gray-900 font-medium">{row.feature}</td>
                    <td className="py-3 px-4 text-gray-600">{row.managerValue}</td>
                    <td className="py-3 px-4 text-[#5A7A6A] font-medium">{row.betweenStaysValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Proof / Case-Study Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-10">
            Real results from a Tampa Bay owner
          </h2>
          <div className="bg-gray-50 border border-gray-100 p-8 sm:p-12 max-w-3xl">
            <h3 className="font-serif text-2xl text-gray-900 mb-2">3BR beach house, St. Pete Beach</h3>
            <p className="body-text text-sm mb-6">Out-of-state owner who first tried a national &ldquo;online-only&rdquo; manager before switching to a local team.</p>
            <ul className="space-y-3 mb-8 list-disc list-inside">
              <li className="body-text">Revenue: from $52,000 to $68,000 (+31%)</li>
              <li className="body-text">Occupancy: from 64% to 79%</li>
              <li className="body-text">Reviews: from 4.2 stars to 4.9 stars</li>
              <li className="body-text">Owner time: from 15+ hours/week to 0 hours/week</li>
            </ul>
            <blockquote className="font-serif text-xl text-gray-900 italic border-l-2 border-[#5A7A6A] pl-6 mb-8">
              &ldquo;I actually have my evenings back. I can travel without my phone buzzing, and I&apos;m making more money. I wish I&apos;d switched to a local team sooner.&rdquo;
            </blockquote>
            <div className="text-center">
              <p className="font-serif text-lg text-gray-900 mb-4">Want numbers like this for your property?</p>
              <a href="#hero-form" className="btn-primary min-h-[48px] inline-flex items-center">Get my free property audit</a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-6">
            How switching from a national manager works
          </h2>
          <p className="body-text text-lg mb-10 max-w-3xl">
            Whether you&apos;re with Evolve, Vacasa, Casago, or another national brand, we walk you through a clean transition that protects your bookings and reviews.
          </p>
          <ol className="space-y-8">
            {HOW_IT_WORKS_STEPS.map((item) => (
              <li key={item.step} className="flex gap-6">
                <span className="font-serif text-2xl text-[#5A7A6A] flex-shrink-0">Step {item.step}:</span>
                <div>
                  <h3 className="font-serif text-xl text-gray-900 mb-2">{item.title}</h3>
                  <p className="body-text">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-10">
            Questions Tampa Bay owners ask before switching
          </h2>
          <div className="space-y-6">
            {FAQ_ITEMS.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="font-serif text-lg text-gray-900 mb-2">{faq.q}</h3>
                <p className="body-text">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-24 pb-32 md:pb-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-6">
            Ready to see what a local, full-service partner could do for your property?
          </h2>
          <p className="body-text text-lg mb-8">
            Request a free property audit and get a numbers-first view of how your current manager compares to a Tampa Bay team that runs everything on the ground for you.
          </p>
          <a href="#hero-form" className="btn-primary py-4 px-10 min-h-[48px] inline-flex items-center">
            Get my free property audit
          </a>
        </div>
      </section>

      {/* Sticky bottom CTA bar - mobile only */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden h-14 z-50 bg-[#111827] text-white flex items-center justify-between px-6">
        <a
          href="tel:+18135551234"
          onClick={handleCallClick}
          className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
        >
          <Phone className="w-5 h-5" strokeWidth={1.5} />
          <span className="text-sm font-medium">Call</span>
        </a>
        <a
          href="#hero-form"
          className="btn-primary min-h-[40px] !bg-[#5A7A6A] hover:!bg-[#3D5A4A] text-white text-sm px-4 py-2"
        >
          Get My Free Tampa Audit
        </a>
      </div>
    </div>
  );
}
