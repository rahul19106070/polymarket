import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prediction Markets | X Layer',
  description: 'Decentralized prediction markets on X Layer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}

