import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    )
    .fromTo(lineRef.current,
      { opacity: 0, scaleY: 0 },
      { opacity: 0.5, scaleY: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.4'
    );
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/hero_bedroom.jpg" 
          alt="Between Stays Collective" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Centered Text */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
        <h1 
          ref={titleRef}
          className="font-serif text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] text-center"
        >
          Between Stays
        </h1>
        <p 
          ref={subtitleRef}
          className="font-serif text-xl md:text-2xl font-light tracking-[0.3em] mt-6 text-center"
        >
          Collective
        </p>
      </div>

      {/* Scroll Indicator Line */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div 
          ref={lineRef}
          className="w-px h-16 bg-white/50 origin-top"
        />
      </div>
    </section>
  );
}
