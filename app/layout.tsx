import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Inter } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://veridion-seven.vercel.app'),
  title: {
    default: 'Baltic Veridion — Trusted Baltic Industrial Partner',
    template: '%s | Baltic Veridion',
  },
  description:
    'Independent industrial sourcing and supplier qualification in Lithuania, Latvia and Estonia. Helping European manufacturers identify, evaluate and qualify reliable suppliers.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    siteName: 'Baltic Veridion',
    title: 'Baltic Veridion — Industrial Sourcing',
    description:
      'Trusted partner. Verified suppliers. Reliable results across the Baltic States.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Baltic Veridion — Industrial Sourcing',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#031D35',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
