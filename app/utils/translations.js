import {
  Code2,
  GraduationCap,
  FolderArchive,
  Globe2,
  Smartphone,
  Paintbrush2,
  Brush,
  Building2,
  Calendar,
  Briefcase,
  Award,
  Users
} from "lucide-react";

import dogAppImage from "../../assets/public/work-1.png";
import taskOrganizerImage from "../../assets/public/work-2.png";
import backOfficeImage from "../../assets/public/work-4.png";

export const translations = {
  es: {
    hero: {
      greeting: "¡Hola! Soy Luis Vera",
      title: "Desarrollador Fullstack",
      description: "Apasionado por la tecnología y el diseño, disfruto crear soluciones digitales que transformen ideas en experiencias innovadoras. Siempre estoy en búsqueda de nuevos desafíos y aprendizajes para seguir creciendo como profesional.",
      cta1: "¡Conversemos!",
      cta2: "Mi trabajo",
    },
    about: {
      introduction: "Introducción",
      title: "Sobre mí",
      description: "Full Stack Developer con experiencia en Angular, Next.js, Node.js, Laravel y Django. Experto en APIs, bases de datos SQL/NoSQL y despliegues en la nube con Docker y AWS. Me apasiona crear soluciones tecnológicas innovadoras y eficientes que generen un impacto real en los usuarios y las empresas.",
      tools: "Herramientas que uso:",
      
      // Stats section
      stats: [
        { label: "Años de Experiencia", value: "2+" },
        { label: "Proyectos Completados", value: "50+" },
        { label: "Disponibilidad del Sistema", value: "99.9%" },
        { label: "Satisfacción del Cliente", value: "90%+" }
      ],

      // Info cards con información actualizada del CV
      infoList: [
        {
          icon: Briefcase,
          title: "Experiencia",
          description: "2+ años como Fullstack Developer en Kalez S.A y soporte técnico",
        },
        {
          icon: GraduationCap,
          title: "Educación",
          description: "Tecnología en Desarrollo de Software (En curso) y Técnico en Sistemas",
        },
        {
          icon: Award,
          title: "Logros",
          description: "Optimización de BD 30%, Microservicios -25% carga servidor, 200+ tickets resueltos",
        },
      ],

      // Experience section
      experience: {
        title: "Experiencia Profesional",
        jobs: [
          {
            title: "Desarrollador FullStack",
            company: "Kalez S.A",
            period: "Agosto 2023 - Presente",
            location: "Cali, Colombia",
            achievements: [
              "Desarrollo de aplicaciones web con JavaScript, TypeScript, Angular, Laravel y Django en arquitectura de microservicios en AWS",
              "Diseño y optimización de bases de datos MySQL, mejorando el rendimiento en un 30%",
              "Implementación de microservicios que redujeron la carga del servidor en un 25%",
              "Migración de módulos críticos a la nube, alcanzando una disponibilidad del 99.9%"
            ]
          },
          {
            title: "Soporte y Mantenimiento de Software",
            company: "Instituto Técnico Colombiano",
            period: "Agosto 2022 - Agosto 2023",
            location: "Cali, Colombia",
            achievements: [
              "Administración y personalización de la plataforma Moodle, mejorando la experiencia de usuario en un 20%",
              "Automatización de procesos con scripting, reduciendo en un 40% los tiempos de tareas repetitivas",
              "Mantenimiento de servidores físicos, disminuyendo fallas en un 50%",
              "Resolución de más de 200 incidencias técnicas con índice de satisfacción superior al 90%"
            ]
          }
        ]
      },

      // Education section
      education: {
        title: "Educación",
        degrees: [
          {
            degree: "Tecnología en Desarrollo de Software",
            institution: "Fundación Universitaria Católica Lumen Gentium",
            period: "2023 - Actualmente",
            location: "Cali",
            status: "En curso"
          },
          {
            degree: "Técnico en Mantenimiento de Sistemas",
            institution: "Instituto Técnico Colombiano",
            period: "2021 - 2022",
            location: "Cali",
            status: "Completado"
          }
        ]
      },

      // Skills section
      skills: {
        title: "Habilidades",
        technical: "Stack Tecnológico",
        technicalList: [
          "JavaScript", "TypeScript", "Angular", "Next.js", "React",
          "Tailwind CSS", "PrimeNG", "GSAP", "Framer Motion",
          "Node.js", "Express", "Laravel", "Django",
          "MySQL", "MongoDB", "APIs REST",
          "Git", "GitHub", "Docker", "Railway", "AWS S3",
          "Pruebas Unitarias", "Pruebas de Integración",
          "Scrum", "Kanban", "UX/UI", "Figma"
        ],
        soft: "Habilidades Blandas",
        softList: [
          "Comunicación Efectiva",
          "Trabajo en Equipo",
          "Resolución de Problemas",
          "Adaptabilidad",
          "Gestión del Tiempo",
          "Pensamiento Crítico",
          "Liderazgo",
          "Empatía",
          "Creatividad",
          "Proactividad"
        ]
      },

      // Languages
      languages: {
        title: "Idiomas",
        list: [
          { name: "Español", level: "Nativo" },
          { name: "Inglés", level: "B1 - Intermedio" }
        ]
      }
    },
    services: {
      title: "Mis habilidades",
      subtitle: "¿En qué te puedo ayudar?",
      description: "Soy un desarrollador Fullstack con 2+ años de experiencia en el desarrollo de aplicaciones web y móviles. Experiencia en creación de software de calidad, escalable y mantenible.",
      serviceData: [
        {
          icon: Globe2,
          title: "Desarrollo Web",
          description: "Desarrollo de aplicaciones web robustas con Angular, React, Next.js y frameworks backend modernos",
          link: "",
        },
        {
          icon: Smartphone,
          title: "Aplicaciones Móviles",
          description: "Creación de apps móviles nativas y multiplataforma con React Native y tecnologías modernas",
          link: "",
        },
        {
          icon: Paintbrush2,
          title: "Diseño UI/UX",
          description: "Diseño de interfaces intuitivas y experiencias de usuario excepcionales con Figma y herramientas modernas",
          link: "",
        },
        {
          icon: Building2,
          title: "Soluciones Empresariales",
          description: "Desarrollo de sistemas BackOffice, microservicios y arquitecturas cloud con AWS",
          link: "",
        },
      ]
    },
    work: {
      title: "Mi Trabajo",
      subtitle: "¿Te gustaría ver mi trabajo?",
      description: "Explora algunos de los proyectos que he creado, combinando mis habilidades y pasión para dar vida a experiencias digitales únicas.",
      workData: [
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
      ]
    },
    contact: {
      title: "Contáctame en unos simples pasos",
      subtitle: "¿Quieres charlar conmigo?",
      description: "Responderé con gusto a tus comentarios, sugerencias o dudas. No dudes en contactarme. Estaré pendiente de cada uno de los mensajes para que podamos estar en contacto directo.",
      namePlaceholder: "Ingresa tu nombre",
      emailPlaceholder: "Ingresa tu email",
      messagePlaceholder: "Ingresa tu mensaje",
      errors: {
        requiredFields: "Por favor, complete todos los campos antes de enviar el formulario.",
        formSubmissionError: "Error en el envío del formulario.",
        formSubmissionErrorAgain: "Hubo un error al enviar el formulario. Por favor, intente nuevamente.",
        nameInvalid: "Por favor, ingresa tu nombre.",
        emailInvalid: "Por favor, ingresa un email válido.",
        messageInvalid: "Por favor, escribe tu mensaje.",
      },
    },
    resume: {
      experience: {
        title: "Experiencia",
        fullStackTitle: "FullStack Developer - Kalez S.A",
        fullStackPeriod: "Agosto 2023 - Presente",
        fullStackDescription: "Desarrollo de aplicaciones con Angular, TypeScript, Laravel, Django. Optimización de BD MySQL 30%, implementación de microservicios, disponibilidad 99.9%.",
        technicianTitle: "Soporte y Mantenimiento - Instituto Técnico Colombiano",
        technicianPeriod: "Agosto 2022 - Agosto 2023",
        technicianDescription: "Administración Moodle, automatización de procesos (40% reducción), mantenimiento de servidores, 200+ tickets resueltos con 90%+ satisfacción."
      },
      education: {
        title: "Educación",
        university: "Fundación Universitaria Católica Lumen Gentium",
        period: "Tecnología en Desarrollo de Software, 2023 - Presente",
        description: "Estudios enfocados en programación, algoritmos, estructuras de datos y desarrollo de software en general.",
        technical: "Instituto Técnico Colombiano",
        technicalPeriod: "Técnico en Mantenimiento de Sistemas, 2021 - 2022",
        technicalDescription: "Formación técnica en sistemas, redes, mantenimiento de hardware y software."
      },
      projects: {
        title: "Proyectos",
        project1: {
          title: "BackOffice - Kalez S.A",
          description: "Sistema de gestión empresarial con Angular 17, Laravel, MySQL. Arquitectura de microservicios en AWS con 99.9% disponibilidad.",
          button: "Ver proyecto"
        },
        project2: {
          title: "App para Adopción de Perritos",
          description: "Aplicación móvil con React Native, Express.js, MongoDB. Sistema de autenticación con Clerk y diseño responsive.",
          button: "Ver proyecto"
        }
      },
    },
  },
  en: {
    hero: {
      greeting: "Hello! I'm Luis Vera",
      title: "Fullstack Developer",
      description: "Passionate about technology and design, I enjoy creating digital solutions that transform ideas into innovative experiences. I'm always looking for new challenges and learning opportunities to continue growing as a professional.",
      cta1: "Let's talk!",
      cta2: "My work",
    },
    about: {
      introduction: "Introduction",
      title: "About me",
      description: "Full Stack Developer with experience in Angular, Next.js, Node.js, Laravel and Django. Expert in APIs, SQL/NoSQL databases and cloud deployments with Docker and AWS. I'm passionate about creating innovative and efficient technological solutions that generate real impact for users and companies.",
      tools: "Tools I use:",
      
      // Stats section
      stats: [
        { label: "Years of Experience", value: "2+" },
        { label: "Completed Projects", value: "50+" },
        { label: "System Availability", value: "99.9%" },
        { label: "Client Satisfaction", value: "90%+" }
      ],

      // Info cards with updated CV info
      infoList: [
        {
          icon: Briefcase,
          title: "Experience",
          description: "2+ years as Fullstack Developer at Kalez S.A and technical support",
        },
        {
          icon: GraduationCap,
          title: "Education",
          description: "Software Development Technology (In progress) and Systems Technician",
        },
        {
          icon: Award,
          title: "Achievements",
          description: "30% DB optimization, Microservices -25% server load, 200+ resolved tickets",
        },
      ],

      // Experience section
      experience: {
        title: "Professional Experience",
        jobs: [
          {
            title: "FullStack Developer",
            company: "Kalez S.A",
            period: "August 2023 - Present",
            location: "Cali, Colombia",
            achievements: [
              "Web application development with JavaScript, TypeScript, Angular, Laravel and Django in AWS microservices architecture",
              "MySQL database design and optimization, improving performance by 30%",
              "Microservices implementation that reduced server load by 25%",
              "Critical modules migration to cloud, achieving 99.9% availability"
            ]
          },
          {
            title: "Software Support and Maintenance",
            company: "Instituto Técnico Colombiano",
            period: "August 2022 - August 2023",
            location: "Cali, Colombia",
            achievements: [
              "Moodle platform administration and customization, improving user experience by 20%",
              "Process automation with scripting, reducing repetitive task times by 40%",
              "Physical server maintenance, decreasing failures by 50%",
              "Resolution of over 200 technical incidents with satisfaction rate above 90%"
            ]
          }
        ]
      },

      // Education section
      education: {
        title: "Education",
        degrees: [
          {
            degree: "Software Development Technology",
            institution: "Fundación Universitaria Católica Lumen Gentium",
            period: "2023 - Currently",
            location: "Cali",
            status: "In progress"
          },
          {
            degree: "Systems Maintenance Technician",
            institution: "Instituto Técnico Colombiano",
            period: "2021 - 2022",
            location: "Cali",
            status: "Completed"
          }
        ]
      },

      // Skills section
      skills: {
        title: "Skills",
        technical: "Technology Stack",
        technicalList: [
          "JavaScript", "TypeScript", "Angular", "Next.js", "React",
          "Tailwind CSS", "PrimeNG", "GSAP", "Framer Motion",
          "Node.js", "Express", "Laravel", "Django",
          "MySQL", "MongoDB", "REST APIs",
          "Git", "GitHub", "Docker", "Railway", "AWS S3",
          "Unit Testing", "Integration Testing",
          "Scrum", "Kanban", "UX/UI", "Figma"
        ],
        soft: "Soft Skills",
        softList: [
          "Effective Communication",
          "Teamwork",
          "Problem Solving",
          "Adaptability",
          "Time Management",
          "Critical Thinking",
          "Leadership",
          "Empathy",
          "Creativity",
          "Proactivity"
        ]
      },

      // Languages
      languages: {
        title: "Languages",
        list: [
          { name: "Spanish", level: "Native" },
          { name: "English", level: "B1 - Intermediate" }
        ]
      }
    },
    services: {
      title: "My skills",
      subtitle: "How can I help you?",
      description: "I am a Fullstack developer with 2+ years of experience in web and mobile application development. Experience in creating quality, scalable, and maintainable software.",
      serviceData: [
        {
          icon: Globe2,
          title: "Web Development",
          description: "Development of robust web applications with Angular, React, Next.js and modern backend frameworks",
          link: "",
        },
        {
          icon: Smartphone,
          title: "Mobile Applications",
          description: "Creation of native and cross-platform mobile apps with React Native and modern technologies",
          link: "",
        },
        {
          icon: Paintbrush2,
          title: "UI/UX Design",
          description: "Design of intuitive interfaces and exceptional user experiences with Figma and modern tools",
          link: "",
        },
        {
          icon: Building2,
          title: "Enterprise Solutions",
          description: "Development of BackOffice systems, microservices and cloud architectures with AWS",
          link: "",
        },
      ]
    },
    work: {
      title: "My Work",
      subtitle: "Would you like to see my work?",
      description: "Explore some of the projects I've created, combining my skills and passion to bring unique digital experiences to life.",
      workData: [
        {
          title: "Doggie App",
          description: "Mobile application for dog lovers built with React Native, Express.js, Clerk, and MongoDB.",
          image: dogAppImage,
          link: "#",
          technologies: ["React Native", "Express.js", "Clerk", "MongoDB"],
          icon: Smartphone,
        },
        {
          title: "Task Organizer",
          description: "Web application for task management built with Next.js, TypeScript, Express.js, Zod, and MongoDB.",
          image: taskOrganizerImage,
          link: "#",
          technologies: ["Next.js", "TypeScript", "Express.js", "Zod", "MongoDB"],
          icon: Calendar,
        },
        {
          title: "Back Office",
          description: "Internal management system built with Angular 17, Express.js, MySQL, Clerk, and AWS.",
          image: backOfficeImage,
          link: "#",
          technologies: ["Angular 17", "Express.js", "MySQL", "Clerk", "AWS"],
          icon: Building2,
        },
      ]
    },
    contact: {
      title: "Contact me in a few simple steps",
      subtitle: "Want to chat with me?",
      description: "I'll gladly respond to your comments, suggestions, or questions. Don't hesitate to contact me. I'll be attentive to each message so we can be in direct contact.",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email",
      messagePlaceholder: "Enter your message",
      errors: {
        requiredFields: "Please complete all fields before submitting the form.",
        formSubmissionError: "Error sending the form.",
        formSubmissionErrorAgain: "There was an error sending the form. Please try again.",
        nameInvalid: "Please enter your name.",
        emailInvalid: "Please enter a valid email.",
        messageInvalid: "Please write your message.",
      },
    },
    resume: {
      experience: {
        title: "Experience",
        fullStackTitle: "FullStack Developer - Kalez S.A",
        fullStackPeriod: "August 2023 - Present",
        fullStackDescription: "Application development with Angular, TypeScript, Laravel, Django. MySQL DB optimization 30%, microservices implementation, 99.9% availability.",
        technicianTitle: "Support and Maintenance - Instituto Técnico Colombiano",
        technicianPeriod: "August 2022 - August 2023",
        technicianDescription: "Moodle administration, process automation (40% reduction), server maintenance, 200+ tickets resolved with 90%+ satisfaction."
      },
      education: {
        title: "Education",
        university: "Fundación Universitaria Católica Lumen Gentium",
        period: "Software Development Technology, 2023 - Present",
        description: "Studies focused on programming, algorithms, data structures, and overall software development.",
        technical: "Instituto Técnico Colombiano",
        technicalPeriod: "Systems Maintenance Technician, 2021 - 2022",
        technicalDescription: "Technical training in systems, networks, hardware and software maintenance."
      },
      projects: {
        title: "Projects",
        project1: {
          title: "BackOffice - Kalez S.A",
          description: "Business management system with Angular 17, Laravel, MySQL. Microservices architecture on AWS with 99.9% availability.",
          button: "View project"
        },
        project2: {
          title: "Dog Adoption App",
          description: "Mobile application with React Native, Express.js, MongoDB. Authentication system with Clerk and responsive design.",
          button: "View project"
        }
      },
    },
  },
};