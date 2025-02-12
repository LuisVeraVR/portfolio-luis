"use client";

import { useAppContext } from "@/components/context/AppContext";
import AnimatedBackground from "../../app/components/AnimatedBackground";
import { useEffect } from "react";

export default function HtmlBodyWrapper({ children }) {
  const { theme, transitioning } = useAppContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      className={`
        relative
        ${theme === "dark" ? "dark" : ""}
        ${transitioning ? "opacity-0" : "opacity-100"}
        transition-opacity duration-200
        min-h-screen
      `}
    >
      <AnimatedBackground />
      <div
        className="
          bg-white/90
          dark:bg-gray-900/100
          transition-colors
          duration-200
          w-full
          min-h-screen
          relative
          z-10
        "
      >
        {children}
      </div>
    </div>
  );
}
