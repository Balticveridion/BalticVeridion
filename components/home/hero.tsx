import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-steel">
            Trusted Baltic Industrial Partner
          </p>
          <h1 className="mt-8 text-pretty font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-[3.5rem]">
            Independent Supplier Discovery and Qualification in the Baltic States
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Helping European manufacturers identify, evaluate and qualify
            reliable industrial suppliers through an independent and transparent
            sourcing methodology.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy/90"
            >
              Let&apos;s Discuss Your Sourcing Objectives
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/methodology"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 text-sm font-medium text-primary transition-colors hover:border-steel hover:text-steel"
            >
              Explore Our Methodology
            </Link>
          </div>

          <div className="mt-12 border-l-2 border-teal pl-5">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-steel">
              Trusted Baltic Industrial Partner
            </p>
            <p className="mt-2 font-heading text-lg font-medium text-primary">
              We Don&apos;t Sell Suppliers. We Build Trust.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-secondary shadow-[0_24px_60px_-24px_rgba(23,50,77,0.35)]">
            <Image
              src="/images/hero-machining.png"
              alt="Technician operating a CNC machine and inspecting a precision metal part at a small European manufacturing workshop"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-6 hidden w-72 rounded-lg border border-border bg-card p-6 shadow-[0_20px_50px_-20px_rgba(23,50,77,0.4)] sm:block">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-teal">
              <ShieldCheck className="h-3.5 w-3.5" />
              Independent by Design
            </span>
            <p className="mt-3 font-heading text-base font-semibold leading-snug text-primary">
              Never paid by suppliers.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Every recommendation serves your interests alone — no
              commissions, no hidden incentives, only qualified suppliers we
              would trust ourselves.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
