"use client"
import { bebasNeue } from "@/app/fonts";
import React, { useState } from "react";
import { HiArrowLeft, HiMenu } from "react-icons/hi";
import { seccions } from "@/lib/data";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="min-h-auto relative bg-(--color-primary)">
        {/* Mobile Navbar */}
        <div className={`fixed inset-0 lg:hidden ${isOpen ? 'z-10' : 'z-0'}`}>
          <div
            className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${
              isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
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
                Alan Ruz
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
                      <a href={seccion.href} className={`w-full ${bebasNeue.className} tracking-wider uppercase text-lg md:text-xl`}>
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
          <div className="hidden lg:mt-4 lg:fixed lg:z-20 lg:inset-x-0 lg:top-0 lg:min-h-16 lg:flex lg:items-center lg:justify-between lg:px-4 lg:rounded-2xl lg:mx-auto lg:max-w-6xl lg:backdrop-blur-md lg:bg-(--color-primary)/80 lg:border-b-0 lg:shadow-xl">
          <div>
            <h3 className={`text-(--color-tertiary) font-bold text-xl md:text-2xl lg:text-3xl ${bebasNeue.className}`}>
              Alan<span className="text-(--color-secundary)"> Ruz</span>
            </h3>
          </div>
          <nav className="">
            <ul className="flex ">
              {seccions.map((seccion) => {
                return (
                  <li
                    key={seccion.id}
                    className="flex items-center gap-2 text-black text-xl px-4 py-2 rounded-xl mx-2 transition-all duration-500 hover:bg-(--color-secundary) hover:text-(--color-primary) hover:cursor-pointer lg:gap-1 lg:px-2 "
                    onClick={() => setIsOpen(false)}
                  >
                    <seccion.icon className="text-lg md:text-3xl mb-1" />
                    <a
                      href={seccion.href}
                      className={`w-full font-semibold lg:text-lg ${bebasNeue.className} tracking-wider uppercase`}
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
            } bg-(--color-primary) border-b-0 shadow-2xl lg:hidden`}
          >
            <h3 className={`text-3xl text-(--color-tertiary) font-bold ${bebasNeue.className}`}>
              Alan<span className="text-(--color-secundary)"> Ruz</span>
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
