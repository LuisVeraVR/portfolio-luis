import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "../../assets/assets";

function About() {
  return (
    <div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 flex justify-center"
    >
      <div className="max-w-6xl w-full">
        <h4 className="text-center mb-2 text-lg font-Ovo">Introducción</h4>
        <h2 className="text-center text-5xl font-Ovo">Sobre mí</h2>

        <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-20 my-20">
          <div className="w-64 sm:w-80 rounded-3xl max-w-none">
            <Image
              src={assets.user_image}
              alt="user"
              className="w-full rounded-3xl"
            />
          </div>
          <div className="flex-1 max-w-2xl">
            <p className="mb-10 font-Ovo">
              Como desarrollador Fullstack originario de Cali, combino mi
              entusiasmo por la innovación tecnológica con un toque creativo. Mi
              trabajo se ha centrado en iniciativas que trascienden límites y
              brindan propuestas digitales de última generación. Considero que
              cada fragmento de código es un portal para redefinir cómo los
              usuarios interactúan en línea y, sobre todo, para transformar
              conceptos en vivencias únicas.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {infoList.map(
                ({ icon: Icon, iconDark, title, description }, index) => (
                  <li
                    className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition-transform duration-500 hover:shadow-black"
                    key={index}
                  >
                    {/* Icon es ahora un componente de Lucide */}
                    <Icon className="w-8 h-8 text-gray-700" />
                    <h3 className="my-4 font-semibold text-gray-700">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm">{description}</p>
                  </li>
                )
              )}
            </ul>
            <h4 className="my-6 text-gray-700 font-Ovo">
              Herramientas que uso:
            </h4>
            <ul className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center sm:justify-start">
              {toolsData.map((tool, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:shadow-black hover:-translate-y-1 transition-transform duration-500"
                >
                  <Image src={tool} alt="" className="w-5 sm:w-7" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
