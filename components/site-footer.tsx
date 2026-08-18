import Link from 'next/link'
import Image from 'next/image'

const columns = [
  {
    title: 'Services',
    links: [
      { label: 'Supplier Discovery™', href: '/services' },
      { label: 'Supplier Evaluation™', href: '/services' },
      { label: 'Supplier Due Diligence™', href: '/services' },
      { label: 'Factory Audit™', href: '/services' },
      { label: 'Production Monitoring™', href: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Methodology', href: '/methodology' },
      { label: 'Industries', href: '/industries' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy text-[#dfe6ec]">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="max-w-sm">
            <Image
              src="/brand/logo-light.svg"
              alt="Baltic Veridion — Industrial Sourcing"
              width={550}
              height={150}
              className="h-auto w-[235px]"
            />

            <p className="mt-5 font-heading text-base font-medium text-white">
              Trusted Baltic Industrial Partner
            </p>

            <p className="mt-2 text-sm leading-relaxed text-[#aebccb]">
              Your gateway to trusted manufacturers in the Baltic States.
            </p>

            <p className="mt-6 border-l-2 border-teal pl-4 font-heading text-sm font-medium text-white">
              We Don&apos;t Sell Suppliers. We Build Trust.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8ea3b6]">
                {col.title}
              </h3>

              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#c6d1dd] transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[#8ea3b6]">
              © {new Date().getFullYear()} Baltic Veridion. All rights reserved.
            </p>

            <nav
              aria-label="Legal"
              className="flex flex-wrap gap-x-5 gap-y-2"
            >
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-[#8ea3b6] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <p className="text-xs text-[#8ea3b6]">
              Lithuania · Latvia · Estonia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}