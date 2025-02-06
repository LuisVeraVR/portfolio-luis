"use client";

import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

import { AppProvider, useAppContext } from "../components/context/AppContext";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const ovo = Ovo({
  weight: ["400"],
  subsets: ["latin"],
});

function HtmlBodyWrapper({ children }) {
  const { theme, transitioning } = useAppContext();

  return (
    <html lang="en" className={`scroll-smooth ${theme === "dark" ? "dark" : ""}`}>
      <body
        className={`
          ${outfit.className}
          ${ovo.className}
          antialiased 
          leading-8 
          overflow-x-hidden
          transition-colors 
          duration-200 
          ease-in-out
          bg-white
          dark:bg-gray-900
        `}
      >
        <div
          className={`
            transition-opacity
            duration-200
            ${transitioning ? "opacity-0" : "opacity-100"}
          `}
        >
          {children}
        </div>
      </body>
    </html>
  );
}

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <HtmlBodyWrapper>{children}</HtmlBodyWrapper>
    </AppProvider>
  );
}
