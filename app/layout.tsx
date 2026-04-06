import { Theme } from "@radix-ui/themes";
import type { Metadata, Viewport } from "next";
import { montserrat } from "./fonts";
import "./globals.css";
import Nav from "@/sections/Nav";
import Footer from "@/sections/Footer";
import { AOSInitializer } from "@/sections/AOSInitializer";
import AlertProvider from "@/context/AlertProvider";

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alan Ruz | Desarrollador Web & Landing Pages",
    template: "%s | Alan Ruz",
  },
  description:
    "Portafolio de Alan Ruz: desarrollo de sitios web y landing pages de alta conversion con foco en rendimiento, accesibilidad y experiencia de usuario.",
  keywords: [
    "Alan Ruz",
    "desarrollador frontend",
    "landing pages",
    "Next.js",
    "portafolio web",
    "desarrollo web",
  ],
  authors: [{ name: "Alan Ruz" }],
  creator: "Alan Ruz",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: "/",
    siteName: "Portafolio Alan Ruz",
    title: "Alan Ruz | Desarrollador Web & Landing Pages",
    description:
      "Portafolio con proyectos, experiencia profesional y formulario de contacto.",
    images: [
      {
        url: "/images/perfil.png",
        width: 1200,
        height: 630,
        alt: "Alan Ruz - Portafolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alan Ruz | Desarrollador Web & Landing Pages",
    description:
      "Portafolio con proyectos y experiencia en desarrollo frontend y full stack.",
    images: ["/images/perfil.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:m-4 focus:rounded-md focus:bg-(--color-secundary) focus:px-4 focus:py-2 focus:text-(--color-primary)"
        >
          Saltar al contenido principal
        </a>
        <AOSInitializer />
        <AlertProvider>
          <Theme>
            <Nav />
            <div id="contenido-principal">{children}</div>
            <Footer />
          </Theme>
        </AlertProvider>
      </body>
    </html>
  );
}
