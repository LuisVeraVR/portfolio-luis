// Navbar.js
import { useState, useRef, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useAppContext } from "../../components/context/AppContext";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const { theme, toggleTheme, language, setLanguage } = useAppContext();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const openSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0rem)";
  };

  const closeSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
      isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-gray-800 dark:bg-opacity-50" : ""
    }`}>
      <motion.a href="#top" className="text-3xl font-bold relative font-Ovo">Luis Vera</motion.a>
      <ul className="hidden md:flex items-center gap-6 lg:gap-8">
        <li><a className="font-Ovo" href="#top">{language === "es" ? "Inicio" : "Home"}</a></li>
        <li><a className="font-Ovo" href="#about">{language === "es" ? "Sobre mí" : "About"}</a></li>
        <li><a className="font-Ovo" href="#services">{language === "es" ? "Servicios" : "Services"}</a></li>
        <li><a className="font-Ovo" href="#work">{language === "es" ? "Mi trabajo" : "My Work"}</a></li>
        <li><a className="font-Ovo" href="#contact">{language === "es" ? "Contacto" : "Contact"}</a></li>
      </ul>
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          {theme === "light" ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
        </button>
        <div className="relative">
          <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full">
            <Image src={language === "es" ? assets.esFlag : assets.ukFlag} alt="flag" className="w-[20px] h-[13px]" />
            <span>{language === "es" ? "Español" : "English"}</span>
          </button>
          {isLangOpen && (
            <ul className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-md rounded-md w-32">
              <li onClick={() => { setLanguage("es"); setIsLangOpen(false); }} className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                <Image src={assets.esFlag} alt="es" className="w-[20px] h-[13px]" /> Español
              </li>
              <li onClick={() => { setLanguage("en"); setIsLangOpen(false); }} className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                <Image src={assets.ukFlag} alt="en" className="w-[20px] h-[13px]" /> English
              </li>
            </ul>
          )}
        </div>
        <button onClick={openSideMenu} className="block md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 z-50 w-64 h-screen bg-rose-50 dark:bg-gray-800 transition duration-500">
        <button className="absolute right-6 top-6" onClick={closeSideMenu}><X className="w-6 h-6" /></button>
        <li><a onClick={closeSideMenu} href="#top">{language === "es" ? "Inicio" : "Home"}</a></li>
        <li><a onClick={closeSideMenu} href="#about">{language === "es" ? "Sobre mí" : "About"}</a></li>
        <li><a onClick={closeSideMenu} href="#services">{language === "es" ? "Servicios" : "Services"}</a></li>
        <li><a onClick={closeSideMenu} href="#work">{language === "es" ? "Mi trabajo" : "My Work"}</a></li>
        <li><a onClick={closeSideMenu} href="#contact">{language === "es" ? "Contacto" : "Contact"}</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
