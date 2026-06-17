export interface Competitor {
  slug: string;
  name: string;
  type: 'national-manager' | 'cohost-platform' | 'local-manager';
  feeRangePct: string;
  contractType: string;
  listingOwnership: 'manager' | 'owner';
  reviewPortability: boolean;
  superhostRisk: 'high' | 'medium' | 'low';
  shortPitch: string;
  knownWeaknesses: string[];
}

export const competitors: Competitor[] = [
  {
    slug: 'vacasa',
    name: 'Vacasa',
    type: 'national-manager',
    feeRangePct: '25–35%+ effective',
    contractType: 'Long-term, auto-renewing',
    listingOwnership: 'manager',
    reviewPortability: false,
    superhostRisk: 'high',
    shortPitch: 'National full-service property manager. Highest brand recognition, highest fees.',
    knownWeaknesses: [
      'Listing belongs to Vacasa, not the owner',
      'Reviews stay with Vacasa if owner leaves',
      'Add-on fees stack on the headline percentage',
      'Limited local responsiveness',
    ],
  },
  {
    slug: 'evolve',
    name: 'Evolve',
    type: 'cohost-platform',
    feeRangePct: '10% flat',
    contractType: 'Flexible, monthly',
    listingOwnership: 'owner',
    reviewPortability: true,
    superhostRisk: 'medium',
    shortPitch: 'Lower-fee marketing platform. Owner still handles cleaning, vendors, and most guest support.',
    knownWeaknesses: [
      'Owner still coordinates cleaning and vendors',
      'No local team for emergencies or maintenance',
      'Limited pricing optimization for hyperlocal markets',
      'Owner does 10+ hours of work per week on average',
    ],
  },
  {
    slug: 'casago',
    name: 'Casago',
    type: 'national-manager',
    feeRangePct: '20–30%',
    contractType: 'Annual',
    listingOwnership: 'manager',
    reviewPortability: false,
    superhostRisk: 'high',
    shortPitch: 'Franchise-model national manager. Local operator quality varies widely by market.',
    knownWeaknesses: [
      'Franchise quality inconsistent across markets',
      'Listing under Casago account, not owner',
      'Reviews not portable',
      'Pricing decisions made centrally, not by local team',
    ],
  },
];

export const betweenStaysProfile: Competitor = {
  slug: 'between-stays',
  name: 'Between Stays Collective',
  type: 'local-manager',
  feeRangePct: '30% revenue share',
  contractType: 'No long-term commitment',
  listingOwnership: 'owner',
  reviewPortability: true,
  superhostRisk: 'low',
  shortPitch: 'Boutique Tampa Bay co-host. Local team, owner keeps the listing, no upfront fees.',
  knownWeaknesses: [],
};

export function getCompetitorBySlug(slug: string): Competitor | undefined {
  return competitors.find((c) => c.slug === slug);
}
