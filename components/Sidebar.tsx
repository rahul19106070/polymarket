'use client'

import { 
  TrendingUp, 
  Flame, 
  Droplet, 
  Clock, 
  Trophy,
  Globe,
  Briefcase,
  Gamepad2,
  Film,
  Coins,
  Zap
} from 'lucide-react'

const categories = [
  { icon: TrendingUp, label: 'Trending', count: 24, active: true },
  { icon: Flame, label: 'Hot', count: 12 },
  { icon: Droplet, label: 'Liquid', count: 8 },
  { icon: Clock, label: 'Ending Soon', count: 5 },
  { icon: Trophy, label: 'Competitive', count: 15 },
]

const topics = [
  { icon: Globe, label: 'Politics', color: 'text-blue-400' },
  { icon: Briefcase, label: 'Finance', color: 'text-green-400' },
  { icon: Gamepad2, label: 'Sports', color: 'text-purple-400' },
  { icon: Film, label: 'Entertainment', color: 'text-pink-400' },
  { icon: Coins, label: 'Crypto', color: 'text-yellow-400' },
  { icon: Zap, label: 'Tech', color: 'text-cyan-400' },
]

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-20 xl:w-64 border-r border-okx-border">
      <div className="h-full flex flex-col">
        {/* Icon-only navigation for mobile/compact view */}
        <div className="flex flex-col items-center py-4 space-y-4 xl:hidden">
          {topics.slice(0, 6).map((topic) => {
            const Icon = topic.icon
            return (
              <button
                key={topic.label}
                className="p-3 text-okx-text hover:text-okx-primary hover:bg-okx-hover rounded-lg transition-colors"
                title={topic.label}
              >
                <Icon className="w-5 h-5" />
              </button>
            )
          })}
        </div>

        {/* Full sidebar for desktop */}
        <div className="hidden xl:flex flex-col p-6 space-y-8">
          {/* Categories */}
          <div>
            <h3 className="text-xs font-semibold text-okx-gray-400 uppercase tracking-wider mb-3">
              Categories
            </h3>
            <div className="space-y-1">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.label}
                    className={`
                      w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                      ${category.active 
                        ? 'bg-okx-hover text-okx-primary' 
                        : 'text-okx-text hover:text-okx-primary hover:bg-okx-hover'
                      }
                    `}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <span>{category.label}</span>
                    </div>
                    {category.count > 0 && (
                      <span className="text-xs bg-okx-gray-600 px-2 py-0.5 rounded-full text-okx-text">
                        {category.count}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-xs font-semibold text-okx-gray-400 uppercase tracking-wider mb-3">
              Topics
            </h3>
            <div className="space-y-1">
              {topics.map((topic) => {
                const Icon = topic.icon
                return (
                  <button
                    key={topic.label}
                    className="w-full flex items-center space-x-2 px-3 py-2.5 rounded-lg text-sm text-okx-text hover:text-okx-primary hover:bg-okx-hover transition-colors"
                  >
                    <Icon className={`w-4 h-4 ${topic.color}`} />
                    <span>{topic.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Stats Card */}
          <div className="okx-card rounded-lg p-4">
            <p className="text-xs text-okx-gray-400 mb-2">Total Volume</p>
            <p className="text-2xl font-bold text-okx-primary">$2.4B</p>
            <p className="text-xs text-okx-primary mt-1">+12.5% this week</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

