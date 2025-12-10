/**
 * Market Detail Page
 * Individual market page with trading interface
 */

import { Metadata } from 'next';
import { PolymarketDetailPage } from '@/features/markets/PolymarketDetailPage';
import { APP_CONFIG } from '@/config/constants';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  // In production, fetch market data here for SEO
  const title = `Market: ${slug.replace(/-/g, ' ')}`;
  
  return {
    title,
    description: `Trade on this prediction market at ${APP_CONFIG.name}`,
    openGraph: {
      title,
      description: `Trade on this prediction market at ${APP_CONFIG.name}`,
      type: 'website',
    },
  };
}

export default async function MarketPage({ params }: Props) {
  const { slug } = await params;
  return <PolymarketDetailPage slug={slug} />;
}

