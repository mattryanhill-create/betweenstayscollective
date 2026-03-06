import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function DetailPanel() {
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
          { x: '-60vw', opacity: 0, scale: 1.05 }, 
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
          { x: '-18vw', opacity: 0, ease: 'power2.in' }, 
          0.70
        )
        .to(content, 
          { x: '18vw', opacity: 0, ease: 'power2.in' }, 
          0.70
        );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section-pinned bg-bstay-bg z-50"
    >
      {/* Left Image */}
      <div 
        ref={imageRef}
        className="absolute left-0 top-0 w-[56vw] h-full"
      >
        <img 
          src={`${import.meta.env.BASE_URL}detail_laundry.jpg`} 
          alt="Detail care" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Panel */}
      <div 
        ref={contentRef}
        className="absolute left-[56vw] top-0 w-[44vw] h-full flex flex-col justify-center px-[6vw]"
      >
        <h2 className="font-display text-section text-bstay-text mb-6 text-balance">
          The details matter.
        </h2>
        <p className="text-lg text-bstay-text-secondary leading-relaxed mb-8">
          Linens, lighting, supplies, and staging—checked and reset every time.
        </p>
        <button className="btn-secondary w-fit">
          See turnover standards
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
