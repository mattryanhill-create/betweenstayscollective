import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageSeo } from '@/hooks/usePageSeo';
import { getSubmarketBySlug } from '@/data/submarkets';
import { getCityContent } from '@/data/cityContent';
import { Breadcrumbs } from '@/components/programmatic/Breadcrumbs';
import { EyebrowBadge } from '@/components/programmatic/EyebrowBadge';
import { SubmarketStatGrid } from '@/components/programmatic/SubmarketStatGrid';
import { ProblemSection } from '@/components/programmatic/ProblemSection';
import { OfferSection } from '@/components/programmatic/OfferSection';
import { PlaceholderTestimonial } from '@/components/programmatic/PlaceholderTestimonial';
import { FaqAccordion, type FaqItem } from '@/components/programmatic/FaqAccordion';
import { AuditCtaBlock } from '@/components/programmatic/AuditCtaBlock';
import { InternalLinkCluster } from '@/components/programmatic/InternalLinkCluster';
import { initScrollDepth, trackEvent } from '@/lib/analytics';

interface Props {
  slug: string;
  pagePath: string;
}

const SHARED_FAQS: FaqItem[] = [
  {
    question: 'How is this different from Vacasa or Evolve?',
    answer:
      'Vacasa puts your listing under their account, which means your reviews and Superhost history stay with them if you leave. Our model keeps your listing under your name, with us added as a co-host. Evolve charges 10% but leaves you to coordinate cleaning, vendors, and guest issues yourself. We are 30% all-in and handle the operational work.',
  },
  {
    question: 'Am I locked into a long-term contract?',
    answer:
      'No. Our co-hosting arrangement is month-to-month with no termination fee. You can pause or end the arrangement with 30 days notice. Your Airbnb listing stays under your account the entire time, so your guests, your reviews, and your Superhost status remain with you whether you stay with us or not. Other owners felt the same hesitation before switching. What they found is that knowing the exit is clean made the decision to start much easier.',
  },
  {
    question: 'What about parties, damage, or liability?',
    answer:
      'Every Airbnb booking is covered by AirCover, which provides up to $3 million in primary host damage protection plus liability coverage. We screen all guests, require government ID verification, and decline anything that does not pass our local rule set. We have not had a major damage incident in our Tampa Bay portfolio.',
  },
  {
    question: 'What happens if it does not work out?',
    answer:
      'Give us 30 days notice and we hand the listing back. No termination fee, no penalty, no claim on your future bookings. Other owners who have asked this question felt the same hesitation. What they found is that knowing the exit is clean made the decision to start much easier.',
  },
];

const NEARBY_CITIES: Record<string, string> = {
  largo: 'seminole',
  dunedin: 'palm-harbor',
  'pinellas-park': 'st-petersburg',
  clearwater: 'largo',
  'st-petersburg': 'pinellas-park',
  'palm-harbor': 'dunedin',
  seminole: 'largo',
};

