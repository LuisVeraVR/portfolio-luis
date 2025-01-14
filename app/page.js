'use client';

import AnimatedBackground from "./utils/AnimatedBackground";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  );
}

