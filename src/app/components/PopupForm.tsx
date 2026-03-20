"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PopupForm({
  trigger,
}: {
  trigger?: number;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // ✅ AUTO OPEN (page change)
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  // ✅ MANUAL TRIGGER (button click)
  useEffect(() => {
    if (trigger) {
      setOpen(true);
    }
  }, [trigger]);

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-5 sm:p-6 relative max-h-[90vh] overflow-y-auto">

        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-center mb-3">
          Internship Registration 🚀
        </h2>

<form className="space-y-3">

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded-md"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border px-4 py-2 rounded-md"
            required
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded-md"
            required
          />

          {/* College */}
          <input
            type="text"
            placeholder="College Name"
            className="w-full border px-4 py-2 rounded-md"
          />

          {/* Year */}
          <select className="w-full border px-4 py-2 rounded-md">
            <option value="">Select Year</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
            <option>Passed Out</option>
          </select>

          {/* Stream */}
          <select className="w-full border px-4 py-2 rounded-md">
            <option value="">Select Stream</option>
            <option>B.Tech - CSE</option>
            <option>B.Tech - IT</option>
            <option>BCA</option>
            <option>MCA</option>
            <option>Other</option>
          </select>

          {/* Internship */}
          <select className="w-full border px-4 py-2 rounded-md">
            <option value="">Select Internship Domain</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>React</option>
            <option>Next.js</option>
            <option>PHP</option>
            <option>CMS (WordPress, etc.)</option>
            <option>Digital Marketing</option>
          </select>

          {/* Submit */}
          <button className="w-full bg-[#03228f] text-white py-2 rounded-md font-semibold hover:opacity-90">
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}