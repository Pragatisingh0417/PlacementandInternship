import Link from "next/link";

export default function EmployerCTA() {
  return (
    <section className="relative py-28 bg-gradient-to-r from-[#03228f] to-[#021b70] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center text-white">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block mb-4 text-sm uppercase tracking-wide text-blue-100">
              For Employers
            </span>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Hire Industry-Ready Talent <br className="hidden md:block" />
              Trained for Real Work
            </h2>

            <p className="mt-6 text-blue-100 text-base md:text-lg leading-relaxed max-w-xl">
              Partner with Braintech Info Solutions to access pre-trained,
              internship-ready, and job-ready candidates aligned with your
              business requirements.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-row gap-4 flex-wrap">
              <Link
                href="/employers/hire-from-us"
                className="bg-white text-[#03228f] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Hire From Us
              </Link>

              <Link
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#03228f] transition"
              >
                Talk to Our Hiring Team
              </Link>
            </div>
          </div>

          {/* RIGHT INFO CARDS */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "Pre-Trained Candidates",
                desc: "Candidates trained with live projects and practical exposure.",
              },
              {
                title: "Internship-to-Hire",
                desc: "Evaluate interns before offering full-time roles.",
              },
              {
                title: "Reduced Hiring Time",
                desc: "Access talent faster without long recruitment cycles.",
              },
              {
                title: "Flexible Hiring Models",
                desc: "Internship, full-time, or custom talent requirements.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur rounded-xl p-6"
              >
                <h4 className="font-semibold mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-blue-100 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
