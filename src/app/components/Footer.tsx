"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

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

      {/* OVERLAY */}
      {/* <div className="absolute inset-0 bg-[#03228f]/95" /> */}

      {/* MAIN CONTENT */}
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
            learning, internships, and placement support.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* COURSES */}
        <div>
          <h4 className="text-lg font-semibold mb-4">
            Courses
          </h4>

          <ul className="space-y-3 text-sm text-gray-200">
            {/* IT */}
            <li><Link href="/courses/it-courses/full-stack-development-courses">Full Stack Development</Link></li>
            <li><Link href="/courses/it-courses/full-stack-development-courses">React / Next.js</Link></li>
            <li><Link href="/courses/it-courses/full-stack-development-courses">Python Development</Link></li>
            <li><Link href="/courses/it-courses/full-stack-development-courses">PHP Development</Link></li>

            {/* APP */}
            <li><Link href="/courses/app/flutter-development-courses">Flutter App Development</Link></li>
            <li><Link href="/courses/app/android-development-courses">Android Development</Link></li>

            {/* DIGITAL */}
            <li><Link href="/courses/digital-marketing-courses">Digital Marketing</Link></li>
            <li><Link href="/courses/digital-marketing-courses">SEO & Performance Marketing</Link></li>
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
            <li><Link href="/internships">Internships</Link></li>
            <li><Link href="/employers">For Employers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-semibold mb-4">
            Contact Us
          </h4>

          <ul className="space-y-4 text-sm text-gray-200">
            <li className="flex gap-3">
              <Mail size={16} className="mt-1" />
              <span>info@braintechinfosolutions.com</span>
            </li>

            <li className="flex gap-3">
              <Phone size={16} className="mt-1" />
              <div>
                <p>+91 7390030157</p>
                <p>+91 8287725005</p>
              </div>
            </li>

            <li className="flex gap-3">
              <MapPin size={16} className="mt-1" />
              <span>
                Levana Cyber Heights,<br />
                Vibhuti Khand, Lucknow
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-gray-200">

          <p>
            © {new Date().getFullYear()} <a href="https://braintechinfosolutions.com/">
              Braintech Info Solutions.
              </a> All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/contact">Contact Us</Link>
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
