import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for FiDi Mezzanine event venue at 55 Broadway, Manhattan NYC.",
  alternates: {
    canonical: "https://www.fidimezzanine.com/terms-of-service",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-heading mb-4">Terms of Service</h1>
      <p className="text-gray-500 mb-12">Last updated: March 24, 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the FiDi Mezzanine website and services, you
            agree to be bound by these Terms of Service. If you do not agree to
            these terms, please do not use our website or services. FiDi
            Mezzanine reserves the right to modify these terms at any time, and
            your continued use of the site constitutes acceptance of any
            changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">
            2. Services
          </h2>
          <p>
            FiDi Mezzanine provides event venue rental services located at 55
            Broadway, New York, NY 10006. Our services include venue rental for
            corporate events, weddings, private celebrations, and other
            gatherings. All services are subject to availability and the terms
            outlined in individual event contracts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">
            3. Reservations and Payments
          </h2>
          <p>
            All venue reservations require a signed event contract and a
            non-refundable deposit to secure your date. Payment schedules,
            cancellation policies, and refund terms are outlined in your
            individual event agreement. FiDi Mezzanine reserves the right to
            cancel any reservation if payment terms are not met.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">
            4. Use of Venue
          </h2>
          <p>
            Clients and their guests are expected to use the venue in a
            responsible manner. Any damage to the property, fixtures, or
            equipment will be the financial responsibility of the client. FiDi
            Mezzanine reserves the right to terminate any event if the safety of
            guests, staff, or the property is at risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">
            5. Intellectual Property
          </h2>
          <p>
            All content on this website, including text, images, logos,
            graphics, and design, is the property of FiDi Mezzanine and is
            protected by applicable intellectual property laws. You may not
            reproduce, distribute, or use any content without prior written
            consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">
            6. Limitation of Liability
          </h2>
          <p>
            FiDi Mezzanine shall not be liable for any indirect, incidental,
            special, or consequential damages arising from the use of our
            website or services. Our total liability shall not exceed the amount
            paid by you for the specific service giving rise to the claim. We
            are not responsible for loss or damage to personal property brought
            onto the premises.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">
            7. Force Majeure
          </h2>
          <p>
            FiDi Mezzanine shall not be held liable for failure to perform any
            obligation under these terms if such failure results from
            circumstances beyond our reasonable control, including but not
            limited to natural disasters, government actions, pandemics,
            strikes, or utility failures.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">
            8. Governing Law
          </h2>
          <p>
            These Terms of Service shall be governed by and construed in
            accordance with the laws of the State of New York. Any disputes
            arising under these terms shall be subject to the exclusive
            jurisdiction of the courts located in New York County, New York.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4">
            9. Contact Information
          </h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us at:
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
