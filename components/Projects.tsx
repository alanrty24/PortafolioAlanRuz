import { bebasNeue } from "@/app/fonts";
import { PiQrCodeDuotone } from "react-icons/pi";
import Subtitle from "./ui/Subtitle";
import DescProject, { ProjectsItem } from "./ui/DescProject";
import {FaReact} from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
const Projects: React.FC = () => {
  const proyectos: ProjectsItem[] = [
    {
      name: "Finance Track",
      href: "",
      date: "2025/09/19",
      titulo: "Manejado de Fianzas",
      status: 'desing',
      description:
        "Es una aplicación web para el manejo de finanzas personales. En el puedes registrar tus ingresos y gastos, categorizar tus transacciones y generar reportes visuales para un mejor control de tu dinero.",
      techStack: [
        { title: "React", color: "text-[#61DAFB]", icon: FaReact },
        { title: "JavaScript", color: "text-[#F7DF1E]", icon: DiJavascript },
        { title: "Tailwind CSS", color: "text-[#06B6D4]", icon: RiTailwindCssFill},
      ],
    },
    {
      name: "Jucama Page",
      href: "",
      date: "2025/09/25",
      titulo: "Página de Jucama",
      status: 'desing',
      description:
        "Es una página web corporativa para Jucama, una empresa dedicada a la fabricación y distribución de productos de consumo masivo. La página incluye información sobre la empresa, sus productos, noticias y contacto.",
      techStack: [
        { title: "Next.js", color: "text-white", icon: RiNextjsFill },
        { title: "TypeScript", color: "text-[#3178C6]", icon: SiTypescript },
        { title: "Tailwind CSS", color: "text-[#06B6D4]", icon: RiTailwindCssFill},
      ],
    },
    {
      name: "Ecommers",
      href: "",
      date: "2025/08/25",
      titulo: "Tienda Online",
      status: 'desing',
      description:
        "Es una tienda online para la venta de productos de consumo masivo. La tienda incluye información sobre los productos, precios, promociones y contacto.",
    },
  ];
  return (
    <section
      className="scroll-m-20 w-full mx-auto py-16 md:py-12 lg:max-w-4xl md:max-w-2xl undefined"
      id="myProjects"
      data-aos="fade-up"
    >
      <Subtitle
        className={`${bebasNeue.className} text-(--color-secundary) text-center `}
        variant="4xl"
        icon={<PiQrCodeDuotone className="text-(--color-tertiary) " />}
      >
        MIS PROYECTOS
      </Subtitle>
      <DescProject items={proyectos} />
    </section>
  );
};

export default Projects;
