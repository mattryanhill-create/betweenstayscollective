import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Check } from 'lucide-react';

export default function Audit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    listingUrl: '',
    city: '',
    neighborhood: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroElements = heroRef.current?.querySelectorAll('.hero-animate');
      if (heroElements && heroElements.length > 0) {
        gsap.fromTo(heroElements,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', delay: 0.1 }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#5A7A6A] flex items-center justify-center mx-auto mb-8">
            <Check className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
          <h1 className="font-serif text-3xl text-gray-900 mb-4">
            Thank you
          </h1>
          <p className="body-text mb-8">
            We've received your audit request. We'll review your listing and be in touch within 2–3 business days.
          </p>
          <a href="/" className="btn-primary">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="hero-animate section-label mb-6">see what's possible</p>
          <h1 className="hero-animate font-serif text-4xl sm:text-5xl text-gray-900 mb-6">
            Find Out What You Could Be Earning
          </h1>
          <p className="hero-animate body-text text-lg">
            Big management companies take a significant cut—and often leave money on the table. Share your listing and we'll show you what's really possible. No obligation, just honest insights.
          </p>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: 'Visibility Assessment',
                description: 'How your listing performs in search results compared to similar properties.',
              },
              {
                title: 'Presentation Review',
                description: 'Honest feedback on your photos, title, description, and pricing.',
              },
              {
                title: 'Conversion Analysis',
                description: 'What might be preventing guests from booking.',
              },
              {
                title: 'Actionable Recommendations',
                description: 'Specific suggestions for improvement, prioritized by impact.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 text-center">
                <h3 className="font-serif text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="body-text text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20" id="form">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="bg-white border border-gray-100 p-8 sm:p-12">
            <h2 className="font-serif text-2xl text-gray-900 text-center mb-2">
              Let's Take a Look
            </h2>
            <p className="body-text text-center mb-10">
              Share your listing and we'll show you what's possible. We'll be in touch within 2–3 business days.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
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
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Listing URL *
                  </label>
                  <input
                    type="url"
                    name="listingUrl"
                    required
                    value={formData.listingUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 transition-colors"
                    placeholder="https://airbnb.com/rooms/..."
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <select
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 transition-colors bg-white"
                  >
                    <option value="">Select city</option>
                    <option value="tampa">Tampa</option>
                    <option value="st-petersburg">St. Petersburg</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Neighborhood
                  </label>
                  <input
                    type="text"
                    name="neighborhood"
                    value={formData.neighborhood}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 transition-colors"
                    placeholder="e.g., Ybor City"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Anything else you'd like us to know?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 transition-colors resize-none"
                  placeholder="Optional..."
                />
              </div>

              <button type="submit" className="w-full btn-primary py-4">
                Submit Request
              </button>

              <p className="text-xs text-gray-400 text-center">
                We'll review your listing and send our findings within 2–3 business days.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
