import Image from "next/image";
import Link from "next/link";

export default function OfferBanner() {
  return (
    <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/businesspeople-office-meeting.jpg"
        alt="Students joining Braintech courses"
        fill
        priority
        className="object-cover"
      />

      {/* LEFT GRADIENT OVERLAY */}
      <div className="absolute inset-0 flex">
        <div className="w-full md:w-[52%] bg-gradient-to-r from-[#03228f]/95 via-[#03228f]/90 to-[#03228f]/60 flex items-center">
          
          <div className="px-8 md:px-16 max-w-xl text-white">

            {/* HEADING */}
            <h2 className="text-[30px] md:text-[42px] font-bold leading-[1.2] mb-6">
              Up-to 15% Discount Offer For <br />
              Joining Today
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[15px] md:text-[16px] leading-[1.8] text-gray-200 mb-10 max-w-md">
              Enroll in our job-oriented training programs and gain
              industry-ready skills with expert mentorship and
              placement support.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-black bg-white  px-8 py-4 rounded-md text-[15px] font-semibold transition"
            >
              Register Now
            </Link>

          </div>
        </div>

        {/* RIGHT SIDE (IMAGE ONLY) */}
        <div className="hidden md:block w-[48%]" />
      </div>
    </section>
  );
}
