"use client"
import { useEffect } from "react"
import { Suspense, lazy } from 'react';
import Head from 'next/head';
import AOS from "aos"
import "aos/dist/aos.css"
const HeroSection = lazy(() => import("@/sections/home/HeroSection"));
const Courses = lazy(() => import("@/sections/home/Courses"));
const Testimonial = lazy(() => import("@/sections/home/Testimonial"));
const FAQ = lazy(() => import("@/sections/home/FAQ"));
const Teachers = lazy(() => import("@/sections/home/Teachers"));
const PricingPlans = lazy(() => import("@/sections/home/PricingPlans"));
const Updates = lazy(() => import("@/sections/home/Updates"));
const Help = lazy(() => import("@/sections/home/Help"));

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);
  

  return (
    <>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Description of your page" />
      </Head>


      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />
          <Courses />
          <Testimonial />
          <Help />
          <Teachers />
          <PricingPlans />          
          <Updates />
          <FAQ />
        </Suspense>
      </div>
    </>
  );
}
