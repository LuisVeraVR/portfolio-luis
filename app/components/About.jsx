import React, { useState } from "react";
import Image from "next/image";
import { assets, toolsData } from "../../assets/assets";
import { useAppContext } from "@/components/context/AppContext";
import { translations } from "../utils/translations";
import { ChevronRight, Download } from "lucide-react";

function About() {
  const { language } = useAppContext();
  const [activeTab, setActiveTab] = useState("experience");
  const t = translations[language]?.about ?? translations["es"].about;

  return (
    <div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 flex justify-center"
    >
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400">
            {t.introduction}
          </h4>
          <h2 className="text-5xl font-Ovo dark:text-white mb-4">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-800 dark:via-white to-transparent mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col xl:flex-row items-start justify-center gap-12 mb-20">
          {/* Left Column - Image & Stats */}
          <div className="w-full xl:w-auto flex flex-col items-center xl:items-start">
            {/* Profile Image with overlay effect */}
            <div className="relative group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-900 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative w-64 sm:w-80 rounded-3xl overflow-hidden">
                <Image
                  src={assets.larger_user_image}
                  alt="Luis Vera"
                  className="w-full rounded-3xl transform transition duration-500 group-hover:scale-105"
                />
                {/* Overlay with name */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold">Luis Vera</h3>
                  <p className="text-white/80 text-sm">Fullstack Developer</p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            {t.stats && (
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                {t.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 text-center hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Download CV Button */}
            <button className="mt-8 w-full max-w-sm flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <Download className="w-5 h-5" />
              <span className="font-semibold">
                {language === "es" ? "Descargar CV" : "Download CV"}
              </span>
            </button>
          </div>

          {/* Right Column - Content */}
          <div className="flex-1 max-w-2xl">
            {/* Description */}
            <p className="mb-10 font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {t.description}
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {t.infoList.map(({ icon: Icon, title, description }, i) => (
                <div
                  key={i}
                  className="group relative border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800/50 dark:hover:to-gray-900/50 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100 dark:from-gray-800 to-transparent rounded-bl-full opacity-50"></div>
                  <Icon className="w-8 h-8 text-gray-700 dark:text-white mb-4 relative z-10" />
                  <h3 className="font-bold text-gray-800 dark:text-white mb-2 relative z-10">
                    {title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm relative z-10">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            {/* Tabs Section */}
            <div className="mb-8">
              {/* Tab Headers */}
              <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
                {[
                  { id: "experience", label: language === "es" ? "Experiencia" : "Experience" },
                  { id: "education", label: language === "es" ? "Educación" : "Education" },
                  { id: "skills", label: language === "es" ? "Habilidades" : "Skills" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 font-semibold transition-all duration-300 relative ${
                      activeTab === tab.id 
                        ? "text-gray-900 dark:text-white" 
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[200px]">
                {/* Experience Tab */}
                {activeTab === "experience" && t.experience && (
                  <div className="space-y-6">
                    {t.experience.jobs.slice(0, 2).map((job, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                          <span className="text-lg font-bold text-gray-700 dark:text-white">
                            {i + 1}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            {job.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            {job.company} • {job.period}
                          </p>
                          <ul className="space-y-1">
                            {job.achievements.slice(0, 2).map((achievement, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Education Tab */}
                {activeTab === "education" && t.education && (
                  <div className="space-y-6">
                    {t.education.degrees.map((edu, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                          <span className="text-lg font-bold text-gray-700 dark:text-white">
                            {i + 1}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-bold text-gray-900 dark:text-white">
                                {edu.degree}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {edu.institution}
                              </p>
                              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                                {edu.period}
                              </p>
                            </div>
                            <span className={`px-3 py-1 text-xs rounded-full ${
                              edu.status === "En curso" || edu.status === "In progress"
                                ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                                : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            }`}>
                              {edu.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Skills Tab */}
                {activeTab === "skills" && t.skills && (
                  <div>
                    {t.skills.technicalList && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                          {t.skills.technical}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {t.skills.technicalList.slice(0, 12).map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {t.skills.softList && (
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                          {t.skills.soft}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {t.skills.softList.slice(0, 6).map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Tools Section */}
            <div>
              <h4 className="mb-4 text-gray-700 dark:text-white font-Ovo">
                {t.tools}
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                {toolsData.map((tool, idx) => (
                  <div
                    key={idx}
                    className="group relative flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-500 dark:hover:border-gray-400 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                  >
                    <Image src={tool} alt="" className="w-5 sm:w-7" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;