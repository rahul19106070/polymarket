'use client'

import { useState, useEffect } from 'react'
import { Wallet, ChevronDown, Check } from 'lucide-react'

export default function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState<string | null>(null)
  const [showDropdown, setShowDropdown] = useState(false)

  const connectWallet = async () => {
    try {
      // OKX Wallet integration
      if (typeof window !== 'undefined' && (window as any).okxwallet) {
        const provider = (window as any).okxwallet
        const accounts = await provider.request({ method: 'eth_requestAccounts' })
        if (accounts && accounts.length > 0) {
          setAddress(accounts[0])
          setIsConnected(true)
        }
      } else {
        // Fallback: show install OKX Wallet message
        alert('Please install OKX Wallet to connect')
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error)
    }
  }

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  if (!isConnected) {
    return (
      <button
        onClick={connectWallet}
        className="okx-primary-button flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold"
      >
        <Wallet className="w-4 h-4" />
        <span className="hidden sm:inline">Connect Wallet</span>
      </button>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center space-x-2 px-4 py-2 bg-okx-background border border-okx-border hover:border-okx-primary rounded-lg transition-colors"
      >
        <div className="w-2 h-2 bg-okx-primary rounded-full"></div>
        <span className="text-sm font-medium text-okx-text">{formatAddress(address!)}</span>
        <ChevronDown className="w-4 h-4 text-okx-gray-400" />
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-56 bg-okx-background rounded-lg shadow-xl border border-okx-border py-2 z-50">
          <div className="px-4 py-2 border-b border-okx-border">
            <p className="text-xs text-okx-gray-400">Connected to</p>
            <p className="text-sm font-medium mt-1 text-okx-text">OKX Wallet</p>
          </div>
          <button className="w-full px-4 py-2 text-left text-sm text-okx-text hover:bg-okx-hover flex items-center space-x-2">
            <span>Disconnect</span>
          </button>
        </div>
      )}
    </div>
  )
}

