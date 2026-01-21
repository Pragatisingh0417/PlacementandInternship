"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <motion.img
          src="/images/about-image.jpg"
          alt="About Training Institute"
          className="rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-[#03228f]">
            About Our Training & Placement Cell
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We are a career-focused training institute delivering industry-ready
            skills in IT, Digital Marketing, and App Development. Our mission is
            to bridge the gap between education and employment through
            hands-on learning and placement assistance.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✔ Industry Expert Trainers</li>
            <li>✔ Live Projects & Internships</li>
            <li>✔ Placement & Interview Support</li>
            <li>✔ Corporate-Level Curriculum</li>
          </ul>

          <a
            href="/about-us"
            className="inline-block mt-8 bg-[#0e73e4] text-white px-6 py-3 rounded-md hover:bg-[#03228f] transition"
          >
            Know More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
