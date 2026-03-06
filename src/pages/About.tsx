import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: 'Transparency',
    description: 'We share what we know, what we do, and why we do it. No black boxes.',
  },
  {
    title: 'Ownership',
    description: 'Your listing stays yours. Your reviews stay yours. Your success stays yours.',
  },
  {
    title: 'Intentionality',
    description: 'Every decision is made with care—for your property, your guests, and your goals.',
  },
  {
    title: 'Local Knowledge',
    description: 'We know Tampa Bay because we live here. That matters.',
  },
];

export default function About() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          gsap.fromTo(section.querySelectorAll('.section-animate'),
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              }
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        ref={el => { sectionsRef.current[0] = el; }}
        className="pt-32 pb-20"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-animate section-label mb-6">about us</p>
          <h1 className="section-animate font-serif text-4xl sm:text-5xl text-gray-900 mb-8">
            Local co-hosts who understand what guests want
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section 
        ref={el => { sectionsRef.current[1] = el; }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="section-animate font-serif text-3xl text-gray-900 mb-8">
                Our Story
              </h2>
              <div className="section-animate space-y-6 body-text">
                <p>
                  Matt and Cherie have spent the past three years living and working remotely across different countries, calling furnished and vacation rentals "home."
                </p>
                <p>
                  By experiencing short-term stays as guests day in and day out, they learned exactly what makes a place feel easy, thoughtful, and worth a five-star review.
                </p>
                <p>
                  Between Stays Collective grew from that lived experience. With deep familiarity across major booking platforms and a hands-on, detail-driven approach, they help owners create stays guests love—and listings that perform.
                </p>
                <p>
                  They care for each home the way they want to be cared for as guests: with intention, consistency, and pride.
                </p>
              </div>
            </div>

            <div className="section-animate">
              <img 
                src={`${import.meta.env.BASE_URL}team_matt_cherie.jpg`} 
                alt="Matt and Cherie" 
                className="w-full"
              />
              <div className="mt-6 text-center">
                <p className="font-serif text-xl text-gray-900">Matt & Cherie</p>
                <p className="text-sm text-gray-500">Co-Founders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={el => { sectionsRef.current[2] = el; }}
        className="py-24 lg:py-32"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-animate section-label mb-4">what we believe</p>
            <h2 className="section-animate font-serif text-3xl text-gray-900">
              Our Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <div key={i} className="section-animate text-center sm:text-left">
                <h3 className="font-serif text-xl text-gray-900 mb-3">{value.title}</h3>
                <p className="body-text">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Section */}
      <section 
        ref={el => { sectionsRef.current[3] = el; }}
        className="py-24 lg:py-32 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="section-animate">
              <img 
                src={`${import.meta.env.BASE_URL}tampa_skyline.jpg`} 
                alt="Tampa Bay" 
                className="w-full"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="section-animate section-label mb-6">tampa bay</p>
              <h2 className="section-animate font-serif text-3xl text-gray-900 mb-6">
                This is our home
              </h2>
              <div className="section-animate space-y-4 body-text">
                <p>
                  We're not a national call center or a faceless management company. We're Tampa Bay locals who understand what makes this market tick.
                </p>
                <p>
                  From Ybor City's historic charm to St. Pete Beach's coastal appeal, we know the neighborhoods, the seasons, and the guests who visit them.
                </p>
                <p>
                  We intentionally keep our portfolio small and selective, so every property gets the attention it deserves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        ref={el => { sectionsRef.current[4] = el; }}
        className="py-24 lg:py-32"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="section-animate font-serif text-3xl text-gray-900 mb-6">
            Wondering what you're missing?
          </h2>
          <p className="section-animate body-text mb-10">
            Let's take a look at your listing and see what you could be earning—with no pressure and no obligation.
          </p>
          <Link to="/audit" className="section-animate btn-primary">
            See what you could be earning
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
