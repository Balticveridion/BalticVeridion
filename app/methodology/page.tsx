import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Eye,
  FileCheck2,
  Scale,
  ShieldCheck,
} from 'lucide-react'
import { PageShell } from '@/components/page-shell'

export const metadata: Metadata = {
  title: 'Supplier Qualification Methodology',
  description:
    'Discover Baltic Veridion’s structured five-step methodology for supplier discovery, evaluation, due diligence, factory audits and production support across the Baltic States.',
  alternates: {
    canonical: '/methodology',
  },
  openGraph: {
    title: 'Supplier Qualification Methodology | Baltic Veridion',
    description:
      'A transparent, evidence-based methodology for identifying, evaluating and qualifying industrial suppliers in Lithuania, Latvia and Estonia.',
    url: 'https://balticveridion.com/methodology',
    siteName: 'Baltic Veridion',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Baltic Veridion Methodology',
      },
    ],
  },
}

const steps = [
  {
    number: '01',
    title: 'Define the requirement',
    body: 'We turn drawings, specifications, volumes, quality expectations and commercial priorities into measurable qualification criteria.',
    outputs: [
      'Requirements brief',
      'Evaluation criteria',
      'Search boundaries',
    ],
  },
  {
    number: '02',
    title: 'Map and discover',
    body: 'We research the regional supply base beyond public directories and identify manufacturers with relevant processes, equipment and experience.',
    outputs: [
      'Market map',
      'Supplier longlist',
      'Initial capability evidence',
    ],
  },
  {
    number: '03',
    title: 'Evaluate and shortlist',
    body: 'Candidates are compared against the same weighted criteria so technical capability, capacity, responsiveness and commercial fit remain comparable.',
    outputs: [
      'Evaluation scorecard',
      'Risk observations',
      'Qualified shortlist',
    ],
  },
  {
    number: '04',
    title: 'Verify on the ground',
    body: 'Due diligence and on-site assessment verify whether documented claims are supported by real systems, equipment, people and process discipline.',
    outputs: [
      'Due-diligence findings',
      'Factory-audit report',
      'Corrective actions',
    ],
  },
  {
    number: '05',
    title: 'Support implementation',
    body: 'We assist communication, onboarding and production follow-up so unresolved issues are visible before they affect quality or delivery.',
    outputs: [
      'Onboarding support',
      'Milestone reports',
      'Issue follow-up',
    ],
  },
]

const principles = [
  {
    icon: Scale,
    title: 'Independent',
    body: 'No supplier commissions, referral fees or hidden commercial incentives.',
  },
  {
    icon: FileCheck2,
    title: 'Evidence-based',
    body: 'Recommendations are supported by documented findings, not sales claims.',
  },
  {
    icon: Eye,
    title: 'Transparent',
    body: 'Criteria, risks and limitations remain visible throughout the process.',
  },
  {
    icon: ShieldCheck,
    title: 'Confidential',
    body: 'Technical and commercial information is handled on a need-to-know basis.',
  },
]

export default function MethodologyPage() {
  return (
    <PageShell
      eyebrow="Methodology"
      title="A Structured Methodology for Better Sourcing Decisions"
      description="Our five-step process helps European manufacturers identify, evaluate and verify reliable suppliers in the Baltic States through a transparent, evidence-based methodology."
    >
      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          Five-step qualification process
        </p>

        <div className="mt-8 overflow-hidden rounded-lg border border-border bg-border">
          {steps.map((step) => (
            <article
              key={step.number}
              className="grid gap-6 bg-card p-7 sm:p-9 lg:grid-cols-[90px_1fr_0.8fr] lg:gap-10 [&+article]:mt-px"
            >
              <span className="font-heading text-3xl font-semibold text-teal">
                {step.number}
              </span>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-primary">
                  {step.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>

              <div className="rounded-md bg-secondary/60 p-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-steel">
                  What you receive
                </h3>

                <ul className="mt-4 space-y-2.5">
                  {step.outputs.map((output) => (
                    <li
                      key={output}
                      className="flex gap-2.5 text-sm text-foreground/80"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-none text-teal" />
                      {output}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          Principles at every stage
        </p>

        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          A process designed to protect the buyer&apos;s decision
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => {
            const Icon = principle.icon

            return (
              <div
                key={principle.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>

                <h3 className="mt-5 font-heading text-lg font-semibold text-primary">
                  {principle.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {principle.body}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mt-20 rounded-lg bg-navy px-6 py-12 text-center sm:px-12 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          Scope built around your risk
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl text-balance font-heading text-3xl font-semibold text-white sm:text-4xl">
          Start with one stage or use the complete process
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#aebccb]">
          We tailor the depth of evaluation to the component, volume,
          regulatory exposure and importance of the supplier relationship.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-[#e8ecef]"
        >
          Discuss the Right Scope
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </PageShell>
  )
}