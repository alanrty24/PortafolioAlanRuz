import Image from "next/image";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { LuFolderOpen  } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";

const numeroWhatsApp = "584241727312";
const mensaje = "Hola, estoy interesado 📱";
const mensajeCodificado = encodeURIComponent(mensaje);

const icons = [
  {
    name: "instagram",
    ref: "https://www.instagram.com/alanrty24/",
    color: "text-red-500",
    icon: FaInstagram,
  },
  {
    name: "linkedin",
    ref: "https://www.linkedin.com/in/alan-ruz-850b81200/",
    color: "text-blue-500",
    icon: FaLinkedin,
  },
  {
    name: "facebook",
    ref: "https://www.facebook.com/alanyeiker.ruz/",
    color: "text-blue-500",
    icon: FaFacebook,
  },
  {
    name: "whatsapp",
    ref: `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`,
    color: "text-green-500",
    icon: FaWhatsapp,
  },
  {
    name: "github",
    ref: "https://github.com/alanrty24",
    color: "text-gray-500",
    icon: FaGithub,
  },
];

const Hero: React.FC = () => {
  return (
    <section
      id="init"
      aria-label="Hero"
      className="w-full bg-(--color-primary)"
    >
      <div className="mx-auto max-w-5xl py-20 px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: text + CTAs */}
          <div className="space-y-6">
            <span className="inline-block uppercase bg-(--color-secundary)/10 text-(--color-secundary) px-3 py-1 rounded-full text-sm font-semibold">
              Alan Ruz
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-black">
              <span className="text-(--color-secundary)">FRONTEND </span>
               WEB DEVELOPER
            </h1>

            <p className="text-lg text-gray-700 max-w-xl">
              Mi objetivo como desarrollador front-end es utilizar mis
              conocimientos para optimizar y escalar cualquier sistema,
              ofreciendo soluciones financieras y productivas.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contactMe"
                className="inline-flex items-center gap-3 bg-(--color-secundary) text-white px-6 py-3 rounded-full shadow-lg hover:opacity-95"
              >
                <LuFolderOpen />Comenzar Proyecto
              </a>
              <a
                href="/docs/Currículum Vitae Alan Ruz 2026.pdf"
                download="Currículum_AlanRuz.pdf"
                className="inline-flex items-center gap-3 bg-white border border-gray-200 text-black px-6 py-3 rounded-full shadow-sm hover:bg-gray-100"
              >
                <IoDocumentTextOutline /> Download CV
              </a>
            </div>

            <div className="flex items-center gap-4 pt-6">
              {icons.map((ic) => (
                <a
                  key={ic.name}
                  href={ic.ref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ic.name}
                  className={`p-3 rounded-full bg-white shadow-md ${ic.color} hover:scale-105 transition-transform`}
                >
                  <ic.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right column: image card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative rounded-3xl shadow-2xl overflow-hidden w-[320px] h-[420px] md:w-[420px] md:h-[540px] bg-gradient-to-tr from-white/5 via-white/10 to-transparent">
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-50 to-transparent opacity-30" />
              <div className="absolute -inset-6 rounded-3xl bg-white/5 blur-3xl opacity-30" />
              <div className="relative w-full h-full bg-white rounded-3xl overflow-hidden">
                <Image
                  src="/images/perfil.png"
                  alt="Foto de perfil de Alan Ruz"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
