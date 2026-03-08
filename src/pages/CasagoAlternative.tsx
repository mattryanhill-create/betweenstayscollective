import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SwitchingLayout, { type ComparisonRow, type OtherManagerLink } from '@/components/SwitchingLayout';

const comparisonTableRows: ComparisonRow[] = [
  { feature: 'Corporate stability', managerValue: 'Merger chaos, integration risks', betweenStaysValue: 'Stable, locally owned' },
  { feature: 'Service model', managerValue: 'Franchise (quality varies)', betweenStaysValue: 'Direct management' },
  { feature: 'Local Tampa presence', managerValue: 'Depends on franchisee', betweenStaysValue: 'Direct local team' },
  { feature: 'Communication', managerValue: 'Call center + franchise filter', betweenStaysValue: 'Direct local contact' },
  { feature: 'Listing ownership', managerValue: "Casago's account", betweenStaysValue: 'Your account' },
  { feature: 'Reviews if you leave', managerValue: 'Lost', betweenStaysValue: 'Yours permanently' },
  { feature: 'Contract flexibility', managerValue: 'Long-term, changing terms', betweenStaysValue: 'Month-to-month' },
  { feature: 'Fee transparency', managerValue: 'Varies by franchise', betweenStaysValue: 'Fully transparent' },
];

const otherManagerPages: OtherManagerLink[] = [
  { name: 'Vacasa', href: '/blog/vacasa-alternative-in-tampa-bay' },
  { name: 'Evolve', href: '/blog/evolve-alternative-in-tampa-bay' },
];

