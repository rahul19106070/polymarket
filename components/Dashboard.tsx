'use client'

import { useState } from 'react'
import MarketCard from './MarketCard'
import { SlidersHorizontal, Grid, List } from 'lucide-react'

const mockMarkets = [
  {
    id: 1,
    question: 'Will Bitcoin hit $100k by end of 2025?',
    category: 'Crypto',
    volume: '$47.2M',
    outcomes: [
      { label: 'Yes', probability: 64, color: 'from-neon-500 to-primary-500' },
      { label: 'No', probability: 36, color: 'from-red-500 to-rose-600' },
    ],
    endDate: '2025-12-31',
    liquidity: 'High',
  },
  {
    id: 2,
    question: 'Fed rate decision in December 2025?',
    category: 'Finance',
    volume: '$217M',
    outcomes: [
      { label: '25 bps decrease', probability: 92, color: 'from-blue-500 to-cyan-600' },
      { label: '50+ bps decrease', probability: 1, color: 'from-purple-500 to-pink-600' },
    ],
    endDate: '2025-12-15',
    liquidity: 'Very High',
  },
  {
    id: 3,
    question: 'Honduras Presidential Election Winner',
    category: 'Politics',
    volume: '$11M',
    outcomes: [
      { label: 'Nasry "Tito" Asfura', probability: 64, color: 'from-indigo-500 to-blue-600' },
      { label: 'Salvador Nasralla', probability: 36, color: 'from-orange-500 to-red-600' },
    ],
    endDate: '2025-11-30',
    liquidity: 'Medium',
  },
  {
    id: 4,
    question: 'Russia x Ukraine ceasefire in 2025?',
    category: 'Geopolitics',
    volume: '$2M',
    outcomes: [
      { label: 'Yes', probability: 13, color: 'from-green-500 to-emerald-600' },
      { label: 'No', probability: 87, color: 'from-red-500 to-rose-600' },
    ],
    endDate: '2025-12-31',
    liquidity: 'Low',
  },
  {
    id: 5,
    question: 'F1 Drivers Champion 2025',
    category: 'Sports',
    volume: '$152M',
    outcomes: [
      { label: 'Lando Norris', probability: 73, color: 'from-yellow-500 to-orange-600' },
      { label: 'Max Verstappen', probability: 22, color: 'from-blue-500 to-cyan-600' },
    ],
    endDate: '2025-11-30',
    liquidity: 'Very High',
  },
  {
    id: 6,
    question: 'Who will Trump nominate as Fed Chair?',
    category: 'Politics',
    volume: '$12M',
    outcomes: [
      { label: 'Kevin Hassett', probability: 64, color: 'from-indigo-500 to-blue-600' },
      { label: 'Kevin Warsh', probability: 14, color: 'from-purple-500 to-pink-600' },
    ],
    endDate: '2025-12-31',
    liquidity: 'Medium',
  },
]

export default function Dashboard() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('volume')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-okx-text mb-2">Global Markets</h1>
          <p className="text-okx-gray-400">Trade on the world's most important events</p>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-3">
          <button className="okx-secondary-button flex items-center space-x-2 px-4 py-2 rounded-lg text-sm">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </button>
          <div className="flex items-center bg-okx-background border border-okx-border rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-okx-hover text-okx-primary' : 'text-okx-gray-400 hover:text-okx-primary'}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-okx-hover text-okx-primary' : 'text-okx-gray-400 hover:text-okx-primary'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Markets Grid/List */}
      <div
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
            : 'space-y-4'
        }
      >
        {mockMarkets.map((market) => (
          <MarketCard key={market.id} market={market} viewMode={viewMode} />
        ))}
      </div>
    </div>
  )
}

