"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PopupForm() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Run on every page change
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000); // delay

    return () => clearTimeout(timer);
  }, [pathname]); // 👈 key fix

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-5 sm:p-6 relative">

        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-2 text-center">
          Free Career Counselling 🚀
        </h2>

        <p className="text-sm text-gray-500 text-center mb-4">
          Enter your details and we’ll guide you
        </p>

        <form className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded-md"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded-md"
          />

          <button className="w-full bg-[#03228f] text-white py-2 rounded-md font-semibold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}