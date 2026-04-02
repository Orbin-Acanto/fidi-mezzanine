import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for FiDi Mezzanine event venue at 55 Broadway, Manhattan NYC.",
  alternates: {
    canonical: "https://www.fidimezzanine.com/privacy-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-heading mb-4">Privacy Policy</h1>
      <p className="text-gray-500 mb-12">Last updated: March 24, 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">
            1. Introduction
          </h2>
          <p>
            FiDi Mezzanine (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
            is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website or use our services. Please
            read this policy carefully. By using our website, you consent to the
            practices described herein.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">
            2. Information We Collect
          </h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, and other contact details you provide when submitting
              inquiries, booking events, or contacting us.
            </li>
            <li>
              <strong>Event Information:</strong> Event type, date preferences,
              guest count, and other details related to your event planning.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact
              with our website, including IP address, browser type, pages
              visited, and time spent on pages.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies and similar tracking
              technologies to enhance your browsing experience and analyze
              website traffic.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">
            3. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Respond to your inquiries and provide customer support.</li>
            <li>Process and manage event reservations and contracts.</li>
            <li>
              Send you information about our services, promotions, and updates
              (with your consent).
            </li>
            <li>Improve our website, services, and user experience.</li>
            <li>Comply with legal obligations and protect our rights.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">
            4. Information Sharing
          </h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information with:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Service Providers:</strong> Trusted vendors who assist us
              in operating our website, conducting business, or servicing you,
              provided they agree to keep your information confidential.
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law,
              regulation, or legal process, or to protect the rights, property,
              or safety of FiDi Mezzanine, our clients, or others.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">
            5. Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational security
            measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction. However, no method
            of transmission over the Internet or electronic storage is 100%
            secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">
            6. Your Rights
          </h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate or incomplete data.</li>
            <li>Request deletion of your personal information.</li>
            <li>Opt out of marketing communications at any time.</li>
            <li>Withdraw consent where processing is based on consent.</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact us using the
            information provided below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">7. Cookies</h2>
          <p>
            Our website uses cookies to enhance your experience. Cookies are
            small data files stored on your device. You can control cookie
            preferences through your browser settings. Disabling cookies may
            affect the functionality of certain parts of our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">
            8. Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those sites. We
            encourage you to review the privacy policies of any third-party
            sites you visit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">
            9. Children&apos;s Privacy
          </h2>
          <p>
            Our website and services are not directed to individuals under the
            age of 18. We do not knowingly collect personal information from
            children. If we become aware that we have collected information from
            a child, we will take steps to delete it promptly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">
            10. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated &quot;Last updated&quot;
            date. Your continued use of our website after changes are posted
            constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">
            11. Contact Us
          </h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <div className="mt-4">
            <p>
              <strong>FiDi Mezzanine</strong>
            </p>
            <p>55 Broadway, New York, NY 10006</p>
            <p>Phone: 212-971-5353</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@mmeink.com"
                className="text-primary hover:underline"
              >
                info@mmeink.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
