const points = [
  {
    title: 'Uncertain supplier reliability',
    body: 'Directories and trade shows surface names, not proof. Verifying real capability, capacity and stability from abroad is slow and risky.',
  },
  {
    title: 'Limited on-the-ground visibility',
    body: 'Distance, language and local business norms make it hard to assess a factory honestly before you commit budget and timelines.',
  },
  {
    title: 'Conflicts of interest',
    body: 'Many sourcing intermediaries are paid by the suppliers they recommend — so their advice is rarely neutral.',
  },
]

export function Challenge() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            The Challenge
          </p>
          <h2 className="mt-5 text-balance font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-primary sm:text-4xl">
            Sourcing in a new region carries real risk
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The Baltic States are home to capable, competitively priced
            manufacturers. But for a company operating from Germany or elsewhere
            in Europe, finding and trusting the right partner is difficult.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {points.map((p, i) => (
            <div key={p.title} className="bg-card p-10">
              <span className="font-heading text-sm font-semibold text-steel">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-primary">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
