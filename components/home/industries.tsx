import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const industries = [
  'Metal Processing & Fabrication',
  'Machinery & Equipment',
  'Automotive Components',
  'Electronics & Electrical',
  'Plastics & Injection Molding',
  'Furniture & Woodworking',
  'Industrial Assembly',
  'Contract Manufacturing',
]

export function Industries() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Industries
            </p>
            <h2 className="mt-5 text-balance font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-primary sm:text-4xl">
              Sectors where the Baltic supply base excels
            </h2>
          </div>
          <Link
            href="/industries"
            className="group inline-flex items-center gap-2 text-sm font-medium text-steel transition-colors hover:text-primary"
          >
            View all industries
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((name) => (
            <div
              key={name}
              className="bg-card p-8 transition-colors hover:bg-secondary/50"
            >
              <span className="font-heading text-base font-medium text-primary">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
