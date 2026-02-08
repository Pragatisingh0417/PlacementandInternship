"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative h-[360px] md:h-[420px] rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/about-image.jpg"
            alt="Braintech training and talent development"
            fill
            className="object-cover"
          />
          {/* subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#03228f]/20 to-transparent" />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-wide text-[#03228f]">
            About Braintech
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Training, Placement 
            & Talent Solutions
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed text-base">
            Braintech Info Solutions is a career-focused training and placement
            institute delivering industry-ready skills in IT, Digital Marketing,
            and App Development through hands-on learning and live projects.
          </p>

          {/* DUAL POSITIONING PARAGRAPH */}
          <p className="mt-4 text-gray-600 leading-relaxed text-base">
            In addition to training students, we partner with companies as a
            talent solutions provider — supplying internship-ready and
            job-ready candidates aligned with real industry requirements.
          </p>

          {/* HIGHLIGHTS */}
          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>• Industry Expert Trainers</div>
            <div>• Live Projects & Internships</div>
            <div>• Placement & Interview Support</div>
            <div>• Employer-Aligned Curriculum</div>
          </div>

          {/* CTA ROW */}
          <div className="mt-10 flex flex-row gap-4 flex-wrap">
            <Link
              href="/about"
              className="bg-[#03228f] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#021b70] transition"
            >
              Know More
            </Link>

            {/* EMPLOYER CTA */}
            <Link
              href="/employers"
              className="border border-[#03228f] text-[#03228f] px-7 py-3 rounded-lg font-semibold hover:bg-[#03228f] hover:text-white transition"
            >
              For Employers
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
