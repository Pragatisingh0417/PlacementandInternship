import Image from "next/image";
import Link from "next/link";

export default function HeroCTA() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/home-cta.png"
        alt="Online learning"
        fill
        priority
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <span className="block text-sm md:text-base text-gray-200 mb-4 tracking-wide">
          The Best Choice
        </span>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">
          The Best Courses. <br />
          Learn anytime &amp; anywhere.
        </h1>

        <Link
          href="/contact"
          className="inline-flex items-center gap-3 bg-[#03228f] hover:bg-[#03228f] text-white px-8 py-4 rounded-md font-semibold transition"
        >
          <span className="text-lg">✉</span>
          Send Message
        </Link>
      </div>
    </section>
  );
}
