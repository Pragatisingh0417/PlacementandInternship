"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/image.png"
        alt="Braintech footer background"
        fill
        className="object-cover"
      />

      {/* GRADIENT OVERLAY */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#03228f]/95 to-[#03228f]" /> */}

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid gap-12 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <Image
            src="/images/logo.png"
            alt="Braintech Info Solutions"
            width={180}
            height={50}
            className="mb-6"
          />
          <p className="text-gray-200 text-sm leading-relaxed">
            Braintech Info Solutions is a career-focused training and placement
            institute delivering industry-ready skills through practical
            learning, internships, and professional guidance.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
            >
              in
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
            >
              ig
            </a>
          </div>
        </div>

        {/* COURSES */}
        <div>
          <h4 className="text-lg font-semibold mb-4">
            Courses
          </h4>
          <ul className="space-y-3 text-sm text-gray-200">
            <li><Link href="/courses/it/full-stack-development">Full Stack Development</Link></li>
            <li><Link href="/courses/it/react-js">React & Next.js</Link></li>
            <li><Link href="/courses/app/flutter-development">App Development</Link></li>
            <li><Link href="/courses/digital-marketing">Digital Marketing</Link></li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm text-gray-200">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/internship">Internship</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-semibold mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-gray-200">
            <li>Email: info@braintechinfosolutions.com</li>
            <li>Phone: +91 XXXXX XXXXX</li>
            <li>India</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-gray-200">

          <p>
            © {new Date().getFullYear()} Braintech Info Solutions. All rights reserved.
          </p>

          {/* LEGAL */}
          <div className="flex gap-6">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </div>

        </div>
      </div>

      {/* SCROLL TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 bg-[#03228f] text-white w-12 h-12 rounded-full shadow-lg hover:bg-[#021b70] transition"
        aria-label="Scroll to top"
      >
        ↑
      </button>

    </footer>
  );
}
