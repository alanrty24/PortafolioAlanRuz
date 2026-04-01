/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export interface ProjectsItem {
  name?: string;
  href?: string;
  titulo?: string;
  date?: string;
  description?: string;
  category?: string;
  year?: string;
  role?: string;
  liveUrl?: string;
  codeUrl?: string;
  urlImage?: string;
  previewTone?: "blue" | "emerald" | "amber";
  techStack?: {
    title: string;
    color: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  status?: "desing" | "ready";
}

type Props = {
  items: ProjectsItem[];
  className?: string;
};

const toneMap = {
  blue: {
    shell: "bg-gradient-to-br from-sky-600 via-cyan-500 to-blue-700",
    screen: "bg-gradient-to-b from-sky-300 via-sky-500 to-blue-800",
    badge: "bg-indigo-50 text-indigo-700",
    title: "text-indigo-600",
  },
  emerald: {
    shell: "bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-700",
    screen: "bg-gradient-to-b from-emerald-300 via-teal-500 to-cyan-800",
    badge: "bg-emerald-50 text-emerald-700",
    title: "text-emerald-700",
  },
  amber: {
    shell: "bg-gradient-to-br from-amber-500 via-orange-400 to-rose-500",
    screen: "bg-gradient-to-b from-amber-200 via-orange-400 to-rose-600",
    badge: "bg-amber-50 text-amber-700",
    title: "text-amber-700",
  },
} as const;

const DescProject: React.FC<Props> = ({ items, className }: Props) => {
  return (
    <article className={`flex flex-col gap-18 ${className}`}>
      {items.map((proyecto, index) => {
        const tone = toneMap[proyecto.previewTone ?? "blue"];
        const liveUrl = proyecto.liveUrl || proyecto.href || "";
        const year = proyecto.year || proyecto.date?.slice(0, 4) || "";
        const techSummary = proyecto.techStack?.map((tech) => tech.title).join(", ") || "Stack privado";
        const hasImage = Boolean(proyecto.urlImage);
        const isLocalImage = proyecto.urlImage?.startsWith("/") ?? false;

        return (
          <article key={proyecto.name ?? index} className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-16">
            <div className={`group relative overflow-hidden rounded-4xl p-5 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.45)] ${tone.shell}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_45%)]" />
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-white/25 bg-white/10 p-6 backdrop-blur-sm">
                {hasImage ? (
                  <div className="relative h-full min-h-80 overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/10 shadow-[0_24px_50px_-35px_rgba(15,23,42,0.9)]">
                    {isLocalImage ? (
                      <Image
                        src={proyecto.urlImage || ""}
                        alt={proyecto.titulo || proyecto.name || "Proyecto"}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <img
                        src={proyecto.urlImage}
                        alt={proyecto.titulo || proyecto.name || "Proyecto"}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-slate-950/45 to-transparent" />
                  </div>
                ) : (
                  <div className="mx-auto flex h-full max-w-md flex-col justify-center">
                    <div className="mx-auto mb-5 h-4 w-44 rounded-full bg-black/15 blur-xl" />
                    <div className="mx-auto flex w-[82%] max-w-[320px] flex-col overflow-hidden rounded-[1.8rem] border border-white/50 bg-white/10 shadow-[0_24px_50px_-35px_rgba(15,23,42,0.9)]">
                      <div className="flex items-center gap-1.5 border-b border-white/15 px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/75" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/55" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                      </div>
                      <div className={`flex min-h-65 flex-1 items-center justify-center px-6 py-10 text-center ${tone.screen}`}>
                        <div>
                          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/80">
                            {proyecto.category ?? proyecto.name}
                          </p>
                          <h3 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
                            {proyecto.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="mx-auto mt-[-0.2rem] h-5 w-[74%] rounded-full bg-white/85 shadow-[0_12px_30px_-12px_rgba(15,23,42,0.55)]" />
                  </div>
                )}
              </div>
            </div>

            <div className="max-w-xl">
              <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                <span className={`rounded-full px-4 py-2 ${tone.badge}`}>{proyecto.category ?? "Proyecto Web"}</span>
                {year ? <span>{year}</span> : null}
              </div>

              <h3 className={`mt-6 text-4xl font-semibold leading-tight md:text-5xl ${tone.title}`}>
                {proyecto.titulo}
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {proyecto.description}
              </p>

              <dl className="mt-8 grid gap-6 border-y border-slate-200 py-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Rol</dt>
                  <dd className="mt-2 text-xl font-semibold text-slate-900">{proyecto.role ?? "Desarrollo y diseño"}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Tech</dt>
                  <dd className="mt-2 text-xl font-semibold text-slate-900">{techSummary}</dd>
                </div>
              </dl>

              {proyecto.techStack?.length ? (
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {proyecto.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600"
                    >
                      <tech.icon className={`h-4 w-4 ${tech.color}`} />
                      <span>{tech.title}</span>
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-8 flex flex-wrap items-center gap-5">
                {liveUrl ? (
                  <Link
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-lg font-semibold text-slate-900 transition-colors duration-300 hover:text-indigo-600"
                  >
                    <FaGlobe className="text-base" />
                    <span>Ver sitio</span>
                    <HiArrowRight className="text-xl" />
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-3 text-lg font-semibold text-slate-400">
                    <FaGlobe className="text-base" />
                    <span>Disponible próximamente</span>
                  </span>
                )}

                {proyecto.codeUrl ? (
                  <Link
                    href={proyecto.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-lg font-semibold text-slate-600 transition-colors duration-300 hover:text-slate-900"
                  >
                    <FaGithub className="text-lg" />
                    <span>Ver código</span>
                  </Link>
                ) : null}
              </div>

              {proyecto.status === "desing" ? (
                <p className="mt-4 text-sm font-medium text-amber-600">Proyecto actualmente en desarrollo.</p>
              ) : null}
            </div>
          </article>
        );
      })}
    </article>
  );
};

export default DescProject;
