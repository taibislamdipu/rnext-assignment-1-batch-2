import React from "react";

import About from "../components/About";
import Features from "../components/Features/Features";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
    </>
  );
}
