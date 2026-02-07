"use client";

import { motion } from "framer-motion";

const courses = [
  {
    title: "Full Stack MERN Development",
    desc: "MongoDB, Express, React, Node with live projects.",
    link: "/courses/it",
  },
  {
    title: "Java Full Stack Development",
    desc: "Java, Spring Boot, Hibernate, REST APIs.",
    link: "/courses/it",
  },
  {
    title: "Digital Marketing Master Program",
    desc: "SEO, Google Ads, Social Media, Analytics.",
    link: "/courses/digital-marketing",
  },
  {
    title: "Flutter App Development",
    desc: "Build Android & iOS apps using Flutter.",
    link: "/courses/app-development",
  },
];

export default function PopularCourses() {
  return (
    <section className="py-20 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center text-[#03228f]">
          Our Popular Online Courses
        </h2>
        <p className="text-center mt-3 text-gray-600">
          Job-oriented courses designed for real-world careers
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 border-t-4 border-[#03228f]"
            >
              <h3 className="text-lg font-semibold text-[#03228f]">
                {course.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600">
                {course.desc}
              </p>

              <a
                href={course.link}
                className="inline-block mt-5 text-[#03228f] font-medium hover:underline"
              >
                View Course →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
