import { useParams } from 'react-router-dom';
import { usePageSeo } from '@/hooks/usePageSeo';
import { getSubmarketBySlug } from '@/data/submarkets';

export default function LocationStub() {
  const { slug } = useParams<{ slug: string }>();
  const citySlug = slug?.replace(/-airbnb-cohost$/, '') ?? '';
  const submarket = citySlug ? getSubmarketBySlug(citySlug) : undefined;

  usePageSeo({
    title: submarket
      ? `${submarket.city} Airbnb Co-Hosting | Between Stays Collective`
      : 'Tampa Bay Airbnb Co-Hosting | Between Stays Collective',
    description: submarket
      ? `Local boutique short-term rental co-hosting in ${submarket.city}, FL. ${submarket.neighborhoodNotes}`
      : 'Local boutique short-term rental co-hosting in Tampa Bay, FL.',
    canonical: `https://www.betweenstaysco.com/locations/${slug}`,
  });

  return (
    <main className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold mb-4">
        {submarket ? submarket.city : 'Location'} Co-Hosting — Coming Soon
      </h1>
      <p className="text-stone-700">
        We are finishing this page. Email{' '}
        <a href="mailto:hello@betweenstaysco.com" className="underline">
          hello@betweenstaysco.com
        </a>{' '}
        in the meantime.
      </p>
    </main>
  );
}
