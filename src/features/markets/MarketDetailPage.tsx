/**
 * Market Detail Page Component
 * Simple market detail page wrapper
 */

'use client';

import { PolymarketDetailPage } from './PolymarketDetailPage';

interface MarketDetailPageProps {
  slug: string;
}

export function MarketDetailPage({ slug }: MarketDetailPageProps) {
  return <PolymarketDetailPage slug={slug} />;
}

