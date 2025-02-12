// app/layout.js
import "./globals.css";
import { Outfit, Ovo } from "next/font/google";
import { AppProvider } from "@/components/context/AppContext";
import HtmlBodyWrapper from "@/components/hook/HtmlBodyWrapper"; // el wrapper cliente
import { assets } from "@/assets/assets";

// Fuentes
const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const ovo = Ovo({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Luis Vera",
  description: "Desarrollador web con Next.js y React",
    icon: "/assets/usuario.svg"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${outfit.className}
          ${ovo.className}
          bg-white
          dark:bg-gray-900
          transition-colors
          duration-200
          antialiased
          leading-8
          overflow-x-hidden
        `}
      >
        <AppProvider>
          <HtmlBodyWrapper>{children}</HtmlBodyWrapper>
        </AppProvider>
      </body>
    </html>
  );
}
