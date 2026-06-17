import { Link } from 'react-router-dom';
import { trackEvent } from '@/lib/analytics';

export interface LinkItem {
  to: string;
  label: string;
}

interface Props {
  heading: string;
  links: LinkItem[];
  sourceTag: string;
}

export function InternalLinkCluster({ heading, links, sourceTag }: Props) {
  return (
    <section className="my-12">
      <h3 className="text-sm uppercase tracking-widest text-stone-500 mb-4">{heading}</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              onClick={() => trackEvent('internal_link_click', { target: link.to, source: sourceTag })}
              className="block px-4 py-3 border border-stone-200 rounded-md hover:border-stone-400 hover:bg-stone-50 transition-colors text-stone-800 text-base"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
