import type { Metadata } from "next";
import Link from "next/link";

/* ================= SEO METADATA ================= */
export const metadata: Metadata = {
  title: "Privacy Policy | Braintech Info Solutions",
  description:
    "Read the Privacy Policy of Braintech Info Solutions to understand how we collect, use, and protect your personal information.",
  keywords: [
    "Braintech privacy policy",
    "data protection",
    "user privacy",
    "training institute privacy",
  ],
};

/* ================= PAGE ================= */
export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-white text-gray-900 overflow-x-hidden">

      {/* ================= HEADER ================= */}
      <section className="py-20 bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#03228f]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-600 text-base">
            Privacy Assurance and Digital Excellence
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-10 text-gray-700 leading-relaxed">

          <p>
            Welcome to <b>BrainTech Info Solutions</b>, the forefront of
            innovation in the digital landscape. At BrainTech, we are committed
            to safeguarding your privacy and ensuring the security of your
            personal information. This Privacy Policy outlines our practices
            regarding the collection, use, and protection of your data.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-[#03228f] mb-3">
              Information Collection:
            </h2>
            <p>
              We collect information necessary for providing our services and
              enhancing your experience. This may include personal details,
              contact information, and technical data related to your
              interactions with our website and services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#03228f] mb-3">
              Use of Information:
            </h2>
            <p>
              We collect information necessary for providing our services and
              enhancing your experience. This may include personal details,
              contact information, and technical data related to your
              interactions with our website and services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#03228f] mb-3">
              Data Security:
            </h2>
            <p>
              We prioritize the security of your data and employ
              industry-standard measures to protect against unauthorized
              access, disclosure, alteration, or destruction. Our infrastructure
              is designed to ensure the confidentiality and integrity of your
              information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#03228f] mb-3">
              Third-Party Services:
            </h2>
            <p>
              BrainTech may engage with third-party services for various
              purposes, such as analytics, marketing, and payment processing.
              These services may have their own privacy policies, and we
              encourage you to review them. We are not responsible for the
              privacy practices of third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#03228f] mb-3">
              Cookies and Tracking Technologies:
            </h2>
            <p>
              Our website may use cookies and similar technologies to enhance
              your browsing experience. You have the option to manage cookie
              preferences through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#03228f] mb-3">
              Information Sharing:
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties for marketing purposes. However, we may share data with
              trusted partners and service providers who assist us in delivering
              our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#03228f] mb-3">
              Compliance with Laws:
            </h2>
            <p>
              BrainTech Info Solutions operates in compliance with applicable
              privacy laws and regulations. We will disclose information when
              required by law or to protect our rights.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#03228f] mb-3">
              Your Choices:
            </h2>
            <p>
              You have the right to access, correct, or delete your personal
              information. You can also opt-out of certain communications. To
              exercise these rights, please contact us at{" "}
              <Link
                href="mailto:info@braintechinfosolutions.com"
                className="text-[#03228f] font-medium underline"
              >
                info@braintechinfosolutions.com
              </Link>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#03228f] mb-3">
              Changes to Privacy Policy:
            </h2>
            <p>
              BrainTech reserves the right to update this Privacy Policy. Any
              changes will be communicated through our website or other
              appropriate channels.
            </p>
          </div>

          <p className="pt-6 border-t">
            Thank you for choosing <b>BrainTech Info Solutions</b>. We are
            dedicated to ensuring the privacy and security of your information
            as we work together to redefine possibilities in the digital realm.
          </p>

        </div>
      </section>

    </main>
  );
}
