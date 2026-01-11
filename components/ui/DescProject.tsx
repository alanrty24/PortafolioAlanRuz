import { Card } from "@radix-ui/themes";
import React from "react";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./Card";
import Link from "next/link";
import { FaCode, FaGithub } from "react-icons/fa";

export interface ProjectsItem {
  name?: string;
  href?: string;
  titulo?: string;
  date?: string;
  description?: string;
  techStack?: {
    title: string;
    color: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  status?: 'desing' | 'ready';
}

type Props = {
  items: ProjectsItem[];
  className?: string;
};

const DescProject: React.FC<Props> = ({ items, className }: Props) => {
  return (
    <article className={`flex flex-col gap-12 ${className}`}>
      {items.map((proyecto, index) => (
        <div key={index} className="flex flex-1 flex-col md:flex-row ">
          <Card className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-6 hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-xl">{proyecto.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <CardDescription className="p-4 w-full h-32 bg-slate-300 border-2 rounded-2xl animate-pulse flex items-center justify-center">
                {proyecto.status && (
                    <p>{proyecto.status === 'desing' ? "En Desarrollo..." : ""}</p>
                )}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <CardDescription>{proyecto.date}</CardDescription>
            </CardFooter>
          </Card>
          <div className="flex-2">
            <h3 className="font-semibold leading-none tracking-tight text-xl mb-4 md:text-2xl ">
              {proyecto.titulo}
            </h3>
            <div className="flex flex-wrap mb-4 gap-2">
              {proyecto.techStack &&
                proyecto.techStack.length > 0 &&
                proyecto.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className={` bg-slate-700 text-slate-300 text-xs font-medium mr-2 mb-2 px-2.5 py-1.5 rounded flex items-center gap-1`}
                  >
                    {tech.icon && (
                      <tech.icon
                        className={`w-4 h-4 ${tech.color} font-bold`}
                      />
                    )}
                    <span className={``}>{tech.title}</span>
                  </span>
                ))}
            </div>
            <p className="text-gray-700 text-base">{proyecto.description}</p>
            <div className="flex gap-4">
              <Link
                href={proyecto.href || "#"}
                className="mt-4 inline-block text-(--color-secundary) font-semibold px-4 py-2 border border-(--color-secundary) rounded-lg hover:bg-(--color-secundary) hover:text-(--color-primary) transition-all duration-500"
              >
                <FaCode className="inline mr-2 text-2xl" />
                <span>Ver Proyecto</span>
              </Link>
              <Link
                href={proyecto.href || "#"}
                className="mt-4 flex items-center text-(--color-secundary) font-semibold px-4 py-2 border border-(--color-secundary) rounded-lg hover:bg-(--color-secundary) hover:text-(--color-primary) transition-all duration-500"
              >
                <FaGithub className="inline mr-2 text-2xl" />
                <span>Ver Código</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};

export default DescProject;
