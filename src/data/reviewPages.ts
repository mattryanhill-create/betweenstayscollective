export interface ReviewPageData {
  slug: string;
  competitorSlug: string | null;
  title: string;
  metaDescription: string;
  h1: string;
  intent: 'honest-review' | 'roundup' | 'pre-leave-guide';
}

export const reviewPages: ReviewPageData[] = [
  {
    slug: 'vacasa-tampa-bay-honest-review',
    competitorSlug: 'vacasa',
    title: 'Vacasa Tampa Bay: An Honest Owner-Side Review (2026)',
    metaDescription: 'A straight look at Vacasa in Tampa Bay — what they do well, where Pinellas County owners get frustrated, and what to weigh before signing or staying.',
    h1: 'Vacasa Tampa Bay: An Honest Owner-Side Review',
    intent: 'honest-review',
  },
  {
    slug: 'evolve-tampa-bay-honest-review',
    competitorSlug: 'evolve',
    title: 'Evolve Tampa Bay Review: What 10% Really Costs You',
    metaDescription: 'Evolve charges 10% — but Tampa Bay owners spend 10+ hours a week filling the gaps. A balanced review of where Evolve fits and where it falls short.',
    h1: 'Evolve Tampa Bay Review: What 10% Really Costs You',
    intent: 'honest-review',
  },
  {
    slug: 'casago-tampa-bay-honest-review',
    competitorSlug: 'casago',
    title: 'Casago Tampa Bay: Franchise Co-Hosting Reviewed',
    metaDescription: 'Casago in Tampa Bay runs on a franchise model. Here is what that means for service quality, listing ownership, and your bottom line.',
    h1: 'Casago Tampa Bay: A Franchise Co-Hosting Review',
    intent: 'honest-review',
  },
  {
    slug: 'airbnb-property-manager-tampa-roundup',
    competitorSlug: null,
    title: 'Best Airbnb Property Managers in Tampa Bay (2026 Roundup)',
    metaDescription: 'A side-by-side look at Tampa Bay short-term rental managers — Vacasa, Evolve, Casago, and the local boutique option — across fees, ownership, and service.',
    h1: 'Best Airbnb Property Managers in Tampa Bay (2026 Roundup)',
    intent: 'roundup',
  },
  {
    slug: 'what-to-know-before-leaving-vacasa',
    competitorSlug: 'vacasa',
    title: 'Before You Leave Vacasa: A 6-Step Tampa Bay Owner Checklist',
    metaDescription: 'Switching from Vacasa in Tampa Bay? Here is what to verify in your contract, how to protect your reviews, and how to time the transition.',
    h1: 'Before You Leave Vacasa: A Tampa Bay Owner Checklist',
    intent: 'pre-leave-guide',
  },
];

export function getReviewPageBySlug(slug: string): ReviewPageData | undefined {
  return reviewPages.find((r) => r.slug === slug);
}
