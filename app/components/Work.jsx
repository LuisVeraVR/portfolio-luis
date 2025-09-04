import React from "react";
import Image from "next/image";
import { useAppContext } from "../../components/context/AppContext";

import { translations } from "../utils/translations";

function Work() {
  const { language } = useAppContext();
  const t =
    translations[language]?.work ??
     translations["es"].work;

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo dark:text-white">{t.subtitle}</h4>
      <h2 className="text-center text-5xl font-Ovo mb-5 dark:text-white">{t.title}</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo dark:text-white">
        {t.description}
      </p>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 my-10">
  {t.workData.map(
    (
      { title, description, image, link, technologies, icon: Icon },
      index
    ) => (
      <div
        key={index}
        className="group border border-gray-400 rounded-lg px-8 py-12 
                   bg-white dark:bg-transparent dark:text-white 
                   dark:hover:text-gray-700 dark:hover:bg-white 
                   cursor-pointer hover:-translate-y-1 hover:shadow-black transition-transform duration-500"
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Icon className="w-16 h-16 text-white group-hover:dark:text-gray-700" />
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:dark:text-gray-700">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-white group-hover:dark:text-gray-700 mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          
        </div>
      </div>
    )
  )}
</div>

    </div>
  );
}

export default Work;
