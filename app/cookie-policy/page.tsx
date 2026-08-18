import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Baltic Veridion.",
};

export default function CookiePolicyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Cookie Policy"
      description="This Cookie Policy explains how Baltic Veridion uses cookies and similar technologies."
    >
      <div className="prose prose-neutral max-w-none">
        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device to improve your
          browsing experience and help us understand how visitors use our
          website.
        </p>

        <h2>2. Types of Cookies We Use</h2>
        <ul>
          <li>Essential cookies required for website functionality.</li>
          <li>Analytics cookies to understand website performance.</li>
          <li>Preference cookies to remember your settings.</li>
        </ul>

        <h2>3. Managing Cookies</h2>
        <p>
          You can control or delete cookies through your browser settings.
          Disabling cookies may affect certain website features.
        </p>

        <h2>4. Third-Party Cookies</h2>
        <p>
          Some third-party services, such as analytics providers, may place
          cookies on your device in accordance with their own privacy policies.
        </p>

        <h2>5. Contact</h2>
        <p>
          If you have questions regarding our use of cookies, please contact
          Baltic Veridion through the Contact page.
        </p>

        <p className="mt-10 text-sm text-muted-foreground">
          Last updated: August 2026
        </p>
      </div>
    </PageShell>
  );
}