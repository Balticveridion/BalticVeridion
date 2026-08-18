import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Compass,
  Eye,
  Handshake,
  Scale,
  ShieldCheck,
} from 'lucide-react'
import { PageShell } from '@/components/page-shell'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Baltic Veridion, an independent industrial sourcing partner helping European manufacturers identify and qualify reliable suppliers across the Baltic States.',
}

const values = [
  {
    icon: Scale,
    title: 'Independence',
    body: 'We represent only our clients. We do not accept supplier commissions, referral fees or commercial incentives.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    body: 'Our methodology, communication and reporting are designed to make sourcing decisions clear and traceable.',
  },
  {
    icon: ShieldCheck,
    title: 'Professional Integrity',
    body: 'Recommendations are based on verified evidence, documented findings and practical industrial judgement.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    body: 'We focus on building durable supplier relationships rather than short-term transactions.',
  },
]

const reasons = [
  'Strong manufacturing capabilities across Lithuania, Latvia and Estonia',
  'Competitive European production environment',
  'Access to experienced engineering and technical talent',
  'Geographic proximity to major European industrial markets',
  'Reliable infrastructure and established EU business standards',
]

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About Baltic Veridion"
      title="Independent Sourcing. Built on Trust."
      description="Baltic Veridion helps European manufacturers make better sourcing decisions by combining local Baltic market knowledge with a structured, independent supplier qualification process."
    >
      <section className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            Why we exist
          </p>

          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Finding suppliers is easy. Building confidence in the right supplier is not.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Modern sourcing involves more than identifying companies with the right
              equipment or competitive pricing.
            </p>

            <p>
              Manufacturers need confidence that a potential supplier has the technical
              capability, operational discipline, business reliability and long-term
              commitment required to support their business.
            </p>

            <p>
              Baltic Veridion was created to provide that confidence through independent
              supplier discovery, evaluation, due diligence, factory verification and
              production support across the Baltic States.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-secondary/50 p-7 sm:p-8">
          <Compass className="h-8 w-8 text-teal" />

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-steel">
            Our mission
          </p>

          <p className="mt-3 font-heading text-2xl font-semibold leading-snug text-primary">
            Help manufacturers reduce sourcing risk and build trusted supplier
            relationships in the Baltic States.
          </p>

          <div className="mt-8 border-t border-border pt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">
              Our vision
            </p>

            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              To become the most trusted independent industrial sourcing partner in the
              Baltic region.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          What makes us different
        </p>

        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          We work exclusively in the interests of our clients
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Baltic Veridion is not a supplier, distributor or manufacturers&apos;
          representative. Our role is to provide objective information and structured
          decision support throughout the supplier qualification process.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon

            return (
              <div
                key={value.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>

                <h3 className="mt-5 font-heading text-lg font-semibold text-primary">
                  {value.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mt-24 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            Regional expertise
          </p>

          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Your gateway to trusted manufacturers in the Baltic States
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Our focus on Lithuania, Latvia and Estonia allows us to build deeper regional
            knowledge and support clients with practical, on-the-ground supplier
            intelligence.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-7 sm:p-8">
          <h3 className="font-heading text-xl font-semibold text-primary">
            Why the Baltic States?
          </h3>

          <ul className="mt-6 space-y-4">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="flex gap-3 text-sm leading-relaxed text-foreground/80"
              >
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-teal" />
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-24 rounded-lg bg-navy px-6 py-12 text-center sm:px-12 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          Our philosophy
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-balance font-heading text-3xl font-semibold text-white sm:text-4xl">
          We Don&apos;t Sell Suppliers. We Build Trust.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#aebccb]">
          Successful sourcing begins with confidence in the decisions you make. Our role
          is to make those decisions more informed, transparent and independent.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-[#e8ecef]"
        >
          Let&apos;s Discuss Your Sourcing Objectives
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </PageShell>
  )
}