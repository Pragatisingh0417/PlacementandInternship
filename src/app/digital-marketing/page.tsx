import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Courses | Braintech Info Solutions",
  description:
    "Learn Digital Marketing with practical training in SEO, Google Ads, Social Media Marketing, and Content Strategy at Braintech Info Solutions.",
  keywords: [
    "digital marketing course",
    "SEO training",
    "social media marketing",
    "Google Ads course",
    "Braintech digital marketing",
  ],
};

export default function DigitalMarketingPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-[#03228f] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Digital Marketing Courses
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-gray-200">
            Master modern digital marketing skills with hands-on tools,
            live campaigns, and real industry exposure.
          </p>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

            {[
              "Search Engine Optimization (SEO)",
              "Social Media Marketing (SMM)",
              "Google Ads & PPC",
              "Content Marketing",
              "Email Marketing",
              "Performance Marketing",
            ].map((course) => (
              <div
                key={course}
                className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-[#03228f] mb-2">
                  {course}
                </h3>
                <p className="text-sm text-gray-600">
                  Learn strategy, tools, and execution with practical
                  assignments and live projects.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}
