import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function GalleryWall() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const topRightRef = useRef<HTMLDivElement>(null);
  const bottomRightRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const leftImage = leftImageRef.current;
    const topRight = topRightRef.current;
    const bottomRight = bottomRightRef.current;
    const text = textRef.current;

    if (!section || !leftImage || !topRight || !bottomRight || !text) return;

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
      // Left tall image from left
      scrollTl
        .fromTo(leftImage, 
          { x: '-60vw', opacity: 0 }, 
          { x: 0, opacity: 1, ease: 'none' }, 
          0
        )
        // Top-right from right
        .fromTo(topRight, 
          { x: '60vw', opacity: 0 }, 
          { x: 0, opacity: 1, ease: 'none' }, 
          0.05
        )
        // Bottom-right from bottom
        .fromTo(bottomRight, 
          { y: '60vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0.10
        )
        // Text fades in
        .fromTo(text, 
          { y: 24, opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0.14
        );

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      scrollTl
        .to(leftImage, 
          { x: '-18vw', opacity: 0, ease: 'power2.in' }, 
          0.70
        )
        .to(topRight, 
          { y: '-10vh', opacity: 0, ease: 'power2.in' }, 
          0.70
        )
        .to(bottomRight, 
          { y: '18vh', opacity: 0, ease: 'power2.in' }, 
          0.70
        )
        .to(text, 
          { opacity: 0, ease: 'power2.in' }, 
          0.70
        );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="portfolio"
      className="section-pinned bg-bstay-bg z-[60]"
    >
      {/* Left Tall Image */}
      <div 
        ref={leftImageRef}
        className="absolute left-[6vw] top-[10vh] w-[28vw] h-[80vh] shadow-card overflow-hidden"
      >
        <img 
          src={`${import.meta.env.BASE_URL}gallery_bathroom.jpg`} 
          alt="Bathroom gallery" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top-Right Image */}
      <div 
        ref={topRightRef}
        className="absolute left-[36vw] top-[10vh] w-[58vw] h-[38vh] shadow-card overflow-hidden"
      >
        <img 
          src={`${import.meta.env.BASE_URL}gallery_bedroom.jpg`} 
          alt="Bedroom gallery" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom-Right Image */}
      <div 
        ref={bottomRightRef}
        className="absolute left-[36vw] top-[52vh] w-[58vw] h-[38vh] shadow-card overflow-hidden"
      >
        <img 
          src={`${import.meta.env.BASE_URL}gallery_living.jpg`} 
          alt="Living room gallery" 
          className="w-full h-full object-cover"
        />
        
        {/* Text Overlay */}
        <div 
          ref={textRef}
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8"
        >
          <h2 className="font-display text-section text-white mb-4 text-balance">
            Spaces that feel like home.
          </h2>
          <p className="text-lg text-white/80 mb-6 max-w-lg">
            Stays designed for comfort, cleanliness, and five-star reviews.
          </p>
          <a 
            href="#portfolio" 
            className="inline-flex items-center text-white font-medium hover:text-bstay-accent transition-colors w-fit"
          >
            View portfolio
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
