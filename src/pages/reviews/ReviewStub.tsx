import { useParams } from 'react-router-dom';
import { usePageSeo } from '@/hooks/usePageSeo';
import { getReviewPageBySlug } from '@/data/reviewPages';

export default function ReviewStub() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getReviewPageBySlug(slug) : undefined;

  usePageSeo({
    title: page?.title || 'Property Manager Review | Between Stays Collective',
    description: page?.metaDescription || 'Honest reviews of Tampa Bay short-term rental managers.',
    canonical: `https://www.betweenstaysco.com/reviews/${slug}`,
  });

  return (
    <main className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold mb-4">{page?.h1 || 'Review'} — Coming Soon</h1>
      <p className="text-stone-700">
        We are finishing this review. Email{' '}
        <a href="mailto:hello@betweenstaysco.com" className="underline">
          hello@betweenstaysco.com
        </a>{' '}
        in the meantime.
      </p>
    </main>
  );
}
