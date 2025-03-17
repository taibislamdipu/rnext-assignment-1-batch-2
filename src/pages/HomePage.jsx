import React from "react";

import About from "../components/About";
import CTA from "../components/CTA";
import Features from "../components/Features/Features";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Properties from "../components/properties/Properties";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Properties />
      <About />
      <CTA />
    </>
  );
}
