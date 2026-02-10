import Image from "next/image";
import Link from "next/link";
import WhyInternshipDifferent from "../components/WhyInternshipDifferent";
import InternshipDomains from "../components/InternshipDomains";
import InternshipStructure from "../components/InternshipStructure";
import InternshipCTA from "../components/InternshipCTA";
import InternshipFAQs from "../components/InternshipFAQs";
import InternshipEnquiryForm from "../components/InternshipEnquiryForm";

export default function InternshipPage() {
  return (
    <main>


    <section className="relative w-full min-h-[450px] md:min-h-[550px] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/internship-banner.png"
        alt="Internship training at Braintech Info Solutions"
        fill
        priority
        className="object-cover"
      />

      {/* Brand Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">

        <span className="inline-block mb-4 text-sm md:text-base text-gray-200 tracking-wide">
          Internship Program
        </span>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Industry-Ready Internships <br className="hidden sm:block" />
          With Real-World Experience
        </h1>

        <p className="max-w-3xl mx-auto text-gray-200 text-base md:text-lg leading-relaxed mb-10">
          Gain hands-on experience through live projects, expert mentorship,
          and structured internship programs designed to make you job-ready.
          Available in Online, Offline, and Hybrid modes with certification.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-[#03228f] px-8 py-3 rounded-lg font-semibold"
          >
            Apply for Internship
          </Link>

          <Link
            href="/courses"
            className="border border-white px-8 py-3 rounded-lg font-semibold"
          >
            View Courses
          </Link>
        </div>

      </div>
    </section>
<WhyInternshipDifferent />
<InternshipDomains />
<InternshipStructure />
<InternshipFAQs />
<InternshipCTA />


<section className="py-28 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

    {/* LEFT CONTENT */}
    <div className="bg-white p-10 rounded-2xl border shadow-sm">

      <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-wide text-[#03228f]">
        Internship Enquiry
      </span>

      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Start Your Internship Journey
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Apply for industry-focused internships designed to give you
        real-world experience, mentor guidance, and certification.
      </p>

      {/* BENEFITS */}
      <ul className="space-y-4 text-gray-700 text-sm">
        <li className="flex gap-3">
          <span className="text-[#03228f] font-bold">✓</span>
          Online / Offline / Hybrid internship options
        </li>
        <li className="flex gap-3">
          <span className="text-[#03228f] font-bold">✓</span>
          Live projects & practical task-based learning
        </li>
        <li className="flex gap-3">
          <span className="text-[#03228f] font-bold">✓</span>
          Internship certificate & career guidance
        </li>
        <li className="flex gap-3">
          <span className="text-[#03228f] font-bold">✓</span>
          Placement & hiring support for top performers
        </li>
      </ul>

      {/* NOTE */}
      <div className="mt-8 rounded-xl bg-[#03228f]/5 p-5 text-sm text-gray-700">
        Our team usually responds within <b>24 hours</b> on working days.
      </div>
    </div>

    {/* RIGHT FORM */}
    <InternshipEnquiryForm />

  </div>
</section>
        </main>

  );
}
