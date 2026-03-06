import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Mail, Phone, MapPin, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    listingUrl: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroElements = heroRef.current?.querySelectorAll('.hero-animate');
      if (heroElements && heroElements.length > 0) {
        gsap.fromTo(heroElements,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.1 }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#5A7A6A] flex items-center justify-center mx-auto mb-8">
            <Check className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
          <h1 className="font-serif text-3xl text-gray-900 mb-4">
            Message sent
          </h1>
          <p className="body-text mb-8">
            Thank you for reaching out. We will get back to you within 1-2 business days.
          </p>
          <a href="/" className="btn-primary">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="hero-animate section-label mb-6">get in touch</p>
          <h1 className="hero-animate font-serif text-4xl sm:text-5xl text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="hero-animate body-text">
            Have a question or want to learn more? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-2xl text-gray-900 mb-8">
                Let's talk
              </h2>
              <p className="body-text mb-10">
                Whether you are ready to get started or just have questions, we are here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 justify-center lg:justify-start">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#5A7A6A]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-1">Email</h3>
                    <a href="mailto:hello@betweenstays.co" className="body-text hover:text-[#5A7A6A] transition-colors">
                      hello@betweenstays.co
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 justify-center lg:justify-start">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#5A7A6A]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-1">Phone</h3>
                    <a href="tel:1234567890" className="body-text hover:text-[#5A7A6A] transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 justify-center lg:justify-start">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#5A7A6A]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-1">Location</h3>
                    <p className="body-text">Tampa Bay, Florida</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-100 p-8">
              <h3 className="font-serif text-xl text-gray-900 mb-6">
                Send a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Listing URL (if you have one)
                  </label>
                  <input
                    type="url"
                    name="listingUrl"
                    value={formData.listingUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 transition-colors"
                    placeholder="https://airbnb.com/rooms/..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 transition-colors resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                <button type="submit" className="w-full btn-primary py-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
