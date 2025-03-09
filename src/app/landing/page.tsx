"use client";

import BusinessCategories from "../component/BusinessCategories";
import FeaturesPlanet from "../component/FeaturesPlanet";
import Footer from "../component/Footer";
import HeroLanding from "../component/HeroLanding";
import LandingContact from "../component/LandingContact";
import LandingFooter from "../component/Landingfooter";
import LandingProjects from "../component/LandingProjects";
import Navbar from "../component/Navbar";

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
