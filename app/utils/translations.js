import {
  Code2,
  GraduationCap,
  FolderArchive,
  Globe2,
  Smartphone,
  Paintbrush2,
  Brush,
  Building2,
  Calendar
} from "lucide-react";

import dogAppImage from "../../assets/public/work-1.png";
import taskOrganizerImage from "../../assets/public/work-2.png";
import backOfficeImage from "../../assets/public/work-4.png";

export const translations = {
  es: {
    hero: {
      greeting: "¡Hola! Soy Luis Vera",
      title: "desarrollador frontend orgullosamente caleño.",
      description: "Apasionado por la tecnología y el diseño, disfruto crear soluciones digitales que transformen ideas en experiencias innovadoras. Siempre estoy en búsqueda de nuevos desafíos y aprendizajes para seguir creciendo como profesional.",
      cta1: "¡Conversemos!",
      cta2: "Mi trabajo",
    },
    about: {
      title: "Sobre mí",
      introduction: "Introducción",
      description: "Como desarrollador Fullstack originario de Cali, combino mi entusiasmo por la innovación tecnológica con un toque creativo. Mi trabajo se ha centrado en iniciativas que trascienden límites y brindan propuestas digitales de última generación. Considero que cada fragmento de código es un portal para redefinir cómo los usuarios interactúan en línea y, sobre todo, para transformar conceptos en vivencias únicas.",
      tools: "Herramientas que uso:",
      infoList: [
        {
          icon: Code2,
          iconDark: Code2,
          title: "Tecnologías",
          description: "Angular, React, JavaScript, TypeScript, Next.js, HTML, CSS"
        },
        {
          icon: GraduationCap,
          iconDark: GraduationCap,
          title: "Educación",
          description: "Graduado en Tecnología en Desarrollo de Software..."
        },
        {
          icon: FolderArchive,
          iconDark: FolderArchive,
          title: "Proyectos",
          description: "He trabajado en 2 proyectos"
        }
      ]
    },
    services: {
      title: "Mis habilidades",
      subtitle: "¿En qué te puedo ayudar?",
      description: "Soy un desarrollador Frontend con 2 (dos) años de experiencia en el desarrollo de aplicaciones web y móviles. Experiencia en creación de software de calidad, escalable y mantenible.",
      serviceData: [
        {
          icon: Globe2,
          title: "Diseño Web",
          description: "El desarrollo web implica construir, programar y optimizar sitios web...",
          link: "",
        },
        {
          icon: Smartphone,
          title: "Aplicaciones Móviles",
          description: "El desarrollo de aplicaciones móviles consiste en crear software para dispositivos móviles...",
          link: "",
        },
        {
          icon: Paintbrush2,
          title: "Diseño UI/UX",
          description: "El diseño UI/UX se enfoca en crear experiencias de usuario intuitivas y atractivas...",
          link: "",
        },
        {
          icon: Brush,
          title: "Diseño Gráfico",
          description: "Soluciones creativas de diseño para mejorar la comunicación visual...",
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
        fullStackTitle: "FullStack Developer",
        fullStackPeriod: "Agosto 2023 - Presente",
        fullStackDescription: "Desarrollo de BackOffice personalizada con Angular, Typescript, Primeng, Laravel Eloquent, MySQL.",
        technicianTitle: "Técnico de sistemas",
        technicianPeriod: "Enero 2022 - Agosto 2023",
        technicianDescription: "Soporte técnico a usuarios, mantenimiento de hardware y software, administración de servidores y redes."
      },
      education: {
        title: "Educación",
        university: "Universidad Católica Lumen Gentium",
        period: "Tecnología en Desarrollo de Software, 2022 - Presente",
        description: "Estudios enfocados en programación, algoritmos, estructuras de datos y desarrollo de software en general."
      },
      projects: {
        title: "Proyectos",
        project1: {
          title: "BackOffice - Sneakerverse",
          description: "Plataforma de comercio electrónico para la venta de zapatillas, con integración de pasarelas de pago y gestión de inventario.",
          button: "Ver proyecto"
        },
        project2: {
          title: "App para Adopción de Perritos",
          description: "Aplicación de adopción de mascotas, con integración de pasarelas de pago y gestión de inventario.",
          button: "Ver proyecto"
        }
      },
    },
  },
  en: {
    hero: {
      greeting: "Hello! I'm Luis Vera",
      title: "a proud Cali-born frontend developer.",
      description: "Passionate about technology and design, I enjoy creating digital solutions that transform ideas into innovative experiences. I'm always looking for new challenges and learning opportunities to continue growing as a professional.",
      cta1: "Let's talk!",
      cta2: "My work",
    },
    about: {
      title: "About me",
      introduction: "Introduction",
      description: "As a Fullstack developer from Cali, I combine my enthusiasm for technological innovation with a creative touch. My work has focused on initiatives that transcend boundaries and provide cutting-edge digital proposals. I believe that each piece of code is a portal to redefine how users interact online and, above all, to transform concepts into unique experiences.",
      tools: "Tools I use:",
      infoList: [
        {
          icon: Code2,
          iconDark: Code2,
          title: "Technologies",
          description: "Angular, React, JavaScript, TypeScript, Next.js, HTML, CSS"
        },
        {
          icon: GraduationCap,
          iconDark: GraduationCap,
          title: "Education",
          description: "Graduated in Software Development Technology..."
        },
        {
          icon: FolderArchive,
          iconDark: FolderArchive,
          title: "Projects",
          description: "I have worked on 2 projects"
        }
      ]
    },
    services: {
      title: "My skills",
      subtitle: "How can I help you?",
      description: "I am a Frontend developer with 2 (two) years of experience in web and mobile application development. Experience in creating quality, scalable, and maintainable software.",
      serviceData: [
        {
          icon: Globe2,
          title: "Web Design",
          description: "Web development involves building, programming, and optimizing websites...",
          link: "",
        },
        {
          icon: Smartphone,
          title: "Mobile Applications",
          description: "Mobile app development consists of creating software for mobile devices...",
          link: "",
        },
        {
          icon: Paintbrush2,
          title: "UI/UX Design",
          description: "UI/UX design focuses on creating intuitive and attractive user experiences...",
          link: "",
        },
        {
          icon: Brush,
          title: "Graphic Design",
          description: "Creative design solutions to enhance visual communication...",
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
        fullStackTitle: "FullStack Developer",
        fullStackPeriod: "August 2023 - Present",
        fullStackDescription: "Custom BackOffice development using Angular, Typescript, Primeng, Laravel Eloquent, MySQL.",
        technicianTitle: "Systems Technician",
        technicianPeriod: "January 2022 - August 2023",
        technicianDescription: "Technical support to users, hardware and software maintenance, server and network administration."
      },
      education: {
        title: "Education",
        university: "Catholic University Lumen Gentium",
        period: "Software Development Technology, 2022 - Present",
        description: "Studies focused on programming, algorithms, data structures, and overall software development."
      },
      projects: {
        title: "Projects",
        project1: {
          title: "BackOffice - Sneakerverse",
          description: "E-commerce platform for sneaker sales, with payment gateway integration and inventory management.",
          button: "View project"
        },
        project2: {
          title: "Dog Adoption App",
          description: "Mobile application for pet adoption, with payment gateway integration and inventory management.",
          button: "View project"
        }
      },
    },
  },
};
