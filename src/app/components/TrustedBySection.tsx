import Image from "next/image";
import Link from "next/link";

export default function TrustedBySection() {
  return (
    <section className="relative w-full min-h-[520px] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/organisation-image.jpg"
        alt="Team collaboration"
        fill
        priority
        className="object-cover"
      />

      {/* Brand Color Overlay */}
      <div className="absolute inset-0 bg-[#03228f]/85" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Trusted By 10,000+ Organization
        </h2>

        <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-10">
          Curabitur pretium tincidunt lacus. Nulla gravida a odio.
          Nullam varius, turpis et commodo pharetra, est eros
          bibendum elit, nec luctus magna felis sollicitudin mauris.
          Integer in odio mauris eu nibh euismod gravida.
        </p>

        <Link
          href="/courses"
          className="inline-flex items-center gap-2 bg-white  text-black px-8 py-4 rounded-md font-semibold transition"
        >
          View Courses
        </Link>
      </div>

      {/* Decorative Pattern (Right Side) */}
      <div className="hidden md:block absolute right-10 bottom-10">
        <div className="w-28 h-28 rounded-full border-4 border-dashed border-white opacity-80" />
      </div>

    </section>
  );
}
