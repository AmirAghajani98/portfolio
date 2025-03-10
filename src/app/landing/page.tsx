"use client";

import BusinessCategories from "../component/Landing/BusinessCategories";
import FeaturesPlanet from "../component/Landing/FeaturesPlanet";
import HeroLanding from "../component/Landing/HeroSection";
import LandingContact from "../component/Landing/ContactForm";
import LandingFooter from "../component/Landing/Footer";
import LandingProjects from "../component/Landing/Projects";
import Navbar from "../component/Landing/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="sm:min-h-screen sm:w-full mx-auto sm:py-0 pb-10 opacity-95 bg-slate-400 projectback justify-center flex flex-col">
        <HeroLanding />
        <BusinessCategories />
        <FeaturesPlanet />
        <LandingProjects />
        <LandingContact />
      </main>
      <LandingFooter />
    </>
  );
}
