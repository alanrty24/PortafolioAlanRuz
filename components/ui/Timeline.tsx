import React from "react";

export type TimelineItem = {
  id?: string | number;
  date?: string;
  title: string;
  description?: React.ReactNode;
  color?: string; // Tailwind color class (bg-...)
  icon?: React.ReactNode;
  points?: { titulo: string; description: string }[];
};

type Props = {
  items: TimelineItem[];
  className?: string;
};

export default function Timeline({ items, className = "" }: Props) {
  return (
    <ul className={`relative ${className}`}>
      <div
        className="absolute left-[0.45rem] top-2 bottom-2 w-px bg-slate-200 lg:left-2"
        aria-hidden="true"
      />

      {items.map((it, index) => (
        <li key={it.id ?? `${it.title}-${index}`} className="relative pb-12 pl-10 last:pb-0 lg:pl-14">
          <span
            className={`absolute left-0 top-1 flex h-4 w-4 items-center justify-center rounded-full border-4 border-white shadow-sm ${
              it.color ?? "bg-blue-600"
            } ${index === 0 ? "ring-2 ring-indigo-100" : "bg-white border-slate-200"}`}
            aria-hidden="true"
          >
            {it.icon ? (
              <span className="text-white text-[10px] md:text-xs flex items-center justify-center">
                {it.icon}
              </span>
            ) : null}
          </span>

          <div className="max-w-2xl">
            {it.date ? (
              <time className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
                {it.date}
              </time>
            ) : null}

            <h3 className="mt-3 text-2xl font-semibold leading-tight text-slate-900 lg:text-[2rem]">
              {it.title}
            </h3>

            {it.description ? (
              <p className="mt-3 text-base leading-8 text-slate-600">{it.description}</p>
            ) : null}

            {it.points && (
              <ul className="mt-4 space-y-4">
                {it.points.map((point, i) => (
                  <li key={i} className="text-slate-700">
                    <h4 className="text-sm font-semibold text-(--color-secundary)">{point.titulo}</h4>
                    <p className="mt-2 text-base leading-8 text-slate-600">{point.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
