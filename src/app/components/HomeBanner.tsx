export default function HomeBanner() {
  return (
    <section className="bg-gradient-to-r from-[#03228f] to-[#0e73e4] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Training & Placement Cell <br />
            <span className="text-yellow-300">Build Your Career With Us</span>
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Industry-focused IT, Digital Marketing & App Development courses with
            guaranteed placement assistance and live projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/courses"
              className="bg-white text-[#03228f] px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
            >
              Explore Courses
            </a>

            <a
              href="/contact-us"
              className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-[#03228f] transition"
            >
              Free Counseling
            </a>
          </div>

          {/* STATS */}
          <div className="mt-10 flex gap-10 text-sm">
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p>Students Placed</p>
            </div>
            <div>
              <p className="text-2xl font-bold">50+</p>
              <p>Hiring Partners</p>
            </div>
            <div>
              <p className="text-2xl font-bold">10+</p>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:block">
          <img
            src="/images/banner.jpg"
            alt="Training and Placement"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );

}