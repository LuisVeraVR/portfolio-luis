"use client";

import { useState, useRef, useEffect } from "react";
import { Moon, Sun, X, Globe } from "lucide-react";
import { gsap } from "gsap";
import { useAppContext } from "../../components/context/AppContext";
import { assets } from "@/assets/assets";
import Image from "next/image";

const ModernNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { theme, toggleTheme, language, setLanguage } = useAppContext();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);

  const navRef = useRef();
  const overlayRef = useRef();
  const leftPanelRef = useRef();
  const rightPanelRef = useRef();
  const menuItemsRef = useRef([]);
  const logoRef = useRef();
  const timelineRef = useRef();

  const langDropdownRef = useRef();
  const themeDropdownRef = useRef();
  const langItemsRef = useRef([]);
  const themeItemsRef = useRef([]);

  const menuItems = [
    { href: "#top", label: language === "es" ? "INICIO" : "HOME" },
    { href: "#about", label: language === "es" ? "SOBRE MÍ" : "ABOUT" },
    { href: "#services", label: language === "es" ? "SERVICIOS" : "SERVICES" },
    { href: "#work", label: language === "es" ? "MI TRABAJO" : "MY WORK" },
    { href: "#contact", label: language === "es" ? "CONTACTO" : "CONTACT" },
  ];

  const languages = [
    { code: "es", name: "Español", flag: assets.esFlag },
    { code: "en", name: "English", flag: assets.ukFlag },
  ];

  const themes = [
    {
      code: "light",
      name: language === "es" ? "Modo Claro" : "Light Mode",
      icon: Sun,
      description:
        language === "es"
          ? "Interfaz clara y brillante"
          : "Bright and clean interface",
    },
    {
      code: "dark",
      name: language === "es" ? "Modo Oscuro" : "Dark Mode",
      icon: Moon,
      description:
        language === "es"
          ? "Interfaz oscura y elegante"
          : "Dark and elegant interface",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Timeline principal del menú
    timelineRef.current = gsap.timeline({ paused: true });

    timelineRef.current
      .set(overlayRef.current, { display: "flex" })
      .fromTo(
        leftPanelRef.current,
        { x: "-100%" },
        { x: "0%", duration: 0.8, ease: "power3.out" }
      )
      .fromTo(
        rightPanelRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        logoRef.current,
        { scale: 0, rotation: -180, opacity: 0 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      .fromTo(
        menuItemsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.3"
      );

    return () => {
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, []);

  const animateLangDropdown = (isOpening) => {
    if (isOpening) {
      gsap.set(langDropdownRef.current, {
        display: "block",
        opacity: 0,
        scale: 0.9,
        y: -10,
      });
      gsap.to(langDropdownRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "back.out(1.7)",
      });
      gsap.fromTo(
        langItemsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.03,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    } else {
      gsap.to(langDropdownRef.current, {
        opacity: 0,
        scale: 0.9,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(langDropdownRef.current, { display: "none" });
        },
      });
    }
  };

  const animateThemeDropdown = (isOpening) => {
    if (isOpening) {
      gsap.set(themeDropdownRef.current, {
        display: "block",
        opacity: 0,
        scale: 0.9,
        y: -10,
      });
      gsap.to(themeDropdownRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "back.out(1.7)",
      });
      gsap.fromTo(
        themeItemsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    } else {
      gsap.to(themeDropdownRef.current, {
        opacity: 0,
        scale: 0.9,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(themeDropdownRef.current, { display: "none" });
        },
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target) &&
        !event.target.closest("[data-lang-trigger]")
      ) {
        if (isLangDropdownOpen) {
          setIsLangDropdownOpen(false);
          animateLangDropdown(false);
        }
      }
      if (
        themeDropdownRef.current &&
        !themeDropdownRef.current.contains(event.target) &&
        !event.target.closest("[data-theme-trigger]")
      ) {
        if (isThemeDropdownOpen) {
          setIsThemeDropdownOpen(false);
          animateThemeDropdown(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLangDropdownOpen, isThemeDropdownOpen]);

  const openMenu = () => {
    setIsOpen(true);
    timelineRef.current.play();
  };

  const closeMenu = () => {
    timelineRef.current.reverse().then(() => {
      setIsOpen(false);
      gsap.set(overlayRef.current, { display: "none" });
    });
  };

  const toggleLangDropdown = () => {
    // En mobile (< 768px), cambiar idioma directamente sin mostrar dropdown
    if (window.innerWidth < 768) {
      const newLang = language === "es" ? "en" : "es";
      setLanguage(newLang);
      return;
    }

    // En desktop, mostrar dropdown
    const newState = !isLangDropdownOpen;
    setIsLangDropdownOpen(newState);

    if (newState && isThemeDropdownOpen) {
      setIsThemeDropdownOpen(false);
      animateThemeDropdown(false);
    }

    animateLangDropdown(newState);
  };

  const toggleThemeDropdown = () => {
    // En mobile (< 768px), cambiar tema directamente sin mostrar dropdown
    if (window.innerWidth < 768) {
      toggleTheme();
      return;
    }

    // En desktop, mostrar dropdown
    const newState = !isThemeDropdownOpen;
    setIsThemeDropdownOpen(newState);

    if (newState && isLangDropdownOpen) {
      setIsLangDropdownOpen(false);
      animateLangDropdown(false);
    }

    animateThemeDropdown(newState);
  };

  const handleLanguageSelect = (langCode) => {
    setLanguage(langCode);
    setIsLangDropdownOpen(false);
    animateLangDropdown(false);
  };

  const handleThemeSelect = (themeCode) => {
    if (themeCode !== theme) {
      toggleTheme();
    }
    setIsThemeDropdownOpen(false);
    animateThemeDropdown(false);
  };

  const handleMenuItemClick = (href) => {
    closeMenu();
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 800);
  };

  const getCurrentLanguage = () => {
    return languages.find((lang) => lang.code === language) || languages[0];
  };

  return (
    <>
      {/* Navbar fija */}
      <nav
        ref={navRef}
        className={`
          w-full fixed top-0 left-0 px-6 lg:px-8 xl:px-[15%] py-4 
          flex items-center justify-between z-50 transition-all duration-300
          ${
            isScroll
              ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-gray-200/20 dark:border-gray-700/20"
              : "bg-transparent"
          }
        `}
      >
        <a
          href="#top"
          className="relative group flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Nombre principal */}
          <span
            className="font-bold text-black dark:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-all duration-300"
            style={{ fontFamily: "ui-monospace, SFMono-Regular, monospace" }}
          >
            Luis Vera
          </span>

          {/* Separador vertical que aparece en hover */}
          <div
            className={`
              mx-2 md:mx-3 h-8 md:h-10 w-[2px] bg-black/30 dark:bg-white/30 transition-all duration-500 hidden sm:block
              ${isHovered ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}
            `}
          />

          {/* Subtítulo a la derecha en dos líneas */}
          <div
            className={`
              flex-col justify-center transition-all duration-500 overflow-hidden hidden sm:flex
              ${isHovered ? "max-w-[150px] opacity-100" : "max-w-0 opacity-0"}
            `}
          >
            <span
              className="text-black/70 dark:text-white/70 text-sm md:text-base lg:text-lg font-light tracking-wide leading-tight whitespace-nowrap"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              Desarrollador
            </span>
            <span
              className="text-black/70 dark:text-white/70 text-sm md:text-base lg:text-lg font-light tracking-wide leading-tight whitespace-nowrap"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              FullStack
            </span>
          </div>

          {/* Línea decorativa inferior */}
          <div
            className={`
              absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-black dark:from-white via-black/50 dark:via-white/50 to-transparent transition-all duration-500 hidden sm:block
              ${isHovered ? "w-full opacity-100" : "w-0 opacity-0"}
            `}
          />
        </a>

        {/* Controles del lado derecho */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 relative">
          {/* Botón de idioma */}
          <div className="relative">
            <button
              data-lang-trigger
              onClick={toggleLangDropdown}
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg"
            >
              <Globe className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-gray-700 dark:text-gray-300" />
            </button>

            {/* Dropdown de idiomas */}
            <div
              ref={langDropdownRef}
              className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700 w-48 z-[60]"
              style={{ display: "none" }}
            >
              <div className="p-2">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide px-3 py-2">
                  {language === "es" ? "Seleccionar idioma" : "Select Language"}
                </div>
                {languages.map((lang, index) => (
                  <button
                    key={lang.code}
                    ref={(el) => (langItemsRef.current[index] = el)}
                    onClick={() => handleLanguageSelect(lang.code)}
                    className={`
                      w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors opacity-0
                      ${
                        language === lang.code
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                          : "hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                      }
                    `}
                  >
                    <Image
                      src={lang.flag}
                      alt={lang.code}
                      className="w-5 h-3 object-cover rounded"
                    />
                    <span className="font-medium text-sm">{lang.name}</span>
                    {language === lang.code && (
                      <div className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Toggle de tema */}
          <div className="relative">
            <button
              data-theme-trigger
              onClick={toggleThemeDropdown}
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-white flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
              ) : (
                <Sun className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
              )}
            </button>

            {/* Dropdown de tema */}
            <div
              ref={themeDropdownRef}
              className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700 w-72 z-[60]"
              style={{ display: "none" }}
            >
              <div className="p-2">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide px-3 py-2">
                  {language === "es" ? "Seleccionar tema" : "Select Theme"}
                </div>
                {themes.map((themeOption, index) => {
                  const IconComponent = themeOption.icon;
                  return (
                    <button
                      key={themeOption.code}
                      ref={(el) => (themeItemsRef.current[index] = el)}
                      onClick={() => handleThemeSelect(themeOption.code)}
                      className={`
                        w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors opacity-0
                        ${
                          theme === themeOption.code
                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                            : "hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                        }
                      `}
                    >
                      <div
                        className={`
                        w-8 h-8 rounded-full flex items-center justify-center
                        ${
                          theme === themeOption.code
                            ? "bg-blue-100 dark:bg-blue-800"
                            : "bg-gray-100 dark:bg-gray-700"
                        }
                      `}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">
                          {themeOption.name}
                        </div>
                        <div className="text-xs opacity-70">
                          {themeOption.description}
                        </div>
                      </div>
                      {theme === themeOption.code && (
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Botón del menú hamburguesa */}
          <button
            onClick={openMenu}
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg relative"
          >
            <div className="space-y-0.5 sm:space-y-1">
              <div className="w-3.5 sm:w-4 h-0.5 bg-current"></div>
              <div className="w-3.5 sm:w-4 h-0.5 bg-current"></div>
              <div className="w-3.5 sm:w-4 h-0.5 bg-current"></div>
            </div>
          </button>
        </div>
      </nav>

      {/* Overlay del menú de pantalla completa */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[100] hidden flex-col md:flex-row"
        style={{ display: "none" }}
      >
        {/* Panel izquierdo - Gradiente con logo */}
        <div
          ref={leftPanelRef}
          className="w-full md:w-1/2 h-auto md:h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center relative overflow-hidden py-8 md:py-0"
        >
          {/* Logo con título en el menú */}
          <div ref={logoRef} className="relative z-10 text-center">
            <div className="flex flex-col items-center">
              <div
                className="text-white text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-bold leading-none"
                style={{ fontFamily: "ui-monospace, SFMono-Regular, monospace" }}
              >
                Luis Vera
              </div>
              <div className="flex items-center gap-2 md:gap-4 mt-2 md:mt-4">
                <div className="h-[1px] w-10 md:w-20 bg-white/30"></div>
                <div className="text-white/60 text-base md:text-lg lg:text-xl font-light tracking-widest uppercase">
                  Desarrollador FullStack
                </div>
                <div className="h-[1px] w-10 md:w-20 bg-white/30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel derecho - Navegación */}
        <div
          ref={rightPanelRef}
          className="w-full md:w-1/2 flex-1 md:h-full bg-white dark:bg-gray-900 flex flex-col relative"
        >
          {/* Botón de cerrar */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 text-gray-800 dark:text-white flex items-center justify-center hover:scale-110 transition-all duration-300 z-10"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Navegación principal */}
          <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-20 py-6 md:py-0">
            <nav className="space-y-2 sm:space-y-3 md:space-y-6">
              {menuItems.map((item, index) => (
                <div
                  key={item.href}
                  ref={(el) => (menuItemsRef.current[index] = el)}
                  className="opacity-0"
                >
                  <button
                    onClick={() => handleMenuItemClick(item.href)}
                    className="group block w-full text-left"
                  >
                    <span className="text-gray-800 dark:text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-sans tracking-tight hover:text-black dark:hover:text-gray-300 transition-colors duration-300 block">
                      {item.label}
                    </span>
                  </button>
                </div>
              ))}
            </nav>
          </div>

          {/* Controles inferiores */}
          <div className="px-6 sm:px-8 md:px-12 lg:px-20 pb-6 md:pb-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            {/* Selector de idioma */}
            <button
              onClick={toggleLangDropdown}
              className="flex items-center gap-2 md:gap-3 text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300 transition-colors duration-300"
            >
              <Image
                src={getCurrentLanguage().flag}
                alt="current language"
                className="w-5 h-3 md:w-6 md:h-4 object-cover rounded"
              />
              <span className="text-sm md:text-base lg:text-lg">{getCurrentLanguage().name}</span>
            </button>

            {/* Toggle modo noche */}
            <button
              onClick={toggleThemeDropdown}
              className="flex items-center gap-2 md:gap-3 text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300 transition-colors duration-300"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 md:w-5 md:h-5" />
              ) : (
                <Sun className="w-4 h-4 md:w-5 md:h-5" />
              )}
              <span className="text-sm md:text-base lg:text-lg">
                {theme === "light"
                  ? language === "es"
                    ? "Modo Oscuro"
                    : "Dark Mode"
                  : language === "es"
                  ? "Modo Claro"
                  : "Light Mode"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernNavbar;