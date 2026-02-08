"use client";

import { useState } from "react";

export default function EmployerEnquiryForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // TODO: connect API / email service here
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <h3 className="text-lg font-semibold text-green-700 mb-2">
          Thank you for reaching out
        </h3>
        <p className="text-sm text-green-600">
          Our hiring team will contact you shortly to discuss your requirements.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm"
    >
      <h3 className="text-xl font-semibold text-[#03228f] mb-6">
        Employer Enquiry Form
      </h3>

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          required
          placeholder="Company Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#03228f]"
        />

        <input
          type="text"
          required
          placeholder="Contact Person Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#03228f]"
        />

        <input
          type="email"
          required
          placeholder="Official Email Address"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#03228f]"
        />

        <input
          type="tel"
          required
          placeholder="Phone Number"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#03228f]"
        />

        <select
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#03228f]"
        >
          <option value="">Hiring Type</option>
          <option>Internship Hiring</option>
          <option>Full-Time Hiring</option>
          <option>Internship to Full-Time</option>
          <option>Requirement-Based Hiring</option>
        </select>

        <select
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#03228f]"
        >
          <option value="">Domain / Role</option>
          <option>Full Stack Development</option>
          <option>Frontend (React / Next.js)</option>
          <option>Backend Development</option>
          <option>Python Development</option>
          <option>App Development</option>
          <option>Digital Marketing</option>
          <option>UI / UX Design</option>
        </select>

      </div>

      <textarea
        rows={4}
        placeholder="Briefly describe your hiring requirements"
        className="mt-6 w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#03228f]"
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full bg-[#03228f] text-white py-3 rounded-lg font-semibold hover:bg-[#021b70] transition disabled:opacity-70"
      >
        {loading ? "Submitting..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
