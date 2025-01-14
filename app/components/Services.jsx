import React from "react";
import Image from "next/image";
import { serviceData } from "../../assets/assets";
import { ArrowRight } from "lucide-react";

function Services() {
  return (
    <div>
      <div id="services" className="w-full px-[12%] py-10 scroll-mt-20 ">
        <h4 className="text-center mb-2 text-lg font-Ovo">
          ¿En qué te puedo ayudar?
        </h4>
        <h2 className="text-center text-5xl font-Ovo">Mis habilidades</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          Soy un desarrollador Fullstack con 2 (dos) años de experiencia en el
          desarrollo de aplicaciones web y móviles. Experiencia en creacion de
          software de calidad, escalable y mantenible.
        </p>
        <div className="grid grid-cols-4 gap-6 my-10">
            {serviceData.map(({icon, title, description, link}, index) => (
                <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition-transform duration-500" key={index}>
                    <Image src={icon} alt="" className="w-10" />
                    <h3 className="text-lg my-4 text-gray-700">{title}</h3>
                    <p className="text-sm text-gray-600 leading-5">
                        {description}
                    </p>
                    <a href={link} className="flex items-center gap-2 text-sm mt-5">Leer más <ArrowRight className="w-4"/></a>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
