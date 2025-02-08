'use client';

import { motion } from "framer-motion";
import SubtleBackground from "./components/AnimatedBackground";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 1 }}
    >
      <SubtleBackground />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
    </motion.div>
  );
}
