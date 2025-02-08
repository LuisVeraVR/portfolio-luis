"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  LogOut,
} from "lucide-react";

import { assets } from "@/assets/assets";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SkillProgress } from "@/components/ui/skill-progress";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { translations } from "@/app/utils/translations";
import { useAppContext } from "@/components/context/AppContext";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");
  const router = useRouter();
  const { language } = useAppContext(); 

  const resumeTexts = translations[language].resume;

  const fadeIn = {
    initial: { opacity: 0, },
    animate: { opacity: 1,  },
    exit: { opacity: 0,  },
    transition: { duration: 1 },
  };

  const handleExit = () => {
    router.push("/"); 
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AnimatePresence>
        <motion.div
          key="resume-page"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={fadeIn}
          className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4 sm:p-8"
        >
          <Card className="w-full max-w-6xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden relative">
            <div className="flex absolute right-4 gap-2 p-4">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={handleExit}
                className="mr-9 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <LogOut className="h-5 w-5" />
                <span className="sr-only">
                  {language === "en" ? "Logout" : "Salir"}
                </span>
              </Button>
            </div>
            <div className="md:flex">
              {/* Panel izquierdo */}
              <div className="md:w-1/3 bg-gradient-to-b from-soft-blue-500 to-soft-blue-700 p-8 text-white">
                <motion.div className="flex flex-col items-center" {...fadeIn}>
                  <div className="relative w-32 h-32 mb-4">
                    <Image
                      src={assets.user_image || "/placeholder.svg"}
                      alt="Foto de perfil"
                      className="rounded-full object-cover border-4 border-white"
                      fill
                    />
                  </div>
                  <h1 className="text-2xl font-bold font-Outfit">Luis Vera</h1>
                  <p className="mt-2 text-sm uppercase tracking-wide">
                    {language === "en" ? "Web Developer" : "Desarrollador Web"}
                  </p>
                </motion.div>
                <motion.div className="mt-8" {...fadeIn}>
                  <h2 className="text-lg font-semibold mb-4 font-Outfit">
                    {language === "en" ? "Contact" : "Contacto"}
                  </h2>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-2" />
                      <a
                        href="mailto:luis@example.com"
                        className="text-sm hover:underline"
                      >
                        luisveravr.dev@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-2" />
                      <span className="text-sm">+57 3233653285</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="text-sm">Cali, Colombia</span>
                    </div>
                    <div className="flex items-center">
                      <Github className="w-5 h-5 mr-2" />
                      <a
                        href="https://github.com/luisveravr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:underline"
                      >
                        github.com/luisveravr
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Linkedin className="w-5 h-5 mr-2" />
                      <a
                        href="https://linkedin.com/in/luisvera"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:underline"
                      >
                        linkedin.com/in/luisvera
                      </a>
                    </div>
                  </div>
                </motion.div>
                <motion.div className="mt-8" {...fadeIn}>
                  <h2 className="text-lg font-semibold font-Outfit mb-4">
                    {language === "en" ? "Skills" : "Habilidades"}
                  </h2>
                  <SkillProgress skill="JavaScript" level={85} />
                  <SkillProgress skill="Angular" level={80} />
                  <SkillProgress skill="React.js" level={80} />
                  <SkillProgress skill="Next.js" level={75} />
                  <SkillProgress skill="Laravel" level={70} />
                  <SkillProgress skill="PHP" level={70} />
                </motion.div>
              </div>
              {/* Panel derecho */}
              <div className="md:w-2/3 p-8 text-gray-800 dark:text-gray-200">
                <div className="flex space-x-4 mb-6">
                  <Button
                    className="font-Outfit dark:bg-soft-blue-700"
                    variant={activeTab === "experience" ? "default" : "outline"}
                    onClick={() => setActiveTab("experience")}
                  >
                    {resumeTexts.experience.title}
                  </Button>
                  <Button
                    className="font-Outfit dark:bg-soft-blue-700"
                    variant={activeTab === "education" ? "default" : "outline"}
                    onClick={() => setActiveTab("education")}
                  >
                    {resumeTexts.education.title}
                  </Button>
                  <Button
                    className="font-Outfit dark:bg-soft-blue-700"
                    variant={activeTab === "projects" ? "default" : "outline"}
                    onClick={() => setActiveTab("projects")}
                  >
                    {resumeTexts.projects.title}
                  </Button>
                </div>

                {activeTab === "experience" && (
                  <motion.section {...fadeIn}>
                    <h2 className="text-2xl font-bold mb-4 font-Outfit">
                      {resumeTexts.experience.title}
                    </h2>
                    <Card className="dark:bg-soft-blue-700 mb-5">
                      <CardHeader>
                        <CardTitle className="font-Outfit">
                          {resumeTexts.experience.fullStackTitle}
                        </CardTitle>
                        <CardDescription>
                          {resumeTexts.experience.fullStackPeriod}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{resumeTexts.experience.fullStackDescription}</p>
                      </CardContent>
                    </Card>
                    <Card className="mb-6 dark:bg-soft-blue-700">
                      <CardHeader>
                        <CardTitle className="font-Outfit">
                          {resumeTexts.experience.technicianTitle}
                        </CardTitle>
                        <CardDescription>
                          {resumeTexts.experience.technicianPeriod}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{resumeTexts.experience.technicianDescription}</p>
                      </CardContent>
                    </Card>
                  </motion.section>
                )}

                {activeTab === "education" && (
                  <motion.section {...fadeIn}>
                    <h2 className="text-2xl font-bold mb-4">
                      {resumeTexts.education.title}
                    </h2>
                    <Card className="dark:bg-soft-blue-700 mb-5">
                      <CardHeader>
                        <CardTitle className="font-Outfit">
                          {resumeTexts.education.university}
                        </CardTitle>
                        <CardDescription>
                          {resumeTexts.education.period}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{resumeTexts.education.description}</p>
                      </CardContent>
                    </Card>
                  </motion.section>
                )}

                {activeTab === "projects" && (
                  <motion.section {...fadeIn}>
                    <h2 className="text-2xl font-bold mb-4 font-Outfit">
                      {resumeTexts.projects.title}
                    </h2>
                    <Card className="dark:bg-soft-blue-700 mb-5">
                      <CardHeader>
                        <CardTitle className="font-Outfit">
                          {resumeTexts.projects.project1.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-2">
                          {resumeTexts.projects.project1.description}
                        </p>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {resumeTexts.projects.project1.button}
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="dark:bg-soft-blue-700 mb-5">
                      <CardHeader>
                        <CardTitle className="font-Outfit">
                          {resumeTexts.projects.project2.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-2">
                          {resumeTexts.projects.project2.description}
                        </p>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {resumeTexts.projects.project2.button}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.section>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
