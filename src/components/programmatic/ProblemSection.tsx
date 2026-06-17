import type { ReactNode } from 'react';
import { EyebrowBadge } from './EyebrowBadge';

interface Props {
  eyebrow: string;
  headline: string;
  body: ReactNode;
}

export function ProblemSection({ eyebrow, headline, body }: Props) {
  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <EyebrowBadge>{eyebrow}</EyebrowBadge>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 leading-tight mb-6">
          {headline}
        </h2>
        <div className="prose prose-lg prose-stone max-w-none text-stone-700">
          {body}
        </div>
      </div>
    </section>
  );
}
