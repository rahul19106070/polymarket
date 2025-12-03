'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, Droplet, ArrowRight } from 'lucide-react'
import { format } from 'date-fns'

interface Outcome {
  label: string
  probability: number
  color: string
}

interface Market {
  id: number
  question: string
  category: string
  volume: string
  outcomes: Outcome[]
  endDate: string
  liquidity: string
}

interface MarketCardProps {
  market: Market
  viewMode: 'grid' | 'list'
}

export default function MarketCard({ market, viewMode }: MarketCardProps) {
  const primaryOutcome = market.outcomes[0]
  const secondaryOutcome = market.outcomes[1]

  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="okx-card rounded-xl p-6 transition-all cursor-pointer group"
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-1 text-xs font-medium bg-okx-hover text-okx-primary rounded">
                {market.category}
              </span>
              <span className="text-xs text-okx-gray-400 flex items-center gap-1">
                <Droplet className="w-3 h-3" />
                {market.liquidity}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-okx-text mb-4 group-hover:text-okx-primary transition-colors">
              {market.question}
            </h3>
            <div className="flex items-center gap-6">
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="okx-outcome-badge okx-outcome-badge-primary">
                    {primaryOutcome.label}
                  </span>
                  <span className="okx-probability-badge">
                    {primaryOutcome.probability}%
                  </span>
                </div>
                <div className="h-2.5 bg-okx-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-okx-primary rounded-full" style={{ width: `${primaryOutcome.probability}%` }} />
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="okx-outcome-badge okx-outcome-badge-secondary">
                    {secondaryOutcome.label}
                  </span>
                  <span className="okx-probability-badge">
                    {secondaryOutcome.probability}%
                  </span>
                </div>
                <div className="h-2.5 bg-okx-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-okx-gray-500 rounded-full" style={{ width: `${secondaryOutcome.probability}%` }} />
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="mb-2">
              <p className="text-xs text-okx-gray-400">Volume</p>
              <p className="text-lg font-bold text-okx-text">{market.volume}</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-okx-gray-400 mb-4">
              <Clock className="w-3 h-3" />
              <span>{format(new Date(market.endDate), 'MMM d, yyyy')}</span>
            </div>
            <button className="okx-primary-button px-4 py-2 text-sm rounded-lg flex items-center gap-2">
              Trade
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="okx-card rounded-xl p-6 transition-all cursor-pointer group"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 text-xs font-medium bg-okx-hover text-okx-primary rounded">
            {market.category}
          </span>
          <span className="text-xs text-okx-gray-400 flex items-center gap-1">
            <Droplet className="w-3 h-3" />
            {market.liquidity}
          </span>
        </div>
        <TrendingUp className="w-4 h-4 text-okx-primary" />
      </div>

      {/* Question */}
      <h3 className="text-lg font-semibold text-okx-text mb-4 line-clamp-2 group-hover:text-okx-primary transition-colors">
        {market.question}
      </h3>

      {/* Outcomes */}
      <div className="space-y-3 mb-4">
        {market.outcomes.map((outcome, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className={`okx-outcome-badge ${
                idx === 0 
                  ? 'okx-outcome-badge-primary' 
                  : 'okx-outcome-badge-secondary'
              }`}>
                {outcome.label}
              </span>
              <span className="okx-probability-badge">
                {outcome.probability}%
              </span>
            </div>
            <div className="relative h-2.5 bg-okx-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${outcome.probability}%` }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`h-full rounded-full ${
                  idx === 0 
                    ? 'bg-okx-primary' 
                    : 'bg-okx-gray-500'
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-okx-border">
        <div>
          <p className="text-xs text-okx-gray-400 mb-1">Volume</p>
          <p className="text-sm font-bold text-okx-text">{market.volume}</p>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 text-xs text-okx-gray-400 mb-2">
            <Clock className="w-3 h-3" />
            <span>{format(new Date(market.endDate), 'MMM d')}</span>
          </div>
          <button className="okx-primary-button px-4 py-2 text-sm rounded-lg">
            Trade
          </button>
        </div>
      </div>
    </motion.div>
  )
}

