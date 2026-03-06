import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (!section || !image || !content) return;

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
      // Left image from left
      scrollTl
        .fromTo(image, 
          { x: '-60vw', opacity: 0, scale: 1.06 }, 
          { x: 0, opacity: 1, scale: 1, ease: 'none' }, 
          0
        )
        // Right content from right
        .fromTo(content, 
          { x: '40vw', opacity: 0 }, 
          { x: 0, opacity: 1, ease: 'none' }, 
          0.06
        );

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      scrollTl
        .to(image, 
          { x: '-14vw', opacity: 0, ease: 'power2.in' }, 
          0.70
        )
        .to(content, 
          { x: '14vw', opacity: 0, ease: 'power2.in' }, 
          0.70
        );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section-pinned bg-bstay-bg z-[80]"
    >
      {/* Left Image */}
      <div 
        ref={imageRef}
        className="absolute left-0 top-0 w-[56vw] h-full"
      >
        <img 
          src={`${import.meta.env.BASE_URL}testimonial_kitchen.jpg`} 
          alt="Happy homeowner" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Quote Panel */}
      <div 
        ref={contentRef}
        className="absolute left-[56vw] top-0 w-[44vw] h-full flex flex-col justify-center px-[6vw]"
      >
        <blockquote className="font-display text-2xl md:text-3xl font-medium text-bstay-text mb-6 text-balance leading-snug">
          "Between Stays turned our rental into a consistent earner—without us lifting a finger."
        </blockquote>
        <cite className="text-bstay-text-secondary not-italic mb-8">
          Homeowner, Austin, TX
        </cite>
        <a 
          href="#testimonials" 
          className="inline-flex items-center text-bstay-text font-medium hover:text-bstay-accent transition-colors w-fit"
        >
          Read more owner stories
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
