"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Code,
  Smartphone,
  Megaphone,
} from "lucide-react";

export default function Header({ openPopup }: { openPopup: () => void }) {  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  const activeClass =
    "bg-[#03228f] text-white px-3 py-1 rounded-full";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Braintech Info Solutions"
            width={170}
            height={45}
            priority
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-gray-900">

          <Link href="/" className={isActive("/") ? activeClass : ""}>
            Home
          </Link>

          <Link href="/about" className={isActive("/about") ? activeClass : ""}>
            About Us
          </Link>

          {/* ===== COURSES MEGA MENU ===== */}
          <div className="relative">
            <button
              onClick={() => setCoursesOpen(!coursesOpen)}
              className={`flex items-center gap-1 ${
                pathname.startsWith("/courses") ? activeClass : ""
              }`}
            >
              Courses
              <ChevronDown size={16} />
            </button>

            {coursesOpen && (
              <div
                className=" absolute left-1/2 top-full mt-4 w-[900px]
      -translate-x-1/2
      bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden
      animate-mega"
                onMouseLeave={() => setCoursesOpen(false)}
              >
                <div className="grid grid-cols-4">

                  {/* IMAGE PANEL */}
                  <div className="relative col-span-1 hidden md:block h-[300px]">
                    <Image
                      src="/images/about-us.png"
                      alt="Courses at Braintech"
                      fill
                      className="object-cover "
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-center px-4">
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="col-span-3 p-6 grid grid-cols-3 gap-6">

                    {/* IT */}
                    <div>
                      <h4 className="flex items-center gap-2 font-semibold text-sm mb-3 text-[#03228f]">
                        <Code size={16} /> IT Courses
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li><Link href="/courses/it-courses/full-stack-development-courses">Full Stack</Link></li>
                        <li><Link href="/courses/it-courses/full-stack-development-courses">React / Next.js</Link></li>
                        <li><Link href="/courses/it-courses/full-stack-development-courses">Python</Link></li>
                        <li><Link href="/courses/it-courses/full-stack-development-courses">PHP</Link></li>
                      </ul>
                    </div>

                    {/* APP */}
                    <div>
                      <h4 className="flex items-center gap-2 font-semibold text-sm mb-3 text-[#03228f]">
                        <Smartphone size={16} /> App Development
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li><Link href="/courses/app-development-courses">Flutter</Link></li>
                        <li><Link href="/courses/app-development-courses">Android</Link></li>
                        <li><Link href="/courses/app-development-courses">iOS</Link></li>
                      </ul>
                    </div>

                    {/* DIGITAL */}
                    <div>
                      <h4 className="flex items-center gap-2 font-semibold text-sm mb-3 text-[#03228f]">
                        <Megaphone size={16} /> Digital Marketing
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li><Link href="/courses/digital-marketing-courses">SEO</Link></li>
                        <li><Link href="/courses/digital-marketing-courses">Paid Ads</Link></li>
                        <li><Link href="/courses/digital-marketing-courses">Social Media</Link></li>
                      </ul>
                    </div>

                    {/* CTA */}
        <div className="col-span-3 pt-4 border-t">
          <Link
            href="/courses"
            className="
              inline-flex items-center justify-center
              bg-[#03228f] text-white px-6 py-3
              rounded-lg font-semibold text-sm
              hover:bg-[#021b70] transition
            "
          >
            View All Courses →
          </Link>
        </div>

                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/internships"
            className={isActive("/internships") ? activeClass : ""}
          >
            Internship
          </Link>

          <Link
            href="/employers"
            className={isActive("/employers") ? activeClass : ""}
          >
            For Employers
          </Link>

          <Link
            href="/contact"
            className={isActive("/contact") ? activeClass : ""}
          >
            Contact
          </Link>

          {/* CTA */}
          <button
  onClick={openPopup}
  className="bg-[#03228f] text-white px-5 py-2 rounded-md"
>
  Enroll Now
</button>
        </nav>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMobileOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-4 text-sm">

          <button
            className="self-end text-xl"
            onClick={() => setMobileOpen(false)}
          >
            ✕
          </button>

          <Link href="/" className="block">Home</Link>
          <Link href="/about" className="block">About Us</Link>

          {/* MOBILE COURSES */}
          <button
            onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
            className="flex justify-between items-center"
          >
            Courses
            <ChevronDown size={16} />
          </button>

          {mobileCoursesOpen && (
            <div className="pl-4 flex flex-col gap-2">
              <Link href="/courses/it">IT Courses</Link>
              <Link href="/courses/app">App Development</Link>
              <Link href="/courses/digital">Digital Marketing</Link>
            </div>
          )}

          <Link href="/internships">Internship</Link>
          <Link href="/employers">For Employers</Link>

          <Link
            href="/contact"
            className="mt-4 bg-[#03228f] text-white py-3 text-center rounded-md"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </header>
  );
}
