import { useParams, Navigate } from 'react-router-dom';
import LocationStub from './LocationStub';
import { getSubmarketBySlug } from '@/data/submarkets';

export default function LocationStubResolver() {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/" replace />;
  const citySlug = slug.replace(/-airbnb-cohost$/, '');
  const submarket = getSubmarketBySlug(citySlug);
  if (!submarket) return <Navigate to="/" replace />;
  return <LocationStub />;
}
