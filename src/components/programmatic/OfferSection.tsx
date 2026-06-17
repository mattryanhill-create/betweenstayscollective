import type { ReactNode } from 'react';
import { EyebrowBadge } from './EyebrowBadge';

interface OfferPillar {
  title: string;
  description: string;
}

interface Props {
  eyebrow: string;
  headline: string;
  intro: ReactNode;
  pillars: OfferPillar[];
}

export function OfferSection({ eyebrow, headline, intro, pillars }: Props) {
  return (
    <section className="py-16 md:py-24 px-6 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <EyebrowBadge>{eyebrow}</EyebrowBadge>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 leading-tight mb-6">
          {headline}
        </h2>
        <div className="prose prose-lg prose-stone max-w-none text-stone-700 mb-10">
          {intro}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white border border-stone-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-stone-900 mb-2">{p.title}</h3>
              <p className="text-stone-700 text-base leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
