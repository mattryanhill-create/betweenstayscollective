import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

export interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items: FaqItem[];
}

export function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    const willOpen = openIndex !== idx;
    setOpenIndex(willOpen ? idx : null);
    if (willOpen) {
      trackEvent('faq_expand', { question: items[idx].question });
    }
  };

  return (
    <div className="divide-y divide-stone-200 border border-stone-200 rounded-lg bg-white">
      {items.map((item, idx) => (
        <div key={idx}>
          <button
            type="button"
            onClick={() => toggle(idx)}
            className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors min-h-[56px]"
            aria-expanded={openIndex === idx}
          >
            <span className="text-base font-medium text-stone-900">{item.question}</span>
            <span className="text-stone-500 text-xl shrink-0">{openIndex === idx ? '−' : '+'}</span>
          </button>
          {openIndex === idx && (
            <div className="px-5 pb-5 text-stone-700 leading-relaxed text-base">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
