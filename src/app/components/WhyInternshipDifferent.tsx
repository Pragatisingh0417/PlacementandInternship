export default function WhyInternshipDifferent() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#03228f] mb-16">
          Why Our Internship Is Different
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">

          {[
            {
              title: "Real-World Projects",
              desc: "Work on live projects that reflect real industry requirements and workflows.",
              icon: "🛠️",
            },
            {
              title: "Expert Mentorship",
              desc: "Learn directly from experienced professionals who guide you throughout the internship.",
              icon: "👨‍🏫",
            },
            {
              title: "Structured Learning",
              desc: "A clear roadmap from onboarding to project completion and evaluation.",
              icon: "🧩",
            },
            {
              title: "Career Support",
              desc: "Resume building, interview preparation, and placement guidance included.",
              icon: "🚀",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
