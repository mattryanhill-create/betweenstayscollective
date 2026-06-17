import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function EyebrowBadge({ children }: Props) {
  return (
    <span className="inline-block text-xs uppercase tracking-widest font-medium text-stone-600 bg-stone-100 px-3 py-1 rounded-full">
      {children}
    </span>
  );
}
