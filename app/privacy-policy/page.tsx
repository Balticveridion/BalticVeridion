import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Baltic Veridion.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      description="This Privacy Policy explains how Baltic Veridion collects, uses and protects personal information."
    >
      <div className="prose prose-neutral max-w-none">
        <h2>1. Information We Collect</h2>
        <p>
          We may collect your name, company name, email address, telephone
          number and any information you voluntarily provide through our contact
          forms or email communication.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          Your information is used solely to respond to enquiries, provide our
          sourcing services and improve our website.
        </p>

        <h2>3. Legal Basis</h2>
        <p>
          We process personal data in accordance with the General Data
          Protection Regulation (GDPR) based on legitimate interest, contractual
          necessity or your consent where applicable.
        </p>

        <h2>4. Data Sharing</h2>
        <p>
          We do not sell personal information. Data is shared only with trusted
          service providers when necessary for operating our business or where
          required by law.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          Personal information is retained only for as long as necessary to
          fulfil the purposes for which it was collected or to comply with legal
          obligations.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          You have the right to access, correct, erase or restrict the
          processing of your personal data, as well as the right to data
          portability and to lodge a complaint with your local supervisory
          authority.
        </p>

        <h2>7. Contact</h2>
        <p>
          For privacy-related enquiries, please contact us using the contact
          information provided on our Contact page.
        </p>

        <p className="mt-10 text-sm text-muted-foreground">
          Last updated: August 2026
        </p>
      </div>
    </PageShell>
  );
}