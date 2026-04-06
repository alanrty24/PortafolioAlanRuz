import { HiHome, HiDesktopComputer, HiCube, HiChatAlt } from "react-icons/hi";
import type { TimelineItem } from "@/components/ui/Timeline";
import type { ProjectsItem } from "@/components/ui/DescProject";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export const seccions = [
  { id: "Inicio", name: "Inicio", href: "#init", icon: HiHome },
  {
    id: "Expirence",
    name: "Experiencia",
    href: "#experience",
    icon: HiDesktopComputer,
  },
  { id: "My Projects", name: "Proyectos", href: "#myProjects", icon: HiCube },
  { id: "Contact Me", name: "Contacto", href: "#contactMe", icon: HiChatAlt },
];

export type NavItem = (typeof seccions)[number];

export const experienceItems: TimelineItem[] = [
  {
    id: 1,
    date: "2025 — Presente",
    title: "Desarrollador Frontend",
    description: "",
    color: "bg-blue-600",
    points: [
      {
        titulo: "Desarrollo de Interfaces de Usuario:",
        description:
          "Implementé interfaces de usuario responsivas y accesibles utilizando React, Next.js y Tailwind CSS, mejorando la experiencia del usuario final.",
      },
    ],
  },
  {
    id: 2,
    date: "2022 — Presente",
    title:
      'Full Stack Developer — Core Bancario "Paradise" Utilizando tecnología LANSA',
    description: "",
    color: "bg-sky-500",
    points: [
      {
        titulo: "Automatización de Procesos Documentales:",
        description:
          "Diseñé e implementé un sistema de generación automática de documentos legales utilizando bookmarks, optimizando la precisión de los datos y reduciendo el tiempo de gestión administrativa.",
      },
      {
        titulo: "Comunicación Transaccional:",
        description:
          "Desarrollé un motor de despacho automatizado de correos electrónicos integrado directamente con los procesos del core para mejorar la comunicación con el cliente final.",
      },
      {
        titulo: "Integración de Sistemas (Web Services):",
        description:
          "Responsable del desarrollo de servicios web mediante LANSA Integrator, facilitando la interoperabilidad del sistema bancario con plataformas y APIs de terceros.",
      },
      {
        titulo: "Especialista en Módulo de Crédito:",
        description:
          "Lideré el desarrollo de funcionalidades clave en el módulo financiero, incluyendo la gestión integral de garantías, líneas de crédito y préstamos, asegurando la integridad de los flujos de capital y el cumplimiento de reglas de negocio bancarias.",
      },
    ],
  },
];

export const projectItems: ProjectsItem[] = [
  {
    name: "Torque Maximo RR",
    href: "https://torque-maximo-rr.vercel.app/",
    liveUrl: "https://torque-maximo-rr.vercel.app/",
    codeUrl: "https://github.com/alanrty24/torque-maximo-rr",
    urlImage: "/images/torque-maximo-rr.png",
    date: "2025/09/19",
    year: "2025",
    category: "Landing Page",
    role: "Frontend Lead",
    titulo: "Torque Máximo RR",
    status: "ready",
    previewTone: "amber",
    description:
      "Es una landing page para Torque Máximo RR, una empresa que se dedica a soluciones integrales para vehículos pesados y maquinaria industrial con tecnología de vanguardia.",
    techStack: [
      { title: "Next.js", color: "text-black", icon: RiNextjsFill },
      { title: "TypeScript", color: "text-[#3178C6]", icon: SiTypescript },
      {
        title: "Tailwind CSS",
        color: "text-[#06B6D4]",
        icon: RiTailwindCssFill,
      },
    ],
  },
  {
    name: "Spa Pausa",
    href: "https://spa-pausa.vercel.app/",
    liveUrl: "https://spa-pausa.vercel.app/",
    codeUrl: "https://github.com/alanrty24/spa-pausa",
    urlImage: "/images/spa-pausa.png",
    date: "2025/09/25",
    year: "2025",
    category: "Corporate Website",
    role: "Frontend Lead",
    titulo: "Spa Pausa",
    status: "ready",
    previewTone: "emerald",
    description:
      "Es una página web corporativa para Spa Pausa, un spa que ofrece una variedad de servicios de bienestar y relajación.",
    techStack: [
      { title: "React", color: "text-[#61DAFB]", icon: RiReactjsFill },
      { title: "TypeScript", color: "text-[#3178C6]", icon: SiTypescript },
      {
        title: "Tailwind CSS",
        color: "text-[#06B6D4]",
        icon: RiTailwindCssFill,
      },
    ],
  },
  {
    name: "Reparaciones ABS",
    href: "https://reparaciones-abs.vercel.app/",
    liveUrl: "https://reparaciones-abs.vercel.app/",
    codeUrl: "https://github.com/alanrty24/reparaciones-abs",
    urlImage: "/images/reparaciones-abs.png",
    date: "2025/08/25",
    year: "2025",
    category: "Informational Website",
    role: "Frontend Developer",
    titulo: "Reparaciones ABS",
    status: "ready",
    previewTone: "blue",
    description:
      "Es una página web informativa para Reparaciones ABS, un taller especializado en la reparación de sistemas de frenos ABS para vehículos.",
  },
];
