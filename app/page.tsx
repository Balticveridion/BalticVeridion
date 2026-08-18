import type { Metadata } from 'next'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/home/hero'
import { Challenge } from '@/components/home/challenge'
import { WhatWeDo } from '@/components/home/what-we-do'
import { Methodology } from '@/components/home/methodology'
import { WhyBalticVeridion } from '@/components/home/why-baltic-veridion'
import { Industries } from '@/components/home/industries'
import { Philosophy } from '@/components/home/philosophy'
import { FinalCta } from '@/components/home/final-cta'

export const metadata: Metadata = {
  title: 'Independent Industrial Sourcing in the Baltic States',
  description:
    'Independent supplier sourcing, qualification and procurement support across Lithuania, Latvia and Estonia. Helping European manufacturers identify, evaluate and qualify reliable industrial suppliers.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Independent Industrial Sourcing in the Baltic States',
    description:
      'Independent supplier sourcing, qualification and procurement support across the Baltic States.',
    url: 'https://balticveridion.com',
    siteName: 'Baltic Veridion',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Baltic Veridion',
      },
    ],
  },
}

export default function HomePage() {
  const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://balticveridion.com/#organization',
  name: 'Baltic Veridion',
  url: 'https://balticveridion.com',
  logo: 'https://balticveridion.com/opengraph-image.png',
  email: 'contact@balticveridion.com',
  description:
    'Independent industrial sourcing and supplier qualification partner helping European manufacturers identify, evaluate and qualify reliable suppliers across Lithuania, Latvia and Estonia.',
  areaServed: [
    {
      '@type': 'Country',
      name: 'Lithuania',
    },
    {
      '@type': 'Country',
      name: 'Latvia',
    },
    {
      '@type': 'Country',
      name: 'Estonia',
    },
  ],
}
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c'),
  }}
/>
      <SiteHeader />
      <main>
        <Hero />
        <Challenge />
        <WhatWeDo />
        <Methodology />
        <WhyBalticVeridion />
        <Industries />
        <Philosophy />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}