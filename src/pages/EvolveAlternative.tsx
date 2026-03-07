import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SwitchingLayout, { type ComparisonRow, type OtherManagerLink } from '@/components/SwitchingLayout';

const comparisonTableRows: ComparisonRow[] = [
  { feature: 'Cleaning coordination', managerValue: 'You handle', betweenStaysValue: 'Fully managed' },
  { feature: 'Maintenance coordination', managerValue: 'You handle', betweenStaysValue: 'Vendors on-call' },
  { feature: 'Supply restocking', managerValue: 'You handle', betweenStaysValue: 'Included' },
  { feature: 'Emergency response', managerValue: 'You handle', betweenStaysValue: '24/7 local' },
  { feature: 'Your time required', managerValue: '10+ hours/week', betweenStaysValue: '0 hours/week' },
  { feature: 'Listing ownership', managerValue: "Their account", betweenStaysValue: 'Your account' },
  { feature: 'Reviews if you leave', managerValue: 'Lost', betweenStaysValue: 'Yours to keep' },
  { feature: 'Effective total cost', managerValue: '32%+ (with your time)', betweenStaysValue: '18–25%' },
];

const otherManagerPages: OtherManagerLink[] = [
  { name: 'Vacasa', href: '/blog/vacasa-alternative-in-tampa-bay' },
  { name: 'Casago', href: '/blog/casago-alternative-in-tampa-bay' },
];

