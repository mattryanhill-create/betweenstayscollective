import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, Building2, Calendar, MessageSquare, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { icon: Home, name: 'Airbnb' },
  { icon: Building2, name: 'Vrbo' },
  { icon: Calendar, name: 'Booking.com' },
  { icon: MessageSquare, name: 'Guesty' },
  { icon: TrendingUp, name: 'PriceLabs' },
];

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const logos = logosRef.current;

    if (!section || !text || !logos) return;

    const ctx = gsap.context(() => {
      // Text animation
      gsap.fromTo(text, 
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: text,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 0.4,
          }
        }
      );

      // Logos stagger animation
      gsap.fromTo(logos.children, 
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          scrollTrigger: {
            trigger: logos,
            start: 'top 80%',
            end: 'top 50%',
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
      className="relative bg-bstay-bg py-[10vh] z-[90]"
    >
      {/* Centered Text */}
      <div ref={textRef} className="text-center px-[6vw] mb-[4vh] max-w-3xl mx-auto">
        <h2 className="font-display text-section text-bstay-text mb-4">
          Integrated with the platforms you use.
        </h2>
        <p className="text-lg text-bstay-text-secondary">
          We sync with major booking channels and tools to keep calendars, pricing, and messaging in one place.
        </p>
      </div>

      {/* Logo Row */}
      <div 
        ref={logosRef}
        className="flex flex-wrap justify-center items-center gap-8 md:gap-[6vw] px-[6vw] py-[4vh]"
      >
        {partners.map((partner, index) => (
          <div 
            key={index}
            className="flex flex-col items-center gap-3 text-bstay-text-secondary hover:text-bstay-text transition-colors"
          >
            <partner.icon className="w-10 h-10" strokeWidth={1.5} />
            <span className="text-sm font-medium">{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
