import Link from "next/link";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/hero-1.jpg"
        alt="Online learning at Braintech"
        fill
        priority
className="object-cover object-[60%_center] md:object-right"
    />

      {/* BLACK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/60 to-black/90" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-3xl ml-auto text-center sm:text-right">

          {/* DOTS */}
          <div className="mb-4 sm:mb-6 flex justify-center sm:justify-end">
            <div className="grid grid-cols-5 gap-1 opacity-40">
              {Array.from({ length: 15 }).map((_, i) => (
                <span key={i} className="w-1 h-1 bg-white rounded-full" />
              ))}
            </div>
          </div>

          {/* HEADING */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Build Skills That <br />
            Companies Actually <br />
            Hire For
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
            Industry-ready IT, App Development, and Digital Marketing training
            with live projects, internships, and placement support —
            designed for real careers.
          </p>

          {/* BUTTONS */}
         <div className="mt-6 sm:mt-8 md:mt-10 flex flex-row flex-wrap sm:flex-nowrap gap-3 sm:gap-4 justify-center sm:justify-end">
  <Link
    href="/courses"
    className="bg-[#03228f] text-white px-5 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition text-sm sm:text-base text-center whitespace-nowrap"
  >
    View Courses
  </Link>

  <Link
    href="/contact"
    className="bg-white text-gray-900 px-5 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-sm sm:text-base text-center whitespace-nowrap"
  >
    Free Career Counselling
  </Link>
</div>

        </div>
      </div>
    </section>
  );
}