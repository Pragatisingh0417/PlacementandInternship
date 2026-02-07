import Link from "next/link";

const domains = [
  {
    title: "Full Stack Development",
    desc: "Frontend, backend, databases, and scalable web applications.",
  },
  {
    title: "Python Development",
    desc: "Python programming, automation, and backend systems.",
  },
  {
    title: "Data Science",
    desc: "Data analysis, visualization, and machine learning basics.",
  },
  {
    title: "Digital Marketing",
    desc: "SEO, social media marketing, and performance campaigns.",
  },
  {
    title: "App Development",
    desc: "Android, iOS, and cross-platform mobile applications.",
  },
  {
    title: "UI / UX Design",
    desc: "Design thinking, wireframing, and user-centric interfaces.",
  },
];

export default function InternshipDomains() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#03228f]/10 via-white to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#03228f] mb-4">
            Internship Domains
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Carefully designed internship domains aligned with current industry
            requirements and long-term career opportunities.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="group bg-white border border-gray-200 rounded-xl p-10 transition hover:border-[#03228f]"
            >
              {/* Accent bar */}
              <div className="w-12 h-[3px] bg-[#03228f] mb-6" />

              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                {domain.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-10">
                {domain.desc}
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#03228f]"
              >
                Apply Now
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
