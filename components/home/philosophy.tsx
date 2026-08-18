import Image from 'next/image'

export function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/metal-processing.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center lg:py-40">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          Our Philosophy
        </p>
        <blockquote className="mt-7 text-balance font-heading text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
          We Don&apos;t Sell Suppliers. We Build Trust.
        </blockquote>
        <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-[#c6d1dd]">
          Trust cannot be bought or brokered. It is earned through
          independence, transparency and rigour. That principle guides every
          engagement we take on.
        </p>
      </div>
    </section>
  )
}
