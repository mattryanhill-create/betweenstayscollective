import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useFAQSchema } from '@/hooks/useFAQSchema';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { question: 'What is Between Stays Collective?', answer: 'Between Stays Collective is a local, hands-on co-hosting company serving Tampa and St. Petersburg, Florida. We help self-managing Airbnb and VRBO hosts earn more through thoughtful optimization and professional management.' },
  { question: 'Who are Matt and Cherie?', answer: 'Matt and Cherie are the co-founders. They spent three years living in short-term rentals across different countries, experiencing firsthand what makes a stay memorable. This guest perspective informs everything they do.' },
  { question: 'What areas do you serve?', answer: 'We specialize in Tampa and St. Petersburg, Florida. In Tampa: Ybor City, Channel District, Hyde Park, Seminole Heights, Downtown. In St. Pete: Downtown, St. Pete Beach, Pass-a-Grille, North St. Petersburg, Gulfport.' },
  { question: 'What does co-hosting include?', answer: 'We handle listing optimization, guest communication, pricing strategy, calendar management, cleaner coordination, and issue resolution. You keep your listing and maintain full control.' },
  { question: 'How do I get started?', answer: 'Start by requesting a free audit. We will review your listing and share our findings within 2-3 business days. If we are a good fit, we will propose a plan tailored to your property.' },
  { question: 'How long before I see results?', answer: 'Most hosts notice improvements within 30 days, with more significant changes by 90 days. Results vary based on your starting point and market conditions.' },
  { question: 'How much does it cost?', answer: 'We charge a percentage of booking revenue—typically 15-25% depending on your property and needs. No setup fees, no monthly retainers. We only earn when you do.' },
  { question: 'Are there long-term contracts?', answer: 'No. We start with a 90-day trial period. After that, we move to month-to-month. You can cancel anytime with 30 days notice.' },
  { question: 'Do you charge setup fees?', answer: 'No setup fees for full-service co-hosting. For one-time listing optimization projects, we charge a flat fee based on scope.' },
  { question: "I'm with Vacasa, Evolve, or Casago—can I switch?", answer: "Yes. We've written guides for each: Vacasa alternative, Evolve alternative, and Casago alternative. You keep your listing and reviews—we're added as co-hosts. Most switches are complete within 1–2 weeks." },
  { question: 'Do I keep control of my listing?', answer: 'Yes. Your listing stays in your Airbnb or VRBO account. You maintain full ownership and control. We operate as co-hosts with permissions you set.' },
  { question: 'What happens to my reviews?', answer: 'You keep everything. All reviews earned while we work together stay on your account. If we part ways, you walk away with your entire reputation intact.' },
  { question: 'Can I still access my listing?', answer: 'Absolutely. You retain full access and can see all activity, messages, and performance data.' },
];

const faqCategories = [
  {
    title: 'About the Business',
    faqs: [
      {
        q: 'What is Between Stays Collective?',
        a: 'Between Stays Collective is a local, hands-on co-hosting company serving Tampa and St. Petersburg, Florida. We help self-managing Airbnb and VRBO hosts earn more through thoughtful optimization and professional management.',
      },
      {
        q: 'Who are Matt and Cherie?',
        a: 'Matt and Cherie are the co-founders. They spent three years living in short-term rentals across different countries, experiencing firsthand what makes a stay memorable. This guest perspective informs everything they do.',
      },
      {
        q: 'What areas do you serve?',
        a: 'We specialize in Tampa and St. Petersburg, Florida. In Tampa: Ybor City, Channel District, Hyde Park, Seminole Heights, Downtown. In St. Pete: Downtown, St. Pete Beach, Pass-a-Grille, North St. Petersburg, Gulfport.',
      },
    ],
  },
  {
    title: 'How It Works',
    faqs: [
      {
        q: 'What does co-hosting include?',
        a: 'We handle listing optimization, guest communication, pricing strategy, calendar management, cleaner coordination, and issue resolution. You keep your listing and maintain full control.',
      },
      {
        q: 'How do I get started?',
        a: 'Start by requesting a free audit. We will review your listing and share our findings within 2-3 business days. If we are a good fit, we will propose a plan tailored to your property.',
      },
      {
        q: 'How long before I see results?',
        a: 'Most hosts notice improvements within 30 days, with more significant changes by 90 days. Results vary based on your starting point and market conditions.',
      },
    ],
  },
  {
    title: 'Pricing & Contracts',
    faqs: [
      {
        q: 'How much does it cost?',
        a: 'We charge a percentage of booking revenue—typically 15-25% depending on your property and needs. No setup fees, no monthly retainers. We only earn when you do.',
      },
      {
        q: 'Are there long-term contracts?',
        a: 'No. We start with a 90-day trial period. After that, we move to month-to-month. You can cancel anytime with 30 days notice.',
      },
      {
        q: 'Do you charge setup fees?',
        a: 'No setup fees for full-service co-hosting. For one-time listing optimization projects, we charge a flat fee based on scope.',
      },
    ],
  },
  {
    title: 'Switching Managers',
    faqs: [
      {
        q: "I'm with Vacasa, Evolve, or Casago—can I switch?",
        a: (
          <>
            Yes. We've written guides for each: <Link to="/blog/vacasa-alternative-in-tampa-bay" className="text-[#5A7A6A] hover:text-[#3D5A4A]">Vacasa alternative</Link>, <Link to="/blog/evolve-alternative-in-tampa-bay" className="text-[#5A7A6A] hover:text-[#3D5A4A]">Evolve alternative</Link>, and <Link to="/blog/casago-alternative-in-tampa-bay" className="text-[#5A7A6A] hover:text-[#3D5A4A]">Casago alternative</Link>. You keep your listing and reviews—we're added as co-hosts. Most switches are complete within 1–2 weeks.
          </>
        ),
      },
    ],
  },
  {
    title: 'Your Listing',
    faqs: [
      {
        q: 'Do I keep control of my listing?',
        a: 'Yes. Your listing stays in your Airbnb or VRBO account. You maintain full ownership and control. We operate as co-hosts with permissions you set.',
      },
      {
        q: 'What happens to my reviews?',
        a: 'You keep everything. All reviews earned while we work together stay on your account. If we part ways, you walk away with your entire reputation intact.',
      },
      {
        q: 'Can I still access my listing?',
        a: 'Absolutely. You retain full access and can see all activity, messages, and performance data.',
      },
    ],
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useFAQSchema(faqs);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroElements = heroRef.current?.querySelectorAll('.hero-animate');
      if (heroElements && heroElements.length > 0) {
        gsap.fromTo(heroElements,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.1 }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  const toggleFaq = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="hero-animate section-label mb-6">faq</p>
          <h1 className="hero-animate font-serif text-4xl sm:text-5xl text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="hero-animate body-text">
            Everything you might want to know about working with us.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="font-serif text-xl text-gray-900 mb-6">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const key = `${catIndex}-${faqIndex}`;
                  const isOpen = openIndex === key;
                  return (
                    <div 
                      key={key}
                      className="bg-white border border-gray-100 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(key)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900 pr-4">{faq.q}</span>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                          strokeWidth={1.5}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5">
                          <p className="body-text">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="body-text mb-8">
            We are happy to chat. Let's look at your listing together and see what's possible.
          </p>
          <Link to="/audit" className="btn-primary">
            See what you could be earning
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
