import type { Competitor } from '@/data/competitors';

interface Props {
  left: Competitor;
  right: Competitor;
}

export function ComparisonTable({ left, right }: Props) {
  const rows: { label: string; leftValue: string; rightValue: string }[] = [
    { label: 'Fee structure', leftValue: left.feeRangePct, rightValue: right.feeRangePct },
    { label: 'Contract', leftValue: left.contractType, rightValue: right.contractType },
    {
      label: 'Listing ownership',
      leftValue: left.listingOwnership === 'owner' ? 'You keep it' : 'Manager owns it',
      rightValue: right.listingOwnership === 'owner' ? 'You keep it' : 'Manager owns it',
    },
    {
      label: 'Reviews stay with you',
      leftValue: left.reviewPortability ? 'Yes' : 'No',
      rightValue: right.reviewPortability ? 'Yes' : 'No',
    },
    {
      label: 'Superhost continuity risk',
      leftValue: left.superhostRisk === 'high' ? 'High' : left.superhostRisk === 'medium' ? 'Medium' : 'Low',
      rightValue: right.superhostRisk === 'high' ? 'High' : right.superhostRisk === 'medium' ? 'Medium' : 'Low',
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-stone-300">
            <th className="py-3 px-4 text-sm font-medium text-stone-500"></th>
            <th className="py-3 px-4 text-base font-semibold text-stone-900">{left.name}</th>
            <th className="py-3 px-4 text-base font-semibold text-stone-900">{right.name}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-stone-200">
              <td className="py-3 px-4 text-sm text-stone-600">{row.label}</td>
              <td className="py-3 px-4 text-base text-stone-900">{row.leftValue}</td>
              <td className="py-3 px-4 text-base text-stone-900">{row.rightValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
