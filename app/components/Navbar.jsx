'use client';

import React, { useEffect, useRef, useState } from "react";
import { Moon, ArrowRight, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0rem)";
  };

  const closeSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { y: -2, transition: { duration: 0.2 } }
  };

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <motion.a 
          href="#top" 
          className="text-3xl font-bold mr-14 relative overflow-hidden group font-Ovo"
          initial="initial"
          animate="animate"
        >
          {["L", "u", "i", "s", "", "V", "e", "r", "a"].map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="inline-block text-black font-Ovo"
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
            key="dot"
            variants={letterVariants}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="inline-block text-red-600 ml-1"
          >
            .
          </motion.span>
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white bg-opacity-50"}`}>
          <li className="relative group">
            <a className="font-Ovo" href="#top">
              Home
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a className="font-Ovo" href="#about">
              Sobre mi
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a className="font-Ovo" href="#services">
              Servicios
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a className="font-Ovo" href="#work">
              Mi trabajo
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a className="font-Ovo" href="#contact">
              Contacto
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all group-hover:w-full"></span>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            className="relative w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden transition-colors duration-300 ease-in-out"
            aria-label="Toggle dark mode"
          >
            <Moon className="w-6 h-6 text-gray-600" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex font-Ovo items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 group hover:bg-gray-100 transition-colors duration-300"
          >
            Contacto <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <button onClick={openSideMenu} className="block md:hidden ml-3">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 z-50 w-64 h-screen bg-rose-50 transition duration-500"
        >
          <button className="absolute right-6 top-6" onClick={closeSideMenu}>
            <X className="w-6 h-6" />
          </button>

          <li>
            <a className="font-Ovo hover:text-gray-600 transition-colors" onClick={closeSideMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-gray-600 transition-colors" onClick={closeSideMenu} href="#about">
              Sobre mi
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-gray-600 transition-colors" onClick={closeSideMenu} href="#services">
              Servicios
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-gray-600 transition-colors" onClick={closeSideMenu} href="#work">
              Mi trabajo
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-gray-600 transition-colors" onClick={closeSideMenu} href="#contact">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

