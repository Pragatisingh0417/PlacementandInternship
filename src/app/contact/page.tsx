import type { Metadata } from "next";

/* ================= SEO METADATA ================= */
export const metadata: Metadata = {
  title: "Contact Us | Braintech Info Solutions",
  description:
    "Get in touch with Braintech Info Solutions for training programs, career guidance, and placement support.",
  keywords: [
    "Braintech Info Solutions contact",
    "training institute contact",
    "placement support",
    "IT training enquiry",
  ],
  openGraph: {
    title: "Contact Braintech Info Solutions",
    description:
      "Contact Braintech Info Solutions for training, placement, and career guidance.",
    url: "https://braintechinfosolutions.com/contact",
    siteName: "Braintech Info Solutions",
    type: "website",
  },
};

/* ================= PAGE ================= */
export default function ContactPage() {
  return (
    <main className="w-full bg-white text-gray-900 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="bg-[#03228f] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Contact Us
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-gray-200 text-base md:text-lg">
            Have questions about our training programs or placement support?
            We’re here to help you take the next step in your career.
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* Email */}
          <div className="border rounded-xl p-8 bg-white shadow-sm text-center">
            <h3 className="text-lg font-semibold text-[#03228f] mb-3">
              Email Us
            </h3>
            <p className="text-gray-700">
              info@braintechinfosolutions.com
            </p>
          </div>

          {/* Phone */}
          <div className="border rounded-xl p-8 bg-white shadow-sm text-center">
            <h3 className="text-lg font-semibold text-[#03228f] mb-3">
              Call Us
            </h3>
            <p className="text-gray-700">
              +91 XXXXX XXXXX
            </p>
          </div>

          {/* Address */}
          <div className="border rounded-xl p-8 bg-white shadow-sm text-center">
            <h3 className="text-lg font-semibold text-[#03228f] mb-3">
              Visit Us
            </h3>
            <p className="text-gray-700">
              Braintech Info Solutions<br />
              India
            </p>
          </div>

        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">

          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#03228f]">
              Get In Touch
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Fill out the form and our team will get back to you shortly.
              Whether you’re a student, professional, or recruiter — we’d love
              to hear from you.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our advisors will help you choose the right training path and
              guide you toward career success.
            </p>
          </div>

          {/* Form */}
          <form className="bg-white p-8 rounded-xl shadow-sm border space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#03228f]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#03228f]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#03228f]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#03228f]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#03228f] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl bg-[#03228f] p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Career?
            </h2>
            <p className="max-w-2xl mx-auto text-gray-200 mb-8">
              Enroll in our training programs and move closer to your career
              goals with Braintech Info Solutions.
            </p>
            <a
              href="/courses"
              className="inline-block bg-white text-[#03228f] px-8 py-3 rounded-lg font-semibold"
            >
              View Courses
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
