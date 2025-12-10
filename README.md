# Polymarket Clone

A prediction market platform built with Next.js, TypeScript, and Mantine UI.

## Features

- 🎯 Browse prediction markets
- 📊 View market details with trading interface
- 💬 Comments, top holders, and activity tabs
- 🔍 Search functionality
- 📱 Responsive design (mobile & desktop)
- 🎨 Modern UI with dark theme

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **UI Library:** Mantine v7
- **Icons:** Tabler Icons
- **Styling:** CSS + Mantine's styling system

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
npm run start
```

## Project Structure

```
polymarket/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   └── market/
│   │       └── [slug]/
│   │           └── page.tsx   # Market detail page
│   ├── components/
│   │   └── polymarket/
│   │       ├── PolymarketNavbar.tsx      # Navigation bar
│   │       └── PolymarketTopicBar.tsx    # Topic filter bar
│   ├── features/
│   │   └── markets/
│   │       ├── HomePage.tsx              # Main markets page
│   │       ├── PolymarketDetailPage.tsx  # Market detail
│   │       ├── MarketDetailPage.tsx      # Wrapper component
│   │       ├── MarketsPage.tsx           # Markets listing
│   │       ├── CreateMarketPage.tsx      # Create market form
│   │       └── SearchPage.tsx            # Search interface
│   ├── lib/
│   │   └── dummyMarkets.ts    # Sample market data
│   └── config/
│       └── constants.ts        # App configuration
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Features in Detail

### Markets Page
- Grid view of all available markets
- Real-time percentage updates
- Volume and end date information
- Category badges

### Market Detail Page
- Interactive price chart
- Buy/Sell trading interface
- Comments section with user positions
- Top holders by outcome
- Activity feed of trades
- Related markets sidebar

### Navigation
- Sticky navigation bar
- Horizontal scrolling topic chips
- Search functionality
- Responsive mobile menu

## Customization

### Adding New Markets

Edit `src/lib/dummyMarkets.ts` to add new markets:

```typescript
{
  id: 'unique-id',
  slug: 'url-friendly-slug',
  title: 'Market question?',
  icon: '🎯',
  volume: '1.2M',
  endDate: 'Dec 31, 2025',
  outcomes: [
    { name: 'Yes', percentage: 60 },
    { name: 'No', percentage: 40 },
  ],
  category: 'Politics',
}
```

### Styling

Global styles are in `src/app/globals.css`. Component-specific styles use Mantine's styling system.

## License

MIT

