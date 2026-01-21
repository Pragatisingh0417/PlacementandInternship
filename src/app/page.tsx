import Image from "next/image";
import HomeBanner from "./components/HomeBanner";
import AboutSection from "./components/AboutSection";
import PopularCourses from "./components/PopularCourses";
import UpcomingBatches from "./components/UpcomingBatches";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <section className="">
      <HomeBanner />
      <AboutSection />
      <PopularCourses />
      <UpcomingBatches />
      <WhyChooseUs />
    </section>
  );

}
