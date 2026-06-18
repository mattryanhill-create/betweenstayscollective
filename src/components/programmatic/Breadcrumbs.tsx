import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  to?: string; // omit `to` for the current page (last crumb) and the non-clickable middle crumb
}

interface Props {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-5xl mx-auto px-6 pt-24 md:pt-28 pb-2"
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="flex items-center gap-2">
              {item.to ? (
                <Link to={item.to} className="hover:text-stone-900 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-stone-900' : 'text-stone-500'}>{item.label}</span>
              )}
              {!isLast && <span className="text-stone-300">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
