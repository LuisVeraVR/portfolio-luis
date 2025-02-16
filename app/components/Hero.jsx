import Image from "next/image";
import { assets } from "../../assets/assets";
import { ArrowRight, Download } from "lucide-react";
import { useAppContext } from "../../components/context/AppContext";
import { translations } from "../utils/translations";
import Link from "next/link";

function Hero() {
  const { language } = useAppContext();
  const t = translations[language].hero;

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.user_image || "/placeholder.svg"}
          alt=""
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo dark:text-white">
        {t.greeting}{" "}
        <Image
          src={assets.hand_icon || "/placeholder.svg"}
          alt=""
          className="w-6"
        />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo dark:text-white">
        {t.title}
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo dark:text-gray-300">
        {t.description}
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-white dark:text-black"
        >
          {t.cta1}
          <ArrowRight className="w-4" />
        </a>
        <a
          href="/curriculum.pdf"
          download="curriculum.pdf"
          className="px-10 py-3 border border-black rounded-full bg-white text-black flex items-center gap-2 dark:bg-gray-800 dark:text-white dark:border-white"
        >
          <Download className="w-4" />
          {t.cta2}
        </a>
      </div>
    </div>
  );
}

export default Hero;
