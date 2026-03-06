import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  'Listing Setup & Optimization',
  'Guest Communication',
  'Turnover Management',
  'Vendor Coordination',
  'Revenue Management',
  'Strategic Property Improvements',
  'Owner Reporting & Dashboards',
];

export default function OurServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label animation
      gsap.fromTo(labelRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: labelRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // List items animation
      const items = listRef.current?.children;
      if (items) {
        gsap.fromTo(items,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: listRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="bg-white py-32 px-8 lg:px-16"
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Section Label */}
        <h2 ref={labelRef} className="section-label mb-16">
          our services
        </h2>

        {/* Services List */}
        <ul ref={listRef} className="space-y-5">
          {services.map((service, index) => (
            <li 
              key={index}
              className="font-sans text-lg font-light text-gray-700"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
