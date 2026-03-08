import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SwitchingLayout, { type ComparisonRow, type OtherManagerLink } from '@/components/SwitchingLayout';

const comparisonTableRows: ComparisonRow[] = [
  { feature: 'Management fee', managerValue: '25–35% + hidden fees', betweenStaysValue: '18–25% flat' },
  { feature: 'Effective total cost', managerValue: '35–40%+', betweenStaysValue: '18–25%' },
  { feature: 'Listing ownership', managerValue: "Vacasa's account", betweenStaysValue: 'Your account' },
  { feature: 'Reviews if you leave', managerValue: 'Lost', betweenStaysValue: 'Yours to keep' },
  { feature: 'Superhost status', managerValue: 'Belongs to Vacasa', betweenStaysValue: 'Yours permanently' },
  { feature: 'Support', managerValue: 'Call center (Denver)', betweenStaysValue: 'Local Tampa team' },
  { feature: 'Cancellation notice', managerValue: '90 days', betweenStaysValue: '30 days' },
  { feature: 'Contract', managerValue: 'Long-term', betweenStaysValue: 'Month-to-month' },
  { feature: 'Setup fee', managerValue: '$300–500', betweenStaysValue: '$0' },
  { feature: 'Market knowledge', managerValue: 'Generic algorithm', betweenStaysValue: 'Tampa Bay expertise' },
];

const otherManagerPages: OtherManagerLink[] = [
  { name: 'Evolve', href: '/blog/evolve-alternative-in-tampa-bay' },
  { name: 'Casago', href: '/blog/casago-alternative-in-tampa-bay' },
];

