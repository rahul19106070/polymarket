# PredictX - Prediction Markets on X Layer

A modern, decentralized prediction market platform built on X Layer with OKX Wallet integration.

## Features

- 🎯 **Modern UI/UX** - Beautiful, responsive design with smooth animations
- 🔗 **OKX Wallet Integration** - Seamless connection with OKX Wallet and OKX Chain
- 📊 **Real-time Markets** - Live market data and probability updates
- 💰 **High Liquidity** - Optimized for trading volume
- 🎨 **Dark Theme** - Eye-friendly dark mode interface
- 📱 **Mobile Responsive** - Works perfectly on all devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Wallet**: OKX Wallet SDK
- **Blockchain**: X Layer (Ethereum L2)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OKX Wallet extension installed

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/          # React components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── MarketCard.tsx  # Market card component
│   ├── Navigation.tsx  # Top navigation
│   ├── Sidebar.tsx     # Sidebar navigation
│   └── WalletConnect.tsx # Wallet connection
└── public/             # Static assets
```

## Design Improvements Over Polymarket

1. **Better Visual Hierarchy** - Clearer information architecture
2. **Modern Card Design** - Gradient borders, glass effects, smooth animations
3. **Improved Color Scheme** - Better contrast and readability
4. **Enhanced Mobile Experience** - Fully responsive with mobile-optimized navigation
5. **Better Data Visualization** - Animated probability bars, volume indicators
6. **Smoother Interactions** - Hover effects, transitions, micro-interactions

## Next Steps

- [ ] Integrate X Layer smart contracts
- [ ] Connect to OKX Chain for deposits
- [ ] Implement trading functionality
- [ ] Add user portfolio tracking
- [ ] Build market creation interface
- [ ] Add oracle integration for market resolution

## License

MIT

