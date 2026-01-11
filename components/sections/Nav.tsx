'use client'
import { bebasNeue } from "@/app/fonts";
import React, { useState } from "react";
import {
  HiArrowLeft,
  HiChatAlt,
  HiCube,
  HiDesktopComputer,
  HiHome,
  HiMenu,
} from "react-icons/hi";

const seccions = [
  { id: "Inicio", name: "Inicio", href: "#init", icon: HiHome },
  { id: "Expirence", name: "Experiencia", href: "#experience", icon: HiDesktopComputer },
  { id: "My Projects", name: "Proyectos", href: "#myProjects", icon: HiCube },
  { id: "Contact Me", name: "Contacto", href: "#contactMe", icon: HiChatAlt },
];
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="min-h-auto relative bg-(--color-primary)">
        {/* Mobile Navbar */}
        <div className={`fixed inset-0 lg:hidden ${isOpen ? 'z-10' : 'z-0'}`}>
          <div
            className={`fixed inset-0 bg-(--color-primary) transition-opacity duration-500 ease-in-out ${
              isOpen ? "opacity-50 pointer-events-auto " : "opacity-0 pointer-events-none"
            }`}
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <div
            className={`fixed inset-y-0 w-64 z-20 bg-(--color-secundary) transition-all duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:w-82`}
          >
            <div className="flex items-center justify-between p-4">
              <h3 className={`${bebasNeue.className} text-(--color-primary) mt-1.5 font-bold text-3xl  md:text-4xl lg:text-3xl`}>
                Alanrty24
              </h3>
              <button className="bg-(--color-primary) h-full rounded-lg p-1 text-lg md:text-2xl">
                <HiArrowLeft
                  className="text-(--color-secundary)"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                />
              </button>
            </div>
            <nav className="p-2">
              <ul>
                {seccions.map((seccion) => {
                  return (
                    <li
                      key={seccion.id}
                      className="flex items-center gap-2 text-white text-base px-4 py-2 rounded-xl mb-2 transition-all duration-500 hover:bg-(--color-primary) hover:text-(--color-tertiary) md:text-xl"
                      onClick={() => setIsOpen(false)}
                    >
                      <seccion.icon className="text-lg md:text-3xl" />
                      <a href={seccion.href} className="w-full">
                        {seccion.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:backdrop-blur-2xl lg:mt-4 lg:fixed lg:z-20 lg:inset-x-0 lg:min-h-16 lg:bg-(--color-primary) lg:border-b-0 lg:shadow-xl   lg:flex lg:items-center lg:justify-between lg:px-4 lg:rounded-2xl lg:mx-auto lg:max-w-5xl">
          <div>
            <h3 className={`text-(--color-tertiary) font-bold text-xl md:text-2xl lg:text-3xl ${bebasNeue.className}`}>
              Alan<span className="text-(--color-secundary)">rty24</span>
            </h3>
          </div>
          <nav className="">
            <ul className="flex ">
              {seccions.map((seccion) => {
                return (
                  <li
                    key={seccion.id}
                    className="flex  items-center gap-2 text-black text-xl px-4 py-2 rounded-xl ml-2 transition-all duration-500 hover:bg-(--color-secundary) hover:text-(--color-primary) hover:cursor-pointer lg:gap-1 lg:px-2 "
                    onClick={() => setIsOpen(false)}
                  >
                    <seccion.icon />
                    <a
                      href={seccion.href}
                      className="w-full font-semibold lg:text-lg"
                    >
                      {seccion.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Containt */}
        <div className="">
          {/* Header Mobile */}
          <div
            className={`header-navbar fixed z-10 inset-x-0 top-0 items-center justify-between py-4 px-4 ${
              isOpen ? "hidden" : "flex"
            } bg-(--color-primary) md:px-20 border-b-0 shadow-2xl lg:hidden`}
          >
            <h3 className={`text-3xl text-(--color-tertiary) font-bold ${bebasNeue.className}`}>
              Alan<span className="text-(--color-secundary)">rty24</span>
            </h3>
            <div
              className="flex justify-center items-center p-2 rounded-lg bg-(--color-secundary) text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <HiMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