export default function VacasaAlternative() {
  useEffect(() => {
    document.title = 'Vacasa Alternative in Tampa Bay | Between Stays Collective';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Switching from Vacasa? Keep your reviews, lower your fees, and gain a truly local Tampa Bay team. See how Between Stays Collective compares.');
    }

    // OG tags
    const setMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute('property', property); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    setMeta('og:title', document.title);
    setMeta('og:description', metaDesc?.getAttribute('content') || '');
    setMeta('og:type', 'article');
    setMeta('og:url', window.location.href);

    // JSON-LD
    let jsonLd = document.querySelector('script[data-blog-jsonld]');
    if (!jsonLd) { jsonLd = document.createElement('script'); jsonLd.setAttribute('type', 'application/ld+json'); jsonLd.setAttribute('data-blog-jsonld', 'true'); document.head.appendChild(jsonLd); }
    jsonLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": document.title,
      "description": metaDesc?.getAttribute('content') || '',
      "datePublished": "2025-03-07",
      "publisher": { "@type": "Organization", "name": "Between Stays Collective" }
    });

    return () => {
      const jsonLdEl = document.querySelector('script[data-blog-jsonld]');
      if (jsonLdEl) jsonLdEl.remove();
      ['og:title', 'og:description', 'og:type', 'og:url'].forEach((prop) => {
        const el = document.querySelector(`meta[property="${prop}"]`);
        if (el) el.remove();
      });
    };
  }, []);

  return (
    <SwitchingLayout
      managerName="Vacasa"
      managerSlug="vacasa"
      heroTitle="Vacasa Alternative in Tampa Bay — Why Owners Are Making the Switch"
      heroIntro="If you're reading this, you've probably already felt that knot in your stomach—the one that comes from staring at your monthly statement, wondering where thirty-something percent of your revenue disappeared to. Or maybe you just found out that if you leave Vacasa, every single review you've earned stays with them. Not you. The good news? You have options. And leaving Vacasa doesn't have to mean starting from zero."
      problemsContent={
        <>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6 first:mt-0">The Hidden Costs of Vacasa</h3>
          <p>
            Vacasa advertises management fees between 25–35%. But what's not advertised is the stack of add-ons that can push your effective rate north of 40%. Owners see: base fees (Tampa Bay typically 30–32%), linen program ($40–80 per turnover), restocking fees, insurance add-ons (1–3%), guest booking fees that hurt your competitiveness, and maintenance markups (20–40% above market). By the time you add it all up, that "30% management fee" is actually eating 38–42% of your gross revenue.
          </p>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6">The "Digital Hostage" Problem</h3>
          <p>
            When Vacasa takes over your property, they create a new listing under their account—not yours. When you leave, you don't get to take your reviews with you. Those 50, 100, maybe 200 five-star ratings? The Superhost status you spent years building? It all stays with Vacasa. You start over at zero. In a market where 73% of guests won't book without reviews, that's devastating to your income.
          </p>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6">The 90-Day Trap</h3>
          <p>
            Vacasa's standard contract requires a 90-day cancellation notice. During those three months, you must honor every existing reservation—even prime dates you could have filled at higher rates. Try to leave early? There's a $250 cancellation fee, plus "start-up costs" they claim to have incurred. Compare that to most local managers who operate month-to-month after a trial period.
          </p>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6">The Merger Complication (2025)</h3>
          <p>
            In May 2025, Casago acquired Vacasa for approximately $128 million. The company that was already struggling (reporting $332 million in net losses in 2022, a 92% stock price decline) is now being integrated into Casago's franchise model. That means service disruptions as 40,000+ properties transition systems, staff turnover, quality inconsistency, and contract uncertainty. Several owners report that communication has already degraded—calls going unanswered, maintenance requests sitting for weeks, accounting statements that don't add up.
          </p>
        </>
      }
      howDifferentContent={
        <>
          <p>
            Between Stays Co is Tampa Bay's owner-first alternative. We looked at every pain point—the hidden fees, the lost reviews, the call-center support, the long-term contracts—and designed a model that eliminates them.
          </p>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6">Transparent Pricing: 18–25%, Period</h3>
          <p>
            Our management fee is 18–25% of gross revenue, depending on property type and location. No linen program fees. No restocking markups. No insurance add-ons. No guest booking fees that hurt your competitiveness. What you see is what you pay.
          </p>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6">You Keep What You Build</h3>
          <p>
            We use a co-host model. Your Airbnb listing stays under your account. All reviews belong to you forever. You keep Superhost status. You own your data. You build your brand—guests book "Sarah's Beach Retreat" not "Vacasa #2847."
          </p>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6">Local Tampa Bay Expertise</h3>
          <p>
            We're based in Tampa. We know when Gasparilla Festival drives rates up 40%, how spring break patterns differ, which neighborhoods attract business travelers vs. vacationers, and when hurricane season pricing kicks in. When your AC breaks on a Saturday in July, we're texting the HVAC tech who lives in Seminole Heights—not calling a national vendor hotline.
          </p>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6">No Long-Term Lock-In</h3>
          <p>
            We offer a 90-day trial period. If we're not delivering, you can walk away with 30 days' notice. No cancellation fees. After the trial, it's month-to-month.
          </p>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6">The Results</h3>
          <p>
            Our owners typically see: average revenue increase of 12% in the first 6 months, 75%+ occupancy rates (vs. 68% Tampa Bay average), sub-1-hour response time (vs. Vacasa's 4–24 hour window), and 95% owner retention after the trial period.
          </p>
          <Link to="/audit" className="text-[#5A7A6A] hover:text-[#3D5A4A] font-medium">
            Get your free property audit →
          </Link>
        </>
      }
      resultsContent={
        <>
          <p>
            <strong>The Property:</strong> 2-bedroom condo in Hyde Park, walkable to Bayshore Boulevard.
          </p>
          <p>
            <strong>The Situation:</strong> Sarah had been with Vacasa for 18 months. Her occupancy was declining, her fees were climbing, and she was tired of explaining to guests why the "local recommendations" in the guidebook were for restaurants that had closed two years ago.
          </p>
          <p>
            <strong>The Switch:</strong> We conducted a free property audit, identified pricing and listing optimization opportunities, and transitioned her to our co-host model over 60 days.
          </p>
          <p>
            <strong>The Results (12 months later):</strong> Occupancy: 62% → 78%. Average Daily Rate: $145 → $168. Annual Revenue: $38,200 → $47,800 (+$9,600). Fees Paid: $13,400 (35% effective) → $10,500 (22%). Net improvement: +$12,500 annually. And she kept every review earned during our management—her Superhost status is permanently hers.
          </p>
          <p>
            "I was skeptical about switching," Sarah told us. "I thought the hassle wouldn't be worth it. But honestly? I wish I'd done it a year earlier. I'm making more money and I actually understand my statements now."
          </p>
          <Link to="/audit" className="text-[#5A7A6A] hover:text-[#3D5A4A] font-medium">
            Get your free property audit →
          </Link>
        </>
      }
      howSwitchWorksContent={
        <>
          <p>
            If you're ready to explore a better option, here's exactly what the transition looks like:
          </p>
          <p>
            <strong>Step 1: Free Consultation</strong> — We'll review your current Vacasa statements, analyze your property's performance, and give you an honest assessment of whether switching makes sense. No pressure. No obligation.
          </p>
          <p>
            <strong>Step 2: Contract Review</strong> — We'll look at your Vacasa agreement and identify the cancellation terms. Most require 90 days' notice, but we can help you time this optimally.
          </p>
          <p>
            <strong>Step 3: Setup</strong> — While you're serving your notice period, we'll optimize your listing, set up our co-host access (keeping your existing reviews intact), and prepare our local vendor network.
          </p>
          <p>
            <strong>Step 4: Overlap Period</strong> — We typically run a 30-day overlap where we're fully managing while you transition away from Vacasa. This ensures zero gap in service.
          </p>
          <p>
            <strong>Step 5: Full Handover</strong> — Vacasa is removed, we're your full management team, and your listing—with all its history and reviews—stays exactly where it is. Under your account.
          </p>
          <p>
            Total timeline: 60–90 days, depending on your Vacasa contract. What you need to do: Almost nothing. Provide your Vacasa contract, grant us co-host access, and approve our listing optimizations. We handle the logistics, the vendor transitions, and the guest communication.
          </p>
        </>
      }
      faqContent={
        <>
          <div>
            <h4 className="font-serif text-lg text-gray-900 mb-2">Will I lose my reviews if I switch from Vacasa?</h4>
            <p>Unfortunately, yes. Vacasa listings are under their account, so your reviews stay with them when you leave. However, this is exactly why our co-host model matters—with Between Stays Co, your listing stays under your account, so all future reviews are yours permanently. You'll never face this problem again.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gray-900 mb-2">How long does it take to switch?</h4>
            <p>Typically 60–90 days, depending on your Vacasa contract terms. We manage the entire transition and ensure no gap in your bookings.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gray-900 mb-2">Can I switch mid-season?</h4>
            <p>Yes, but we recommend timing the transition during a natural booking gap. We'll analyze your calendar and help you pick the optimal window.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gray-900 mb-2">What if Vacasa won't let me cancel?</h4>
            <p>We'll review your contract. Most allow cancellation with 90-day notice. In some cases, we can negotiate an earlier exit or structure the transition to minimize overlap costs.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gray-900 mb-2">Is Between Stays Co licensed and insured?</h4>
            <p>Yes. We're fully licensed to operate in Florida and carry comprehensive liability and errors &amp; omissions insurance. We're happy to provide certificates upon request.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gray-900 mb-2">What makes you different from other Vacasa alternatives?</h4>
            <p>The co-host model is the big one—you keep your listing and reviews. But beyond that, we're genuinely local (not a national company with a Tampa phone number), we're transparent about fees (no surprises), and we don't lock you into long-term contracts. Our retention rate is 95% because our owners stay by choice, not by contract.</p>
          </div>
        </>
      }
      comparisonTableRows={comparisonTableRows}
      otherManagerPages={otherManagerPages}
    />
  );
}
