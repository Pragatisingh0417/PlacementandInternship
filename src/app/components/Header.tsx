"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">

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

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 text-[16px] font-medium text-gray-900">

          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>

          {/* COURSES DROPDOWN */}
          <div className="relative group">
            <span className="cursor-pointer">Courses</span>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white border border-gray-200 rounded-md w-56 shadow-sm">
              <Link
                href="/courses/it"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                IT Courses
              </Link>
              <Link
                href="/courses/digital-marketing"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Digital Marketing
              </Link>
              <Link
                href="/courses/app-development"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                App Development
              </Link>
            </div>
          </div>

          <Link href="/internship">Internship</Link>

          {/* NEW: EMPLOYERS */}
          <Link
            href="/employers"
            className="text-[#03228f] font-semibold"
          >
            For Employers
          </Link>

          <Link href="/contact">Contact</Link>

          {/* PRIMARY CTA (STUDENTS) */}
          <Link
            href="/contact"
            className="bg-[#03228f] text-white px-5 py-2 rounded-md hover:bg-[#021b70] transition"
          >
            Enroll Now
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white border-t px-4 py-6 space-y-4 text-sm">

          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
          <Link href="/courses/it" onClick={() => setOpen(false)}>IT Courses</Link>
          <Link href="/courses/digital-marketing" onClick={() => setOpen(false)}>
            Digital Marketing
          </Link>
          <Link href="/courses/app-development" onClick={() => setOpen(false)}>
            App Development
          </Link>
          <Link href="/internship" onClick={() => setOpen(false)}>
            Internship
          </Link>

          {/* EMPLOYERS */}
          <Link
            href="/employers"
            onClick={() => setOpen(false)}
            className="font-semibold text-[#03228f]"
          >
            For Employers
          </Link>

          {/* CTA */}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-[#03228f] text-white py-3 rounded-md"
          >
            Enroll Now
          </Link>
        </div>
      )}
    </header>
  );
}
