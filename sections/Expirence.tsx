import React from 'react'
import Timeline from '@/components/ui/Timeline'
import { bebasNeue } from '@/app/fonts'
import Subtitle from '@/components/ui/Subtitle'
import { experienceItems } from '@/lib/data'

function parseYear(date?: string) {
  if (!date) return null
  const m = date.match(/\d{4}/)
  return m ? Number(m[0]) : null
}

export default function Expirence() {
  const years = (() => {
    const parsed = experienceItems
      .map((it) => parseYear(it.date ?? ""))
      .filter(Boolean) as number[]
    if (parsed.length === 0) return null
    const minYear = Math.min(...parsed)
    const now = new Date().getFullYear()
    return now - minYear + 1
  })()

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-m-20 bg-(--color-primary) w-full mx-auto py-6 px-4 lg:px-0  lg:max-w-5xl"
    >
      <div className="grid items-start gap-12 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <Subtitle id="experience-heading" className={`${bebasNeue.className} text-(--color-tertiary)  dark:text-gray-100`} variant="4xl">
            Experiencia <span className="text-(--color-secundary)">Profesional</span>
          </Subtitle>

          <p className="mt-5 max-w-sm text-lg leading-8 text-slate-600">
            Proyectos, roles y logros relevantes en desarrollo frontend y full-stack, con foco en accesibilidad y rendimiento.
          </p>

          <div className="mt-8">
            <div className="flex flex-col gap-1 min-w-55 rounded-2xl border border-indigo-100 bg-(--color-secundary) px-6 py-4 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.35)]">
              <div className="text-4xl font-extrabold leading-none text-(--color-primary)">
                {years ? `${years}+` : experienceItems.length}
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                Años de experiencia
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <Timeline items={experienceItems} />
        </div>
      </div>
    </section>
  )
}
