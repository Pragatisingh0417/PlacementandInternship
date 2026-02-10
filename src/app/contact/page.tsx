import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/* ================= SEO METADATA ================= */
export const metadata: Metadata = {
  title: "Contact Us | Braintech Info Solutions",
  description:
    "Get in touch with Braintech Info Solutions for training programs, internships, placement support, and employer hiring services.",
  keywords: [
    "Braintech Info Solutions contact",
    "training and placement contact",
    "IT training enquiry",
    "hire freshers",
    "career guidance",
  ],
  openGraph: {
    title: "Contact Braintech Info Solutions",
    description:
      "Reach Braintech Info Solutions for training, placement, internships, and hiring skilled talent.",
    url: "https://braintechinfosolutions.com/contact",
    siteName: "Braintech Info Solutions",
    type: "website",
  },
};

/* ================= PAGE ================= */
export default function ContactPage() {
  return (
    <main className="w-full bg-white text-gray-900 overflow-x-hidden">

      {/* ================= HERO / BANNER ================= */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">

        {/* Background Image */}
        <Image
          src="/images/contact-banner.jpg"
          alt="Contact Braintech Info Solutions"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/70 to-black/80" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <span className="inline-block mb-4 text-sm uppercase tracking-wide text-gray-300">
              Contact Braintech
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Let’s Talk About <br />
              Your Career & Hiring Needs
            </h1>

            <p className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed">
              Whether you’re a student looking for training, an intern seeking
              real-world exposure, or a company hiring skilled talent — we’re
              here to help.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 ">

          {/* Email */}
          <div className="rounded-2xl p-8 bg-gray-50 text-center hover:shadow-md transition border">
            <h3 className="text-lg font-semibold text-[#03228f] mb-3">
              Email Us
            </h3>
            <p className="text-gray-700">
              info@braintechinfosolutions.com
            </p>
          </div>

          {/* Phone */}
          <div className="rounded-2xl p-8 bg-gray-50 text-center hover:shadow-md transition border">
            <h3 className="text-lg font-semibold text-[#03228f] mb-3">
              Call Our Team
            </h3>
            <p className="text-gray-700">+91-7390030157</p>
            <p className="text-gray-700">+91-8287725005</p>
          </div>

          {/* Address */}
          <div className="rounded-2xl p-8 bg-gray-50 text-center hover:shadow-md transition border">
            <h3 className="text-lg font-semibold text-[#03228f] mb-3">
              Visit Our Office
            </h3>
            <p className="text-gray-700">
              Levana Cyber Heights,<br />
              Vibhuti Khand, Lucknow
            </p>
          </div>

        </div>
      </section>

     <section className="py-28 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

    {/* LEFT CONTENT (ENHANCED) */}
    <div className="bg-white p-10 rounded-2xl border shadow-sm">

      <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-wide text-[#03228f]">
        Talk to an Advisor
      </span>

      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        We’re Here to Guide You
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Share your details and our team will connect with you to understand
        your goals and recommend the right training or hiring solution.
      </p>

      {/* TRUST POINTS */}
      <ul className="space-y-4 text-gray-700 text-sm">
        <li className="flex items-start gap-3">
          <span className="text-[#03228f] font-bold">✓</span>
          Career-focused guidance from industry experts
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#03228f] font-bold">✓</span>
          Personalized course & internship recommendations
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#03228f] font-bold">✓</span>
          Support for students, professionals & employers
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#03228f] font-bold">✓</span>
          Transparent guidance — no sales pressure
        </li>
      </ul>

      {/* SOFT NOTE */}
      <div className="mt-8 rounded-xl bg-[#03228f]/5 p-5 text-sm text-gray-700">
        Our advisors usually respond within <b>24 hours</b> on working days.
      </div>
    </div>

    {/* RIGHT FORM (UNCHANGED, BUT BALANCED NOW) */}
    <form className="bg-white p-10 rounded-2xl shadow-sm border space-y-6">

      <input
        type="text"
        placeholder="Full Name"
        required
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#03228f]"
      />

      <input
        type="email"
        placeholder="Email Address"
        required
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#03228f]"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#03228f]"
      />

      <textarea
        rows={4}
        placeholder="Tell us what you’re looking for"
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#03228f]"
      />

      <button
        type="submit"
        className="w-full bg-[#03228f] text-white py-4 rounded-lg font-semibold hover:bg-[#021b70] transition"
      >
        Submit Enquiry
      </button>
    </form>

  </div>
</section>


      {/* ================= FINAL CTA ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl bg-[#03228f] p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="max-w-2xl mx-auto text-gray-200 mb-8">
              Explore our training programs, internships, and placement-driven
              courses designed to build real careers.
            </p>
            <Link
              href="/courses"
              className="inline-block bg-white text-[#03228f] px-8 py-4 rounded-lg font-semibold"
            >
              View Courses
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
