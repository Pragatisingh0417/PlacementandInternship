import Image from "next/image";
import Link from "next/link";
import WhyInternshipDifferent from "../components/WhyInternshipDifferent";
import InternshipDomains from "../components/InternshipDomains";
import InternshipStructure from "../components/InternshipStructure";
import InternshipCTA from "../components/InternshipCTA";
import InternshipFAQs from "../components/InternshipFAQs";

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
        </main>

  );
}
