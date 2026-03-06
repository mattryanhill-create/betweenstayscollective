import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Star, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const results = [
  {
    icon: TrendingUp,
    stat: '+28%',
    label: 'average revenue',
    description: 'Optimized pricing + listing positioning.',
  },
  {
    icon: Star,
    stat: '4.9★',
    label: 'guest rating',
    description: 'Fast responses and spotless turnovers.',
  },
  {
    icon: Clock,
    stat: '<1hr',
    label: 'response time',
    description: '24/7 guest communication coverage.',
  },
];

export default function ValueProposition() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const cards = cardsRef.current;
    const testimonial = testimonialRef.current;

    if (!section || !headline || !cards || !testimonial) return;

    const ctx = gsap.context(() => {
      // Headline animation
      gsap.fromTo(headline, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: headline,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.4,
          }
        }
      );

      // Cards stagger animation
      gsap.fromTo(cards.children, 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: cards,
            start: 'top 80%',
            end: 'top 45%',
            scrub: 0.5,
          }
        }
      );

      // Testimonial animation
      gsap.fromTo(testimonial, 
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: testimonial,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 0.4,
          }
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-bstay-bg py-[10vh] z-[70]"
    >
      {/* Headline Block */}
      <div ref={headlineRef} className="px-[6vw] mb-[6vh] max-w-4xl">
        <h2 className="font-display text-section text-bstay-text mb-6 text-balance">
          More bookings. Better reviews. Less stress.
        </h2>
        <p className="text-lg text-bstay-text-secondary leading-relaxed">
          We combine hospitality instincts with data-driven pricing and operations—so owners earn more without the daily workload.
        </p>
      </div>

      {/* Result Cards */}
      <div 
        ref={cardsRef}
        className="px-[6vw] grid grid-cols-1 md:grid-cols-3 gap-[3vw] mb-[10vh]"
      >
        {results.map((result, index) => (
          <div 
            key={index}
            className="bg-white p-8 shadow-card hover:shadow-xl transition-shadow duration-300"
          >
            <result.icon className="w-8 h-8 text-bstay-accent mb-4" />
            <div className="font-display text-4xl font-bold text-bstay-text mb-2">
              {result.stat}
            </div>
            <div className="font-medium text-bstay-text mb-2">
              {result.label}
            </div>
            <p className="text-sm text-bstay-text-secondary">
              {result.description}
            </p>
          </div>
        ))}
      </div>

      {/* Testimonial Preview */}
      <div 
        ref={testimonialRef}
        className="mx-[6vw] p-8 bg-bstay-bg-dark text-white"
      >
        <blockquote className="text-xl md:text-2xl font-display font-medium mb-4 text-balance">
          "Between Stays turned our rental into a consistent earner—without us lifting a finger."
        </blockquote>
        <cite className="text-white/60 not-italic">
          Homeowner, Austin, TX
        </cite>
      </div>
    </section>
  );
}
