'use client'

import { ArrowUpRight } from 'lucide-react'

export function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '')
    const company = String(data.get('company') ?? '')
    const email = String(data.get('email') ?? '')
    const country = String(data.get('country') ?? '')
    const message = String(data.get('message') ?? '')

    const subject = encodeURIComponent(`Sourcing enquiry from ${company || name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nWork email: ${email}\nCountry: ${country || 'Not provided'}\n\nSourcing requirement:\n${message}`,
    )

    window.location.href = `mailto:hello@balticveridion.com?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" autoComplete="name" required />
        <Field label="Company" name="company" autoComplete="organization" required />
        <Field label="Work email" name="email" type="email" autoComplete="email" required />
        <Field label="Country" name="country" autoComplete="country-name" />
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-primary">
          What would you like to source?<span className="text-teal"> *</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring"
          placeholder="Describe the component, process, material, indicative volume and target timing."
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy/90 sm:w-auto"
      >
        Prepare email
        <ArrowUpRight className="h-4 w-4" />
      </button>
      <p className="mt-4 max-w-lg text-xs leading-relaxed text-muted-foreground">
        This opens your email application with the information pre-filled. You can review the message and attachments before sending.
      </p>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  autoComplete,
  required,
}: {
  label: string
  name: string
  type?: string
  autoComplete?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-primary">
        {label}
        {required && <span className="text-teal"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring"
      />
    </div>
  )
}
