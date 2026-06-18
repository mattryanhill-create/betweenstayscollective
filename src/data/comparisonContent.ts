import type { FaqItem } from '@/components/programmatic/FaqAccordion';

export interface ComparisonRow {
  label: string;
  left: string;
  right: string;
}

export interface InternalLink {
  to: string;
  label: string;
}

export interface ComparisonContent {
  slug: string;
  breadcrumbLabel: string;
  eyebrow: string;
  h1: string;
  subheadline: string;
  metaDescription: string;
  angleHeadline: string;
  angleParagraph: string;
  tableHeadline: string;
  tableLeftLabel: string;
  tableRows: ComparisonRow[];
  tableFootnote: string;
  realCostHeadline: string;
  realCostParagraph: string;
  testimonialCompetitor: string;
  faqHeadline: string;
  faqs: FaqItem[];
  internalLinks: InternalLink[];
}

export const comparisonContent: ComparisonContent[] = [
  // ============================================================
  // 1. Vacasa vs Between Stays Collective
  // ============================================================
  {
    slug: 'vacasa-vs-between-stays',
    breadcrumbLabel: 'Vacasa vs Between Stays',
    eyebrow: 'Vacasa vs Between Stays Collective',
    h1: 'Vacasa vs Between Stays: Who Owns Your Listing When You Leave?',
    subheadline:
      'Both charge a percentage. Only one lets you keep your reviews, your Superhost status, and your guest history if you decide to part ways.',
    metaDescription:
      'Honest comparison of Vacasa vs Between Stays Collective for Tampa Bay short-term rental owners. Fees, contract terms, and what happens to your listing if you switch.',
    angleHeadline:
      'Vacasa does not manage your property. It absorbs it.',
    angleParagraph:
      'Most Vacasa owners we talk to feel like they are getting the stability of a big brand until they try to leave and realize their listing, their reviews, and their guest data belong to Vacasa, not them. Other Tampa Bay owners felt trapped at first, assuming the convenience was worth it. What they found was that a local co-hosting model delivered the same operational relief without requiring them to hand over the keys to their digital identity. The fees are real, but the bigger cost is structural: when you sign with Vacasa, you become a property in their portfolio rather than an owner with a partner.',
    tableHeadline: 'How the two models actually compare',
    tableLeftLabel: 'Vacasa',
    tableRows: [
      {
        label: 'Listing ownership',
        left: 'Listing managed under Vacasa account; reviews, Superhost status, and guest history belong to Vacasa',
        right: 'You keep your Airbnb account; we are added as a co-host; your reviews and history stay with you',
      },
      {
        label: 'Headline fee',
        left: '25 to 35% of gross revenue',
        right: '30% all-in, no additional fees',
      },
      {
        label: 'Effective all-in cost',
        left: '35 to 45%+ once add-ons (interior design, linen programs, insurance, damage waivers) are included',
        right: '30% flat, no add-ons, no setup fees',
      },
      {
        label: 'Contract length',
        left: 'Multi-month or annual contract with exit penalties',
        right: 'Month-to-month, 30 days notice, no termination fee',
      },
      {
        label: 'Pricing approach',
        left: 'Centralized algorithm across all Vacasa markets',
        right: 'Local Pinellas County submarket pricing, adjusted weekly',
      },
      {
        label: 'Local team',
        left: 'Centralized operations with regional contractors',
        right: 'Tampa Bay team, average guest response time under 15 minutes',
      },
    ],
    tableFootnote:
      'Fee ranges reflect publicly disclosed Vacasa rates and owner-reported all-in costs as of 2026. Effective costs vary by market and property type.',
    realCostHeadline: 'What Vacasa actually costs a Tampa Bay owner.',
    realCostParagraph:
      'The headline fee of 25 to 35% is not the real number. Add guest service fees, cleaning markups, linen program charges, vacation rental insurance, and the revenue hit from centralized pricing that does not adjust for Tampa Bay micro-seasonality, and most Vacasa owners in Pinellas County are giving up closer to 35 to 45% of what guests actually pay. The hidden cost is what happens when you decide to leave. The listing restarts from zero on a new account. Years of reviews, gone. Superhost status, gone. In a market where occupancy is down 5 to 12% year-over-year depending on submarket, restarting a listing means 6 to 12 months of lost momentum.',
    testimonialCompetitor: 'Vacasa',
    faqHeadline: 'Questions owners ask before switching from Vacasa.',
    faqs: [
      {
        question: 'If I switch from Vacasa, do I lose all my reviews?',
        answer:
          'It depends on how the listing was set up. If Vacasa created the listing under their account, the reviews legally belong to Vacasa and stay with them when you leave. If you owned the Airbnb account before Vacasa came in as a manager, you may be able to retain the listing with reviews intact. We help walk through this on the audit call so you know exactly where you stand before you commit to anything.',
      },
      {
        question: 'How does the transition work? Will my bookings drop during the switch?',
        answer:
          'The transition typically takes 2 to 3 weeks. We work with you to set the right date so existing reservations are honored without disruption. New bookings continue through the transition because the listing stays live the entire time. The bigger consideration is which account the listing lives under going forward. Owners who already have an Airbnb account from before Vacasa can usually retain it. Owners whose listing was created by Vacasa may need to rebuild on a new account.',
      },
      {
        question: 'What happens to my existing reservations and upcoming guest stays?',
        answer:
          'All confirmed reservations are honored. Guests do not see any change. The behind-the-scenes shift is from Vacasa managing your calendar to us managing it. You receive all future payouts directly from Airbnb (or whichever platform the booking came from) instead of through Vacasa, which actually improves cash flow because Vacasa typically holds funds for longer than Airbnb does.',
      },
      {
        question: 'Am I locked into a long-term contract?',
        answer:
          'No. Our co-hosting arrangement is month-to-month with no termination fee. You can pause or end the arrangement with 30 days notice. Your Airbnb listing stays under your account the entire time, so your guests, your reviews, and your Superhost status remain with you whether you stay with us or not.',
      },
    ],
    internalLinks: [
      { to: '/compare/evolve-vs-between-stays', label: 'Compare Evolve vs Between Stays Collective' },
      { to: '/compare/casago-vs-between-stays', label: 'Compare Casago vs Between Stays Collective' },
      { to: '/compare/vacasa-vs-evolve-tampa', label: 'Vacasa vs Evolve in Tampa Bay' },
      { to: '/reviews/vacasa-tampa-bay-honest-review', label: 'Honest Vacasa Tampa Bay Review' },
      { to: '/reviews/what-to-know-before-leaving-vacasa', label: 'Before You Leave Vacasa: A Checklist' },
      { to: '/locations/seminole-airbnb-cohost', label: 'Seminole, FL Co-Hosting' },
    ],
  },

  // ============================================================
  // 2. Evolve vs Between Stays Collective
  // ============================================================
  {
    slug: 'evolve-vs-between-stays',
    breadcrumbLabel: 'Evolve vs Between Stays',
    eyebrow: 'Evolve vs Between Stays Collective',
    h1: 'Evolve vs Between Stays: Are You Paying to Manage Your Own Property?',
    subheadline:
      'Evolve markets and distributes. You handle cleaning, maintenance, guest issues, and turnovers. Between Stays handles everything, and your listing stays yours.',
    metaDescription:
      'Honest comparison of Evolve vs Between Stays Collective for Tampa Bay owners. The 10% fee that becomes 25-30% all-in, and what you are actually paying for.',
    angleHeadline:
      'Evolve is the most expensive 10% in vacation rentals.',
    angleParagraph:
      'Evolve owners often feel like they have a property manager because the listing looks professional and the bookings come in. Other Tampa Bay owners felt the same way until they added up the hours they were still spending on cleaning coordination, guest calls at 11pm, and fixing the Wi-Fi between stays. What they found was that for roughly the same all-in cost, a local co-host handled all of that while they kept their listing under their own name. The Evolve 10% headline rate is real but incomplete. The 10% guest-side markup on Evolve.com bookings, the damage waiver fees Evolve keeps as revenue, and the underlying Airbnb and Vrbo channel commissions bring the effective owner cost to 25 to 30%, without including the cost of your own time running operations.',
    tableHeadline: 'How the two models actually compare',
    tableLeftLabel: 'Evolve',
    tableRows: [
      {
        label: 'What is included',
        left: 'Listing creation, photography, distribution, guest messaging, dynamic pricing software',
        right: 'Everything Evolve includes PLUS cleaning coordination, maintenance, local guest response, turnover management, and supplies',
      },
      {
        label: 'Headline fee',
        left: '10% (Core plan) or 15% (Plus plan)',
        right: '30% all-in',
      },
      {
        label: 'Effective all-in cost',
        left: '25 to 30%+ once underlying channel fees (Airbnb 15%, Vrbo 8-10%) and guest-side markups are included',
        right: '30% flat, no add-ons, no channel pass-through',
      },
      {
        label: 'Hours of owner work per week',
        left: '5 to 15 hours (cleaning coordination, maintenance, guest issues, supply runs)',
        right: '0 to 1 hour (we handle operations)',
      },
      {
        label: 'Setup and onboarding',
        left: '$250 one-time onboarding fee',
        right: 'No setup fee, no onboarding fee',
      },
      {
        label: 'Local team',
        left: 'No local presence in Pinellas County',
        right: 'Tampa Bay team, average guest response time under 15 minutes',
      },
    ],
    tableFootnote:
      'Evolve fee data from Evolve.com published pricing as of 2026. Effective all-in cost reflects underlying channel commissions and guest-side markups documented in owner reports.',
    realCostHeadline: 'What Evolve owners actually pay beyond the 10%.',
    realCostParagraph:
      'The 10% headline fee covers listing creation, photography, and distribution to booking platforms. What it does not cover is the 5 to 15 hours per week you will still spend coordinating cleaners, handling guest complaints, managing maintenance vendors, and inspecting the property between stays. In a market where occupancy is declining year-over-year, that time is either costing you directly or silently eroding your revenue because your listing is not being actively managed. Add the $250 onboarding fee, the 10% guest-side markup on Evolve.com bookings that suppresses your visibility on their own channel, and the damage waiver fees Evolve keeps as revenue, and the effective owner cost lands at 25 to 30% before you account for the value of your own time.',
    testimonialCompetitor: 'Evolve',
    faqHeadline: 'Questions Evolve owners ask before switching.',
    faqs: [
      {
        question: 'If Evolve handles the listing and I handle operations, what am I actually paying for?',
        answer:
          'Marketing, distribution, and a booking pipeline. Evolve gets your property in front of guests across Airbnb, Vrbo, Booking.com, and their own marketplace. That has real value if your alternative is self-listing on one or two platforms. What you are not paying for is local operations: when a guest calls at midnight because the air conditioning failed, Evolve does not send anyone. That is your problem, every time.',
      },
      {
        question: 'Does Evolve have a local team in Pinellas County for guest issues?',
        answer:
          "No. Evolve is a centralized operation. Guest communication runs through their support center, and any on-the-ground response, cleaning, maintenance, lockouts, damage assessment, is the owner's responsibility. Owners typically hire local vendors directly or use the cleaner network Evolve recommends, but coordination stays on the owner.",
      },
      {
        question: 'Will I earn more with Between Stays even though the fee percentage is higher?',
        answer:
          "It depends on the property. The 30% all-in cost with us is comparable to the effective 25-30% all-in cost with Evolve once you include channel pass-throughs, guest-side markups, and Evolve's onboarding fee. The difference is what you do with your time. If you currently spend 5 to 15 hours a week on Evolve operations, that is the cost most owners do not put a dollar value on. Owners who switch usually report similar net cash flow but much less personal time spent.",
      },
      {
        question: 'What about the Evolve guest-side fees?',
        answer:
          'Evolve adds a 10% markup on bookings through Evolve.com and collects damage waiver fees that they keep as revenue. Neither shows up as a cost on your owner statement, but both affect your competitiveness: higher all-in guest pricing means fewer bookings, especially on Evolve.com where your listing already competes with thousands of others. We do not add guest-side fees beyond what Airbnb or Vrbo charge directly.',
      },
    ],
    internalLinks: [
      { to: '/compare/vacasa-vs-between-stays', label: 'Compare Vacasa vs Between Stays Collective' },
      { to: '/compare/casago-vs-between-stays', label: 'Compare Casago vs Between Stays Collective' },
      { to: '/compare/vacasa-vs-evolve-tampa', label: 'Vacasa vs Evolve in Tampa Bay' },
      { to: '/reviews/evolve-tampa-bay-honest-review', label: 'Honest Evolve Tampa Bay Review' },
      { to: '/compare/self-managing-vs-cohost', label: 'Self-Managing vs Co-Hosting' },
      { to: '/locations/largo-airbnb-cohost', label: 'Largo, FL Co-Hosting' },
    ],
  },

  // ============================================================
  // 3. Casago vs Between Stays Collective
  // ============================================================
  {
    slug: 'casago-vs-between-stays',
    breadcrumbLabel: 'Casago vs Between Stays',
    eyebrow: 'Casago vs Between Stays Collective',
    h1: 'Casago vs Between Stays: Is Your "Local" Manager Actually Local?',
    subheadline:
      'Casago operates through franchise partners. Between Stays is a boutique Tampa Bay team that only takes properties we can personally serve, and your listing stays under your account.',
    metaDescription:
      'Honest comparison of Casago vs Between Stays Collective for Tampa Bay short-term rental owners. Franchise model versus boutique local team, and what each actually means for your property.',
    angleHeadline:
      'Casago franchisees wear the brand but work from the same playbook.',
    angleParagraph:
      "Casago owners feel like they are getting a local manager with a national brand behind them. Other Pinellas County owners felt reassured by that at first too. What they found was that Casago's franchise operators in Tampa Bay are often managing 50 to 80 properties with the same centralized tools, the same outsourced cleaning networks, and the same inability to adjust pricing for Dunedin's Highland Games weekend or Seminole's medical corridor demand spikes. The franchise model creates real margin pressure: the franchisee pays royalties to Casago corporate, which means their incentive is portfolio volume, not personal attention to your specific property.",
    tableHeadline: 'How the two models actually compare',
    tableLeftLabel: 'Casago',
    tableRows: [
      {
        label: 'Business model',
        left: 'Franchise; your market is managed by a Casago franchisee paying royalties to corporate',
        right: 'Owner-operated in Pinellas County, no franchise structure, no royalty pressure',
      },
      {
        label: 'Portfolio size per operator',
        left: 'Typically 50 to 80+ properties per franchise office',
        right: 'Selective portfolio sized for personal attention to each property',
      },
      {
        label: 'Pricing approach',
        left: 'Centralized Casago technology platform applied across all franchise locations',
        right: 'Local Pinellas County submarket pricing, adjusted weekly with local event awareness',
      },
      {
        label: 'Listing ownership',
        left: 'Listing typically managed under Casago franchisee account',
        right: 'You keep your Airbnb account; we are added as a co-host',
      },
      {
        label: 'Contract length',
        left: 'Typically multi-month commitment, varies by franchise',
        right: 'Month-to-month, 30 days notice, no termination fee',
      },
      {
        label: 'Local team',
        left: 'Franchisee team, scaled to manage 50-80 properties',
        right: 'Tampa Bay team, average guest response time under 15 minutes',
      },
    ],
    tableFootnote:
      'Casago operates a franchise model documented in their corporate franchise materials. Specific contract terms for Tampa Bay vary by franchisee. Ask any local manager for written terms before signing.',
    realCostHeadline: 'The franchise math working against you.',
    realCostParagraph:
      'The Casago pitch is "big brand resources with local attention." The reality of most franchise models is that the franchisee pays ongoing royalties and brand fees to Casago corporate, which means their margin pressure is higher than an independent operator\'s. That pressure shows up in two places: portfolio bloat (taking more properties than they can actively manage to spread fixed costs) and centralized pricing that does not adjust for the fact that Clearwater Beach and downtown St. Pete are different markets with different demand curves. A boutique operator without that royalty load can stay smaller and price more carefully.',
    testimonialCompetitor: 'Casago',
    faqHeadline: 'Questions Casago owners ask before switching.',
    faqs: [
      {
        question: "Is Casago's Tampa Bay team actually based in Pinellas County?",
        answer:
          'Casago Tampa Bay is run by a local franchisee, so yes, there are people in the area. The question worth asking is how many properties that franchisee is managing and what their staff-to-property ratio looks like. A franchise office managing 50 to 80 properties cannot give the same attention to your listing as a boutique operator managing a tightly selected portfolio. Ask any local manager, Casago franchisee or otherwise, exactly how many properties they have and how many people work on them. The math tells the story.',
      },
      {
        question: 'Who owns the Airbnb listing, me or Casago?',
        answer:
          "In most Casago markets, the listing is created and managed under the franchisee's account. That means reviews, Superhost status, and guest history accumulate to the franchisee, not to you. Get this in writing before signing. If a franchise representative tells you your account stays yours, ask them to put it in the contract. Our model adds us as a co-host under your existing account, so this question never comes up.",
      },
      {
        question: 'How many properties does Casago manage in Tampa Bay, and will mine get personal attention?',
        answer:
          'That depends entirely on the specific franchisee. Casago corporate does not publish per-market portfolio sizes, but the franchise model is built on scale. A franchisee with 30 properties has different operational capacity than one with 80. Ask for actual numbers when you talk to them. We do not have a fixed cap, but we are selective about properties so the people working on your listing actually have time for it.',
      },
      {
        question: 'What is the franchise royalty doing to my service quality?',
        answer:
          'Franchisees pay Casago corporate a percentage of their revenue plus brand and technology fees on top. That cost has to come from somewhere, and it usually comes from operational overhead being spread thinner across more properties. An independent local operator, like us, does not have that royalty load, which means more of your fee dollars go to the people actually working on your property instead of to a corporate parent.',
      },
    ],
    internalLinks: [
      { to: '/compare/vacasa-vs-between-stays', label: 'Compare Vacasa vs Between Stays Collective' },
      { to: '/compare/evolve-vs-between-stays', label: 'Compare Evolve vs Between Stays Collective' },
      { to: '/reviews/casago-tampa-bay-honest-review', label: 'Honest Casago Tampa Bay Review' },
      { to: '/compare/national-manager-vs-local-cohost', label: 'National Manager vs Local Co-Host' },
      { to: '/locations/dunedin-airbnb-cohost', label: 'Dunedin, FL Co-Hosting' },
      { to: '/locations/clearwater-airbnb-cohost', label: 'Clearwater, FL Co-Hosting' },
    ],
  },

  // ============================================================
  // 4. Vacasa vs Evolve in Tampa Bay
  // ============================================================
  {
    slug: 'vacasa-vs-evolve-tampa',
    breadcrumbLabel: 'Vacasa vs Evolve (Tampa Bay)',
    eyebrow: 'Vacasa vs Evolve, Tampa Bay Edition',
    h1: 'Vacasa vs Evolve in Tampa Bay: What Neither Tells You Before You Sign',
    subheadline:
      'Both are national brands. Both take a percentage. Both handle parts of your business while leaving gaps you may not notice until your numbers stall. Here is how they actually compare, and what a third option looks like.',
    metaDescription:
      'Honest comparison of Vacasa vs Evolve for Tampa Bay short-term rental owners. Fees, services, and what neither national manager tells you about the local market.',
    angleHeadline:
      'The Vacasa-versus-Evolve debate misses the point.',
    angleParagraph:
      'Most owners researching Vacasa vs Evolve feel like they are choosing between two professional options and just need to find the better deal. Other Tampa Bay owners felt the same way and picked one based on the headline fee. What they found six months later was that neither model was built to catch the micro-demand windows that make or break revenue in Pinellas County, and neither gave them back their listing when they wanted to leave. Vacasa is a full-service manager that takes your listing, runs it through their national pricing algorithm, and returns a statement that hides the true cost behind line items. Evolve is a marketing service that makes your listing look professional, distributes it widely, and hands you a calendar you still have to manage yourself, while charging you for the privilege. In a market where occupancy is down 5 to 12% year-over-year depending on submarket, the question is not which national brand is better. The question is whether a national brand is the right fit at all.',
    tableHeadline: 'Vacasa, Evolve, and a third option',
    tableLeftLabel: 'Vacasa vs Evolve',
    tableRows: [
      {
        label: 'Service model',
        left: 'Vacasa: full-service, owns operations. Evolve: marketing only, you run operations.',
        right: 'Full-service co-host, you keep the listing',
      },
      {
        label: 'Headline fee',
        left: 'Vacasa: 25-35%. Evolve: 10% (Core) or 15% (Plus).',
        right: '30% all-in',
      },
      {
        label: 'Effective all-in cost',
        left: 'Vacasa: 35-45%+ with add-ons. Evolve: 25-30% with channel pass-throughs.',
        right: '30% flat, no add-ons',
      },
      {
        label: 'Listing ownership',
        left: 'Vacasa: their account. Evolve: their account.',
        right: 'Your account, we are co-host',
      },
      {
        label: 'Hours of owner work',
        left: 'Vacasa: minimal. Evolve: 5-15 hours per week.',
        right: 'Near zero',
      },
      {
        label: 'Local pricing judgment',
        left: 'Both use centralized national algorithms',
        right: 'Local Pinellas County submarket pricing, adjusted weekly',
      },
      {
        label: 'Contract length',
        left: 'Vacasa: multi-month. Evolve: month-to-month with onboarding fee.',
        right: 'Month-to-month, no fees, no penalty',
      },
    ],
    tableFootnote:
      'Vacasa data from publicly disclosed rates and owner-reported all-in costs as of 2026. Evolve data from Evolve.com published pricing. Effective costs include channel pass-throughs and add-on fees documented in owner reports.',
    realCostHeadline: 'What both national brands miss about Tampa Bay.',
    realCostParagraph:
      'Vacasa and Evolve are both national distribution machines that happen to manage properties. Vacasa owns your operations but prices you like a commodity. Evolve owns your marketing but leaves you running operations. Neither is built for the reality of a softening Tampa Bay market where local pricing judgment matters more than scale. The owners who outperform in Pinellas County right now are the ones who can price for the Dunedin Highland Games, the Seminole medical corridor, the Innisbrook event calendar, and the downtown St. Pete food scene as different markets, because that is what they are. A national algorithm cannot do that. A local operator can.',
    testimonialCompetitor: 'a national manager',
    faqHeadline: 'Questions owners ask when comparing Vacasa, Evolve, and local alternatives.',
    faqs: [
      {
        question: 'If Vacasa and Evolve are both national, which one is better for Tampa Bay specifically?',
        answer:
          'Neither is built for Tampa Bay specifically. Vacasa applies the same pricing logic to a Clearwater Beach condo and a mountain cabin in Colorado. Evolve treats your Seminole property the same as a lake house in Wisconsin. The "better" question depends on what you value: Vacasa removes operational work but takes more revenue and your listing. Evolve keeps more revenue with you but requires 5 to 15 hours a week of your time. A local co-host removes operational work AND keeps your listing AND prices for the local market. The trade-off is the same fee range as Evolve\'s effective all-in cost.',
      },
      {
        question: 'Do either Vacasa or Evolve let me keep my Airbnb listing under my own account?',
        answer:
          'Generally no. Both typically create and manage listings under their own accounts. The reviews and Superhost history accumulated during the engagement stay with them when you leave. This is the structural difference that makes the headline fee comparison incomplete. The full picture includes what happens to your digital identity, not just what you pay this month.',
      },
      {
        question: 'Is there a local alternative that handles everything without taking my listing?',
        answer:
          'Yes. The co-host model is built specifically for this gap. A co-host is added to your existing Airbnb account as an authorized partner, which means we can manage pricing, guest communication, calendar, and operations without ever taking ownership of the listing itself. If we part ways, you keep everything: account, reviews, Superhost status, guest history. That is the structural advantage of the co-host model over both Vacasa\'s full-service ownership and Evolve\'s marketing-only model.',
      },
      {
        question: 'How do I actually decide between the three?',
        answer:
          "Run the math on your specific property. Take your current annual gross revenue. Apply Vacasa's 35 to 45% effective cost and ask whether removing all operational work is worth losing the listing. Apply Evolve's 25 to 30% effective cost and ask whether the 5 to 15 hours a week of operational work is worth saving. Then compare to the 30% all-in cost of a local co-host who handles everything and keeps your listing intact. The numbers usually point clearly to one option once you do the actual arithmetic. We do this audit for free.",
      },
    ],
    internalLinks: [
      { to: '/compare/vacasa-vs-between-stays', label: 'Vacasa vs Between Stays Collective (direct)' },
      { to: '/compare/evolve-vs-between-stays', label: 'Evolve vs Between Stays Collective (direct)' },
      { to: '/reviews/vacasa-tampa-bay-honest-review', label: 'Honest Vacasa Tampa Bay Review' },
      { to: '/reviews/evolve-tampa-bay-honest-review', label: 'Honest Evolve Tampa Bay Review' },
      { to: '/locations/clearwater-airbnb-cohost', label: 'Clearwater, FL Co-Hosting' },
      { to: '/locations/st-petersburg-airbnb-cohost', label: 'St. Petersburg, FL Co-Hosting' },
    ],
  },

  // ============================================================
  // 5. National Property Manager vs Local Co-Host
  // ============================================================
  {
    slug: 'national-manager-vs-local-cohost',
    breadcrumbLabel: 'National Manager vs Local Co-Host',
    eyebrow: 'National Manager vs Local Co-Host',
    h1: 'National Manager vs Local Co-Host: Scale or Specificity?',
    subheadline:
      'One runs your property from a dashboard across 50 markets. The other prices it based on knowing what is actually happening this weekend in your neighborhood. In a softening market, that difference is revenue.',
    metaDescription:
      'Honest comparison of national property managers versus local co-hosts for short-term rental owners. How centralized scale and local judgment actually compare in revenue terms.',
    angleHeadline:
      'In a softening market, algorithmic pricing is an expensive shortcut.',
    angleParagraph:
      'Owners with national managers feel secure because they see a big brand name, a clean dashboard, and regular booking notifications. Other Tampa Bay owners felt the same way until they compared their revenue to neighbors in the same building and realized the national manager\'s "dynamic pricing" had not adjusted for a local event, a supply spike, or a demand dip. What they found was that a local co-host who knows Seminole\'s medical corridor or Clearwater\'s seasonality personally captured 15 to 25% more revenue on the same property. National managers treat your property as a data point in a portfolio of thousands. A local co-host treats it as a relationship.',
    tableHeadline: 'How the two models actually compare',
    tableLeftLabel: 'National Property Manager',
    tableRows: [
      {
        label: 'Pricing approach',
        left: 'Centralized algorithm applied across all markets',
        right: 'Local submarket pricing, adjusted weekly with local event awareness',
      },
      {
        label: 'Listing ownership',
        left: "Typically managed under manager's corporate account",
        right: 'You keep your account; we are co-host',
      },
      {
        label: 'Contract length',
        left: 'Multi-month or annual contracts with exit penalties',
        right: 'Month-to-month, 30 days notice, no fee',
      },
      {
        label: 'Local market knowledge',
        left: 'Generalized national playbook',
        right: 'Pinellas County submarket-specific knowledge (Dunedin events, Seminole medical demand, etc.)',
      },
      {
        label: 'Guest response time',
        left: 'Typically hours, routed through central support',
        right: 'Under 15 minutes during waking hours, local team',
      },
      {
        label: 'Decision-making speed',
        left: 'Pricing and policy changes routed through corporate',
        right: 'Local team can adjust pricing same-day based on local conditions',
      },
    ],
    tableFootnote:
      'National manager characteristics are based on the dominant operational patterns of full-service vacation rental managers operating in multiple markets, including Vacasa, Casago, and similar.',
    realCostHeadline: 'The revenue you lose when your manager does not know the market.',
    realCostParagraph:
      'The cost of a national manager is not just the fee percentage. It is the revenue you lose when their algorithm prices your Dunedin property too low during the Highland Games because the system does not know the Highland Games exist. It is the revenue you lose when their guest response time is measured in hours, not minutes, and the booking goes to a competitor whose local co-host answered in ten. In Pinellas County, where the gap between top-quartile and median revenue is $20,000 to $33,000 per year depending on submarket, algorithmic pricing without local context is an expensive shortcut.',
    testimonialCompetitor: 'a national manager',
    faqHeadline: 'Questions owners ask when considering local co-hosting.',
    faqs: [
      {
        question: 'Will a local co-host get me as many bookings as a national brand?',
        answer:
          'Distribution is not the bottleneck. Your listing appears on Airbnb, Vrbo, and Booking.com regardless of whether a national manager or a local co-host is running it. What changes is how the listing is priced, how fast guest issues are resolved, and how the listing is positioned in local search results. A well-managed local listing competes for the same bookings as a nationally-managed one. The difference is in conversion and revenue per available night, not in raw visibility.',
      },
      {
        question: 'How do I know a local co-host will not just disappear or go out of business?',
        answer:
          'Same way you would vet any service business: look at how long they have been operating, ask for references, check the contract terms, and confirm they carry appropriate insurance. The bigger risk most owners do not consider is what happens if you switch managers under a national brand. Your listing, reviews, and guest history may stay with the national manager. With a co-host arrangement, your listing stays under your account regardless of what happens to the co-host. If we close tomorrow, you have your listing, your reviews, and your bookings intact.',
      },
      {
        question: "Is the higher revenue from local pricing worth losing the national brand's marketing reach?",
        answer:
          'There is no marketing reach difference. National brands distribute the same listings to the same platforms a local co-host distributes to. The "brand" value of being managed by a national company is invisible to guests booking through Airbnb or Vrbo, because guests see the listing, the photos, the reviews, and the price. They do not see who is managing it behind the scenes. What guests do notice: response time, accuracy of the listing description, cleanliness consistency, and how issues are handled during their stay. Those are the things a local team can do better.',
      },
    ],
    internalLinks: [
      { to: '/compare/vacasa-vs-between-stays', label: 'Vacasa vs Between Stays Collective' },
      { to: '/compare/casago-vs-between-stays', label: 'Casago vs Between Stays Collective' },
      { to: '/compare/property-manager-vs-airbnb-cohost', label: 'Property Manager vs Airbnb Co-Host' },
      { to: '/compare/full-service-vs-cohost-model', label: 'Full-Service vs Co-Host Model' },
      { to: '/locations/seminole-airbnb-cohost', label: 'Seminole, FL Co-Hosting' },
      { to: '/locations/palm-harbor-airbnb-cohost', label: 'Palm Harbor, FL Co-Hosting' },
    ],
  },

  // ============================================================
  // 6. Self-Managing vs Co-Hosting
  // ============================================================
  {
    slug: 'self-managing-vs-cohost',
    breadcrumbLabel: 'Self-Managing vs Co-Hosting',
    eyebrow: 'Self-Managing vs Co-Hosting',
    h1: 'Self-Managing vs Co-Hosting: What Is Your Time Actually Worth?',
    subheadline:
      'You keep 100% of revenue when you self-manage. You also keep 100% of the guest messages, the 2am lockout calls, the pricing updates, and the cleaner no-shows. Here is the math most owners do not do.',
    metaDescription:
      'Honest comparison of self-managing versus co-hosting your Tampa Bay short-term rental. The hourly math, the pricing trade-off, and what owners actually report.',
    angleHeadline:
      'Self-managing is a part-time job paying $15 to $25 an hour.',
    angleParagraph:
      'Self-managing owners feel like they are maximizing their profit because they are not paying a management fee. Other Tampa Bay owners felt exactly the same way until they tracked their hours for one month and realized they were earning less per hour than their cleaner. What they found was that a co-hosting partnership freed them from operational tasks while keeping their listing under their name, and the revenue gain from professional pricing more than covered the 30% fee. The math is straightforward but most owners avoid doing it because the answer is uncomfortable.',
    tableHeadline: 'How the two models actually compare',
    tableLeftLabel: 'Self-Managing',
    tableRows: [
      {
        label: 'Revenue split',
        left: '100% to owner',
        right: '70% to owner, 30% to co-host',
      },
      {
        label: 'Owner hours per week',
        left: '10 to 20 hours (guest messages, pricing, cleaner coordination, maintenance, supply runs)',
        right: '0 to 1 hour',
      },
      {
        label: 'Pricing approach',
        left: 'Manual updates or automated tools without local context',
        right: 'Dynamic pricing tuned to Pinellas County submarket data, adjusted weekly',
      },
      {
        label: 'Guest response time',
        left: 'Depends on owner availability (and time zone)',
        right: 'Under 15 minutes during waking hours',
      },
      {
        label: 'Vacation eligibility',
        left: 'You stop, your property stops',
        right: 'Property runs whether you are available or not',
      },
      {
        label: 'Listing ownership',
        left: 'You',
        right: 'You (we are co-host on your account)',
      },
    ],
    tableFootnote:
      'Owner hour ranges based on documented short-term rental operational time studies. Actual hours vary by property type, turnover frequency, and guest profile.',
    realCostHeadline: 'The math most self-managing owners avoid.',
    realCostParagraph:
      'The math is simple but most owners avoid it. Track every hour you spend on your short-term rental for 30 days: guest messages, pricing updates, cleaner coordination, maintenance calls, review responses, supply runs, turnover inspections. Multiply by what your time is worth. If you are at 15 hours a week and value your time at $50 an hour, you are spending $3,000 a month of your own labor to save $900 in co-hosting fees on a $3,000-monthly-revenue property. That is not profit maximization. That is a low-paying job you gave yourself without benefits. The second piece of the math: pricing. Most self-managing owners do not run real dynamic pricing. A professional co-host with local market data typically captures 10 to 20% more revenue per available night, which often exceeds the 30% fee in absolute dollars.',
    testimonialCompetitor: 'self-management',
    faqHeadline: 'Questions self-managing owners ask before adding a co-host.',
    faqs: [
      {
        question: 'If I co-host, do I lose control over my property and pricing?',
        answer:
          'No. The co-host model is collaborative by design. You set the rules: minimum stays, pet policy, guest age restrictions, pricing floor. We handle execution within those rules. You can pull pricing back into your own hands at any time, override specific bookings, or block dates for personal use. The listing stays under your account, so you always have the final say.',
      },
      {
        question: 'I only have one property. Is co-hosting worth it for a single listing?',
        answer:
          'Often yes, depending on how much time you currently spend and how dialed-in your pricing is. Single-property owners are actually the most underserved by national managers because they get the same generic algorithm and call-center treatment as a portfolio of fifty. A boutique co-host is sized for owners with one or two properties who want professional management without becoming a number in a corporate pipeline.',
      },
      {
        question: 'What happens to my existing bookings and guest relationships if I bring in a co-host?',
        answer:
          'All existing bookings are honored without changes. Guests do not see any disruption, to them the listing looks the same because it is the same. Guest communication is the only thing that shifts: instead of going to your phone, messages route through Airbnb to our team. We respond with your voice and your rules. If you have personal guests booked through other channels, those remain entirely yours.',
      },
      {
        question: 'How quickly do I see the revenue improvement?',
        answer:
          'Pricing changes typically show measurable impact within 30 to 60 days as the new rates take effect across the booking window. The bigger lift often comes from listing quality improvements, better photography, sharper copy, faster response time, which lift conversion rate over 60 to 90 days. By month three, most owners are seeing both: higher rates AND higher occupancy.',
      },
    ],
    internalLinks: [
      { to: '/compare/national-manager-vs-local-cohost', label: 'National Manager vs Local Co-Host' },
      { to: '/compare/property-manager-vs-airbnb-cohost', label: 'Property Manager vs Airbnb Co-Host' },
      { to: '/compare/full-service-vs-cohost-model', label: 'Full-Service vs Co-Host Model' },
      { to: '/locations/seminole-airbnb-cohost', label: 'Seminole, FL Co-Hosting' },
      { to: '/locations/largo-airbnb-cohost', label: 'Largo, FL Co-Hosting' },
      { to: '/locations/st-petersburg-airbnb-cohost', label: 'St. Petersburg, FL Co-Hosting' },
    ],
  },

  // ============================================================
  // 7. Traditional Property Manager vs Airbnb Co-Host Model
  // ============================================================
  {
    slug: 'property-manager-vs-airbnb-cohost',
    breadcrumbLabel: 'Property Manager vs Co-Host',
    eyebrow: 'Property Manager vs Airbnb Co-Host',
    h1: 'Property Manager vs Co-Host: Who Owns the Relationship With Your Guests?',
    subheadline:
      'Traditional managers build their business on your property. Co-hosts build your business while operating inside your account. The difference shows up the day you want to make a change.',
    metaDescription:
      'Honest comparison of traditional property managers versus the Airbnb co-host model. Listing ownership, contract terms, and what happens when you switch.',
    angleHeadline:
      'The traditional property manager model was built for long-term leases, not short-term rentals.',
    angleParagraph:
      'Traditional property managers feel like the safe choice because that is how residential property management has worked for decades. Other short-term rental owners felt the same way until they tried to switch managers and discovered their Airbnb listing, their reviews, and their guest database were not theirs to take. What they found was that the co-host model gave them the operational support of a manager with the ownership rights of a self-managing host. Short-term rentals are a different business than long-term leases: your revenue depends on nightly pricing judgment, your reputation depends on review accumulation, and your asset value depends on the digital history attached to your listing.',
    tableHeadline: 'How the two models actually compare',
    tableLeftLabel: 'Traditional Property Manager',
    tableRows: [
      {
        label: 'Listing ownership',
        left: "Created and held under property manager's account",
        right: 'Stays under your account; we are added as authorized co-host',
      },
      {
        label: 'Contract length',
        left: 'Typically 6 to 12 months with exit penalties',
        right: 'Month-to-month, 30 days notice, no fee',
      },
      {
        label: 'Marketing',
        left: "Pooled into manager's portfolio marketing",
        right: 'Your individual listing identity preserved',
      },
      {
        label: 'Reviews accumulate to',
        left: "Manager's account",
        right: 'Your account',
      },
      {
        label: 'Pricing approach',
        left: 'Often quarterly review cycles, sometimes longer',
        right: 'Weekly adjustments based on local Pinellas County demand patterns',
      },
      {
        label: 'Switching cost',
        left: 'High: listing, reviews, and guest data stay with manager',
        right: 'Zero: take your listing and history with you anytime',
      },
    ],
    tableFootnote:
      'Traditional property manager characteristics are based on the dominant operational patterns of full-service vacation rental management companies that create listings under their corporate accounts.',
    realCostHeadline: 'The asset that traditional managers quietly capture.',
    realCostParagraph:
      'The traditional property manager model was built for long-term residential rentals, the kind where a tenant signs a 12-month lease and the manager collects rent and handles repairs. Short-term rentals are a different business: your revenue depends on nightly pricing judgment, your reputation depends on review accumulation, and your asset value depends on the digital history attached to your listing. A traditional manager treats that digital history as their asset. A co-host treats it as yours, because it is. The day you want to switch managers, for any reason, including improving service, the difference between these two models becomes very tangible. With a traditional manager, switching usually means starting over. With a co-host, switching means giving 30 days notice.',
    testimonialCompetitor: 'a traditional property manager',
    faqHeadline: 'Questions owners ask when considering the co-host model.',
    faqs: [
      {
        question: 'If my property manager already controls my listing, can I get it back?',
        answer:
          'It depends on the original contract. If you owned the Airbnb account before the manager came in, you may be able to retain the listing with reviews intact. If the manager created the listing under their account from scratch, those reviews and that Superhost status legally belong to the manager. We help walk through this on the audit call so you know exactly where you stand before committing to anything.',
      },
      {
        question: 'What is the difference in day-to-day operations between a manager and a co-host?',
        answer:
          "Most of the work looks the same on the ground: guest messages get answered, cleanings happen between stays, maintenance gets coordinated, pricing gets updated. The difference is structural rather than operational. A manager does this work under their company's name and account. A co-host does this work under your account, with you as the visible owner. From the guest's perspective, the experience is identical.",
      },
      {
        question: 'Will guests know I have a co-host, or will they think I am self-managing?',
        answer:
          'Guests usually do not notice and do not care. They book a property, they communicate with whoever responds, they check in, they check out. The listing remains under your account. The co-host designation is visible to you in your Airbnb dashboard but not prominently displayed to guests. Most co-host arrangements are completely invisible to the guest experience.',
      },
    ],
    internalLinks: [
      { to: '/compare/national-manager-vs-local-cohost', label: 'National Manager vs Local Co-Host' },
      { to: '/compare/full-service-vs-cohost-model', label: 'Full-Service vs Co-Host Model' },
      { to: '/compare/self-managing-vs-cohost', label: 'Self-Managing vs Co-Hosting' },
      { to: '/compare/vacasa-vs-between-stays', label: 'Vacasa vs Between Stays Collective' },
      { to: '/locations/dunedin-airbnb-cohost', label: 'Dunedin, FL Co-Hosting' },
      { to: '/locations/pinellas-park-airbnb-cohost', label: 'Pinellas Park, FL Co-Hosting' },
    ],
  },

  // ============================================================
  // 8. Full-Service Management vs Co-Host Model
  // ============================================================
  {
    slug: 'full-service-vs-cohost-model',
    breadcrumbLabel: 'Full-Service vs Co-Host',
    eyebrow: 'Full-Service Management vs Co-Host Model',
    h1: 'Full-Service Management vs Co-Host: One Fee or a Dozen?',
    subheadline:
      'Full-service managers bury costs in line items. Co-hosts charge 30% of revenue and that is it. Here is what full-service statements actually include, and what most owners miss until month three.',
    metaDescription:
      'Honest comparison of full-service vacation rental management versus the co-host model. Fee transparency, hidden costs, and what owners actually pay all-in.',
    angleHeadline:
      'Full-service makes money in the gaps between what you think you pay and what you actually pay.',
    angleParagraph:
      'Full-service management sounds like the easiest option because the owner does not have to think about anything. Other Tampa Bay owners felt that relief at first too. What they found was that "full service" meant full opacity: their monthly statement had 8 to 12 line items they could not reconcile, their revenue was lower than neighboring properties, and when they asked questions they got routed to a call center in another state. The headline fee of 25 to 30% covers basic management. Then the cleaning markup adds 10 to 15%. Then the guest service fee on the booking platform adds another chunk. Then the linen program, the supply replenishment, the maintenance coordination fee, and the photography upgrade fee show up on month two when you are already committed. By month three, most full-service owners have stopped reading their statement because it is too confusing to reconcile.',
    tableHeadline: 'How the two models actually compare',
    tableLeftLabel: 'Full-Service Manager',
    tableRows: [
      {
        label: 'Headline fee',
        left: '25 to 30% of gross revenue',
        right: '30% all-in',
      },
      {
        label: 'Additional line items',
        left: 'Cleaning coordination, linen program, supplies, maintenance, photography, marketing upgrades',
        right: 'None. 30% covers everything.',
      },
      {
        label: 'Effective all-in cost',
        left: '35 to 45%+ once add-ons are included',
        right: '30% flat',
      },
      {
        label: 'Setup fees',
        left: 'Often includes onboarding fee, photography fee, listing creation fee',
        right: 'No setup fees',
      },
      {
        label: 'Minimum revenue guarantees',
        left: 'Often present with associated commitments and penalties',
        right: 'None',
      },
      {
        label: 'Statement transparency',
        left: '8-12 line items, often difficult to reconcile',
        right: 'Single line: 30% of revenue. Full statement available.',
      },
      {
        label: 'Listing ownership',
        left: "Manager's account; guest data stays with manager",
        right: 'Your account; all data remains your property',
      },
    ],
    tableFootnote:
      'Full-service manager fee structures are based on the dominant operational patterns of major vacation rental management companies operating in 2026 markets.',
    realCostHeadline: 'The opacity is not accidental. It is the business model.',
    realCostParagraph:
      'The full-service model makes money in the gaps between what you think you are paying and what you actually pay. The headline fee of 25 to 30% covers basic management. Then the cleaning markup adds 10 to 15% on top of what the cleaner actually charges. Then the guest service fee on the booking platform adds another chunk. Then the linen program, the supply replenishment, the maintenance coordination fee, and the photography upgrade fee show up on month two when you are already committed. By month three, most full-service owners have stopped reading their statement because it is too confusing to reconcile. That opacity is not accidental. It is the business model. The co-host alternative is one number: 30% of revenue. No add-ons, no markups, no setup fees. If the full statement is more confusing than your last tax return, something is wrong.',
    testimonialCompetitor: 'a full-service manager',
    faqHeadline: 'Questions full-service owners ask about the co-host model.',
    faqs: [
      {
        question: 'What does "full-service" actually include, and what costs extra?',
        answer:
          'It varies by manager, but the typical pattern is: management fee covers guest communication, basic operations, and platform listing maintenance. What costs extra (often without prominent disclosure): cleaning coordination markup (10-15% added to cleaner invoices), linen and consumables programs ($5-15 per night per guest), maintenance coordination fees ($25-75 per incident), professional photography refresh ($300-800 per shoot), and platform booking fees passed through. Ask any full-service manager for a complete fee schedule in writing before signing. If they cannot produce one in a single document, that is the answer.',
      },
      {
        question: 'If I switch from full-service management, what happens to my existing reservations?',
        answer:
          'All confirmed reservations should be honored regardless of the management transition, but the mechanics depend on which account the listing lives under. If the manager owns the listing account, the manager controls those reservations. If you can retain or rebuild the listing under your own account, future reservations route to you. The audit conversation we do is partly about understanding this specific situation for your property before you make any commitments.',
      },
      {
        question: 'How do I compare my true all-in cost with a full-service manager against the 30% co-host fee?',
        answer:
          'Pull your last three full-service statements. Add every line item: management fee, cleaning markups, linen charges, maintenance coordination fees, supply replenishment, any service fees passed through. Divide that total by your gross revenue for the same period. That is your true all-in percentage. Most full-service owners discover they are between 35 and 45%. Compare directly to 30% all-in for a local co-host. If the math comes out close to even, the bigger question becomes which model gives you more control and better local pricing.',
      },
      {
        question: 'Why is the all-in cost lower with co-hosting if the headline fee is higher?',
        answer:
          'Because the 30% is genuinely all-in. There is no cleaning markup (cleaners bill you directly at their actual rate), no linen program upsell, no setup fee, no photography fee, no minimum revenue guarantee. Full-service managers structure their pricing to be lower on the headline and higher in the add-ons because that is what wins competitive shopping. The co-host model is structured to be transparent because the boutique positioning requires it. Same all-in math, different sales psychology.',
      },
    ],
    internalLinks: [
      { to: '/compare/national-manager-vs-local-cohost', label: 'National Manager vs Local Co-Host' },
      { to: '/compare/property-manager-vs-airbnb-cohost', label: 'Property Manager vs Airbnb Co-Host' },
      { to: '/compare/self-managing-vs-cohost', label: 'Self-Managing vs Co-Hosting' },
      { to: '/compare/vacasa-vs-between-stays', label: 'Vacasa vs Between Stays Collective' },
      { to: '/compare/casago-vs-between-stays', label: 'Casago vs Between Stays Collective' },
      { to: '/locations/clearwater-airbnb-cohost', label: 'Clearwater, FL Co-Hosting' },
    ],
  },
];

export function getComparisonContent(slug: string): ComparisonContent | undefined {
  return comparisonContent.find((c) => c.slug === slug);
}
