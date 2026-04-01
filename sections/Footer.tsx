import Link from "next/link";
import {
  HiChatAlt,
  HiCube,
  HiDesktopComputer,
  HiHome,
} from "react-icons/hi";

const seccions = [
  { id: "Inicio", name: "Inicio", href: "#init", icon: HiHome },
  { id: "Expirence", name: "Experiencia", href: "#experience", icon: HiDesktopComputer },
  { id: "My Projects", name: "Proyectos", href: "#myProjects", icon: HiCube },
  { id: "Contact Me", name: "Contacto", href: "#contactMe", icon: HiChatAlt },
];

const Foot = () => {
  return (
    <>
      <footer className="flex flex-col items-center gap-4 bg-(--color-secundary) p-4">
        <h3 className="text-(--color-primary) text-xl md:text-2xl lg:text-3xl">&copy; Mi portafolio 2025</h3>
        <ul className="z-10 flex flex-wrap gap-4 p-2 text-black transition-all duration-500 justify-center">
          {seccions.map((seccion) => {
            return (
              <li
                key={seccion.id}
                className="flex items-center  gap-2 text-xl px-4 py-2 rounded-xl mb-2 transition-all duration-500 bg-(--color-primary) text-(--color-tertiary) md:p-0 md:bg-(--color-secundary) md:text-(--color-primary)"
              >
                <div className="hidden md:flex md:items-center md:gap-2">
                  <seccion.icon />
                  <Link href={seccion.href} className="">
                    {seccion.name}
                  </Link>
                </div>
                <div className="md:hidden">
                  <Link href={seccion.href} className="w-full"><seccion.icon /></Link>
                </div>
              </li>
            );
          })}
        </ul>
      </footer>
    </>
  );
};

export default Foot;
