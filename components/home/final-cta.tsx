import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function FinalCta() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="rounded-xl border border-border bg-card px-8 py-20 text-center lg:px-16">
          <h2 className="mx-auto max-w-2xl text-balance font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-primary sm:text-4xl">
            Let&apos;s discuss your sourcing objectives
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Tell us what you manufacture and where you want to source. We&apos;ll
            outline how an independent qualification process would work for you.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy/90"
            >
              Let&apos;s Talk
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/methodology"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-6 py-3.5 text-sm font-medium text-primary transition-colors hover:border-steel hover:text-steel"
            >
              Explore Our Methodology
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
