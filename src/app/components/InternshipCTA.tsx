import Image from "next/image";
import Link from "next/link";

export default function InternshipCTA() {
  return (
    <section className="relative w-full py-32 overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/cta-bg2.jpg"
        alt="Start your internship at Braintech"
        fill
        priority
        className="object-cover"
      />

      {/* Brand Overlay */}
      <div className="absolute inset-0 bg-black/85" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Internship Journey?
        </h2>

        <p className="max-w-2xl mx-auto text-gray-200 text-base md:text-lg mb-10">
          Join Braintech Info Solutions and gain hands-on experience through
          structured internships designed to make you industry-ready.
        </p>

        {/* TRUST POINTS */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
          <span className="flex items-center gap-2">
            🎓 Internship Certificate Provided
          </span>
          <span className="flex items-center gap-2">
            🌐 Online / Offline / Hybrid
          </span>
          <span className="flex items-center gap-2">
            🛠️ Real-World Live Projects
          </span>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-[#03228f] px-10 py-4 rounded-lg font-semibold"
          >
            Apply Now
          </Link>

          <Link
            href="/courses"
            className="border border-white px-10 py-4 rounded-lg font-semibold"
          >
            View Courses
          </Link>
        </div>

      </div>
    </section>
  );
}
