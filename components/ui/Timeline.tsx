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
      <span
        className="absolute left-5 top-0 bottom-0 w-px dark:bg-neutral-700"
        aria-hidden
      />
      {items.map((it) => (
        <li key={it.id ?? it.title} className="relative mb-8 pl-12">
          <div className="text-sm">
            <div className="flex items-baseline gap-3">
              <span
                className={`absolute top-1 left-5 -ml-1.5 w-3.5 h-3.5 rounded-full ring-2 ring-white shadow flex items-center justify-center text-white text-sm ${
                  it.color ?? "bg-blue-600"
                }`}
              >
                {it.icon}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {it.title}
                </h3>
                {it.date ? (
                  <time className="text-base text-gray-500 dark:text-gray-400">
                    {it.date}
                  </time>
                ) : null}
              </div>
            </div>

            {it.description ? (
              <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                {it.description}
              </p>
            ) : null}

            {it.points && (
              <ul className="mt-2 text-gray-700 dark:text-gray-300">
                {it.points.map((point, index) => (
                  <li key={index} className="text-lg mb-4">
                    <h3 className="font-bold ">✨ {point.titulo}</h3> 
                    <p>{point.description}</p>
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
