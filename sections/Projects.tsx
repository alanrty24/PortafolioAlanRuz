import { bebasNeue } from "@/app/fonts";
import DescProject from "@/components/ui/DescProject";
import { projectItems } from "@/lib/data";

const Projects: React.FC = () => {
  return (
    <section
      className="scroll-m-20 w-full mx-auto px-4 lg:max-w-5xl"
      id="myProjects"
    >
      <div className="max-w-3xl">
        <p className={`${bebasNeue.className} text-xl uppercase tracking-[0.28em] text-(--color-secundary)`}>
          Proyectos Seleccionados
        </p>
        <h2 className={`${bebasNeue.className} mt-4 text-4xl font-semibold leading-tight text-(--color-tertiary) md:text-6xl`}>
          Soluciones <span className="text-(--color-secundary)">digitales</span>
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600 md:max-w-2xl">
          Una selección de productos web en los que combiné estrategia, interfaz y desarrollo para construir experiencias útiles, escalables y visualmente sólidas.
        </p>
      </div>

      <DescProject items={projectItems} className="mt-16" />
    </section>
  );
};

export default Projects;
