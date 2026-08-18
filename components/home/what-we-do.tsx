import Link from 'next/link'
import { Search, ClipboardCheck, ShieldCheck, Factory, Activity, ArrowRight } from 'lucide-react'

const services = [
  {
    name: 'Supplier Discovery™',
    icon: Search,
    body: 'We identify qualified manufacturers matched precisely to your technical and commercial requirements.',
  },
  {
    name: 'Supplier Evaluation™',
    icon: ClipboardCheck,
    body: 'Structured assessment of capability, capacity, certifications and commercial fit against your criteria.',
  },
  {
    name: 'Supplier Due Diligence™',
    icon: ShieldCheck,
    body: 'Independent verification of financial stability, ownership, compliance and reputational standing.',
  },
  {
    name: 'Factory Audit™',
    icon: Factory,
    body: 'On-site technical audits of processes, quality systems and working conditions, documented transparently.',
  },
  {
    name: 'Production Monitoring™',
    icon: Activity,
    body: 'Ongoing oversight of active production to safeguard quality, timelines and consistency.',
  },
]

export function WhatWeDo() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              What We Do
            </p>
            <h2 className="mt-5 text-balance font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-primary sm:text-4xl">
              Five services across the full sourcing lifecycle
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-steel transition-colors hover:text-primary"
          >
            View all services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.name}
              className="flex flex-col rounded-lg border border-border bg-card p-8 transition-colors hover:border-steel"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-navy">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-primary">
                {s.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
          <div className="flex flex-col justify-center rounded-lg border border-dashed border-border bg-secondary/40 p-8">
            <p className="font-heading text-base font-medium text-primary">
              Not sure where to start?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We help you scope the right combination of services for your
              sourcing objectives.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teal transition-colors hover:text-primary"
            >
              Let&apos;s Talk
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
