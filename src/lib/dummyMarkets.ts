/**
 * Dummy Market Data
 * Sample data for development and testing
 */

export interface Market {
  id: string;
  slug: string;
  title: string;
  description?: string;
  icon?: string;
  volume: string;
  endDate?: string;
  outcomes: Array<{
    name: string;
    percentage: number;
  }>;
  category?: string;
}

export const dummyMarkets: Market[] = [
  {
    id: '1',
    slug: 'will-salvador-nasralla-win-2025-honduran-election',
    title: 'Will Salvador Nasralla win the 2025 Honduran general election?',
    icon: '🇭🇳',
    volume: '1.2M',
    endDate: 'Nov 30, 2025',
    outcomes: [
      { name: 'Salvador Nasralla', percentage: 87 },
      { name: 'Nasry "Tito" Asfura', percentage: 13 },
    ],
    category: 'Politics',
  },
  {
    id: '2',
    slug: 'will-trump-win-2024-presidential-election',
    title: 'Will Donald Trump win the 2024 Presidential Election?',
    icon: '🇺🇸',
    volume: '45.8M',
    endDate: 'Nov 5, 2024',
    outcomes: [
      { name: 'Yes', percentage: 52 },
      { name: 'No', percentage: 48 },
    ],
    category: 'Politics',
  },
  {
    id: '3',
    slug: 'will-fed-cut-rates-march-2025',
    title: 'Will the Fed cut interest rates in March 2025?',
    icon: '📊',
    volume: '8.4M',
    endDate: 'Mar 20, 2025',
    outcomes: [
      { name: 'Yes', percentage: 68 },
      { name: 'No', percentage: 32 },
    ],
    category: 'Economics',
  },
  {
    id: '4',
    slug: 'will-ukraine-retake-crimea-2025',
    title: 'Will Ukraine retake Crimea by end of 2025?',
    icon: '🇺🇦',
    volume: '3.2M',
    endDate: 'Dec 31, 2025',
    outcomes: [
      { name: 'Yes', percentage: 15 },
      { name: 'No', percentage: 85 },
    ],
    category: 'World',
  },
  {
    id: '5',
    slug: 'venezuela-democratic-transition-2025',
    title: 'Will Venezuela have a democratic transition in 2025?',
    icon: '🇻🇪',
    volume: '2.1M',
    endDate: 'Dec 31, 2025',
    outcomes: [
      { name: 'Yes', percentage: 23 },
      { name: 'No', percentage: 77 },
    ],
    category: 'Politics',
  },
  {
    id: '6',
    slug: 'btc-100k-by-end-2024',
    title: 'Will Bitcoin reach $100k by end of 2024?',
    icon: '₿',
    volume: '12.5M',
    endDate: 'Dec 31, 2024',
    outcomes: [
      { name: 'Yes', percentage: 72 },
      { name: 'No', percentage: 28 },
    ],
    category: 'Crypto',
  },
  {
    id: '7',
    slug: 'ai-pass-turing-test-2025',
    title: 'Will an AI pass the Turing test in 2025?',
    icon: '🤖',
    volume: '5.7M',
    endDate: 'Dec 31, 2025',
    outcomes: [
      { name: 'Yes', percentage: 41 },
      { name: 'No', percentage: 59 },
    ],
    category: 'Tech',
  },
  {
    id: '8',
    slug: 'sp500-new-high-q1-2025',
    title: 'Will S&P 500 hit new all-time high in Q1 2025?',
    icon: '📈',
    volume: '9.3M',
    endDate: 'Mar 31, 2025',
    outcomes: [
      { name: 'Yes', percentage: 64 },
      { name: 'No', percentage: 36 },
    ],
    category: 'Finance',
  },
  {
    id: '9',
    slug: 'twitter-rebrand-to-x-success',
    title: 'Will X (Twitter) be profitable in 2025?',
    icon: '𝕏',
    volume: '4.2M',
    endDate: 'Dec 31, 2025',
    outcomes: [
      { name: 'Yes', percentage: 38 },
      { name: 'No', percentage: 62 },
    ],
    category: 'Business',
  },
  {
    id: '10',
    slug: 'weather-el-nino-2025',
    title: 'Will 2025 be an El Niño year?',
    icon: '🌊',
    volume: '1.8M',
    endDate: 'Dec 31, 2025',
    outcomes: [
      { name: 'Yes', percentage: 55 },
      { name: 'No', percentage: 45 },
    ],
    category: 'Weather',
  },
  {
    id: '11',
    slug: 'epstein-files-release-2025',
    title: 'Will more Epstein files be released in 2025?',
    icon: '📄',
    volume: '2.9M',
    endDate: 'Dec 31, 2025',
    outcomes: [
      { name: 'Yes', percentage: 78 },
      { name: 'No', percentage: 22 },
    ],
    category: 'News',
  },
  {
    id: '12',
    slug: 'honduras-election-second-place',
    title: 'Will Salvador Alejandro César Nasralla Salum finish in second place?',
    icon: '🇭🇳',
    volume: '892K',
    endDate: 'Nov 30, 2025',
    outcomes: [
      { name: 'Yes', percentage: 88 },
      { name: 'No', percentage: 12 },
    ],
    category: 'Politics',
  },
];

