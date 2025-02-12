import React from "react";
import Image from "next/image";
import { assets, toolsData } from "../../assets/assets";
import { useAppContext } from "@/components/context/AppContext";
import { translations } from "../utils/translations";

function About() {
  const { language } = useAppContext();
  const t = translations[language];

  return (
    <div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 flex justify-center"
    >
      <div className="max-w-6xl w-full">
        <h4 className="text-center mb-2 text-lg font-Ovo dark:text-white">
          {t.about.introduction}
        </h4>
        <h2 className="text-center text-5xl font-Ovo dark:text-white">{t.about.title}</h2>

        <div className="flex w-full flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row items-center justify-center gap-10 lg:gap-10 xl:gap-20 my-20 dark:text-white">
          <div className="w-64 sm:w-80 rounded-3xl max-w-none">
            <Image
              src={assets.larger_user_image}
              alt="user"
              className="w-full rounded-3xl"
            />
          </div>
          <div className="flex-1 max-w-2xl">
            <p className="mb-10 font-Ovo">{t.about.description}</p>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {t.about.infoList.map(
                ({ icon: Icon, title, description }, index) => (
                  <li
                    key={index}
                    className="group border-[0.5px] border-gray-400 rounded-xl p-6 
                 cursor-pointer hover:bg-lightHover hover:-translate-y-1 
                 transition-transform duration-500 hover:shadow-black"
                  >
                    <Icon className="w-8 h-8 dark:text-white text-gray-700 group-hover:dark:text-gray-700" />
                    <h3 className="my-4 font-semibold dark:text-white text-gray-700 group-hover:dark:text-gray-700">
                      {title}
                    </h3>
                    <p className="text-gray-600 dark:text-white text-sm group-hover:dark:text-gray-700">
                      {description}
                    </p>
                  </li>
                )
              )}
            </ul>
            <h4 className="my-6 text-gray-700 dark:text-white font-Ovo">
              {t.about.tools}
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
