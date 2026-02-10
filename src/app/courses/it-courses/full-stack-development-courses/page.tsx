import Image from "next/image";
import Link from "next/link";

const course = {
  title: "Full Stack Development",
  category: "IT Course",
  description:
    "Become a job-ready full stack developer by mastering frontend, backend, databases, and real-world project development.",
  image: "/images/full-stack-banner.jpg",

  duration: "4 – 6 Months",
  mode: "Online / Offline / Hybrid",

  learnings: [
    "HTML, CSS, JavaScript fundamentals",
    "Frontend development with React",
    "Backend development with Node.js",
    "Database design with MongoDB / MySQL",
    "REST APIs and authentication",
    "Live project development",
  ],

  tools: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Git & GitHub",
  ],

  careers: [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
  ],
};

export default function FullStackCourseDetailPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative py-28 bg-gradient-to-b from-[#03228f]/10 to-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* CONTENT */}
          <div>
            <span className="text-sm font-semibold uppercase text-[#03228f]">
              {course.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              {course.title}
            </h1>

            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-xl">
              {course.description}
            </p>

            {/* QUICK HIGHLIGHTS */}
            <div className="flex flex-wrap gap-6 mb-10 text-sm">
              <div className="bg-white border rounded-lg px-5 py-3">
                <span className="block text-gray-500">Duration</span>
                <span className="font-semibold">{course.duration}</span>
              </div>
              <div className="bg-white border rounded-lg px-5 py-3">
                <span className="block text-gray-500">Mode</span>
                <span className="font-semibold">{course.mode}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#03228f] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#021b70] transition"
              >
                Apply Now
              </Link>

              <Link
                href="/courses"
                className="border border-[#03228f] text-[#03228f] px-8 py-4 rounded-lg font-semibold hover:bg-[#03228f] hover:text-white transition"
              >
                View All Courses
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative h-[360px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= WHY THIS COURSE ================= */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#03228f] mb-6">
            Why Choose This Course?
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            This program is designed to make you industry-ready with
            hands-on training, live projects, expert mentorship, and
            placement-focused learning — not just theory.
          </p>
        </div>
      </section>

      {/* ================= WHAT YOU'LL LEARN ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-[#03228f] mb-16">
            What You’ll Learn
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {course.learnings.map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= TOOLS & TECHNOLOGIES ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#03228f] mb-12">
            Tools & Technologies
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {course.tools.map((tool) => (
              <span
                key={tool}
                className="px-5 py-2 bg-gray-100 rounded-full text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CAREER OUTCOMES ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#03228f] mb-16">
            Career Opportunities After This Course
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {course.careers.map((role) => (
              <div
                key={role}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <p className="text-sm font-semibold">{role}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-28 bg-[#03228f] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Career as a Full Stack Developer
          </h2>
          <p className="text-gray-200 mb-10">
            Join Braintech Info Solutions and gain practical skills,
            real-world experience, and placement support to launch
            your professional journey.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#03228f] px-10 py-4 rounded-lg font-semibold"
          >
            Apply Now
          </Link>
        </div>
      </section>

    </main>
  );
}
