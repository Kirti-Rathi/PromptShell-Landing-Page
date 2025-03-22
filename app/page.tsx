"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Platform from "./components/Platform";
import Providers from "./components/Providers";
import Installation from "./components/Installation";
import ConfigurationSetup from "./components/ConfigurationSetup";
import Examples from "./components/Examples";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

// import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Platform />
      <Providers />
      <Installation />
      <ConfigurationSetup />
      <Examples />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
