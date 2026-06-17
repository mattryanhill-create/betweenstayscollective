export interface ComparePageData {
  slug: string;
  leftSlug: string;
  rightSlug: string;
  title: string;
  metaDescription: string;
  h1: string;
}

export const comparePages: ComparePageData[] = [
  {
    slug: 'vacasa-vs-between-stays',
    leftSlug: 'vacasa',
    rightSlug: 'between-stays',
    title: 'Vacasa vs Between Stays Collective: Tampa Bay Owner Comparison',
    metaDescription: 'Vacasa vs Between Stays Collective for Tampa Bay short-term rental owners. Fees, listing ownership, reviews, and service compared side by side.',
    h1: 'Vacasa vs Between Stays Collective',
  },
  {
    slug: 'evolve-vs-between-stays',
    leftSlug: 'evolve',
    rightSlug: 'between-stays',
    title: 'Evolve vs Between Stays Collective: Which Fits Your Tampa Bay Rental?',
    metaDescription: 'Evolve charges 10% but you do the work. Between Stays charges 30% and does the work. A direct comparison for Pinellas County owners.',
    h1: 'Evolve vs Between Stays Collective',
  },
  {
    slug: 'casago-vs-between-stays',
    leftSlug: 'casago',
    rightSlug: 'between-stays',
    title: 'Casago vs Between Stays Collective: Tampa Bay Comparison',
    metaDescription: 'Casago is a franchise; Between Stays is a local boutique. Compared on fees, listing control, reviews, and Tampa Bay service quality.',
    h1: 'Casago vs Between Stays Collective',
  },
  {
    slug: 'vacasa-vs-evolve-tampa',
    leftSlug: 'vacasa',
    rightSlug: 'evolve',
    title: 'Vacasa vs Evolve in Tampa Bay: Owner-Side Breakdown',
    metaDescription: 'Vacasa vs Evolve for Tampa Bay short-term rental owners. Full-service vs marketing platform — the real trade-offs on fees, time, and listing control.',
    h1: 'Vacasa vs Evolve in Tampa Bay',
  },
  {
    slug: 'national-manager-vs-local-cohost',
    leftSlug: 'vacasa',
    rightSlug: 'between-stays',
    title: 'National Property Manager vs Local Co-Host: What Tampa Bay Owners Should Know',
    metaDescription: 'National brands offer scale. Local co-hosts offer attention. Compare the trade-offs for Tampa Bay short-term rental owners.',
    h1: 'National Property Manager vs Local Co-Host',
  },
  {
    slug: 'self-managing-vs-cohost',
    leftSlug: 'evolve',
    rightSlug: 'between-stays',
    title: 'Self-Managing vs Hiring a Co-Host in Tampa Bay',
    metaDescription: 'Self-managing your Tampa Bay short-term rental versus hiring a local co-host — the time, money, and stress trade-offs compared.',
    h1: 'Self-Managing vs Hiring a Co-Host',
  },
  {
    slug: 'property-manager-vs-airbnb-cohost',
    leftSlug: 'vacasa',
    rightSlug: 'between-stays',
    title: 'Property Manager vs Airbnb Co-Host: Which Does Your Tampa Bay Rental Need?',
    metaDescription: 'Property manager vs co-host — the legal, operational, and financial differences for Tampa Bay short-term rental owners.',
    h1: 'Property Manager vs Airbnb Co-Host',
  },
  {
    slug: 'full-service-vs-cohost-model',
    leftSlug: 'vacasa',
    rightSlug: 'between-stays',
    title: 'Full-Service Property Management vs Co-Host Model in Tampa Bay',
    metaDescription: 'Full-service property management and the co-host model serve different owners. Here is which fits your Tampa Bay rental setup.',
    h1: 'Full-Service vs Co-Host Model',
  },
];

export function getComparePageBySlug(slug: string): ComparePageData | undefined {
  return comparePages.find((c) => c.slug === slug);
}
