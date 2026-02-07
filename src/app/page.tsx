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

export default function Home() {
  return (
    <section className="">
      <HomeBanner />
      <AboutSection />
      <HomeCourses />
      <TrustedBySection />
      <WhyUs />
      <UpcomingBatches />
<OfferBanner />
      <WhyChooseUs />
      <HeroCTA />
      <TrainingBenefits />

    </section>
  );

}
