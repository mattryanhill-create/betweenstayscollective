import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Statement() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const body = bodyRef.current;
    const image = imageRef.current;
    const imageInner = imageInnerRef.current;

    if (!section || !headline || !body || !image || !imageInner) return;

    const ctx = gsap.context(() => {
      // Headline animation
      gsap.fromTo(headline, 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: headline,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.4,
          }
        }
      );

      // Body animation
      gsap.fromTo(body, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: body,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 0.4,
          }
        }
      );

      // Image container animation
      gsap.fromTo(image, 
        { y: '10vh', scale: 1.06, opacity: 0.9 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: image,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 0.4,
          }
        }
      );

      // Parallax on inner image
      gsap.fromTo(imageInner, 
        { y: '4vh' },
        {
          y: '-4vh',
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
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
      className="relative bg-bstay-bg py-[10vh] z-30"
    >
      {/* Text Block */}
      <div className="px-[6vw] mb-[6vh] max-w-4xl">
        <h2 
          ref={headlineRef}
          className="font-display text-section text-bstay-text mb-6 text-balance"
        >
          Hospitality, done right.
        </h2>
        <p 
          ref={bodyRef}
          className="text-xl text-bstay-text-secondary leading-relaxed"
        >
          We treat every home like a guest experience—clean, consistent, and thoughtfully prepared.
        </p>
      </div>

      {/* Full-bleed Image */}
      <div 
        ref={imageRef}
        className="w-full h-[62vh] overflow-hidden"
      >
        <img 
          ref={imageInnerRef}
          src="/statement_hospitality.jpg" 
          alt="Hospitality welcome" 
          className="w-full h-[calc(100%+8vh)] object-cover"
        />
      </div>
    </section>
  );
}
