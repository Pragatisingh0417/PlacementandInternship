import Image from "next/image";
import HomeBanner from "./components/HomeBanner";
import AboutSection from "./components/AboutSection";
import PopularCourses from "./components/PopularCourses";
import UpcomingBatches from "./components/UpcomingBatches";
import WhyChooseUs from "./components/WhyChooseUs";
import HomeCourses from "./components/HomeCourses";
import OfferBanner from "./components/OfferBanner";
import WhyUs from "./components/Whyus";
import TrainingBenefits from "./components/TrainingBenefits";
import HeroCTA from "./components/HeroCTA";
import TrustedBySection from "./components/TrustedBySection";
import EmployerCTA from "./components/EmployerCTA";
import InternshipEnquiryForm from "./components/InternshipEnquiryForm";

export default function Home() {
  return (
    <section className="">
      <HomeBanner />
      <AboutSection />
      <EmployerCTA />
      <HomeCourses />
      <TrustedBySection />
      <WhyUs />
      <UpcomingBatches />
<OfferBanner />
      <WhyChooseUs />
      <HeroCTA />
      <TrainingBenefits />

<section className="py-28 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

    {/* LEFT CONTENT */}
    <div className="bg-white p-10 rounded-2xl border shadow-sm">

      <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-wide text-[#03228f]">
        Internship Enquiry
      </span>

      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Start Your Internship Journey
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Apply for industry-focused internships designed to give you
        real-world experience, mentor guidance, and certification.
      </p>

      {/* BENEFITS */}
      <ul className="space-y-4 text-gray-700 text-sm">
        <li className="flex gap-3">
          <span className="text-[#03228f] font-bold">✓</span>
          Online / Offline / Hybrid internship options
        </li>
        <li className="flex gap-3">
          <span className="text-[#03228f] font-bold">✓</span>
          Live projects & practical task-based learning
        </li>
        <li className="flex gap-3">
          <span className="text-[#03228f] font-bold">✓</span>
          Internship certificate & career guidance
        </li>
        <li className="flex gap-3">
          <span className="text-[#03228f] font-bold">✓</span>
          Placement & hiring support for top performers
        </li>
      </ul>

      {/* NOTE */}
      <div className="mt-8 rounded-xl bg-[#03228f]/5 p-5 text-sm text-gray-700">
        Our team usually responds within <b>24 hours</b> on working days.
      </div>
    </div>

    {/* RIGHT FORM */}
    <InternshipEnquiryForm />

  </div>
</section>
    </section>
  );

}
