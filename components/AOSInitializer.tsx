// components/AOSInitializer.tsx (Crea un componente cliente separado)
'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const AOSInitializer: React.FC = () => {
  useEffect(() => {
    AOS.init({
      // Configuraciones globales:
      duration: 800, // duración de la animación en ms
      once: false,   // si quieres que la animación se repita al hacer scroll arriba/abajo
      easing: 'ease-out-cubic',
    })
  }, [])

  return null // Este componente no renderiza nada visualmente
}