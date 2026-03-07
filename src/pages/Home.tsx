import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MANAGER_ALTERNATIVES = [
  {
    title: 'Switching from Vacasa',
    description:
      'See how moving from Vacasa to Between Stays lets you keep your reviews, lower your effective fees, and gain a truly local team.',
    href: '#/blog/vacasa-alternative-in-tampa-bay',
  },
  {
    title: 'Switching from Evolve',
    description:
      'Tired of doing the on-the-ground work while Evolve handles the online piece? Learn what changes when Between Stays runs everything.',
    href: '#/blog/evolve-alternative-in-tampa-bay',
  },
  {
    title: 'Switching from Casago',
    description:
      'Concerned about the Casago–Vacasa merger? Explore what a stable, non-franchise partner in Tampa Bay looks like with Between Stays.',
    href: '#/blog/casago-alternative-in-tampa-bay',
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroElements = heroRef.current?.querySelectorAll('.hero-animate');
      if (heroElements && heroElements.length > 0) {
        gsap.fromTo(heroElements,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out', delay: 0.3 }
        );
      }

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
      {/* Hero Section - Full height with centered text like original */}
      <section 
        ref={heroRef}
        className="min-h-screen relative flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <img 
            src={`${import.meta.env.BASE_URL}hero_tampa.jpg`} 
            alt="Tampa Bay" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center px-6">
          <p className="hero-animate text-xs font-normal uppercase tracking-[0.2em] text-white/70 mb-8">
            Tampa Bay Co-Hosting
          </p>
          <h1 className="hero-animate font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Between Stays
          </h1>
          <p className="hero-animate font-serif text-xl sm:text-2xl text-white/90 tracking-wide mb-12">
            Collective
          </p>
          <div className="hero-animate flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/audit" className="btn-primary bg-white/90 text-gray-900 hover:bg-white">
              See what you could be earning
            </Link>
            <Link to="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-gray-900">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Section - Centered like original */}
      <section 
        ref={el => { sectionsRef.current[0] = el; }}
        className="py-24 lg:py-32"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-animate section-label mb-12">our story</p>
          <div className="section-animate space-y-8 body-text">
            <p>
              Matt and Cherie have spent the past three years living and working remotely across different countries, calling furnished and vacation rentals "home." By experiencing short-term stays as guests day in and day out, they learned exactly what makes a place feel easy, thoughtful, and worth a five-star review.
            </p>
            <p>
              Between Stays Collective grew from that lived experience. With deep familiarity across major booking platforms and a hands-on, detail-driven approach, Matt and Cherie help owners create stays guests love—and listings that perform.
            </p>
            <p>
              They care for each home the way they want to be cared for as guests: with intention, consistency, and pride.
            </p>
          </div>
          <div className="section-animate mt-12">
            <Link to="/about" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Read more about us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services Section - Centered label like original */}
      <section 
        ref={el => { sectionsRef.current[1] = el; }}
        className="py-24 lg:py-32 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-animate section-label mb-4">our services</p>
            <h2 className="section-animate font-serif text-3xl text-gray-900">
              Everything your listing needs
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Listing Optimization',
                description: 'Professional photos, compelling copy, and strategic positioning to help your property stand out.',
              },
              {
                title: 'Guest Communication',
                description: 'Thoughtful, timely responses that convert inquiries into bookings and create great first impressions.',
              },
              {
                title: 'Operations Management',
                description: 'Cleaner coordination, turnover scheduling, and issue resolution so nothing falls through the cracks.',
              },
            ].map((service, i) => (
              <div key={i} className="section-animate bg-white p-8 text-center">
                <h3 className="font-serif text-xl text-gray-900 mb-4">{service.title}</h3>
                <p className="body-text">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="section-animate text-center mt-12">
            <Link to="/services" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors">
              See all services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work Section - Like original process section */}
      <section 
        ref={el => { sectionsRef.current[2] = el; }}
        className="py-24 lg:py-32"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-animate section-label mb-4">how we work</p>
            <h2 className="section-animate font-serif text-3xl text-gray-900">
              A thoughtful approach to better performance
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { step: '01', title: 'Visibility', desc: 'Getting seen in search' },
              { step: '02', title: 'Engagement', desc: 'Getting clicked' },
              { step: '03', title: 'Conversion', desc: 'Getting booked' },
              { step: '04', title: 'Operations', desc: 'Earning great reviews' },
            ].map((item, i) => (
              <div key={i} className="section-animate">
                <span className="font-serif text-5xl text-gray-200">{item.step}</span>
                <h3 className="font-serif text-xl text-gray-900 mt-4 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tampa Bay Section - Image left, text right */}
      <section 
        ref={el => { sectionsRef.current[3] = el; }}
        className="py-24 lg:py-32 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="section-animate">
              <img 
                src={`${import.meta.env.BASE_URL}tampa_skyline.jpg`} 
                alt="Tampa Bay" 
                className="w-full"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="section-animate section-label mb-6">tampa bay</p>
              <h2 className="section-animate font-serif text-3xl text-gray-900 mb-6">
                This is our home
              </h2>
              <div className="section-animate space-y-4 body-text">
                <p>
                  We're not a national call center or a faceless management company. We're Tampa Bay locals who understand what makes this market tick.
                </p>
                <p>
                  From Ybor City's historic charm to St. Pete Beach's coastal appeal, we know the neighborhoods, the seasons, and the guests who visit them.
                </p>
                <p>
                  We intentionally keep our portfolio small and selective, so every property gets the attention it deserves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section - Centered like original */}
      <section 
        ref={el => { sectionsRef.current[4] = el; }}
        className="py-24 lg:py-32"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-animate section-label mb-8">from our hosts</p>
          <blockquote className="section-animate font-serif text-2xl sm:text-3xl text-gray-900 italic leading-relaxed mb-8">
            "Between Stays turned our rental into a consistent earner—without us lifting a finger."
          </blockquote>
          <cite className="section-animate text-sm text-gray-500 not-italic">
            — Homeowner, Tampa, FL
          </cite>
        </div>
      </section>

      {/* Manager Alternatives Section - 3 cards linking to blog posts */}
      <section 
        ref={el => { sectionsRef.current[5] = el; }}
        className="py-24 lg:py-32 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-animate section-label text-sm uppercase tracking-[0.18em] text-neutral-500">
              for vacasa, evolve & casago hosts
            </p>
            <h2 className="section-animate mt-2 text-2xl font-semibold text-neutral-900">
              Considering a switch to a local manager?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {MANAGER_ALTERNATIVES.map((item, i) => (
              <Link
                key={i}
                to={item.href}
                className="section-animate group block bg-white p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="font-serif text-xl text-gray-900 mb-4 group-hover:text-[#5A7A6A] transition-colors">{item.title}</h3>
                <p className="body-text mb-6">{item.description}</p>
                <span className="inline-flex items-center text-sm text-gray-500 group-hover:text-[#5A7A6A] transition-colors">
                  Read more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Simple, elegant */}
      <section 
        ref={el => { sectionsRef.current[6] = el; }}
        className="py-24 lg:py-32 bg-[#5A7A6A]"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="section-animate font-serif text-3xl sm:text-4xl text-white mb-6">
            Wondering what you're leaving on the table?
          </h2>
          <p className="section-animate text-white/80 mb-10 font-light">
            Big managers like Evolve and Vacasa take a significant cut—and often leave money on the table. Let's see what your listing could really earn.
          </p>
          <Link to="/audit" className="section-animate inline-block px-10 py-4 bg-white text-gray-900 text-sm tracking-wide hover:bg-gray-100 transition-colors">
            See what you could be earning
          </Link>
        </div>
      </section>
    </div>
  );
}
