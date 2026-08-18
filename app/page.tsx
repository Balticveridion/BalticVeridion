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

export default function HomePage() {
  return (
    <>
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