export default function EvolveAlternative() {
  useEffect(() => {
    document.title = 'Evolve Alternative in Tampa Bay | Between Stays Collective';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Tired of doing on-the-ground work while Evolve handles the online piece? Between Stays Collective runs everything—operations, communication, and local coordination—in Tampa Bay.');
    }
  }, []);

  return (
    <SwitchingLayout
      managerName="Evolve"
      managerSlug="evolve"
      heroTitle="Evolve Alternative in Tampa Bay — The True Full-Service Option"
      heroIntro="Evolve's 10% fee sounds like a steal—until you realize what you're actually paying for. Many owners find they're working harder than when they managed the place themselves: coordinating cleaners who cancel last minute, fielding guest calls at 11 PM, sourcing plumbers for leaking water heaters. What am I actually paying Evolve for? It's a great question. And if you're currently with Evolve—or considering them because that 10% fee is so appealing—you deserve an honest answer."
      problemsContent={
        <>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6 first:mt-0">What Evolve Actually Does (And What They Don't)</h3>
          <p>
            Evolve markets themselves as "low-fee, high-service." The 10% covers: listing creation and optimization, multi-platform marketing, dynamic pricing via SmartRates, guest communication, basic screening, and insurance. But what you still handle: finding and vetting cleaners, managing cleaner schedules when they cancel, coordinating maintenance and repairs, property inspections between guests, restocking supplies, guest issues on the ground (lockouts, WiFi, hot tub questions), emergency response at 2 AM, local compliance and permits, and smart home device management. Evolve handles the "online" part. You handle the "real world" part—where 80% of the work actually lives.
          </p>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6">The Real Cost of Evolve's "Cheap" Management</h3>
          <p>
            Example: Tampa Bay 2-bedroom condo, $40,000 annual revenue. Evolve's visible cost: $4,000 (10%). But add your time (10 hours/week × $50/hour = $26,000/year), cleaner management overhead (~$1,200), maintenance coordination (~$800), emergency callouts (~$600), and supply procurement (~$400). Total effective cost: $33,000+—or about 32–35% of revenue. Suddenly that 10% doesn't look so cheap. And you're still doing the hard parts. That's not passive income. That's a part-time job with a nice website.
          </p>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6">Why Tampa Bay Owners Are Leaving Evolve</h3>
          <p>
            Poor guest screening: Evolve's screening is basic—no local oversight, no one meeting guests at the property. Result: party houses, damaged properties, neighbor complaints. Dismissive support: ticket-based, template emails, no one who knows your property's quirks. No local presence: Evolve is headquartered in Denver, operating in 750 markets. You're the local presence. When a guest can't figure out the TV remote, when the cleaner doesn't show up, when the AC dies in August—it comes back to you. And like Vacasa, Evolve lists under their account. Leave? Zero reviews. Zero Superhost status. Starting from scratch.
          </p>
        </>
      }
      howDifferentContent={
        <>
          <p>
            When we built Between Stays Co, we looked at the Evolve model and asked: "What would actual full-service management look like?" The answer: We handle everything. You handle nothing (except cashing checks).
          </p>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6">What "Full-Service" Really Means</h3>
          <p>
            We handle: professional photography and listing optimization, dynamic pricing (algorithm + human Tampa market expert), multi-platform marketing, guest screening, 24/7 guest communication (local team, not call center), professional cleaning coordination, property inspection with photo documentation, supply restocking, maintenance management with our vetted local vendor network, monthly financial reporting, tax collection and remittance, and regulatory compliance. What you do: block personal use dates, approve repairs over $200, check your monthly statement, enjoy your passive income.
          </p>
          <h3 className="font-serif text-xl text-gray-900 mb-2 mt-6">The 18–25% Fee Explained</h3>
          <p>
            Our management fee is 18–25% of gross revenue. Using the same Tampa Bay 2BR example ($40,000 revenue): Between Stays Co at 22% = $8,800 total cost. Evolve at 10% plus your time and external costs = $33,000+ (32%+). Net savings with Between Stays Co: $10,000+ per year. And that's before revenue optimization—our owners typically see 8–15% higher revenue than with Evolve's generic pricing.
          </p>
          <Link to="/audit" className="text-[#5A7A6A] hover:text-[#3D5A4A] font-medium">
            Get your free property audit →
          </Link>
        </>
      }
      resultsContent={
        <>
          <p>
            <strong>The Property:</strong> 3-bedroom beach house, St. Pete Beach, walking distance to the pier.
          </p>
          <p>
            <strong>The Owner:</strong> Mike, an out-of-state investor who chose Evolve because the 10% fee seemed like smart business. After 12 months, he was spending 15+ hours per week managing cleaners (who kept quitting), handling maintenance coordination from 1,000 miles away, and fielding guest calls at all hours.
          </p>
          <p>
            <strong>The Numbers with Evolve:</strong> Annual revenue: $52,000. Evolve fees: $5,200. Mike's time value: $39,000 (15 hrs/week). Effective management cost: 46% of revenue. Occupancy: 64%. Average review score: 4.2 stars.
          </p>
          <p>
            <strong>The Numbers After 12 Months with Between Stays Co:</strong> Annual revenue: $68,000 (+31%). Management fees (22%): $14,960. Mike's time value: $0. Net improvement: +$18,040 annually. Occupancy: 79% (+15 points). Average review score: 4.9 stars.
          </p>
          <p>
            "I actually have my evenings back. I can travel without my phone buzzing. And I'm making more money. Why didn't I switch sooner?"
          </p>
          <Link to="/audit" className="text-[#5A7A6A] hover:text-[#3D5A4A] font-medium">
            Get your free property audit →
          </Link>
        </>
      }
      howSwitchWorksContent={
        <>
          <p>
            Evolve requires 90 days notice, but we can begin setup immediately. Here's the transition:
          </p>
          <p>
            <strong>Step 1: Free Consultation</strong> — We'll review your current performance, analyze your property, and give you an honest assessment of whether switching makes sense.
          </p>
          <p>
            <strong>Step 2: Contract Review</strong> — We'll look at your Evolve agreement and identify the cancellation terms. We can help you time this optimally.
          </p>
          <p>
            <strong>Step 3: Setup</strong> — While you're serving your notice period, we'll optimize your listing, set up our co-host access (keeping your existing reviews intact), and prepare our local vendor network.
          </p>
          <p>
            <strong>Step 4: Overlap Period</strong> — We typically run a 30-day overlap where we're fully managing while you transition away from Evolve. Zero gap in service.
          </p>
          <p>
            <strong>Step 5: Full Handover</strong> — Evolve is removed, we're your full management team. Your listing—with all its history and reviews—stays under your account.
          </p>
          <p>
            Total timeline: 90–120 days. We handle the logistics, vendor transitions, and guest communication.
          </p>
        </>
      }
      faqContent={
        <>
          <div>
            <h4 className="font-serif text-lg text-gray-900 mb-2">Is Evolve really cheaper at 10%?</h4>
            <p>Only if your time is worth $0. When you factor in the 10+ hours per week you'll spend managing cleaners, maintenance, and guest issues—plus the cost of external vendors—most owners find a true full-service manager at 18–25% actually costs less AND delivers better results.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gray-900 mb-2">Can't I just hire my own cleaner and use Evolve for marketing?</h4>
            <p>You can, but then you're the property manager. When the cleaner cancels, when the AC breaks at midnight, when guests need local recommendations—it all comes to you. That's not passive income. That's a side hustle you didn't ask for.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gray-900 mb-2">Will I lose my reviews if I leave Evolve?</h4>
            <p>Yes. Like Vacasa, Evolve lists under their account. However, Between Stays uses a co-host model where your listing stays under your account—so you keep all reviews forever. You'll never face this problem again.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gray-900 mb-2">How quickly can I switch from Evolve?</h4>
            <p>Evolve requires 90 days notice, but we can begin setup immediately. We typically complete transitions within 90–120 days total, ensuring no gap in service.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gray-900 mb-2">What if I'm not happy with Between Stays Co?</h4>
            <p>We offer a 90-day trial period. After that, it's month-to-month with 30-day cancellation. We're confident you'll stay because we earn it every month—not because a contract forces you to.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gray-900 mb-2">How do I know you'll be responsive if there's an emergency?</h4>
            <p>Because we're local and your property matters to our reputation. When a Between Stays Co owner has an emergency, they're texting or calling a real person who lives in Tampa Bay—not submitting a ticket to a queue in Denver. Our average response time is under 1 hour, 24/7.</p>
          </div>
        </>
      }
      comparisonTableRows={comparisonTableRows}
      otherManagerPages={otherManagerPages}
    />
  );
}
