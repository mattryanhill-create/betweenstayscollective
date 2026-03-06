import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLImageElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you! We will contact you within one business day.');
  };

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const form = formRef.current;
    const image = imageRef.current;
    const imageInner = imageInnerRef.current;

    if (!section || !content || !form || !image || !imageInner) return;

    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(content, 
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: content,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 0.4,
          }
        }
      );

      // Form fields stagger
      gsap.fromTo(form.children, 
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: form,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.4,
          }
        }
      );

      // Image parallax
      gsap.fromTo(imageInner, 
        { y: '3vh' },
        {
          y: '-3vh',
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
      id="contact"
      className="relative bg-bstay-bg-dark min-h-screen z-[100]"
    >
      {/* Grain overlay for dark section */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative flex flex-col lg:flex-row min-h-screen">
        {/* Left Column - Form */}
        <div 
          ref={contentRef}
          className="w-full lg:w-[55vw] px-[6vw] py-[10vh] flex flex-col justify-center"
        >
          <h2 className="font-display text-section text-white mb-4 text-balance">
            Ready to hand over the keys?
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-lg">
            Tell us about your property. We'll reply within one business day with a plan and pricing.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 max-w-md">
            <div>
              <label className="block text-sm text-white/60 mb-2">Name *</label>
              <input 
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-bstay-accent transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-2">Email *</label>
              <input 
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-bstay-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-2">Phone</label>
              <input 
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-bstay-accent transition-colors"
                placeholder="(123) 456-7890"
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-2">Property Address *</label>
              <input 
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-bstay-accent transition-colors"
                placeholder="Property location"
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-2">Message</label>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-bstay-accent transition-colors resize-none"
                placeholder="Tell us about your property..."
              />
            </div>

            <button 
              type="submit"
              className="btn-primary w-full"
            >
              Request a proposal
              <Send className="ml-2 w-4 h-4" />
            </button>
          </form>

          {/* Contact Details */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-6">
            <a 
              href="mailto:hello@betweenstays.co"
              className="flex items-center gap-2 text-white/60 hover:text-bstay-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">hello@betweenstays.co</span>
            </a>
            <div className="flex items-center gap-2 text-white/60">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Based in Austin — serving select markets</span>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div 
          ref={imageRef}
          className="hidden lg:block absolute right-0 top-0 w-[45vw] h-full overflow-hidden"
        >
          <img 
            ref={imageInnerRef}
            src="/contact_office.jpg" 
            alt="Contact us" 
            className="w-full h-[calc(100%+6vh)] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
