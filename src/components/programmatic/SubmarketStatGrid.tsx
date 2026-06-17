import type { Submarket } from '@/data/submarkets';
import { StatCard } from './StatCard';

interface Props {
  submarket: Submarket;
}

export function SubmarketStatGrid({ submarket }: Props) {
  const formatPct = (n: number) => `${n > 0 ? '+' : ''}${n.toFixed(1)}%`;
  const trend = (n: number): 'up' | 'down' | 'flat' =>
    n > 0.5 ? 'up' : n < -0.5 ? 'down' : 'flat';

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard
        label="Average Daily Rate"
        value={`$${submarket.adr}`}
        sublabel={`${formatPct(submarket.yoyAdr)} YoY`}
        trend={trend(submarket.yoyAdr)}
      />
      <StatCard
        label="Occupancy"
        value={`${submarket.occupancy}%`}
        sublabel={`${formatPct(submarket.yoyOccupancy)} YoY`}
        trend={trend(submarket.yoyOccupancy)}
      />
      <StatCard
        label="Median Annual Revenue"
        value={`$${submarket.annualRevenue.toLocaleString()}`}
        sublabel={`${formatPct(submarket.yoyRevenue)} YoY`}
        trend={trend(submarket.yoyRevenue)}
      />
      <StatCard
        label="AirDNA Market Score"
        value={`${submarket.airdnaScore}/100`}
        sublabel={`${submarket.activeListings.toLocaleString()} active listings`}
      />
    </div>
  );
}
