import type { Metadata } from 'next'
import {
  ArrowRight,
  Building2,
  Clock3,
  Mail,
  MapPin,
  MessageSquareText,
  ShieldCheck,
} from 'lucide-react'
import { PageShell } from '@/components/page-shell'
import ContactForm from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact Baltic Veridion',
  description:
    'Contact Baltic Veridion to discuss supplier discovery, evaluation, due diligence, factory audits and production monitoring across Lithuania, Latvia and Estonia.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Baltic Veridion',
    description:
      'Discuss your supplier sourcing, qualification or industrial procurement requirements with Baltic Veridion.',
    url: 'https://balticveridion.com/contact',
    siteName: 'Baltic Veridion',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Baltic Veridion',
      },
    ],
  },
}

const contactEmail = 'contact@balticveridion.com'

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Let's Discuss Your Sourcing Objectives"
      description="Whether you are identifying new manufacturing partners, evaluating an existing supplier or exploring sourcing opportunities in the Baltic States, we would be pleased to learn more about your project."
    >
      <section className="grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            Start the conversation
          </p>

          <h2 className="mt-4 max-w-xl break-words font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Tell us what you are trying to achieve
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            A first conversation is about understanding your requirements,
            current sourcing situation and the level of support that would
            create the most value for your business.
          </p>

          <div className="mt-10 min-w-0 space-y-4">
            <a
              href={`mailto:${contactEmail}`}
              className="group flex min-w-0 items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-teal sm:gap-4 sm:p-5"
            >
              <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Mail className="h-5 w-5" />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-steel">
                  Email
                </p>

                <p className="mt-1 break-all font-heading text-base font-semibold text-primary sm:text-lg">
                  {contactEmail}
                </p>
              </div>

              <ArrowRight className="ml-auto hidden h-4 w-4 flex-none text-teal transition-transform group-hover:translate-x-1 sm:block" />
            </a>

            <div className="flex min-w-0 items-center gap-3 rounded-lg border border-border bg-card p-4 sm:gap-4 sm:p-5">
              <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-md bg-primary text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </span>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-steel">
                  Regional focus
                </p>

                <p className="mt-1 break-words font-heading text-base font-semibold text-primary sm:text-lg">
                  Lithuania · Latvia · Estonia
                </p>
              </div>
            </div>

            <div className="flex min-w-0 items-center gap-3 rounded-lg border border-border bg-card p-4 sm:gap-4 sm:p-5">
              <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Clock3 className="h-5 w-5" />
              </span>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-steel">
                  Response
                </p>

                <p className="mt-1 break-words font-heading text-base font-semibold text-primary sm:text-lg">
                  Within one business day
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <ContactForm />
        </div>
      </section>

      <section className="mt-20 min-w-0 sm:mt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          How we can help
        </p>

        <h2 className="mt-4 max-w-2xl break-words font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Independent support throughout the sourcing process
        </h2>

        <div className="mt-10 grid min-w-0 grid-cols-1 gap-5 md:grid-cols-3">
          <div className="min-w-0 rounded-lg border border-border bg-card p-6">
            <Building2 className="h-6 w-6 text-teal" />

            <h3 className="mt-5 font-heading text-lg font-semibold text-primary">
              New supplier search
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Identify and evaluate manufacturing partners that match your
              technical, commercial and operational requirements.
            </p>
          </div>

          <div className="min-w-0 rounded-lg border border-border bg-card p-6">
            <ShieldCheck className="h-6 w-6 text-teal" />

            <h3 className="mt-5 font-heading text-lg font-semibold text-primary">
              Supplier verification
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Independently verify supplier capability, reliability, quality
              systems and operational readiness.
            </p>
          </div>

          <div className="min-w-0 rounded-lg border border-border bg-card p-6">
            <MessageSquareText className="h-6 w-6 text-teal" />

            <h3 className="mt-5 font-heading text-lg font-semibold text-primary">
              Local project support
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Maintain visibility during supplier onboarding, production and
              delivery through local Baltic support.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 min-w-0 rounded-lg bg-navy px-5 py-10 text-center sm:mt-24 sm:px-12 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          Trusted Baltic Industrial Partner
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl break-words font-heading text-3xl font-semibold text-white sm:text-4xl">
          Your gateway to trusted manufacturers in the Baltic States.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#aebccb]">
          Every sourcing project starts with understanding the requirement.
          Let&apos;s discuss your objectives and determine whether Baltic
          Veridion can support your next supplier decision.
        </p>

        <a
          href={`mailto:${contactEmail}?subject=Baltic%20Veridion%20Introduction`}
          className="mt-8 inline-flex max-w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-[#e8ecef]"
        >
          Contact Baltic Veridion
          <ArrowRight className="h-4 w-4 flex-none" />
        </a>
      </section>
    </PageShell>
  )
}