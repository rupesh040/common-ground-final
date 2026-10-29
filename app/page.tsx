import React from "react";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Causes from "@/components/Causes";
import RootedInCare from "@/components/RootedInCare";
import VolunteerCTA from "@/components/VolunteerCTA";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker /> 
      <About />
      <Causes />
      <RootedInCare />
      <VolunteerCTA />
      <FAQ />
      <Blog />
    </>
  );
}
