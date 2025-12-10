/**
 * Application Configuration Constants
 */

export const APP_CONFIG = {
  name: 'Polymarket',
  description: 'The world\'s largest prediction market',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.polymarket.com',
  },
  social: {
    twitter: 'https://twitter.com/polymarket',
    discord: 'https://discord.gg/polymarket',
  },
};

export const NETWORK_CONFIG = {
  chainId: 137, // Polygon
  chainName: 'Polygon',
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL || 'https://polygon-rpc.com',
};

export const ROUTES = {
  home: '/',
  markets: '/markets',
  market: (slug: string) => `/market/${slug}`,
  activity: '/activity',
  leaderboard: '/leaderboard',
  search: '/search',
  create: '/create',
};

