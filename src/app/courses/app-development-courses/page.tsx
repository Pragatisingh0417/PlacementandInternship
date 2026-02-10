import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Development Courses | Braintech Info Solutions",
  description:
    "Learn Android, iOS, and cross-platform app development with practical training and placement support at Braintech Info Solutions.",
  keywords: [
    "app development course",
    "android development training",
    "ios app development",
    "flutter course",
    "react native training",
  ],
};

export default function AppDevelopmentPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-[#03228f] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            App Development Courses
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-gray-200">
            Build real mobile applications using modern tools and frameworks
            with expert guidance and hands-on projects.
          </p>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

            {[
              "Android App Development",
              "iOS App Development",
              "Flutter Development",
              "React Native",
              "Mobile UI/UX Design",
              "App Deployment & Testing",
            ].map((course) => (
              <div
                key={course}
                className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-[#03228f] mb-2">
                  {course}
                </h3>
                <p className="text-sm text-gray-600">
                  Hands-on app building, deployment guidance, and
                  placement-oriented training.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}
