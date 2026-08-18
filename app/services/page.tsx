import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Activity,
  ArrowRight,
  Check,
  ClipboardCheck,
  Factory,
  Search,
  ShieldCheck,
} from 'lucide-react'
import { PageShell } from '@/components/page-shell'

export const metadata: Metadata = {
  title: 'Industrial Sourcing Services',
  description:
    'Independent supplier discovery, evaluation, due diligence, factory audits and production monitoring for European manufacturers across Lithuania, Latvia and Estonia.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Industrial Sourcing Services | Baltic Veridion',
    description:
      'Independent supplier discovery, evaluation, due diligence, factory audits and production monitoring across the Baltic States.',
    url: 'https://balticveridion.com/services',
    siteName: 'Baltic Veridion',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Baltic Veridion Industrial Sourcing Services',
      },
    ],
  },
}

const services = [
  {
    id: 'supplier-discovery',
    name: 'Supplier Discovery™',
    icon: Search,
    introduction:
      'We identify Baltic manufacturers whose real capabilities match your technical, quality and commercial requirements — including suppliers that are difficult to find through directories or trade platforms.',
    image: '/images/metal-processing.png',
    alt: 'Precision metal processing at a Baltic manufacturing facility',
    benefits: [
      'A wider, better-qualified supplier pool',
      'Less internal time spent on market research',
      'Direct access to relevant decision-makers',
    ],
    deliverables: [
      'Requirements and search-criteria brief',
      'Longlist and evidence-based shortlist',
      'Supplier profiles with capability summaries',
      'Introductions to selected manufacturers',
    ],
  },
  {
    id: 'supplier-evaluation',
    name: 'Supplier Evaluation™',
    icon: ClipboardCheck,
    introduction:
      'We compare shortlisted manufacturers through a structured assessment of capability, capacity, quality systems, responsiveness and commercial fit.',
    image: '/images/technical-discussion.png',
    alt: 'Industrial engineers evaluating a manufactured component',
    benefits: [
      'Comparable evidence across every candidate',
      'Earlier identification of operational gaps',
      'Clearer, faster sourcing decisions',
    ],
    deliverables: [
      'Supplier information questionnaire',
      'Weighted evaluation scorecard',
      'Capability and capacity assessment',
      'Recommendation with identified risks',
    ],
  },
  {
    id: 'due-diligence',
    name: 'Supplier Due Diligence™',
    icon: ShieldCheck,
    introduction:
      'Before you commit, we independently verify the business behind the quotation — its legal standing, ownership, financial signals, certifications and reputation.',
    image: '/images/quality-control.png',
    alt: 'Quality specialist inspecting a precision component',
    benefits: [
      'Reduced commercial and compliance exposure',
      'Verified claims rather than assumptions',
      'Stronger basis for contract approval',
    ],
    deliverables: [
      'Corporate and ownership verification',
      'Financial and reputational risk review',
      'Certification and compliance checks',
      'Red-flag report and risk classification',
    ],
  },
  {
    id: 'factory-audit',
    name: 'Factory Audit™',
    icon: Factory,
    introduction:
      'Our on-site audit tests whether documented capability is visible in practice across production, equipment, quality control, traceability and working conditions.',
    image: '/images/hero-machining.png',
    alt: 'On-site review of precision machining operations',
    benefits: [
      'First-hand evidence from the production floor',
      'Visibility into quality and process discipline',
      'Corrective actions agreed before onboarding',
    ],
    deliverables: [
      'Audit plan tailored to your requirements',
      'On-site technical and quality assessment',
      'Photographic evidence and observations',
      'Corrective-action plan with priorities',
    ],
  },
  {
    id: 'production-monitoring',
    name: 'Production Monitoring™',
    icon: Activity,
    introduction:
      'Once production begins, we remain your independent local presence — monitoring milestones, quality signals and communication before issues affect delivery.',
    image: '/images/hero-facility.png',
    alt: 'Production activity inside a modern manufacturing facility',
    benefits: [
      'Earlier warning of quality or schedule risks',
      'Faster resolution with local follow-through',
      'More predictable delivery performance',
    ],
    deliverables: [
      'Agreed monitoring and reporting plan',
      'Milestone and production-status reports',
      'Issue escalation and corrective follow-up',
      'Pre-shipment readiness confirmation',
    ],
  },
]

const process = [
  {
    step: '01',
    title: 'Define',
    body: 'Clarify specifications, priorities, target costs and qualification criteria.',
  },
  {
    step: '02',
    title: 'Discover',
    body: 'Map the Baltic market and identify manufacturers that fit the brief.',
  },
  {
    step: '03',
    title: 'Evaluate',
    body: 'Compare capability, capacity, quality systems and commercial fit.',
  },
  {
    step: '04',
    title: 'Verify',
    body: 'Validate evidence through due diligence and on-site assessment.',
  },
  {
    step: '05',
    title: 'Support',
    body: 'Assist onboarding and monitor production, quality and timelines.',
  },
]

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="Independent support across the sourcing lifecycle"
      description="Use one focused service or combine all five into an end-to-end supplier qualification programme. Every recommendation serves the buyer alone — Baltic Veridion never accepts supplier commissions."
    >
      <div className="rounded-lg border border-border bg-card px-6 py-6 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-3 sm:divide-x sm:divide-border">
          <div>
            <p className="font-heading text-2xl font-semibold text-primary">
              100%
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Buyer-side representation
            </p>
          </div>

          <div className="sm:pl-6">
            <p className="font-heading text-2xl font-semibold text-primary">
              3 markets
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Lithuania, Latvia and Estonia
            </p>
          </div>

          <div className="sm:pl-6">
            <p className="font-heading text-2xl font-semibold text-primary">
              0%
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Supplier commissions
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 space-y-24">
        {services.map((service, index) => (
          <article
            key={service.id}
            id={service.id}
            className="scroll-mt-28 border-b border-border pb-24 last:border-0 last:pb-0"
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className={index % 2 === 1 ? 'lg:order-2' : undefined}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-secondary">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-navy">
                  <service.icon className="h-5 w-5" />
                </span>

                <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-primary">
                  {service.name}
                </h2>

                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {service.introduction}
                </p>

                <h3 className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                  Client benefits
                </h3>

                <ul className="mt-4 space-y-3">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex gap-3 text-sm text-foreground/80"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-none text-teal" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">
                Typical deliverables
              </h3>

              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {service.deliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="flex items-start gap-3 text-sm text-foreground/80"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal" />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-24 border-y border-border py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          Our five-step sourcing process
        </p>

        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          One transparent path from requirement to reliable production
        </h2>

        <ol className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-5">
          {process.map((item) => (
            <li key={item.step} className="bg-card p-6">
              <span className="font-heading text-sm font-semibold text-teal">
                {item.step}
              </span>

              <h3 className="mt-5 font-heading text-lg font-semibold text-primary">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20 rounded-lg bg-navy px-6 py-12 text-center sm:px-12 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          Start with your requirements
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl text-balance font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Let&apos;s discuss your sourcing project
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#aebccb]">
          Tell us what you need to manufacture, your target market and the risks
          you want to reduce. We&apos;ll recommend a practical first step.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-[#e8ecef]"
        >
          Discuss Your Sourcing Objectives
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </PageShell>
  )
}