"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-[#03228f]">
          Braintech
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-900">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>

          {/* COURSES DROPDOWN */}
          <div className="relative group">
            <span className="cursor-pointer">Courses</span>
            <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md rounded-md w-52">
              <Link href="/courses/it" className="block px-4 py-2 hover:bg-gray-100">
                IT Courses
              </Link>
              <Link href="/courses/digital-marketing" className="block px-4 py-2 hover:bg-gray-100">
                Digital Marketing
              </Link>
              <Link href="/courses/app-development" className="block px-4 py-2 hover:bg-gray-100">
                App Development
              </Link>
            </div>
          </div>

          <Link href="/placements">Placements</Link>
          <Link href="/internships">Internships</Link>
          <Link href="/corporate-training">Corporate Training</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact-us">Contact Us</Link>

          {/* CTA */}
          <Link
            href="/contact-us"
            className="bg-[#0e73e4] text-white px-5 py-2 rounded-md hover:bg-[#03228f] transition"
          >
            Enroll Now
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-3">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/courses/it">IT Courses</Link>
          <Link href="/courses/digital-marketing">Digital Marketing</Link>
          <Link href="/courses/app-development">App Development</Link>
          <Link href="/placements">Placements</Link>
          <Link href="/internships">Internships</Link>
          <Link href="/corporate-training">Corporate Training</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact-us" className="block text-center bg-[#0e73e4] text-white py-2 rounded">
            Enroll Now
          </Link>
        </div>
      )}
    </header>
  );
}