export default function CasagoAlternative() {
  useEffect(() => {
    document.title = 'Casago Alternative in Tampa Bay | Between Stays Collective';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Concerned about the Casago–Vacasa merger? Between Stays Collective is a stable, non-franchise partner in Tampa Bay. Independent, local, and here for the long term.');
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
      managerName="Casago"
      managerSlug="casago"
      heroTitle="Casago Alternative in Tampa Bay — Stability After the Merger"
      heroIntro="Casago acquired Vacasa in May 2025 for approximately $128 million. The deal affected 40,000+ properties. Corporate mergers in property management rarely go smoothly—systems don't talk to each other, staff get laid off or quit, service standards slip. And owners often get caught in the chaos. If you're concerned about what the Casago–Vacasa merger means for your property, you're not alone. The good news: you have alternatives."
      problemsContent={
        <>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6 first:mt-0">The Scale Challenge</h3>
          <p>
            Integrating 40,000+ properties isn't like merging two small businesses. System migrations mean downtime and data issues. Staff restructuring almost always involves layoffs—the local property manager you know might not be there in six months. Process changes affect how bookings are handled, how maintenance is coordinated, how owner statements are generated. Casago operates on a franchise model and needs to find and train local franchisees to take over markets Vacasa used to manage centrally. In some markets, that transition hasn't happened yet.
          </p>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6">The Franchise Model Risk</h3>
          <p>
            Casago doesn't manage properties directly—they franchise their brand to local operators. Your experience depends entirely on the quality of your local franchisee. During the Vacasa integration, Casago is scrambling to recruit franchisees for markets they didn't previously serve. Tampa Bay might get an experienced operator—or someone who just bought a franchise and is learning on the job, with your property. The uniformity Vacasa at least attempted is being replaced by variability.
          </p>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6">Documented Issues During the Transition</h3>
          <p>
            Owners are already reporting problems: communication breakdowns (calls to new numbers, emails bouncing, support tickets unanswered for days); property care problems (maintenance requests lost, cleanings missed, properties unprepared for guest arrivals); financial transparency issues (statements late or with errors, unclear revenue allocations); contract uncertainty (notices of changing terms, unclear whether existing agreements still apply). These aren't hypothetical—they're happening now to real owners.
          </p>
        </>
      }
      howDifferentContent={
        <>
          <p>
            Between Stays Co is based in Tampa. We're not a franchise. We're not a subsidiary of a national corporation. We're a local company owned and operated by people who live here and have a vested interest in the community.
          </p>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6">No Corporate Mergers, No Franchise Variability</h3>
          <p>
            No corporate mergers to disrupt your service. No franchise variability—you know exactly who's managing your property. No distant headquarters making decisions that don't account for Tampa Bay's unique market. Direct relationships with your property manager—you have their cell phone number.
          </p>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6">Transparent Operations</h3>
          <p>
            Monthly detailed statements, real-time owner portal, all fees disclosed upfront, direct access to your data. You own your listing, your reviews, and your guest history. You should never have to wonder what's happening with your property.
          </p>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6">The Co-Host Advantage</h3>
          <p>
            Your Airbnb listing stays under your account. We're added as co-host. You own your reviews forever. You keep Superhost status. You have full visibility. You build your brand—guests book "Sarah's Beach Retreat" not "Casago Unit #2847."
          </p>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6">Flexible Terms</h3>
          <p>
            90-day trial period. Month-to-month after that. 30-day cancellation notice (not 90 days like Vacasa required). No cancellation fees. We earn your business every single month.
          </p>
          <Link to="/audit" className="text-[#5A7A6A] hover:text-[#3D5A4A] font-medium">
            Get your free property audit →
          </Link>
        </>
      }
      resultsContent={
        <>
          <p>
            <strong>From a Hyde Park condo owner:</strong> "My property manager changed three times in four months. Each time, I had to re-explain everything about my unit. The new person didn't know the building's HOA rules, didn't know the local vendors. I felt like I was onboarding a new manager every other month."
          </p>
          <p>
            <strong>From a St. Pete Beach house owner:</strong> "The cleaning quality dropped off a cliff. I started driving over to inspect between guests because I couldn't trust that it was being done right. Turns out, my cleaner had quit during the transition and no one had bothered to tell me or find a replacement."
          </p>
          <p>
            <strong>From a Channelside investor:</strong> "My statements stopped making sense. Revenue was down, but I couldn't get a clear explanation of why. When I called to ask, I got transferred between three different departments, none of which could access my full account history because 'the systems are being migrated.'"
          </p>
          <p>
            These aren't isolated incidents. They're symptoms of a massive corporate integration that isn't going smoothly. If you want stability—one team, one market, no corporate reshuffling—we're here.
          </p>
          <Link to="/audit" className="text-[#5A7A6A] hover:text-[#3D5A4A] font-medium">
            Get your free property audit →
          </Link>
        </>
      }
      howSwitchWorksContent={
        <>
          <p>
            If you're considering leaving Casago, we make the transition seamless. Here's how it works:
          </p>
          <p>
            <strong>Step 1: Free Consultation</strong> — We'll review your current situation, discuss your concerns about the merger, and give you an honest assessment of whether switching makes sense.
          </p>
          <p>
            <strong>Step 2: Contract Review</strong> — We'll look at your Casago agreement and identify the cancellation terms. Many contracts have exit provisions—we can help you time this optimally.
          </p>
          <p>
            <strong>Step 3: Setup</strong> — While you're serving your notice period, we'll optimize your listing, set up our co-host access (keeping your existing reviews intact), and prepare our local vendor network.
          </p>
          <p>
            <strong>Step 4: Overlap Period</strong> — We typically run a 30-day overlap where we're fully managing while you transition away from Casago. Zero gap in service.
          </p>
          <p>
            <strong>Step 5: Full Handover</strong> — Casago is removed, we're your full management team. Your listing—with all its history and reviews—stays under your account.
          </p>
          <p>
            We handle the entire switch. No gap in bookings. We coordinate timing to ensure continuous revenue. We've helped dozens of owners transition from national managers to local management.
          </p>
        </>
      }
      faqContent={
        <>
          <div>
            <h4 className="font-serif text-lg text-gray-900 mb-2">Should I be worried about the Casago–Vacasa merger?</h4>
            <p>Cautious awareness is warranted. Large mergers historically create service disruptions, and the franchise model introduces quality variability. Many proactive owners are using this moment to evaluate alternatives rather than waiting to see how the transition affects their specific property.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gray-900 mb-2">Can Casago change my contract terms?</h4>
            <p>Generally, existing contracts remain valid through their term, but renewal terms may change. Some owners have reported receiving notices about updated terms. Review your agreement carefully and consider your options before any auto-renewal period.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gray-900 mb-2">How do I know if my local Casago service will be good?</h4>
            <p>With the franchise model, quality depends entirely on your local franchisee—which is difficult to predict during a rapid expansion. Between Stays Co eliminates that uncertainty by managing properties directly, not through third-party franchisees.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gray-900 mb-2">Will switching during the merger cause problems?</h4>
            <p>Actually, major transitions create natural exit windows. Many owners find it's easier to switch during corporate chaos than after a new "normal" is established. We specialize in seamless transitions and can time your switch to minimize any disruption.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gray-900 mb-2">How is Between Stays Co different from Casago?</h4>
            <p>Three key differences: (1) We're locally owned, not a corporate entity undergoing a merger; (2) We manage properties directly, not through variable-quality franchises; and (3) We use a co-host model where you keep your listing and reviews permanently.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gray-900 mb-2">What if I'm locked into a contract with Casago?</h4>
            <p>We can review your agreement. Many contracts have exit provisions, and even if there's a notice period, we can often begin setup and optimization during that window so there's no service gap.</p>
          </div>
        </>
      }
      comparisonTableRows={comparisonTableRows}
      otherManagerPages={otherManagerPages}
    />
  );
}
