# Portafolio de Alan Ruz

Portafolio personal construido con Next.js 16 (App Router), TypeScript y Tailwind CSS 4.

Incluye:
- Secciones de presentación, experiencia, proyectos y contacto.
- Datos centralizados en `lib/data.ts`.
- Formulario de contacto conectado a Resend (`/api/send`).
- Animaciones con AOS y UI responsive.

## Stack
- Next.js 16.1.1
- React 19
- TypeScript
- Tailwind CSS 4
- React Hook Form
- Resend
- React Icons
- SweetAlert2

## Estructura del proyecto
```text
app/
	api/send/route.ts          # Endpoint para envío de correo
	layout.tsx                 # Layout global
	page.tsx                   # Página principal

sections/
	Hero.tsx
	Expirence.tsx
	Projects.tsx
	ContactMe.tsx
	Footer.tsx
	Nav.tsx

components/
	ui/
		DescProject.tsx          # Renderiza tarjetas de proyectos
		Timeline.tsx
	forms/
		ContactForm.tsx

lib/
	data.ts                    # Data centralizada (nav, experiencia, proyectos)
```

## Scripts
```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm email:dev
```

## Instalación local
```bash
pnpm install
pnpm dev
```

App disponible en `http://localhost:3000`.

## Variables de entorno
Crea un archivo `.env.local`:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
RESEND_API_KEY=tu_api_key_de_resend
```

## Data centralizada (`lib/data.ts`)
Este archivo centraliza la data de navegación, experiencia y proyectos.

### `projectItems`
Cada proyecto soporta campos como:
- `name`, `titulo`, `description`
- `liveUrl`, `codeUrl`
- `category`, `role`, `year`, `status`, `previewTone`
- `techStack`
- `urlImage` (opcional)

Comportamiento de `urlImage`:
- Si existe `urlImage`, se renderiza preview real del proyecto.
- Si no existe, se usa el mock visual de fallback.

Recomendación para `urlImage`:
- Usar rutas locales dentro de `public/images`, por ejemplo:
	`/images/torque-maximo-rr.png`

## Flujo de contacto
1. `ContactForm` envía `POST` a `/api/send`.
2. `app/api/send/route.ts` valida y envía email con Resend.
3. Se renderiza plantilla de email desde `emails/EmailTemplate.tsx`.

## Deploy
Recomendado: Vercel.

Pasos:
1. Conectar repositorio.
2. Configurar variables de entorno (`RESEND_API_KEY`, etc.).
3. Deploy automático en push.

## Notas
- El proyecto usa componentes de servidor por defecto y componentes cliente donde hay interacción.
- Si cambias anchors de sección (`#init`, `#experience`, etc.), actualiza también `seccions` en `lib/data.ts`.

## Contacto
- Autor: Alan Ruz
- Email: alanruz245@gmail.com
