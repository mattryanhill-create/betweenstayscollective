import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);

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

      // Paragraphs animation
      paragraphsRef.current.forEach((p, index) => {
        if (p) {
          gsap.fromTo(p,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: index * 0.15,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: p,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              }
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="bg-white py-32 px-8 lg:px-16"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Label */}
        <h2 ref={labelRef} className="section-label mb-16">
          our story
        </h2>

        {/* Story Content */}
        <div className="space-y-8">
          <p 
            ref={el => { paragraphsRef.current[0] = el; }}
            className="body-text"
          >
            Matt and Cherie have spent the past three years living and working remotely across different countries, calling furnished and vacation rentals "home." By experiencing short-term stays as guests day in and day out, they learned exactly what makes a place feel easy, thoughtful, and worth a five-star review.
          </p>
          <p 
            ref={el => { paragraphsRef.current[1] = el; }}
            className="body-text"
          >
            Between Stays Collective grew from that lived experience. With deep familiarity across major booking platforms and a hands-on, detail-driven approach, Matt and Cherie help owners create stays guests love—and listings that perform.
          </p>
          <p 
            ref={el => { paragraphsRef.current[2] = el; }}
            className="body-text"
          >
            They care for each home the way they want to be cared for as guests: with intention, consistency, and pride.
          </p>
        </div>
      </div>
    </section>
  );
}
