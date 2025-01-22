import React from "react";
import { ArrowRight, Smartphone, Calendar, Building2 } from 'lucide-react';
import Image from "next/image";
import dogAppImage from "../../assets/image_perritos.jpg";
import taskOrganizerImage from "../../assets/organizador_example.png";
import backOfficeImage from "../../assets/back-office.jpg";

const workData = [
  {
    title: "App de Perritos",
    description: "Aplicación móvil para amantes de los perros con React Native, Express.js, Clerk y MongoDB.",
    image: dogAppImage,
    link: "#",
    technologies: ["React Native", "Express.js", "Clerk", "MongoDB"],
    icon: Smartphone
  },
  {
    title: "Organizador de Tareas",
    description: "Aplicación web de gestión de tareas con Next.js, TypeScript, Express.js, Zod y MongoDB.",
    image: taskOrganizerImage,
    link: "#",
    technologies: ["Next.js", "TypeScript", "Express.js", "Zod", "MongoDB"],
    icon: Calendar
  },
  {
    title: "Back Office",
    description: "Sistema de gestión interna con Angular 17, Express.js, MySQL, Clerk y AWS.",
    image: backOfficeImage,
    link: "#",
    technologies: ["Angular 17", "Express.js", "MySQL", "Clerk", "AWS"],
    icon: Building2
  },
];

function Work() {
  return (
    <div>
      <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-Ovo">
          ¿Te gustaría ver mi trabajo?
        </h4>
        <h2 className="text-center text-5xl font-Ovo mb-5">Mi Trabajo</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          Explora algunos de los proyectos que he creado, combinando mis habilidades
          y pasión para dar vida a experiencias digitales únicas.
        </p>
        
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 my-10">
          {workData.map(({ title, description, image, link, technologies, icon: Icon }, index) => (
            <div
              className="border-gray-400 rounded-lg px-8 py-12 hover:shadow-black overflow-hidden bg-white cursor-pointer border hover:-translate-y-1 transition-transform duration-500"
              key={index}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Icon className="text-white w-16 h-16" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={link} 
                  className="inline-flex items-center gap-2 text-sm font-medium text-black transition-colors duration-300"
                >
                  Ver proyecto <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;

