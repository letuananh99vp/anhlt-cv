"use client";

import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="w-full px-3 max-w-[1140px] mx-auto">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
      <Footer />
    </div>
  );
}
