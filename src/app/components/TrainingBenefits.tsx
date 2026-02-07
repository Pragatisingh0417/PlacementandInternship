import {
  Laptop,
  BookOpen,
  Briefcase,
  Award,
} from "lucide-react";

export default function TrainingBenefits() {
  return (
    <section className="bg-[#f5f3ef] py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-blue-900 font-medium text-lg">
            Start Your Career
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#2b174f] leading-tight">
            Learn In-Demand <br /> Tech Skills
          </h2>

          <p className="mt-8 text-gray-700 leading-relaxed max-w-md">
            Braintech Info Solutions provides industry-focused training with
            a strong emphasis on practical learning, real projects, and
            placement preparation to help you build a successful IT career.
          </p>
        </div>

        {/* RIGHT FEATURES */}
        <div className="grid sm:grid-cols-2 gap-8">

          {/* CARD 1 */}
          <div className="bg-white p-8 flex items-center gap-6 shadow-sm">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#03228f] text-white">
              <Laptop size={26} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Industry-Relevant Training
            </h3>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 flex items-center gap-6 shadow-sm">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#03228f] text-white">
              <BookOpen size={26} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Hands-on Practical Learning
            </h3>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 flex items-center gap-6 shadow-sm">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#03228f] text-white">
              <Briefcase size={26} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Placement Assistance
            </h3>
          </div>

          {/* CARD 4 */}
          <div className="bg-white p-8 flex items-center gap-6 shadow-sm">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#03228f] text-white">
              <Award size={26} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Career-Oriented Certification
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}
