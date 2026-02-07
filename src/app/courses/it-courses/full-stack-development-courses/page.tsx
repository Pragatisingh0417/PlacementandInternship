import Image from "next/image";
import Link from "next/link";

const course = {
  title: "Full Stack Development",
  category: "IT Course",
  description:
    "Become a job-ready full stack developer by mastering frontend, backend, databases, and real-world project development.",
  image: "/images/courses/course-hero.jpg",

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

export default function CourseDetailPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative py-28 bg-gradient-to-b from-[#03228f]/10 to-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-sm font-semibold text-[#03228f] uppercase">
              {course.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              {course.title}
            </h1>

            <p className="text-gray-600 text-base md:text-lg mb-8">
              {course.description}
            </p>

            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-[#03228f] text-white px-8 py-3 rounded-lg font-semibold"
              >
                Apply Now
              </Link>

              <Link
                href="/courses"
                className="border border-[#03228f] text-[#03228f] px-8 py-3 rounded-lg font-semibold"
              >
                View All Courses
              </Link>
            </div>
          </div>

          <div className="relative h-[320px] rounded-xl overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#03228f] mb-6">
            Course Overview
          </h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            This course is designed to provide in-depth practical training
            with hands-on projects, expert mentorship, and industry-aligned
            curriculum to help you build a strong professional foundation.
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
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <p className="text-sm text-gray-700">{item}</p>
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
                className="px-4 py-2 border border-gray-200 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ================= DURATION & MODE ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 grid sm:grid-cols-2 gap-10 text-center">

          <div className="bg-white border border-gray-200 rounded-xl p-10">
            <h3 className="text-lg font-semibold mb-2 text-[#03228f]">
              Duration
            </h3>
            <p className="text-gray-600">{course.duration}</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-10">
            <h3 className="text-lg font-semibold mb-2 text-[#03228f]">
              Mode
            </h3>
            <p className="text-gray-600">{course.mode}</p>
          </div>

        </div>
      </section>

      {/* ================= CAREER OUTCOMES ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#03228f] mb-16">
            Career Opportunities
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {course.careers.map((role) => (
              <div
                key={role}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <p className="text-sm font-medium">{role}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-28 bg-[#03228f] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Learning Journey Today
          </h2>
          <p className="text-gray-200 mb-10">
            Enroll now and gain practical skills, real-world experience, and
            career support from Braintech Info Solutions.
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
