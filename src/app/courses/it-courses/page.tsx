import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Courses | Braintech Info Solutions",
  description:
    "Job-oriented IT courses at Braintech Info Solutions including Full Stack Development, Python, Data Science, and Software Testing with placement support.",
  keywords: [
    "IT courses",
    "full stack development course",
    "python training",
    "software testing course",
    "Braintech IT training",
  ],
};

export default function ITCoursesPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-[#03228f] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            IT Courses
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-gray-200">
            Industry-relevant IT training programs designed to make you
            job-ready with hands-on skills and real-world projects.
          </p>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

            {[
              "Full Stack Development",
              "Python Development",
              "Data Science & Analytics",
              "Software Testing",
              "Java Development",
              "Web Development",
            ].map((course) => (
              <div
                key={course}
                className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-[#03228f] mb-2">
                  {course}
                </h3>
                <p className="text-sm text-gray-600">
                  Practical training with projects, interview preparation, and
                  placement assistance.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}
