import Link from "next/link";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/hero-1.jpg"
        alt="Online learning at Braintech"
        fill
        priority
        className="object-cover"
      />

      {/* BLACK GRADIENT OVERLAY (LEFT → RIGHT) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/60 to-black/90" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl ml-auto text-right">

          {/* Optional dotted decoration */}
          <div className="mb-6 flex justify-end">
            <div className="grid grid-cols-5 gap-1 opacity-40">
              {Array.from({ length: 15 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1 h-1 bg-white rounded-full"
                />
              ))}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Take Your Admission To <br />
            The Best Online Learning <br />
            Course
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-200 leading-relaxed">
            Learn industry-ready skills with expert mentors, live projects,
            and placement-focused training programs designed for real careers.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4 justify-end">
            <Link
              href="/courses"
              className="bg-[#03228f] hover:bg-[#03228f] text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              View Courses
            </Link>

            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Join For Free
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
