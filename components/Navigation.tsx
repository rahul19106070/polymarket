'use client'

import { useState } from 'react'
import { Search, Menu, X, TrendingUp, Wallet } from 'lucide-react'
import WalletConnect from './WalletConnect'

export default function Navigation() {
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-okx-background border-b border-okx-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-okx-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-okx-background" />
              </div>
              <span className="text-xl font-bold text-okx-primary">
                PredictX
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink active>Markets</NavLink>
              <NavLink>Dashboard</NavLink>
              <NavLink>Portfolio</NavLink>
              <NavLink>Leaderboard</NavLink>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-okx-gray-400" />
              <input
                type="text"
                placeholder="Search markets, topics, events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="okx-input w-full pl-10 pr-4 py-2 rounded-lg text-sm placeholder-okx-gray-500"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <WalletConnect />
            <button
              className="md:hidden p-2 text-okx-text hover:text-okx-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-okx-border">
            <div className="flex flex-col space-y-2">
              <NavLink mobile active>Markets</NavLink>
              <NavLink mobile>Dashboard</NavLink>
              <NavLink mobile>Portfolio</NavLink>
              <NavLink mobile>Leaderboard</NavLink>
              <div className="pt-2">
                <input
                  type="text"
                  placeholder="Search markets..."
                  className="okx-input w-full px-4 py-2 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({ 
  children, 
  active = false, 
  mobile = false 
}: { 
  children: React.ReactNode
  active?: boolean
  mobile?: boolean 
}) {
  return (
    <a
      href="#"
      className={`
        ${mobile ? 'block px-4 py-2' : 'px-4 py-2'}
        text-sm font-medium transition-colors rounded-lg
        ${active 
          ? 'bg-okx-hover text-okx-primary border-l-2 border-okx-primary' 
          : 'text-okx-text hover:text-okx-primary hover:bg-okx-hover'
        }
      `}
    >
      {children}
    </a>
  )
}

