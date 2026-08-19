'use client'

import { useForm, ValidationError } from '@formspree/react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mnpaoykr')

  if (state.succeeded) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-lg border border-border bg-card p-8 text-center sm:p-10">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-teal">
          <CheckCircle2 className="h-7 w-7" />
        </span>

        <h2 className="mt-6 font-heading text-2xl font-semibold text-primary sm:text-3xl">
          Thank you for your enquiry
        </h2>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Your message has been sent successfully. Baltic Veridion will respond
          within one business day.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-secondary/40 p-7 sm:p-9"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
        Project enquiry
      </p>

      <h2 className="mt-4 font-heading text-2xl font-semibold text-primary sm:text-3xl">
        Tell us about your sourcing requirement
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Share a brief overview of your project and we will get back to you
        within one business day.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-primary"
          >
            Name *
          </label>

          <input
            id="name"
            type="text"
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-teal"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-primary"
          >
            Company
          </label>

          <input
            id="company"
            type="text"
            name="company"
            autoComplete="organization"
            className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-teal"
            placeholder="Company name"
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-primary"
        >
          Email *
        </label>

        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-teal"
          placeholder="name@company.com"
        />

        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-2 text-sm text-red-600"
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-primary"
        >
          Subject
        </label>

        <input
          id="subject"
          type="text"
          name="subject"
          className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-teal"
          placeholder="Supplier sourcing enquiry"
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-primary"
        >
          Message *
        </label>

        <textarea
          id="message"
          name="message"
          rows={7}
          required
          className="w-full resize-y rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-teal"
          placeholder="Tell us about the component, process, expected volume and current sourcing challenge."
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-2 text-sm text-red-600"
        />
      </div>

      <ValidationError
        errors={state.errors}
        className="mt-5 text-sm text-red-600"
      />

      <button
        type="submit"
        disabled={state.submitting}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? 'Sending...' : 'Send Enquiry'}

        {!state.submitting && (
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        )}
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
        Your enquiry will be treated confidentially.
      </p>
    </form>
  )
}