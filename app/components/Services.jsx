import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useAppContext } from "@/components/context/AppContext";
import { translations } from "../utils/translations";

function Services() {
  const { language } = useAppContext();
  const t = translations[language];

  return (
    <div>
      <div id="services" className="w-full px-[12%] py-10 scroll-mt-20 ">
        <h4 className="text-center mb-2 text-lg font-Ovo">
          {t.services.subtitle}
        </h4>
        <h2 className="text-center text-5xl font-Ovo">{t.services.title}</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          {t.services.description}
        </p>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 my-10">
          {t.services.serviceData.map(
            ({ icon: Icon, title, description, link }, index) => (
              <div
                className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition-transform duration-500"
                key={index}
              >
                <div className="flex justify-center items-center bg-black p-3 w-[50px] rounded-xl">
                  <Icon className="w-10 text-white" />
                </div>
                <h3 className="text-lg my-4 text-gray-700">{title}</h3>
                <p className="text-sm text-gray-600 leading-5">{description}</p>
               
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;
