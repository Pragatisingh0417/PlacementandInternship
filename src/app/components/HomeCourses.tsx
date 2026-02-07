import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    title: "Full Stack Development",
    category: "IT Course",
    desc: "Frontend, backend, databases, and real-world project experience.",
    image: "/images/businesspeople-office-meeting.jpg",
    link: "/it-courses",
  },
  {
    title: "React.js Development",
    category: "IT Course",
    desc: "Build modern, component-driven user interfaces with React.",
    image: "/images/businesspeople-office-meeting.jpg",
    link: "/courses/it/react-js",
  },
  {
    title: "Next.js Development",
    category: "IT Course",
    desc: "Create fast, SEO-friendly web applications using Next.js.",
    image: "/images/courses/course-placeholder.jpg",
    link: "/courses/it/next-js",
  },
  {
    title: "PHP & MySQL",
    category: "IT Course",
    desc: "Server-side development with PHP and database integration.",
    image: "/images/courses/course-placeholder.jpg",
    link: "/courses/it/php-mysql",
  },
  {
    title: "Android App Development",
    category: "App Development",
    desc: "Design and develop native Android applications.",
    image: "/images/courses/course-placeholder.jpg",
    link: "/courses/app/android-development",
  },
  {
    title: "Flutter App Development",
    category: "App Development",
    desc: "Build cross-platform mobile apps with Flutter.",
    image: "/images/courses/course-placeholder.jpg",
    link: "/courses/app/flutter-development",
  },
  {
    title: "Digital Marketing",
    category: "Digital Marketing",
    desc: "SEO, social media, paid ads, and growth strategies.",
    image: "/images/courses/course-placeholder.jpg",
    link: "/courses/digital-marketing",
  },
  {
    title: "SEO & Performance Marketing",
    category: "Digital Marketing",
    desc: "Rank websites and drive targeted traffic effectively.",
    image: "/images/courses/course-placeholder.jpg",
    link: "/courses/digital-marketing/seo",
  },
];

export default function HomeCourses() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#03228f]/10 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <span className="text-sm font-semibold text-[#03228f] uppercase tracking-wide">
            Our Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900">
            Industry-Oriented Training Programs
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Explore our most popular training programs designed to build
            practical skills and prepare you for real-world careers.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {courses.map((course) => (
            <Link
              key={course.title}
              href={course.link}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition hover:border-[#03228f]"
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden">
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

                <h3 className="text-lg font-semibold mt-2 mb-2 text-gray-900">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {course.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-[#03228f] text-white px-10 py-4 rounded-lg font-semibold"
          >
            View All Courses →
          </Link>
        </div>

      </div>
    </section>
  );
}
