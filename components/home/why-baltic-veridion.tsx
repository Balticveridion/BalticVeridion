import { Scale, MapPin, FileText, Handshake } from 'lucide-react'

const reasons = [
  {
    icon: Scale,
    title: 'Truly independent',
    body: 'We are never paid by the suppliers we assess. Our only obligation is to you, the buyer.',
  },
  {
    icon: MapPin,
    title: 'On the ground in the Baltics',
    body: 'Local presence and language across Lithuania, Latvia and Estonia — not remote desk research.',
  },
  {
    icon: FileText,
    title: 'Evidence, not opinion',
    body: 'Every finding is documented and verifiable, so your decisions rest on facts.',
  },
  {
    icon: Handshake,
    title: 'Built for European SMEs',
    body: 'We understand the standards, expectations and pace of German and mid-market manufacturers.',
  },
]

export function WhyBalticVeridion() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            Why Baltic Veridion
          </p>
          <h2 className="mt-5 text-balance font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-primary sm:text-4xl">
            A partner whose incentives are aligned with yours
          </h2>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-5">
              <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-md bg-primary text-primary-foreground">
                <r.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-primary">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
