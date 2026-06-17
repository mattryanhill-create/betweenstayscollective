import { Link } from 'react-router-dom';
import { trackEvent } from '@/lib/analytics';

interface Props {
  variant?: 'inline' | 'section';
  headline?: string;
  subline?: string;
  ctaLabel?: string;
  sourceTag: string;
}

export function AuditCtaBlock({
  variant = 'section',
  headline = 'See what your Tampa Bay property could actually earn.',
  subline = 'Free audit. No commitment. No phone calls unless you want one.',
  ctaLabel = "See My Property's Potential",
  sourceTag,
}: Props) {
  const handleClick = () => trackEvent('audit_cta_click', { source: sourceTag });

  if (variant === 'inline') {
    return (
      <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-8">
        <p className="text-lg font-medium text-stone-900 mb-3">{headline}</p>
        <p className="text-stone-700 mb-4 text-base">{subline}</p>
        <Link
          to="/owners/tampa-audit"
          onClick={handleClick}
          className="inline-flex items-center justify-center bg-stone-900 text-white px-6 py-3 rounded-md font-medium hover:bg-stone-800 transition-colors min-h-[48px]"
        >
          {ctaLabel}
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-stone-900 text-white py-16 px-6 my-16 rounded-lg">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">{headline}</h2>
        <p className="text-stone-300 text-lg mb-8">{subline}</p>
        <Link
          to="/owners/tampa-audit"
          onClick={handleClick}
          className="inline-flex items-center justify-center bg-white text-stone-900 px-8 py-4 rounded-md font-medium hover:bg-stone-100 transition-colors min-h-[48px]"
        >
          {ctaLabel}
        </Link>
        <p className="text-stone-400 text-sm mt-4">We'll email you within 1 business day.</p>
      </div>
    </section>
  );
}
