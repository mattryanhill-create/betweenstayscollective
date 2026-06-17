import { useParams } from 'react-router-dom';
import { usePageSeo } from '@/hooks/usePageSeo';
import { getComparePageBySlug } from '@/data/comparePages';

export default function CompareStub() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getComparePageBySlug(slug) : undefined;

  usePageSeo({
    title: page?.title || 'Property Manager Comparison | Between Stays Collective',
    description: page?.metaDescription || 'Compare Tampa Bay short-term rental management options.',
    canonical: `https://www.betweenstaysco.com/compare/${slug}`,
  });

  return (
    <main className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold mb-4">{page?.h1 || 'Comparison'} — Coming Soon</h1>
      <p className="text-stone-700">
        We are finishing this comparison. Email{' '}
        <a href="mailto:hello@betweenstaysco.com" className="underline">
          hello@betweenstaysco.com
        </a>{' '}
        in the meantime.
      </p>
    </main>
  );
}
