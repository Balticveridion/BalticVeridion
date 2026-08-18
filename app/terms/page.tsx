import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Baltic Veridion.",
};

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms & Conditions"
      description="These Terms & Conditions govern the use of the Baltic Veridion website and services."
    >
      <div className="prose prose-neutral max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing this website, you agree to these Terms & Conditions and
          all applicable laws and regulations.
        </p>

        <h2>2. Services</h2>
        <p>
          Baltic Veridion provides independent industrial sourcing, supplier
          discovery, evaluation, due diligence and related consulting services.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics and branding,
          remains the property of Baltic Veridion unless otherwise stated.
        </p>

        <h2>4. Limitation of Liability</h2>
        <p>
          Information published on this website is provided for general
          informational purposes only. Baltic Veridion is not liable for any
          direct or indirect damages arising from the use of this website.
        </p>

        <h2>5. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for their content or privacy practices.
        </p>

        <h2>6. Governing Law</h2>
        <p>
          These Terms shall be governed by the laws applicable in the Republic
          of Lithuania unless otherwise agreed.
        </p>

        <h2>7. Contact</h2>
        <p>
          If you have any questions regarding these Terms & Conditions, please
          contact us through our Contact page.
        </p>

        <p className="mt-10 text-sm text-muted-foreground">
          Last updated: August 2026
        </p>
      </div>
    </PageShell>
  );
}