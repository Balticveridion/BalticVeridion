import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Box,
  Cable,
  Car,
  Cog,
  Factory,
  Layers3,
  PackageCheck,
  Trees,
} from 'lucide-react'
import { PageShell } from '@/components/page-shell'
export const metadata: Metadata = {
  title: 'Industries We Support',
  description:
    'Explore the industrial sectors Baltic Veridion supports across Lithuania, Latvia and Estonia, including metal processing, machinery, automotive, electronics, plastics, furniture and contract manufacturing.',
  alternates: {
    canonical: '/industries',
  },
  openGraph: {
    title: 'Industries We Support | Baltic Veridion',
    description:
      'Discover the industrial sectors where Baltic Veridion helps European manufacturers identify and qualify reliable suppliers.',
    url: 'https://balticveridion.com/industries',
    siteName: 'Baltic Veridion',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Baltic Veridion Industries',
      },
    ],
  },
}
const industries = [
  {
    icon: Layers3,
    name: 'Metal Processing & Fabrication',
    capabilities: 'CNC machining, sheet metal, welding, laser cutting, surface treatment and precision assemblies.',
  },
  {
    icon: Cog,
    name: 'Machinery & Equipment',
    capabilities: 'Machine parts, subassemblies, industrial equipment, tooling and build-to-print production.',
  },
  {
    icon: Car,
    name: 'Automotive Components',
    capabilities: 'Metal and plastic components, wiring, interiors, fixtures and quality-controlled serial production.',
  },
  {
    icon: Cable,
    name: 'Electronics & Electrical',
    capabilities: 'Cable assemblies, control cabinets, electronics integration and electromechanical products.',
  },
  {
    icon: Box,
    name: 'Plastics & Injection Moulding',
    capabilities: 'Injection-moulded parts, tooling coordination, technical plastics and mixed-material assemblies.',
  },
  {
    icon: Trees,
    name: 'Furniture & Woodworking',
    capabilities: 'Contract furniture, joinery, panels, interiors and engineered wood components.',
  },
  {
    icon: PackageCheck,
    name: 'Industrial Assembly',
    capabilities: 'Manual and semi-automated assembly, testing, packaging and complete subassembly delivery.',
  },
  {
    icon: Factory,
    name: 'Contract Manufacturing',
    capabilities: 'Flexible low-to-medium volume production, multi-process coordination and outsourced manufacturing.',
  },
]
const advantages = [
  ['EU market access', 'Production within the European Union, with familiar regulatory and commercial frameworks.'],
  ['Engineering capability', 'Experienced technical teams supporting build-to-print and customised industrial work.'],
  ['Flexible production', 'A strong base of SMEs suited to specialised, low-to-medium volume requirements.'],
  ['Practical proximity', 'Efficient access from Northern and Central Europe for audits, visits and logistics.'],
]
export default function IndustriesPage() {
  return (
    <PageShell
      eyebrow="Industries"
      title="Baltic manufacturing capability for specialised industrial needs"
      description="Lithuania, Latvia and Estonia combine technical expertise, flexible production and EU proximity. We focus on sectors where local supplier knowledge and independent verification materially improve the sourcing decision."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {industries.map((industry) => (
          <article
            key={industry.name}
            className="rounded-lg border border-border bg-card p-7 transition-colors hover:border-steel sm:p-8"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-navy">
              <industry.icon className="h-5 w-5" />
            </span>
            <h2 className="mt-5 font-heading text-xl font-semibold text-primary">
              {industry.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {industry.capabilities}
            </p>
          </article>
        ))}
      </div>
  <section className="mt-24 border-y border-border py-20">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
      Why source in the Baltic States
    </p>
    <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
      A capable regional supply base — when the fit is verified
    </h2>
    <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
      {advantages.map(([title, body]) => (
        <div key={title} className="bg-card p-7 sm:p-8">
          <h3 className="font-heading text-lg font-semibold text-primary">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
        </div>
      ))}
    </div>
  </section>

  <section className="mt-20 rounded-lg bg-navy px-6 py-12 text-center sm:px-12 sm:py-16">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
      Your requirement may cross several sectors
    </p>
    <h2 className="mx-auto mt-4 max-w-2xl text-balance font-heading text-3xl font-semibold text-white sm:text-4xl">
      Not sure where your project fits?
    </h2>
    <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#aebccb]">
      Share the component, process and volume. We&apos;ll assess whether the Baltic supply base is a credible match before recommending a search.
    </p>
    <Link
      href="/contact"
      className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-[#e8ecef]"
    >
      Assess Your Requirement
      <ArrowRight className="h-4 w-4" />
    </Link>
  </section>
</PageShell>
  )
}