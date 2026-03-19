"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2"
        >
          <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-wide text-[#03228f]">
            About Braintech
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Training, Placement 
            & Talent Solutions
          </h2>

          <p className="mt-4 md:mt-6 text-gray-600 leading-relaxed text-sm sm:text-base">
            Braintech Info Solutions is a career-focused training and placement
            institute delivering industry-ready skills in IT, Digital Marketing,
            and App Development through hands-on learning and live projects.
          </p>

          <p className="mt-3 md:mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
            In addition to training students, we partner with companies as a
            talent solutions provider — supplying internship-ready and
            job-ready candidates aligned with real industry requirements.
          </p>

          {/* HIGHLIGHTS */}
          <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm text-gray-700">
            <div>• Industry Expert Trainers</div>
            <div>• Live Projects & Internships</div>
            <div>• Placement & Interview Support</div>
            <div>• Employer-Aligned Curriculum</div>
          </div>

          {/* CTA */}
          <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/about"
              className="bg-[#03228f] text-white px-6 sm:px-7 py-3 rounded-lg font-semibold hover:bg-[#021b70] transition text-center"
            >
              Know More
            </Link>

            <Link
              href="/employers"
              className="border border-[#03228f] text-[#03228f] px-6 sm:px-7 py-3 rounded-lg font-semibold hover:bg-[#03228f] hover:text-white transition text-center"
            >
              For Employers
            </Link>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative h-[260px] sm:h-[320px] md:h-[420px] rounded-2xl overflow-hidden order-2 lg:order-1"
        >
          <Image
            src="/images/about-image.jpg"
            alt="Braintech training and talent development"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#03228f]/20 to-transparent" />
        </motion.div>

      </div>
    </section>
  );
}