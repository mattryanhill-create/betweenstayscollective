import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

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
    q: "I'm with Evolve/Vacasa/Casago—does this apply to me?",
    a: "Yes. We regularly talk with owners working with national brands like Evolve, Vacasa, Casago, and similar companies. The process is the same: we review your agreement, plan the right notice period, and handle setup so you don't lose your reviews or bookings.",
  },
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

export default function TampaAudit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
    currentSituation: '',
    biggestHeadache: '',
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
    navigate('/owners/tampa-audit/thanks');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white" id="hero-form">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h1 className="hero-animate font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-6">
                Done-for-you Airbnb management for Tampa Bay owners leaving national managers.
              </h1>
              <p className="hero-animate body-text text-lg mb-4">
                Keep your reviews, work 0 hours/week, and typically earn more with a local, full-service partner.
              </p>
              <p className="hero-animate body-text text-base">
                This page is for Tampa Bay owners currently with Evolve, Vacasa, Casago, or similar companies who are tired of doing the on-the-ground work while a national brand handles only the online piece.
              </p>
            </div>

            <div className="hero-animate bg-gray-50 border border-gray-100 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property address or neighborhood</label>
                  <input
                    type="text"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 transition-colors"
                    placeholder="e.g., St. Pete Beach, Hyde Park"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current situation *</label>
                  <select
                    name="currentSituation"
                    required
                    value={formData.currentSituation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 transition-colors bg-white"
                  >
                    <option value="">Select</option>
                    <option value="evolve">Evolve</option>
                    <option value="vacasa">Vacasa</option>
                    <option value="casago">Casago</option>
                    <option value="self-managing">Self-managing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Biggest headache right now</label>
                  <textarea
                    name="biggestHeadache"
                    rows={3}
                    value={formData.biggestHeadache}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 transition-colors resize-none"
                    placeholder="Optional—tell us what's frustrating you"
                  />
                </div>
                <button type="submit" className="w-full btn-primary py-4">
                  Get my free property audit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
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
              <a href="#hero-form" className="btn-primary">Get my free property audit</a>
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-6">
            Ready to see what a local, full-service partner could do for your property?
          </h2>
          <p className="body-text text-lg mb-8">
            Request a free property audit and get a numbers-first view of how your current manager compares to a Tampa Bay team that runs everything on the ground for you.
          </p>
          <a href="#hero-form" className="btn-primary py-4 px-10">
            Get my free property audit
          </a>
        </div>
      </section>
    </div>
  );
}
