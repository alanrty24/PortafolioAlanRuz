# Portafolio  Alan Ruz

Portafolio personal construido con Next.js, TypeScript y Tailwind CSS. Muestra proyectos, experiencia profesional y permite contacto a través de un formulario que envía correos usando Resend.

## Vista rápida
- Sitio construido con el App Router de Next.js.
- Formulario de contacto con validación (`react-hook-form`) y envío server-side mediante Resend.
- Animaciones con AOS aplicadas en cliente para evitar problemas de hidratación.
- Sistema de alertas con SweetAlert2.

## Características
- Secciones: Hero, Experiencia, Proyectos, Contacto.
- Formulario funcional que envía un email al propietario.
- Responsive y optimizado con Tailwind CSS.

## Tecnologías
- Next.js (App Router)
- TypeScript
- React
- Tailwind CSS
- react-hook-form
- Resend (librería para envío de emails)
- sweetalert2
- AOS

## Estructura relevante
- `app/`  rutas, layout y páginas.
- `components/`  componentes reutilizables (Hero, Projects, ContactForm, etc.).
- `components/forms/ContactForm.tsx`  formulario cliente.
- `app/api/send/route.tsx`  endpoint server para enviar correos.
- `context/AlertProvider.tsx`  proveedor de alertas.

## Requisitos
- Node.js >= 16
- pnpm (recomendado) o npm/yarn

## Instalación (local)
1. Clona el repositorio:

```bash
git clone <repo-url>
cd my-portafolio-next
```

2. Instala dependencias:

```bash
pnpm install
```

3. Añade variables de entorno en `.env.local` (ver más abajo).

4. Levanta el servidor de desarrollo:

```bash
pnpm dev
```

Abre `http://localhost:3000`.

## Variables de entorno
Crea `.env.local` con al menos las siguientes variables:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
RESEND_API_KEY=tu_api_key_de_resend
```

- `RESEND_API_KEY`: clave privada para la API de Resend (usar solo en servidor).

## Uso del formulario de contacto
- El componente `ContactForm` hace POST a `/api/send` con el payload `{ name, email, message }`.
- El endpoint `app/api/send/route.tsx` usa la librería `resend` para enviar el email y renderiza `EmailTemplate` como JSX.

## Despliegue
- Recomendado: Vercel. Conecta el repo y añade `RESEND_API_KEY` en Environment Variables.

Pasos generales:

```bash
pnpm build
pnpm start
```

## Solución de problemas comunes
- Error de hidratación: revisar componentes que usan valores dinámicos (`new Date()`, `Math.random()`) o atributos que difieren en SSR/CSR (por ejemplo `data-aos`). Se corrigió aplicando el atributo `data-aos` solo después del montaje en cliente.
- Error 500 en `/api/send`: comprobar que `RESEND_API_KEY` esté presente y que la forma del payload coincida. Revisar logs del servidor para el stack trace.
- `useAlert()` retorna `undefined`: asegurarse de que `AlertProvider` envuelva la app (`app/layout.tsx`).

## Buenas prácticas
- Mantén las claves privadas en el proveedor de despliegue.
- Revisa la consola del servidor ante errores 500 y añade logs en `catch` para facilitar diagnóstico.

## Contribuciones
Si quieres mejorar el proyecto, abre un issue o PR describiendo claramente los cambios.

## Contacto
Alan Ruz  alanruz245@gmail.com

---

¿Quieres que añada badges (Vercel, dependabot) o instrucciones específicas para Vercel/GitHub Actions?
