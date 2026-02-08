import EmployerEnquiryForm from "@/app/components/EmployerEnquiryForm";
import Image from "next/image";
import Link from "next/link";

export default function HireFromUsPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <Image
          src="/images/banner-3.jpg"
          alt="Hire skilled talent from Braintech"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl text-white">
            <span className="inline-block mb-4 text-sm uppercase tracking-wide text-gray-200">
              Hire From Braintech
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hire Trained, Job-Ready <br />
              Talent Faster
            </h1>

            <p className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed">
              Braintech Info Solutions helps companies hire industry-ready
              candidates trained through live projects, internships, and
              real-world exposure.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#03228f] px-8 py-4 rounded-lg font-semibold"
              >
                Talk to Hiring Team
              </Link>

              <Link
                href="/employers"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold"
              >
                Employer Overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO YOU CAN HIRE ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#03228f] mb-4">
              Who You Can Hire
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Access a curated pool of trained candidates across multiple
              technology and digital domains.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              "Full Stack Developers",
              "Frontend (React / Next.js)",
              "Backend Developers",
              "Python Developers",
              "Mobile App Developers",
              "Digital Marketing Executives",
              "SEO & Performance Marketers",
              "UI / UX Designers",
            ].map((role) => (
              <div
                key={role}
                className="border border-gray-200 rounded-xl p-6"
              >
                <p className="font-medium text-sm">{role}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= HIRING MODELS ================= */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#03228f] mb-20">
            Flexible Hiring Models
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Direct Hiring",
                desc: "Hire candidates directly for junior or entry-level roles after evaluation.",
              },
              {
                title: "Internship-to-Hire",
                desc: "Evaluate interns during live projects before converting them to full-time employees.",
              },
              {
                title: "Requirement-Based Hiring",
                desc: "Get candidates shortlisted or trained based on your specific skill requirements.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-2xl p-10"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#03228f] mb-20">
            How Hiring Works
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              {
                step: "01",
                title: "Share Requirements",
                desc: "Tell us your hiring needs, roles, and skills required.",
              },
              {
                step: "02",
                title: "Candidate Shortlisting",
                desc: "We shortlist candidates aligned with your requirements.",
              },
              {
                step: "03",
                title: "Interview & Evaluation",
                desc: "You interview candidates or evaluate them during internships.",
              },
              {
                step: "04",
                title: "Onboard Talent",
                desc: "Select and onboard candidates with confidence.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full border-2 border-[#03228f] text-[#03228f] flex items-center justify-center font-semibold">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= TRUST CTA ================= */}
      <section className="py-28 bg-[#03228f] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Build Your Team with Confidence
          </h2>
          <p className="text-gray-200 mb-10">
            Reduce hiring time, lower risk, and access skilled talent trained
            for real-world performance.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#03228f] px-10 py-4 rounded-lg font-semibold"
          >
            Contact Hiring Team
          </Link>
        </div>
      </section>
<section className="relative py-28 bg-gradient-to-b from-[#03228f]/5 to-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div className="max-w-xl">
        <span className="inline-block mb-4 text-sm uppercase tracking-wide text-[#03228f] font-semibold">
          Employer Enquiry
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
          Let’s Discuss Your <br className="hidden md:block" />
          Hiring Needs
        </h2>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          Tell us about your hiring requirements and our dedicated hiring team
          will connect with you to provide skilled, industry-ready talent.
        </p>

        {/* TRUST POINTS */}
        <div className="space-y-4 text-sm text-gray-700">
          <div className="flex items-start gap-3">
            <span className="text-[#03228f] font-bold">✓</span>
            <p>Pre-trained candidates with live project experience</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#03228f] font-bold">✓</span>
            <p>Internship & full-time hiring models</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#03228f] font-bold">✓</span>
            <p>Reduced hiring time and lower recruitment risk</p>
          </div>
        </div>
      </div>

      {/* FORM CARD */}
        <EmployerEnquiryForm />
      

    </div>

  </div>
</section>


   </main>
  );
}
