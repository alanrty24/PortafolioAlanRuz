import Link from "next/link";
import { bebasNeue } from "@/app/fonts";
import { seccions } from "@/lib/data";

const Foot = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-(--color-secundary)/20 bg-(--color-tertiary)">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-10 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h3 className={`${bebasNeue.className} text-4xl leading-none text-(--color-primary) md:text-5xl`}>
              Alan<span className="text-(--color-secundary)"> Ruz</span>
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-(--color-primary) md:text-base">
              Desarrollador Frontend y Full Stack. Construyo experiencias web modernas, rápidas y centradas en el usuario.
            </p>
          </div>

          <Link
            href="#init"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-(--color-primary)/25 px-4 py-2 text-sm font-semibold text-(--color-primary) transition-all duration-300 hover:bg-(--color-secundary) hover:text-(--color-primary)"
          >
            Volver al inicio
          </Link>
        </div>

        <nav aria-label="Navegacion del footer">
          <ul className="flex flex-wrap gap-3">
            {seccions.map((seccion) => (
              <li key={seccion.id}>
                <Link
                  href={seccion.href}
                  className="inline-flex items-center gap-2 rounded-full bg-(--color-secundary)/10 px-4 py-2 text-sm font-medium text-(--color-primary) transition-all duration-300 hover:bg-(--color-secundary) hover:text-(--color-primary)"
                >
                  <seccion.icon className="text-base" />
                  <span className="hidden lg:block">{seccion.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-2 border-t border-(--color-secundary)/15 pt-5 text-xs text-(--color-primary) md:flex-row md:items-center md:justify-between md:text-sm">
          <p>&copy; {currentYear} Alan Ruz. Todos los derechos reservados.</p>
          <p>Hecho con Next.js y Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
