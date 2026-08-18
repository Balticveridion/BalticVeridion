import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    step: 'Define',
    body: 'We translate your technical specifications and commercial priorities into clear, measurable qualification criteria.',
  },
  {
    step: 'Discover',
    body: 'We map the regional supply base and shortlist manufacturers that genuinely fit — not just those seeking work.',
  },
  {
    step: 'Verify',
    body: 'We evaluate, audit and conduct due diligence on the ground, documenting evidence at every step.',
  },
  {
    step: 'Support',
    body: 'We stay engaged through onboarding and production monitoring to protect quality and continuity.',
  },
]

export function Methodology() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:py-32">
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/quality-control.png"
              alt="Engineer performing quality control inspection on a precision metal component"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            Our Methodology
          </p>
          <h2 className="mt-5 text-balance font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-primary sm:text-4xl">
            A transparent, evidence-based process
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Every recommendation we make is traceable to documented evidence.
            No shortcuts, no hidden incentives.
          </p>

          <ol className="mt-10 flex flex-col">
            {steps.map((s, i) => (
              <li
                key={s.step}
                className="flex gap-5 border-t border-border py-6 first:border-t-0 first:pt-0"
              >
                <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-md bg-secondary font-heading text-sm font-semibold text-navy">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-primary">
                    {s.step}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <Link
            href="/methodology"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-steel transition-colors hover:text-primary"
          >
            Explore Our Methodology
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
