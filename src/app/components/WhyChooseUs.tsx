"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🎓",
    title: "Industry Expert Trainers",
    desc: "Learn from professionals with real-world industry experience.",
  },
  {
    icon: "💼",
    title: "Placement Assistance",
    desc: "Resume building, mock interviews & job referrals.",
  },
  {
    icon: "🧪",
    title: "Live Projects",
    desc: "Hands-on projects to gain real development experience.",
  },
  {
    icon: "🏢",
    title: "Corporate-Level Training",
    desc: "Curriculum designed as per current industry standards.",
  },
  {
    icon: "⏱️",
    title: "Flexible Batches",
    desc: "Weekday & weekend batches for students & working professionals.",
  },
  {
    icon: "📜",
    title: "Certification",
    desc: "Industry-recognized certification after course completion.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-[#03228f]">
            Why Choose Us
          </h2>
          <p className="mt-3 text-gray-600">
            We focus on skills, confidence, and career growth
          </p>
        </motion.div>

        {/* FEATURES GRID */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-xl bg-[#f8faff] border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl">{item.icon}</div>

              <h3 className="mt-4 text-lg font-semibold text-[#03228f]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