export default function GeoLandingTemplate({ slug, pagePath }: Props) {
  const submarket = getSubmarketBySlug(slug);
  const cityData = getCityContent(slug);

  const canonical = `https://www.betweenstaysco.com${pagePath}`;
  const sourceTag = `${slug}-geo`;
  const allFaqs: FaqItem[] = [...SHARED_FAQS, ...(cityData?.cityFaqs ?? [])];
  const nearbySlug = NEARBY_CITIES[slug] || 'seminole';

  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${canonical}#business`,
        name: 'Between Stays Collective',
        description: `Boutique short-term rental co-hosting for ${submarket?.city}, ${submarket?.state} property owners. Local team, owner keeps the listing, no contracts.`,
        url: canonical,
        areaServed: { '@type': 'City', name: `${submarket?.city}, ${submarket?.state}` },
        priceRange: '$$',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.betweenstaysco.com/' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: `https://www.betweenstaysco.com${pagePath}` },
          { '@type': 'ListItem', position: 3, name: submarket?.city, item: canonical },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: allFaqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  };

  usePageSeo({
    title: `${submarket?.city}, ${submarket?.state} Airbnb Co-Hosting | Between Stays Collective`,
    description: `Boutique short-term rental co-hosting for ${submarket?.city}, ${submarket?.state} owners. Local team, you keep the listing and the reviews, no contracts. See your property's real revenue potential.`,
    canonical,
    ogImage: 'https://www.betweenstaysco.com/images/bsc-og-default.jpg',
    schemaJson,
  });

  useEffect(() => {
    const cleanup = initScrollDepth();
    return cleanup;
  }, []);

  if (!submarket || !cityData) {
    return null;
  }

  return (
    <main className="bg-white text-stone-900">
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Locations' },
          { label: submarket.city },
        ]}
      />

      {/* HERO */}
      <section className="relative pt-8 md:pt-12 pb-12 md:pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <img
              src="/images/bsc-hero-interior.jpg"
              alt={`Bright, airy interior of a ${submarket.city} area home`}
              className="w-full h-full object-cover opacity-20"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="mb-5">
            <EyebrowBadge>{submarket.heroEyebrow}</EyebrowBadge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-stone-900 mb-6">
            {submarket.city} short-term rental co-hosting that keeps you in charge.
          </h1>
          <p className="text-xl text-stone-700 leading-relaxed mb-8">
            Local boutique management for {submarket.city}, {submarket.state} property owners. You keep 70% of revenue,
            you keep the listing, and you keep every review you have already earned.
          </p>
          <div className="flex justify-center">
            <Link
              to="/owners/tampa-audit"
              onClick={() => trackEvent('audit_cta_click', { source: `${sourceTag}-hero` })}
              className="inline-flex items-center justify-center bg-stone-900 text-white px-8 py-4 rounded-md font-medium hover:bg-stone-800 transition-colors min-h-[48px]"
            >
              See My {submarket.city} Property's Potential
            </Link>
          </div>
          <p className="text-stone-500 text-sm mt-4">
            Free audit. No phone calls unless you ask for one. We will email you within 1 business day.
          </p>
        </div>
      </section>

      {/* MARKET STATS */}
      <section className="py-12 md:py-16 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="mb-3">
              <EyebrowBadge>{submarket.city} Market Data</EyebrowBadge>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 mb-3">
              What the numbers actually say about {submarket.city}.
            </h2>
            <p className="text-stone-600 text-base max-w-2xl mx-auto">
              Source: AirDNA, trailing 12 months. {submarket.neighborhoodNotes}
            </p>
          </div>
          <SubmarketStatGrid submarket={submarket} />
          <p className="text-stone-500 text-sm text-center mt-6">
            Top-quartile {submarket.city} properties earn approximately ${submarket.topQuartileRevenue.toLocaleString()} per year.
            Is yours?
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <ProblemSection
        eyebrow="The Setup"
        headline={`If you own a short-term rental in ${submarket.city}, the market has shifted under you.`}
        body={
          <>
            <p>{cityData.setupOpening}</p>
            <p>
              The shared backdrop: AirDNA shows {submarket.city} rentals are down {Math.abs(submarket.yoyOccupancy).toFixed(1)}% year-over-year
              on nights booked, while average daily rate has held up. Owners with the right local pricing strategy are pulling ahead.
              Owners on auto-pilot are watching their calendars thin out, and the gap between the two groups is widening.
            </p>
          </>
        }
      />

      {/* HIDDEN COST */}
      <ProblemSection
        eyebrow="The Hidden Cost"
        headline={`What a national manager is actually costing you in ${submarket.city}.`}
        body={
          <>
            <p>{cityData.hiddenCostAngle}</p>
            <p>
              The headline fee is 25%, sometimes 30%. The real number, once you add cleaning markups,
              guest service fees, linen programs, and the listing being held under their account
              instead of yours, is usually closer to 35 to 40% of what guests pay.
            </p>
            <p>
              That is the part owners notice on their statements. The part they do not notice until
              they try to leave: the reviews stay with the manager, not with the property. Years of
              five-star history, gone. Superhost status, gone. The {submarket.city} rental that was earning
              ${submarket.annualRevenue.toLocaleString()} restarts from zero on a new listing.
            </p>
          </>
        }
      />

      {/* INLINE CTA */}
      <div className="px-6">
        <div className="max-w-3xl mx-auto">
          <AuditCtaBlock
            variant="inline"
            sourceTag={`${sourceTag}-inline-1`}
            headline={`See what your ${submarket.city} property could actually earn.`}
            subline={`Free audit using your real listing data and ${submarket.city} submarket comps. No phone calls unless you want one.`}
          />
        </div>
      </div>

      {/* OFFER */}
      <OfferSection
        eyebrow="The Offer"
        headline={`Local boutique co-hosting for ${submarket.city} owners.`}
        intro={
          <p>
            We are a small Tampa Bay team focused on the properties we can actually serve well.
            Your {submarket.city} rental stays under your Airbnb account. Your reviews stay with you.
            Our share is 30% of revenue. No upfront fees, no contracts, no minimum stay.
          </p>
        }
        pillars={[
          {
            title: 'You keep the listing',
            description:
              'Your Airbnb and Vrbo listings stay under your account. We are added as a co-host. The day we part ways, your reviews and ranking go with you.',
          },
          {
            title: 'Local team, not a call center',
            description:
              'Cleaners, vendors, and guest response handled by people who live in Pinellas County. Average guest response time under 15 minutes during waking hours.',
          },
          {
            title: 'Aligned incentives',
            description:
              'We earn when you earn. 70% to you, 30% to us, all-in. No fixed monthly fees, no setup fees, no cancellation penalty if it does not work out.',
          },
        ]}
      />

      {/* CITY-SPECIFIC OPPORTUNITY */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <EyebrowBadge>Why {submarket.city}, Specifically</EyebrowBadge>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 leading-tight mb-6">
            {submarket.city} sits in a specific spot in the Pinellas market.
          </h2>
          <div className="prose prose-lg prose-stone max-w-none text-stone-700 space-y-5">
            {cityData.whyHereParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* INLINE CTA after Why-City section: captures readers at peak interest */}
      <div className="px-6 pt-2">
        <div className="max-w-3xl mx-auto">
          <AuditCtaBlock
            variant="inline"
            sourceTag={`${sourceTag}-inline-2`}
            headline={`Curious what your ${submarket.city} property could earn with local pricing?`}
            subline="Free audit using your real listing data. We respond by email within 1 business day."
          />
        </div>
      </div>

      {/* PROOF */}
      <section className="py-12 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <EyebrowBadge>What {submarket.city} Owners Are Reporting</EyebrowBadge>
          </div>
          <PlaceholderTestimonial city={submarket.city} fromManager="a national manager" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <EyebrowBadge>Common Questions</EyebrowBadge>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 leading-tight mb-8">
            Questions {submarket.city} owners ask before switching.
          </h2>
          <FaqAccordion items={allFaqs} />
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <InternalLinkCluster
            heading={`Compare your options for ${submarket.city} co-hosting`}
            sourceTag={`${sourceTag}-internal`}
            links={[
              { to: '/compare/vacasa-vs-between-stays', label: 'Vacasa vs Between Stays Collective' },
              { to: '/compare/evolve-vs-between-stays', label: 'Evolve vs Between Stays Collective' },
              { to: '/compare/casago-vs-between-stays', label: 'Casago vs Between Stays Collective' },
              { to: '/reviews/vacasa-tampa-bay-honest-review', label: 'Vacasa Tampa Bay: An Honest Owner-Side Review' },
              { to: '/reviews/what-to-know-before-leaving-vacasa', label: 'Before You Leave Vacasa: A Checklist' },
              { to: `/locations/${nearbySlug}-airbnb-cohost`, label: `Nearby: ${getSubmarketBySlug(nearbySlug)?.city || ''} Co-Hosting` },
            ]}
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="px-6">
        <div className="max-w-5xl mx-auto">
          <AuditCtaBlock
            variant="section"
            sourceTag={`${sourceTag}-final`}
            headline={`See what your ${submarket.city} property could actually earn.`}
            subline={`Free audit. Real ${submarket.city} submarket data. No commitment, no phone calls, no pressure.`}
          />
        </div>
      </div>

      {/* FOOTER STRIP */}
      <section className="py-12 px-6 bg-stone-900 text-stone-300">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div>
            <p className="text-stone-100 font-semibold mb-2">Between Stays Collective</p>
            <p>Tampa Bay co-hosting for short-term rental owners. Local team, boutique attention, no contracts.</p>
          </div>
          <div>
            <p className="text-stone-100 font-semibold mb-2">Have questions?</p>
            <p>
              Email:{' '}
              <a href="mailto:hello@betweenstaysco.com" className="underline hover:text-white">
                hello@betweenstaysco.com
              </a>
            </p>
            <p className="mt-2 text-stone-500">We respond within 1 business day.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
