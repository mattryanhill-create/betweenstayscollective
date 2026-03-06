import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    image: '/process_onboard.jpg',
    title: 'Onboard',
    description: 'Setup, pricing, and listing polish.',
  },
  {
    image: '/process_host.jpg',
    title: 'Host',
    description: 'Guest care, messaging, and coordination.',
  },
  {
    image: '/process_optimize.jpg',
    title: 'Optimize',
    description: 'Reviews, revenue, and repeat stays.',
  },
];

export default function ProcessTriptych() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || !headline || cards.length === 0) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0-30%)
      // Headline drops in
      scrollTl
        .fromTo(headline, 
          { y: '-12vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0
        );

      // Cards rise from bottom (staggered left to right)
      cards.forEach((card, index) => {
        scrollTl.fromTo(card, 
          { y: '100vh', opacity: 0, scale: 0.96 }, 
          { y: 0, opacity: 1, scale: 1, ease: 'none' }, 
          0.04 * index
        );
      });

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      scrollTl
        .to(headline, 
          { opacity: 0, ease: 'power2.in' }, 
          0.70
        );

      cards.forEach((card) => {
        scrollTl.to(card, 
          { y: '-40vh', opacity: 0, ease: 'power2.in' }, 
          0.70
        );
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="process"
      className="section-pinned bg-bstay-bg z-40"
    >
      {/* Headline */}
      <h2 
        ref={headlineRef}
        className="absolute left-[6vw] top-[10vh] font-display text-section text-bstay-text"
      >
        How we work
      </h2>

      {/* Three Cards */}
      {steps.map((step, index) => (
        <div
          key={index}
          ref={el => { cardsRef.current[index] = el; }}
          className="absolute top-[26vh] w-[26vw] h-[64vh] shadow-card overflow-hidden group"
          style={{ left: `${6 + index * 31}vw` }}
        >
          <img 
            src={`${import.meta.env.BASE_URL}${step.image.replace(/^\//, '')}`}
            alt={step.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Step Label */}
          <div className="absolute bottom-[6vh] left-0 right-0 px-6 text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-white/80">
              {step.description}
            </p>
          </div>

          {/* Step Number */}
          <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-bstay-accent flex items-center justify-center">
            <span className="font-display font-bold text-bstay-text">
              {index + 1}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
