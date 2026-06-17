export interface Submarket {
  slug: string;
  city: string;
  state: string;
  airdnaScore: number;
  adr: number;
  occupancy: number;
  revpar: number;
  annualRevenue: number;
  topQuartileRevenue: number;
  yoyOccupancy: number;
  yoyAdr: number;
  yoyRevenue: number;
  activeListings: number;
  neighborhoodNotes: string;
  heroEyebrow: string;
}

export const submarkets: Submarket[] = [
  {
    slug: 'seminole',
    city: 'Seminole',
    state: 'FL',
    airdnaScore: 77,
    adr: 325,
    occupancy: 63,
    revpar: 203,
    annualRevenue: 66095,
    topQuartileRevenue: 99000,
    yoyOccupancy: -8.1,
    yoyAdr: 5.7,
    yoyRevenue: -0.4,
    activeListings: 645,
    neighborhoodNotes: 'Inland Pinellas, close to Madeira Beach, medical corridor and Seminole City Park nearby.',
    heroEyebrow: 'Seminole, FL Co-Hosting',
  },
  {
    slug: 'largo',
    city: 'Largo',
    state: 'FL',
    airdnaScore: 74,
    adr: 259,
    occupancy: 64,
    revpar: 162,
    annualRevenue: 54154,
    topQuartileRevenue: 81000,
    yoyOccupancy: -9.7,
    yoyAdr: 4.1,
    yoyRevenue: -3.4,
    activeListings: 1021,
    neighborhoodNotes: 'Central Pinellas with easy access to both Gulf beaches and Tampa via 275.',
    heroEyebrow: 'Largo, FL Co-Hosting',
  },
  {
    slug: 'dunedin',
    city: 'Dunedin',
    state: 'FL',
    airdnaScore: 74,
    adr: 201,
    occupancy: 64,
    revpar: 128,
    annualRevenue: 41778,
    topQuartileRevenue: 63000,
    yoyOccupancy: -5.0,
    yoyAdr: 0.8,
    yoyRevenue: -5.3,
    activeListings: 298,
    neighborhoodNotes: 'Walkable downtown, Scottish heritage, Honeymoon Island gateway — strong repeat-guest market.',
    heroEyebrow: 'Dunedin, FL Co-Hosting',
  },
  {
    slug: 'pinellas-park',
    city: 'Pinellas Park',
    state: 'FL',
    airdnaScore: 70,
    adr: 176,
    occupancy: 63,
    revpar: 110,
    annualRevenue: 36684,
    topQuartileRevenue: 55000,
    yoyOccupancy: -12.0,
    yoyAdr: 5.4,
    yoyRevenue: -5.7,
    activeListings: 191,
    neighborhoodNotes: 'Central Pinellas, mid-county access — smaller market with less competition.',
    heroEyebrow: 'Pinellas Park, FL Co-Hosting',
  },
  {
    slug: 'clearwater',
    city: 'Clearwater',
    state: 'FL',
    airdnaScore: 61,
    adr: 186,
    occupancy: 63,
    revpar: 117,
    annualRevenue: 39119,
    topQuartileRevenue: 59000,
    yoyOccupancy: -8.7,
    yoyAdr: 1.2,
    yoyRevenue: -6.7,
    activeListings: 1212,
    neighborhoodNotes: 'Inland Clearwater (not Clearwater Beach) — residential properties serving beach-bound travelers.',
    heroEyebrow: 'Clearwater, FL Co-Hosting',
  },
  {
    slug: 'st-petersburg',
    city: 'St. Petersburg',
    state: 'FL',
    airdnaScore: 58,
    adr: 261,
    occupancy: 64,
    revpar: 163,
    annualRevenue: 51973,
    topQuartileRevenue: 78000,
    yoyOccupancy: -8.0,
    yoyAdr: 3.4,
    yoyRevenue: -2.2,
    activeListings: 14099,
    neighborhoodNotes: 'Diverse metro market spanning downtown, neighborhood corridors, and inland residential.',
    heroEyebrow: 'St. Petersburg, FL Co-Hosting',
  },
  {
    slug: 'palm-harbor',
    city: 'Palm Harbor',
    state: 'FL',
    airdnaScore: 54,
    adr: 247,
    occupancy: 60,
    revpar: 148,
    annualRevenue: 48079,
    topQuartileRevenue: 72000,
    yoyOccupancy: -9.6,
    yoyAdr: 4.0,
    yoyRevenue: -3.7,
    activeListings: 408,
    neighborhoodNotes: 'North Pinellas, family-friendly with proximity to Honeymoon Island and Tarpon Springs.',
    heroEyebrow: 'Palm Harbor, FL Co-Hosting',
  },
];

export function getSubmarketBySlug(slug: string): Submarket | undefined {
  return submarkets.find((s) => s.slug === slug);
}
