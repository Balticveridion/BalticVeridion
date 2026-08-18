import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children?: React.ReactNode
}) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-balance font-heading text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
            {children ?? (
              <div className="rounded-lg border border-dashed border-border bg-card p-10 text-center">
                <p className="font-heading text-lg font-medium text-primary">
                  This page is coming soon
                </p>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  We&apos;re preparing detailed content for this section. In the
                  meantime, we&apos;d be glad to answer your questions directly.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy/90"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            )}
            <div className="mt-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-steel transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
