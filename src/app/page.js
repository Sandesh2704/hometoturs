import Courses from "@/sections/home/Courses";
import FAQ from "@/sections/home/FAQ";
import Help from "@/sections/home/Help";
import HeroSection from "@/sections/home/HeroSection";
import PricingPlans from "@/sections/home/PricingPlans";
import Teachers from "@/sections/home/Teachers";
import Testimonial from "@/sections/home/Testimonial";
import Updates from "@/sections/home/Updates";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <Courses />
        <Testimonial />
        <Help />
        <Teachers />
        <PricingPlans/>
        <Updates />
        <FAQ />
      </div>
    </>
  );
}
