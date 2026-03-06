import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const properties = [
  { image: '/property_01.jpg', label: null },
  { image: '/property_02.jpg', label: 'Project 02' },
  { image: '/property_03.jpg', label: null },
  { image: '/property_04.jpg', label: null },
  { image: '/property_05.jpg', label: 'Project 05' },
  { image: '/property_06.jpg', label: null },
  { image: '/property_07.jpg', label: null },
  { image: '/property_08.jpg', label: null },
  { image: '/property_09.jpg', label: null },
];

export default function OurProperties() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      // Grid items animation
      const items = gridRef.current?.children;
      if (items) {
        gsap.fromTo(items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
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
      id="properties" 
      className="bg-white py-32 px-8 lg:px-16"
    >
      {/* Section Label */}
      <h2 ref={labelRef} className="section-label mb-16">
        our properties
      </h2>

      {/* Property Grid */}
      <div 
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto"
      >
        {properties.map((property, index) => (
          <div 
            key={index}
            className="relative aspect-square overflow-hidden group cursor-pointer"
          >
            <img 
              src={property.image} 
              alt={`Property ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            
            {/* Project Label */}
            {property.label && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-lg italic text-white drop-shadow-lg">
                  {property.label}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
