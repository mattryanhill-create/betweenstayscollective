import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Listing Setup & Optimization',
    description: 'We create or refine your listing to attract the right guests and maximize bookings.',
    items: [
      'Professional photography coordination',
      'Compelling title and description copy',
      'Strategic photo sequencing',
      'Amenity highlighting',
      'House rules and policy setup',
    ],
  },
  {
    title: 'Guest Communication',
    description: 'Thoughtful, timely responses that convert inquiries and create great guest experiences.',
    items: [
      'Pre-booking inquiry responses',
      'Check-in instructions and support',
      'In-stay communication',
      'Review requests and management',
      'Issue resolution',
    ],
  },
  {
    title: 'Pricing & Calendar',
    description: 'Dynamic pricing strategies that adapt to demand and maximize your revenue.',
    items: [
      'Market-based rate analysis',
      'Seasonal adjustments',
      'Event and holiday pricing',
      'Minimum stay optimization',
      'Calendar management',
    ],
  },
  {
    title: 'Operations & Turnover',
    description: 'Seamless coordination of cleaners and vendors to maintain quality and consistency.',
    items: [
      'Cleaner scheduling and coordination',
      'Quality control checks',
      'Supply restocking',
      'Maintenance issue triage',
      'Vendor relationship management',
    ],
  },
];

export default function Services() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          gsap.fromTo(section.querySelectorAll('.section-animate'),
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              }
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        ref={el => { sectionsRef.current[0] = el; }}
        className="pt-32 pb-20"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-animate section-label mb-6">our services</p>
          <h1 className="section-animate font-serif text-4xl sm:text-5xl text-gray-900 mb-8">
            Full-service co-hosting for Tampa Bay
          </h1>
          <p className="section-animate body-text text-lg max-w-2xl mx-auto">
            We handle the day-to-day so you can enjoy the benefits of short-term rental income without the work. You keep your listing, your reviews, and your control.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section 
        ref={el => { sectionsRef.current[1] = el; }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="section-animate bg-white p-10">
                <h3 className="font-serif text-2xl text-gray-900 mb-4">{service.title}</h3>
                <p className="body-text mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-[#5A7A6A] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section 
        ref={el => { sectionsRef.current[2] = el; }}
        className="py-24 lg:py-32"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-animate section-label mb-4">how it works</p>
            <h2 className="section-animate font-serif text-3xl text-gray-900">
              Three simple steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '1',
                title: 'Free Audit',
                description: 'We review your current listing and identify opportunities for improvement.',
              },
              {
                step: '2',
                title: 'Custom Plan',
                description: 'We create a tailored strategy for your property based on our findings.',
              },
              {
                step: '3',
                title: 'Hands-Off Hosting',
                description: 'We implement and manage everything while you stay in control.',
              },
            ].map((item, i) => (
              <div key={i} className="section-animate text-center">
                <span className="font-serif text-6xl text-gray-200">{item.step}</span>
                <h3 className="font-serif text-xl text-gray-900 mt-4 mb-3">{item.title}</h3>
                <p className="body-text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section 
        ref={el => { sectionsRef.current[3] = el; }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-animate section-label mb-6">pricing</p>
          <h2 className="section-animate font-serif text-3xl text-gray-900 mb-6">
            Simple, transparent pricing
          </h2>
          <p className="section-animate body-text mb-8">
            We charge a percentage of booking revenue—typically 15-25% depending on your property and needs. No setup fees, no monthly retainers, no hidden costs. We only earn when you do.
          </p>
          <div className="section-animate flex items-center justify-center gap-6 text-sm text-gray-500">
            <span>90-day trial period</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Month-to-month after</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        ref={el => { sectionsRef.current[4] = el; }}
        className="py-24 lg:py-32"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="section-animate font-serif text-3xl text-gray-900 mb-6">
            Curious what you could be earning?
          </h2>
          <p className="section-animate body-text mb-10">
            Let's take a look at your listing and see what's possible. No pressure, just honest insights.
          </p>
          <Link to="/audit" className="section-animate btn-primary">
            See what you could be earning
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
