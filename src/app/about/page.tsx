import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrustedBySection from "../components/TrustedBySection";


/* ================= SEO METADATA ================= */
export const metadata: Metadata = {
  title: "About Us | Braintech Info Solutions",
  description:
    "Learn about Braintech Info Solutions – a leading training and placement institute focused on industry-ready skills, practical learning, and career success.",
  keywords: [
    "Braintech Info Solutions",
    "training and placement institute",
    "IT training",
    "career development",
    "job-oriented courses",
  ],
  openGraph: {
    title: "About Braintech Info Solutions",
    description:
      "Empowering students with practical skills, expert mentorship, and strong placement support.",
    url: "https://braintechinfosolutions.com/about",
    siteName: "Braintech Info Solutions",
    type: "website",
  },
};

/* ================= PAGE ================= */
export default function AboutPage() {
  return (
    <main className="w-full bg-white text-gray-900 overflow-x-hidden">

    {/* ================= HERO ================= */}
<section className="relative w-full min-h-[420px] md:min-h-[560px] flex items-center overflow-hidden">

  {/* Background Image */}
  <Image
    src="/images/about-banner.jpg"
    alt="About Braintech Info Solutions"
    fill
    priority
    className="object-cover"
  />

  {/* GRADIENT OVERLAY (Elegant) */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

  {/* CONTENT */}
  <div className="relative z-10 w-full">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-3xl text-center mx-auto text-white">

        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          About Braintech Info Solutions
        </h1>

        <p className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed">
          Empowering students and professionals with industry-ready skills,
          practical training, and dedicated placement support.
        </p>

        {/* CTA — SAME ROW EVEN ON MOBILE */}
        <div className="mt-10 flex flex-row gap-4 justify-center">
          <Link
            href="/courses"
            className="bg-white text-[#03228f] px-6 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-100 transition"
          >
            View Courses
          </Link>

          <Link
            href="/contact"
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-white hover:text-[#03228f] transition"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  </div>

</section>


      {/* ================= WHO WE ARE ================= */}
    {/* ================= WHO WE ARE ================= */}
<section className="relative py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* TEXT */}
    <div>
      <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-wide text-[#03228f]">
        Who We Are
      </span>

      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
        Building Skilled Talent. <br className="hidden md:block" />
        Powering Careers & Companies.
      </h2>

      <div className="space-y-5 text-gray-700 leading-relaxed text-base">
        <p>
          <strong className="text-gray-900">Braintech Info Solutions</strong> is a
          career-focused training, internship, and recruitment partner that
          bridges the gap between education and real-world industry needs.
        </p>

        <p>
          We equip students and professionals with
          <strong> industry-ready skills</strong> through hands-on training,
          live projects, and structured internships—ensuring they are confident,
          job-ready, and aligned with current market demands.
        </p>

        <p>
          At the same time, we help companies
          <strong> hire trained, deployment-ready talent</strong> through our
          internship-to-hire and direct recruitment models.
        </p>

        <p className="font-medium text-gray-900">
          We don’t just train individuals — we enable careers and support
          business growth.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/courses"
          className="bg-[#03228f] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#021b70] transition"
        >
          Explore Courses
        </Link>

        <Link
          href="/employers"
          className="border border-[#03228f] text-[#03228f] px-7 py-3 rounded-lg font-semibold hover:bg-[#03228f] hover:text-white transition"
        >
          Hire From Us
        </Link>
      </div>
    </div>

    {/* IMAGE */}
    <div className="relative h-[360px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
      <Image
        src="/images/about-us.png"
        alt="Braintech training and recruitment"
        fill
        className="object-cover"
      />

      {/* subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#03228f]/25 to-transparent" />
    </div>

  </div>
</section>



      {/* ================= MISSION & VISION ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* MISSION */}
          <div className="bg-white p-10 rounded-2xl shadow-sm relative">
            <span className="absolute -top-5 left-8 bg-[#03228f] text-white px-4 py-1 text-sm rounded-full">
              Mission
            </span>
            <h3 className="text-2xl font-semibold mb-4 text-[#03228f] mt-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver high-quality, practical, and affordable training
              programs that equip learners with in-demand technical skills and
              prepare them to confidently face real-world industry challenges.
            </p>
          </div>

          {/* VISION */}
          <div className="bg-white p-10 rounded-2xl shadow-sm relative">
            <span className="absolute -top-5 left-8 bg-[#03228f] text-white px-4 py-1 text-sm rounded-full">
              Vision
            </span>
            <h3 className="text-2xl font-semibold mb-4 text-[#03228f] mt-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To become a trusted leader in professional training and placement
              by continuously evolving with technology, industry needs, and
              learner expectations.
            </p>
          </div>

        </div>
      </section>
<TrustedBySection />

      {/* ================= WHY CHOOSE US ================= */}
     {/* ================= WHY CHOOSE US ================= */}
<section className="relative py-28 bg-gradient-to-b from-[#03228f]/5 to-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="max-w-3xl mx-auto text-center mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-[#03228f]">
        Why Choose Braintech
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        We focus on real skills, real projects, and real career outcomes —
        not just theory.
      </p>
    </div>

    {/* GRID */}
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {[
        "Industry-Expert Trainers",
        "Hands-on Practical Learning",
        "Job-Oriented Curriculum",
        "Real-World Live Projects",
        "Career Guidance & Mentorship",
        "Placement Assistance",
      ].map((item) => (
        <div
          key={item}
          className="group relative bg-white/80 backdrop-blur rounded-2xl p-8 border border-gray-200 hover:border-[#03228f]/40 transition"
        >
          {/* ICON */}
          <div className="w-11 h-11 mb-6 flex items-center justify-center rounded-full bg-[#03228f]/10 text-[#03228f]">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h4 className="font-semibold text-lg text-gray-900 mb-3">
            {item}
          </h4>

          <p className="text-gray-600 text-sm leading-relaxed">
            Designed to help you build confidence, practical expertise,
            and long-term career readiness.
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ================= TRAINING & PLACEMENT ================= */}


<section className="relative w-full py-28 flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <Image
    src="/images/cta-bg.jpg"
    alt="Training and placement at Braintech"
    fill
    className="object-cover"
    priority
  />

  {/* Overlay (Brand Color) */}
  <div className="absolute inset-0 bg-black/85" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Training &amp; Placement Focus
    </h2>

    {/* Description */}
    <p className="max-w-3xl mx-auto text-gray-200 leading-relaxed text-base md:text-lg mb-14">
      At Braintech Info Solutions, training goes beyond theory. Our structured
      approach includes skill development, live projects, interview
      preparation, and placement assistance—helping students secure
      meaningful career opportunities.
    </p>

    {/* STATS */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
      {[
        { value: "10,000+", label: "Students Trained", icon: "🎓" },
        { value: "100+", label: "Hiring Partners", icon: "🏢" },
        { value: "50+", label: "Expert Trainers", icon: "👨‍🏫" },
        { value: "85%", label: "Placement Success", icon: "🚀" },
      ].map((stat) => (
        <div key={stat.label} className="flex flex-col items-center">
          <div className="text-4xl mb-2">{stat.icon}</div>
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-sm text-gray-200">{stat.label}</div>
        </div>
      ))}
    </div>

    {/* CTA */}
     <div className="mt-10 flex flex-row gap-4 justify-center">
          <Link
            href="/courses"
            className="bg-white text-[#03228f] px-6 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-100 transition"
          >
            View Courses
          </Link>

          <Link
            href="/contact"
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-white hover:text-[#03228f] transition"
          >
            Contact Us
          </Link>
        </div>

  </div>

</section>



      {/* ================= CTA ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl bg-[#03228f] p-14 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Start Your Career Journey with Braintech
            </h2>
            <p className="max-w-2xl mx-auto text-gray-200 mb-8">
              Join our training programs and take the next step toward a
              successful professional career.
            </p>
            <div className="mt-10 flex flex-row gap-4 justify-center">
          <Link
            href="/courses"
            className="bg-white text-[#03228f] px-6 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-100 transition"
          >
            View Courses
          </Link>

          <Link
            href="/contact"
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-white hover:text-[#03228f] transition"
          >
            Contact Us
          </Link>
        </div>
          </div>
        </div>
      </section>

      {/* ================= JSON-LD SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Braintech Info Solutions",
            url: "https://braintechinfosolutions.com",
            description:
              "Training and placement institute providing industry-ready skills and career support.",
          }),
        }}
      />
    </main>
  );
}
