"use client";

import { motion } from "framer-motion";

export default function UpcomingBatches() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#03228f]/10 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#03228f]">
            Upcoming Batches
          </h2>

          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-lg">
            Plan your learning journey with our upcoming batch schedules.
            Limited seats are available for each program.
          </p>

          {/* BATCH LIST */}
          <div className="mt-10 space-y-6">
            {[
              { course: "Full Stack MERN", date: "15 Feb 2026" },
              { course: "Java Full Stack", date: "20 Feb 2026" },
              { course: "Digital Marketing", date: "25 Feb 2026" },
              { course: "Flutter App Development", date: "01 Mar 2026" },
            ].map((item) => (
              <div
                key={item.course}
                className="flex items-center justify-between border-b border-gray-200 pb-4"
              >
                <span className="font-medium text-gray-900">
                  {item.course}
                </span>
                <span className="text-sm text-gray-600">
                  {item.date}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-gray-500">
            * Early registration is recommended to secure your seat.
          </p>
        </motion.div>

        {/* ENQUIRY FORM */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white border border-gray-200 rounded-2xl p-10"
        >
          <h3 className="text-2xl font-semibold text-[#03228f] mb-6">
            Enquire About a Batch
          </h3>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#03228f]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#03228f]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#03228f]"
            />
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#03228f]"
            >
              <option>Select Course</option>
              <option>Full Stack MERN</option>
              <option>Java Full Stack</option>
              <option>Digital Marketing</option>
              <option>Flutter App Development</option>
            </select>

            <button
              type="submit"
              className="w-full bg-[#03228f] text-white py-3 rounded-lg font-semibold hover:bg-[#021b70] transition"
            >
              Submit Enquiry
            </button>
          </div>
        </motion.form>

      </div>
    </section>
  );
}
