import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageSeo } from '@/hooks/usePageSeo';
import { getComparisonContent } from '@/data/comparisonContent';
import { Breadcrumbs } from '@/components/programmatic/Breadcrumbs';
import { EyebrowBadge } from '@/components/programmatic/EyebrowBadge';
import { ProblemSection } from '@/components/programmatic/ProblemSection';
import { OfferSection } from '@/components/programmatic/OfferSection';
import { PlaceholderTestimonial } from '@/components/programmatic/PlaceholderTestimonial';
import { FaqAccordion } from '@/components/programmatic/FaqAccordion';
import { AuditCtaBlock } from '@/components/programmatic/AuditCtaBlock';
import { InternalLinkCluster } from '@/components/programmatic/InternalLinkCluster';
import { initScrollDepth, trackEvent } from '@/lib/analytics';

interface Props {
  slug: string;
  pagePath: string;
}

export default function ComparisonLandingTemplate({ slug, pagePath }: Props) {
  const data = getComparisonContent(slug);

  const canonical = `https://www.betweenstaysco.com${pagePath}`;
  const sourceTag = `${slug}-compare`;

  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.betweenstaysco.com/' },
          { '@type': 'ListItem', position: 2, name: 'Compare', item: `https://www.betweenstaysco.com${pagePath}` },
          { '@type': 'ListItem', position: 3, name: data?.breadcrumbLabel, item: canonical },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: (data?.faqs ?? []).map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  };

  usePageSeo({
    title: `${data?.h1} | Between Stays Collective`,
    description: data?.metaDescription ?? '',
    canonical,
    ogImage: 'https://www.betweenstaysco.com/images/bsc-og-default.jpg',
    schemaJson,
  });

  useEffect(() => {
    const cleanup = initScrollDepth();
    return cleanup;
  }, []);

  if (!data) return null;

  return (
    <main className="bg-white text-stone-900">
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Compare' },
          { label: data.breadcrumbLabel },
        ]}
      />

      {/* HERO - no photo, clarity-focused */}
      <section className="py-12 md:py-20 px-6 bg-stone-50 border-b border-stone-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-5">
            <EyebrowBadge>{data.eyebrow}</EyebrowBadge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-stone-900 mb-6">
            {data.h1}
          </h1>
          <p className="text-xl text-stone-700 leading-relaxed mb-8">
            {data.subheadline}
          </p>
          <div className="flex justify-center">
            <Link
              to="/owners/tampa-audit"
              onClick={() => trackEvent('audit_cta_click', { source: `${sourceTag}-hero` })}
              className="inline-flex items-center justify-center bg-stone-900 text-white px-8 py-4 rounded-md font-medium hover:bg-stone-800 transition-colors min-h-[48px]"
            >
              See What My Property Could Earn
            </Link>
          </div>
          <p className="text-stone-500 text-sm mt-4">
            Free audit. No phone calls unless you ask for one. We respond by email within 1 business day.
          </p>
        </div>
      </section>

      {/* THE ANGLE */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <EyebrowBadge>The Honest Take</EyebrowBadge>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 leading-tight mb-6">
            {data.angleHeadline}
          </h2>
          <div className="prose prose-lg prose-stone max-w-none text-stone-700 space-y-5">
            <p>{data.angleParagraph}</p>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-12 md:py-16 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="mb-3">
              <EyebrowBadge>Side By Side</EyebrowBadge>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 mb-3">
              {data.tableHeadline}
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="py-3 px-4 text-sm font-medium text-stone-500"></th>
                  <th className="py-3 px-4 text-base font-semibold text-stone-900">{data.tableLeftLabel}</th>
                  <th className="py-3 px-4 text-base font-semibold text-stone-900">Between Stays Collective</th>
                </tr>
              </thead>
              <tbody>
                {data.tableRows.map((row) => (
                  <tr key={row.label} className="border-b border-stone-200 align-top">
                    <td className="py-3 px-4 text-sm text-stone-600">{row.label}</td>
                    <td className="py-3 px-4 text-base text-stone-900">{row.left}</td>
                    <td className="py-3 px-4 text-base text-stone-900">{row.right}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-stone-500 text-sm text-center mt-6">
            {data.tableFootnote}
          </p>
        </div>
      </section>

      {/* REAL COST */}
      <ProblemSection
        eyebrow="The Real Cost"
        headline={data.realCostHeadline}
        body={
          <>
            <p>{data.realCostParagraph}</p>
          </>
        }
      />

      {/* INLINE CTA */}
      <div className="px-6">
        <div className="max-w-3xl mx-auto">
          <AuditCtaBlock
            variant="inline"
            sourceTag={`${sourceTag}-inline-1`}
            headline="Curious what the numbers look like for your specific property?"
            subline="Free audit using your real listing data and Pinellas County submarket comps. Email-only follow-up."
          />
        </div>
      </div>

      {/* THE OFFER */}
      <OfferSection
        eyebrow="The Between Stays Offer"
        headline="Local boutique co-hosting that keeps you in charge."
        intro={
          <p>
            We are a small Tampa Bay team focused on the properties we can serve well. Your short-term
            rental stays under your Airbnb account. You keep 70% of revenue and the listing itself, with
            us added as a co-host. No upfront fees, no contracts, no minimum stay.
          </p>
        }
        pillars={[
          {
            title: 'You keep the listing',
            description:
              'Your Airbnb and Vrbo listings stay under your account. We are added as a co-host. The day we part ways, your reviews and Superhost status go with you.',
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

      {/* PROOF */}
      <section className="py-12 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <EyebrowBadge>What Owners Are Reporting</EyebrowBadge>
          </div>
          <PlaceholderTestimonial city="Tampa Bay" fromManager={data.testimonialCompetitor} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <EyebrowBadge>Common Questions</EyebrowBadge>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 leading-tight mb-8">
            {data.faqHeadline}
          </h2>
          <FaqAccordion items={data.faqs} />
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <InternalLinkCluster
            heading="Keep comparing"
            sourceTag={`${sourceTag}-internal`}
            links={data.internalLinks}
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="px-6">
        <div className="max-w-5xl mx-auto">
          <AuditCtaBlock
            variant="section"
            sourceTag={`${sourceTag}-final`}
            headline="See what your property could actually earn."
            subline="Free audit. Real Pinellas County submarket data. No commitment, no phone calls, no pressure."
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
