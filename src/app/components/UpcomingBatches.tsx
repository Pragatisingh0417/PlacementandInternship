"use client";

import { motion } from "framer-motion";

export default function UpcomingBatches() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#03228f]">
            Upcoming Batches
          </h2>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li>📅 Full Stack MERN – <b>15 Feb 2026</b></li>
            <li>📅 Java Full Stack – <b>20 Feb 2026</b></li>
            <li>📅 Digital Marketing – <b>25 Feb 2026</b></li>
            <li>📅 Flutter App Dev – <b>01 Mar 2026</b></li>
          </ul>

          <p className="mt-6 text-gray-600">
            Limited seats available. Register now to reserve your spot.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#f8faff] p-8 rounded-xl shadow"
        >
          <h3 className="text-xl font-semibold text-[#03228f]">
            Enquiry Form
          </h3>

          <div className="mt-5 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-3 rounded"
            />
            <select className="w-full border p-3 rounded">
              <option>Select Course</option>
              <option>Full Stack MERN</option>
              <option>Java Full Stack</option>
              <option>Digital Marketing</option>
              <option>App Development</option>
            </select>

            <button
              type="submit"
              className="w-full bg-[#0e73e4] text-white py-3 rounded hover:bg-[#03228f] transition"
            >
              Submit Enquiry
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
