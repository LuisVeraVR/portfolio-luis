import React from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";
import { ArrowRight, Download } from "lucide-react";

function Hero() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        ¡Hola! Soy Luis Vera{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        desarrollador Fullstack orgullosamente caleño.
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Apasionado por la tecnología y el diseño, disfruto crear soluciones
        digitales que transformen ideas en experiencias innovadoras. Siempre
        estoy en búsqueda de nuevos desafíos y aprendizajes para seguir
        creciendo como profesional.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          ¡Conversemos!
          <ArrowRight className="w-4" />
        </a>
        <a
          href="/sample"
          className="px-10 py-3 border border-black rounded-full bg-white text-black flex items-center gap-2"
        >
          Mi trabajo
          <Download className="w-4" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
