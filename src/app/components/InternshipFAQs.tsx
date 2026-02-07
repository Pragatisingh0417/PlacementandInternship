"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is this internship available in online and offline mode?",
    answer:
      "Yes. Braintech Info Solutions offers internships in online, offline, and hybrid modes so students can choose what suits them best.",
  },
  {
    question: "Will I receive an internship certificate?",
    answer:
      "Yes. After successful completion of the internship, you will receive an official internship certificate from Braintech Info Solutions.",
  },
  {
    question: "What is the duration of the internship?",
    answer:
      "Internship durations range from 1 month to 6 months depending on the domain and learning pace.",
  },
  {
    question: "Do I need prior experience to apply?",
    answer:
      "No prior experience is required. Our internship programs are suitable for students, freshers, and beginners.",
  },
  {
    question: "Will this internship help with placements?",
    answer:
      "Yes. We provide resume support, interview preparation, and placement guidance based on your performance.",
  },
  {
    question: "Which internship domains are available?",
    answer:
      "Internships are available in Full Stack Development, Python, Data Science, Digital Marketing, App Development, and UI/UX Design.",
  },
];

export default function InternshipFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 overflow-hidden bg-gray-50">

      {/* BACKGROUND EFFECT */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#03228f]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-[#03228f]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#03228f] mb-4">
            Internship FAQs
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Find answers to the most common questions about our internship
            programs, structure, certification, and career support.
          </p>
        </div>

        {/* FAQ GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between gap-6 p-6 text-left"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>

                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#03228f]/10 text-[#03228f] flex items-center justify-center text-lg font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
