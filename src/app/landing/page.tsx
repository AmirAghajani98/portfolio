"use client";

import { useEffect, useState } from "react";
import BusinessCategories from "../component/Landing/BusinessCategories";
import FeaturesPlanet from "../component/Landing/FeaturesPlanet";
import HeroLanding from "../component/Landing/HeroSection";
import ContactForm from "../component/Landing/LandingContact";
import Footer from "../component/Landing/Footer";
import LandingProjects from "../component/Landing/Projects";
import Navbar from "../component/Navbar";
import Testimonial from "../component/Landing/Testimonial";
import FAQ from "../component/Landing/Faq";
import Pricetable from "../component/Landing/PriceTable";
import Timeline from "../component/Landing/Timeline";

export default function Landing() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed w-full inset-0 flex justify-center items-center bg-slate-700 bg-opacity-60 z-50">
        <span className="sm:w-20 loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="sm:min-h-screen sm:w-full mx-auto sm:py-0 pb-10 opacity-95 bg-slate-400 projectback justify-center flex flex-col">
        <HeroLanding />
        <FeaturesPlanet />
        <LandingProjects />
        <Testimonial />
        <Pricetable />
        <Timeline />
        <BusinessCategories />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
