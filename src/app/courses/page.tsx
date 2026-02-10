"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "IT", "App", "Digital Marketing"];

const courses = [
  {
    title: "Full Stack Development",
    category: "IT",
    image: "/images/full-stack-image.jpg",
    link: "/courses/it-courses/full-stack-development-courses",
  },
  {
    title: "React.js Development",
    category: "IT",
    image: "/images/react-image-2.jpg",
    link: "/courses/it-courses/full-stack-development-courses",
  },
  {
    title: "Next.js Development",
    category: "IT",
    image: "/images/next-image.jpg",
    link: "/courses/it-courses/full-stack-development-courses",
  },
  {
    title: "PHP & MySQL",
    category: "IT",
    image: "/images/php-image.jpg",
    link: "/courses/it-courses/full-stack-development-courses",
  },
  {
    title: "Android App Development",
    category: "App",
    image: "/images/andriod-app-image.jpg",
    link: "/courses/app-development-courses",
  },
  {
    title: "Flutter App Development",
    category: "App",
    image: "/images/flutter-app-image.jpg",
    link: "/courses/app-development-courses",
  },
  {
    title: "Digital Marketing",
    category: "Digital Marketing",
    image: "/images/digital-marketing-image.jpg",
    link: "/courses/digital-marketing-courses",
  },
  {
    title: "SEO & Performance Marketing",
    category: "Digital Marketing",
    image: "/images/SEO & Performance Marketing-image.jpg",
    link: "/courses/digital-marketing-courses",
  },
];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter(
          (course) => course.category === activeCategory
        );

  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="py-24 bg-gradient-to-b from-[#03228f]/10 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Our Courses
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg">
            Explore industry-oriented courses designed to build practical
            skills, real-world experience, and career readiness.
          </p>
        </div>
      </section>

      {/* ================= FILTERS ================= */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                  activeCategory === cat
                    ? "bg-[#03228f] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COURSES GRID ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filteredCourses.map((course) => (
              <Link
                key={course.title}
                href={course.link}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition hover:border-[#03228f]"
              >
                {/* Image */}
                <div className="relative h-70 w-full overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#03228f] uppercase">
                    {course.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 text-gray-900">
                    {course.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state */}
          {filteredCourses.length === 0 && (
            <p className="text-center text-gray-500 mt-16">
              No courses found for this category.
            </p>
          )}

        </div>
      </section>

    </main>
  );
}
