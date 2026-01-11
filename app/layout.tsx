import { Theme } from "@radix-ui/themes";
import { montserrat } from "./fonts";
import "./globals.css";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import { AOSInitializer } from "@/components/AOSInitializer";
import AlertProvider from "@/context/AlertProvider";

interface MetadataInfo {
  title: string;
  description: string;
  openGraph: {
    images: string[];
  };
}

export const metadata: MetadataInfo = {
  title: 'Alan Ruz | Desarrollador Web & Landing Pages',
  description: 'Especialista en crear sitios de alta conversión.',
  openGraph: {
    images: ['/images/perfil.png'], // Imagen que sale cuando compartes el link en WhatsApp/LinkedIn
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <title>My Portafolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Agrega aquí otros meta tags si es necesario */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <AOSInitializer />
        <Nav />
        <AlertProvider>
          <Theme>{children}</Theme>
        </AlertProvider>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
