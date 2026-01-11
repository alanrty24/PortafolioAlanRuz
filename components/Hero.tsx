import Image from "next/image";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
const numeroWhatsApp = "584241727312";
const mensaje = "Hola, estoy interesado 📱";
// Codificar el mensaje
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
      className="w-full relative bg-linear-to-b scroll-m-20 text-white md:mx-auto md:max-w-2xl md:flex md:justify-center py-8 md:py-16 lg:mt-0 lg:mx-auto lg:max-w-5xl"
      id="init"
      data-aos="fade-up"
    >
        <div className="contTitle py-4 flex flex-col gap-2 lg:w-[50%] xl:py-auto">
          <h3 className="text-lg font-bold text-black font-mono animate__animated animate__backInLeft animate__fast md:text-xl">
            Alan Ruz
          </h3>
          <p
            className={`text-4xl font-bold text-shadow-2xs animate__animated animate__fadeInUp animate__delay-1s text-(--color-secundary) md:text-5xl `}
          >
            FRONT END WEB DEVELOPER
          </p>
          <p className="text-black animate__animated animate__fadeInUp animate__delay-1s py-4 text-base indent-4 text-left md:text-base/7 lg:text-lg/7 ">
            Mi objetivo como desarrollador front-end es utilizar mis
            conocimientos para optimizar y escalar cualquier sistema, ofreciendo
            soluciones financieras y productivas.
          </p>
          <a
            href="/docs/Currículum Vitae Alan Ruz 2025.pdf"
            download="Currículum_AlanRuz.pdf"
            //   target="_blank"
            //   rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bottom-0 w-full p-4 rounded-2xl font-bold text-xl border border-input bg-(--color-secundary) shadow-sm hover:bg-accent hover:text-accent-foreground transition-all duration-500 animate__animated animate__backInLeft hover:-translate-y-1  md:w-1/2 md:text-base lg:px-4 lg:py-2"
          >
            <IoDocumentTextOutline />
            Download CV
          </a>
          <div className="relative z-10 inset-x-0 w-full flex items-center justify-center h-16">
            <ul className=" flex gap-6 absolute justify-center animate__animated animate__backInLeft p-6 mt-4">
              {icons.map((icon) => {
                return (
                  <li key={icon.name} className="relative hover:-translate-y-1 transition-all duration-500 ">
                    <a
                      href={icon.ref}
                      target="_blank"
                      className={`text-4xl p-2  md:text-3xl hover:text-5xl`}
                    >
                      <icon.icon
                        className={`${icon.color} transition-all duration-500`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="w-auto flex justify-center items-center lg:justify-end mt-4">
          <div className="animation_div h-70 w-70 rounded-[50%] shadow-2xl shadow-blue-600 overflow-hidden md:h-80 md:w-80 ">
            <Image
              src="/images/perfil.png"
              alt="ImgPerfil"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
    </section>
  );
};

export default Hero;
