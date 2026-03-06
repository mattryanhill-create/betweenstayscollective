import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, FileText, MessageCircle, RefreshCw, Users, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: FileText, label: 'Listing Setup & Optimization' },
  { icon: MessageCircle, label: 'Guest Communication' },
  { icon: RefreshCw, label: 'Turnover Management' },
  { icon: Users, label: 'Vendor Coordination' },
  { icon: TrendingUp, label: 'Revenue Management' },
];

export default function ServicesMosaic() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const serviceListRef = useRef<HTMLUListElement>(null);
  const imageBaseRef = useRef<HTMLDivElement>(null);
  const imageMidRef = useRef<HTMLDivElement>(null);
  const imageTopRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const serviceList = serviceListRef.current;
    const imageBase = imageBaseRef.current;
    const imageMid = imageMidRef.current;
    const imageTop = imageTopRef.current;

    if (!section || !headline || !serviceList || !imageBase || !imageMid || !imageTop) return;

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
      // Images stack in from right
      scrollTl
        .fromTo(imageBase, 
          { x: '60vw', opacity: 0, scale: 1.08 }, 
          { x: 0, opacity: 1, scale: 1, ease: 'none' }, 
          0
        )
        .fromTo(imageMid, 
          { x: '60vw', opacity: 0, scale: 1.08 }, 
          { x: 0, opacity: 1, scale: 1, ease: 'none' }, 
          0.04
        )
        .fromTo(imageTop, 
          { x: '60vw', opacity: 0, scale: 1.08 }, 
          { x: 0, opacity: 1, scale: 1, ease: 'none' }, 
          0.08
        )
        // Headline from left
        .fromTo(headline, 
          { x: '-40vw', opacity: 0 }, 
          { x: 0, opacity: 1, ease: 'none' }, 
          0.05
        )
        // Service list items
        .fromTo(serviceList.children, 
          { y: 24, opacity: 0 }, 
          { y: 0, opacity: 1, stagger: 0.02, ease: 'none' }, 
          0.10
        );

      // SETTLE (30-70%): Hold positions

      // EXIT (70-100%)
      scrollTl
        .to([imageBase, imageMid, imageTop], 
          { x: '-40vw', opacity: 0, scale: 1.05, ease: 'power2.in' }, 
          0.70
        )
        .to(headline, 
          { x: '-18vw', opacity: 0, ease: 'power2.in' }, 
          0.70
        )
        .to(serviceList.children, 
          { y: -16, opacity: 0, ease: 'power2.in' }, 
          0.70
        );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="services"
      className="section-pinned bg-bstay-bg z-20"
    >
      {/* Left Content */}
      <div className="absolute left-[6vw] top-[18vh] w-[34vw]">
        {/* Headline Block */}
        <div ref={headlineRef}>
          <h2 className="font-display text-section text-bstay-text mb-6 text-balance">
            Everything your listing needs.
          </h2>
          <p className="text-lg text-bstay-text-secondary leading-relaxed mb-8">
            From listing setup to turnover coordination, we handle the details that drive reviews and revenue.
          </p>
        </div>

        {/* Service List */}
        <ul ref={serviceListRef} className="space-y-4 mb-8">
          {services.map((service, index) => (
            <li 
              key={index}
              className="flex items-center gap-3 text-bstay-text"
            >
              <service.icon className="w-5 h-5 text-bstay-accent" />
              <span className="font-medium">{service.label}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="btn-secondary">
          Explore services
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      {/* Right Mosaic Stack */}
      <div 
        ref={imageBaseRef}
        className="absolute left-[52vw] top-[14vh] w-[42vw] h-[72vh] shadow-card"
      >
        <img 
          src="/services_living.jpg" 
          alt="Living space" 
          className="w-full h-full object-cover"
        />
      </div>

      <div 
        ref={imageMidRef}
        className="absolute left-[58vw] top-[22vh] w-[36vw] h-[56vh] shadow-card"
      >
        <img 
          src="/services_bedroom.jpg" 
          alt="Bedroom detail" 
          className="w-full h-full object-cover"
        />
      </div>

      <div 
        ref={imageTopRef}
        className="absolute left-[64vw] top-[30vh] w-[30vw] h-[42vh] shadow-card"
      >
        <img 
          src="/services_bathroom.jpg" 
          alt="Bathroom detail" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
