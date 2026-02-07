export default function InternshipStructure() {
  const steps = [
    {
      step: "01",
      title: "Onboarding",
      desc: "Orientation, tool setup, and a clear overview of the internship roadmap.",
    },
    {
      step: "02",
      title: "Skill Training",
      desc: "Domain-specific training with practical sessions and mentor guidance.",
    },
    {
      step: "03",
      title: "Live Projects",
      desc: "Hands-on experience through real-world projects and use cases.",
    },
    {
      step: "04",
      title: "Evaluation",
      desc: "Project review, performance feedback, and improvement suggestions.",
    },
    {
      step: "05",
      title: "Certification",
      desc: "Internship certificate along with career and placement guidance.",
    },
  ];

  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">

      {/* Subtle background accent */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#03228f]/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#03228f] mb-4">
            How the Internship Works
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            A structured, step-by-step internship journey designed to give you
            real experience, confidence, and career readiness.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-5 gap-12">

          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center">

              {/* Connector line (desktop only) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-1/2 w-full h-px bg-gray-300 translate-x-1/2" />
              )}

              {/* Step number */}
              <div className="relative z-10 w-14 h-14 mx-auto mb-6 rounded-full border-2 border-[#03228f] bg-white text-[#03228f] flex items-center justify-center font-semibold">
                {item.step}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
