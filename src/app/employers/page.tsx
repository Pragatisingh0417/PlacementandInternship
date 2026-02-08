import Image from "next/image";
import Link from "next/link";

export default function EmployersPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">

        {/* BG IMAGE */}
        <Image
          src="/images/banner-2.jpg"
          alt="Hire talent from Braintech"
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl text-white">

            <span className="inline-block mb-4 text-sm uppercase tracking-wide text-gray-200">
              For Employers
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hire Industry-Ready <br />
              Talent with Confidence
            </h1>

            <p className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed">
              Braintech Info Solutions partners with companies to provide
              trained, internship-ready, and job-ready candidates aligned
              with real business requirements.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href="/employers/hire-from-us"
                className="bg-white text-[#03228f] px-8 py-4 rounded-lg font-semibold"
              >
                Hire From Us
              </Link>

              <Link
                href="/contact"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold"
              >
                Internship Hiring
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#03228f] mb-4">
              What We Do for Employers
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              We bridge the gap between trained talent and hiring needs by
              offering flexible recruitment and internship hiring solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Pre-Trained Talent Pool",
                desc: "Access candidates trained in IT, App Development, and Digital Marketing with hands-on project experience.",
              },
              {
                title: "Internship-to-Hire Model",
                desc: "Evaluate interns during real projects before offering full-time roles.",
              },
              {
                title: "Requirement-Based Hiring",
                desc: "Get candidates trained or shortlisted based on your specific skill requirements.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-2xl p-8"
              >
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= WHY BRAINTECH ================= */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#03228f] mb-20">
            Why Hire from Braintech
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              "Industry-Aligned Training",
              "Live Project Experience",
              "Reduced Hiring Time",
              "Lower Hiring Risk",
              "Flexible Hiring Models",
              "Placement-Ready Candidates",
              "Internship Screening",
              "Long-Term Talent Partnership",
            ].map((point) => (
              <div
                key={point}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center"
              >
                <p className="text-sm font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= HIRING MODELS ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

          {[
            {
              title: "Internship Hiring",
              desc: "Hire interns for short-term or long-term projects with evaluation support.",
              link: "/employers/internship-hiring",
            },
            {
              title: "Full-Time Recruitment",
              desc: "Direct placement support for junior and mid-level roles.",
              link: "/employers/hire-from-us",
            },
            {
              title: "Custom Talent Solutions",
              desc: "Requirement-based sourcing and training for specific roles.",
              link: "/employers/recruitment-services",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-gray-200 rounded-2xl p-10"
            >
              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {item.desc}
              </p>
              <Link
                href={item.link}
                className="text-[#03228f] font-semibold"
              >
                Learn More →
              </Link>
            </div>
          ))}

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-28 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Build Your Team Together
          </h2>
          <p className="text-gray-200 mb-10">
            Partner with Braintech Info Solutions to hire skilled,
            internship-ready, and job-ready talent for your organization.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#03228f] px-10 py-4 rounded-lg font-semibold"
          >
            Contact Our Hiring Team
          </Link>
        </div>
      </section>

    </main>
  );
}
