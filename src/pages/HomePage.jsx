import React from "react";

import About from "../components/About";
import Contact from "../components/contact/Contact";
import CTA from "../components/CTA";
import FAQ from "../components/faq/FAQ";
import Features from "../components/Features/Features";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Properties from "../components/properties/Properties";
import Team from "../components/team/Team";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Properties />
      <About />
      <CTA />
      <FAQ />
      <Team />
      <Contact />
    </>
  );
}
