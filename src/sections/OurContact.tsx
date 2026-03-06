import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurContact() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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

      // Content animation
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="bg-white py-32 px-8 lg:px-16"
    >
      {/* Section Label */}
      <h2 ref={labelRef} className="section-label mb-16">
        our contact
      </h2>

      {/* Content Grid */}
      <div 
        ref={contentRef}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16"
      >
        {/* Left Column - Newsletter */}
        <div>
          <h3 className="font-sans text-base font-normal text-black mb-8">
            Join our mailing list
          </h3>

          {subscribed ? (
            <p className="font-sans text-base font-light text-gray-600">
              Thank you for subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email here *"
                  required
                  className="w-full border-b border-gray-300 py-2 text-base font-light placeholder:text-gray-400 focus:border-black focus:outline-none transition-colors"
                />
              </div>

              <button 
                type="submit"
                className="bg-black text-white px-8 py-3 text-xs uppercase tracking-[0.1em] font-normal hover:opacity-80 transition-opacity"
              >
                Subscribe Now
              </button>

              <div className="flex items-start gap-3">
                <input 
                  type="checkbox"
                  id="newsletter-consent"
                  required
                  className="mt-1 w-4 h-4 border border-gray-300 rounded-none"
                />
                <label 
                  htmlFor="newsletter-consent"
                  className="font-sans text-sm font-light text-gray-600"
                >
                  Yes, subscribe me to your newsletter. *
                </label>
              </div>
            </form>
          )}
        </div>

        {/* Right Column - Contact Info */}
        <div className="space-y-4">
          <a 
            href="mailto:macherie@gmail.com"
            className="block font-sans text-base font-light text-black hover:opacity-60 transition-opacity"
          >
            macherie@gmail.com
          </a>
          <p className="font-sans text-base font-light text-black">
            Tel: 123-456-7890
          </p>
          <p className="font-sans text-base font-light text-black">
            500 Terry Francine St.<br />
            San Francisco, CA 94158
          </p>
        </div>
      </div>
    </section>
  );
}
