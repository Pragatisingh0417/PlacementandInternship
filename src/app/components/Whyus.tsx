export default function WhyUs() {
  return (
    <section className=" py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-pink-500 font-medium text-lg">
            Start Now!
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#2b174f] leading-tight">
            Learn a New <br /> Language!
          </h2>

          <p className="mt-8 text-gray-700 leading-relaxed max-w-md">
            We are a language centre that offer a personalised approach to
            language learning with small class sizes of no more than 10
            students in group lessons.
          </p>
        </div>

        {/* RIGHT FEATURES */}
        <div className="grid sm:grid-cols-2 gap-8">

          {[
            "An Easy Study Approach",
            "Free Teaching Materials",
            "A Free Mobile Application",
            "An Accredited School",
          ].map((text, index) => (
            <div
              key={text}
              className="bg-white p-8 flex items-center gap-6 shadow-sm"
            >
              {/* NUMBER CIRCLE */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#03228f] text-white font-bold text-xl">
                {index + 1}
              </div>

              {/* TEXT */}
              <h3 className="text-lg font-semibold text-gray-900">
                {text}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
