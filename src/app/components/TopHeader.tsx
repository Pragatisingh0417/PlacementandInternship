"use client";

import Link from "next/link";
import { Mail, Briefcase, GraduationCap } from "lucide-react";

export default function TopHeader() {
  return (
    <div className="w-full bg-[#03228f] text-white text-[15px]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">

        {/* LEFT: EMAIL */}
        <div className="flex items-center gap-2">
          <Mail size={14} />
          <a
            href="mailto:info@braintechinfosolutions.com"
            className="hover:underline"
          >
            info@braintechinfosolutions.com
          </a>
        </div>

        {/* RIGHT: CTAs */}
        <div className="flex items-center gap-5">

          {/* Internship / Training */}
          <Link
            href="/internships"
            className="flex items-center gap-1 hover:underline"
          >
            <GraduationCap size={14} />
            Internships & Training
          </Link>

          {/* Hire From Us */}
          <Link
            href="/employers/hire-from-us"
            className="flex items-center gap-1 bg-white text-[#03228f] px-3 py-1 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            <Briefcase size={14} />
            Hire From Us
          </Link>

        </div>
      </div>
    </div>
  );
}
