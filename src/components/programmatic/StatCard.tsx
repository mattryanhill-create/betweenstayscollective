interface Props {
  label: string;
  value: string;
  sublabel?: string;
  trend?: 'up' | 'down' | 'flat';
}

export function StatCard({ label, value, sublabel, trend }: Props) {
  const trendColor =
    trend === 'up' ? 'text-emerald-700' : trend === 'down' ? 'text-rose-700' : 'text-stone-600';
  return (
    <div className="bg-white border border-stone-200 rounded-lg p-5 shadow-sm">
      <div className="text-xs uppercase tracking-wide text-stone-500 mb-1">{label}</div>
      <div className="text-2xl font-semibold text-stone-900">{value}</div>
      {sublabel && <div className={`text-sm mt-1 ${trendColor}`}>{sublabel}</div>}
    </div>
  );
}
