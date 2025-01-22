'use client';

import SubtleBackground from "./utils/AnimatedBackground";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact"

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <SubtleBackground />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
}

