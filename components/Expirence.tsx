import React from 'react'
import Timeline, { TimelineItem } from './ui/Timeline'
import { bebasNeue } from '@/app/fonts'
import { FaBook } from 'react-icons/fa'
import Subtitle from './ui/Subtitle'

const items: TimelineItem[] = [
  {
    id: 1,
    date: '2025 — Presente',
    title: 'Desarrollador Frontend',
    description: '',
    color: 'bg-blue-600',
    points: 
    [
      {titulo: 'Desarrollo de Interfaces de Usuario:', description: 'Implementé interfaces de usuario responsivas y accesibles utilizando React, Next.js y Tailwind CSS, mejorando la experiencia del usuario final.'},],
      
  },
  {
    id: 2,
    date: '2022 — Presente',
    title: 'Full Stack Developer — Core Bancario "Paradise" Utilizando tecnología LANSA',
    description: '',
    color: 'bg-sky-500',
    points: 
    [
      {titulo: 'Automatización de Procesos Documentales:' , description: 'Diseñé e implementé un sistema de generación automática de documentos legales utilizando bookmarks, optimizando la precisión de los datos y reduciendo el tiempo de gestión administrativa.'},
      {titulo: 'Comunicación Transaccional:', description: 'Desarrollé un motor de despacho automatizado de correos electrónicos integrado directamente con los procesos del core para mejorar la comunicación con el cliente final.'},
      {titulo: 'Integración de Sistemas (Web Services):', description: 'Responsable del desarrollo de servicios web mediante LANSA Integrator, facilitando la interoperabilidad del sistema bancario con plataformas y APIs de terceros.'},
      {titulo: 'Especialista en Módulo de Crédito:', description: 'Lideré el desarrollo de funcionalidades clave en el módulo financiero, incluyendo la gestión integral de garantías, líneas de crédito y préstamos, asegurando la integridad de los flujos de capital y el cumplimiento de reglas de negocio bancarias.'}
    ]
  },
]

export default function Expirence() {
  return (
    <section className="scroll-m-20 w-full mx-auto py-24 md:py-12 lg:max-w-4xl md:max-w-2xl undefined" 
    id="experience" 
    data-aos="fade-up"
    >
      <Subtitle className={`${bebasNeue.className} text-(--color-secundary) text-center`} variant="4xl" icon={<FaBook className="text-(--color-tertiary)" />}>
            MI EXPERIENCIA
      </Subtitle>
      <Timeline items={items} />
    </section>
  )
}
