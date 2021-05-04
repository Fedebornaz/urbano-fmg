import React from "react";
import logo from "../img/Urbano-logo.png";
import hamburger from "../img/menu.svg";

export default function Navbar() {
  return (
    <header className="min-w-full bg-white fixed z-40 flex flex-wrap px-8 lg:px-40 py-6 md:py-0 justify-between items-center shadow-lg font-bold text-base">
      <img src={logo} width="200" alt="Logo Urbano FMG" />

      <label for="menu-toggle" className="md:hidden cursor-pointer">
        <img src={hamburger} alt="Menú hamburguesa" width="40" height="40" />
      </label>
      <input type="checkbox" className="hidden" id="menu-toggle" />

      <div
        className="hidden md:flex md:items-center md:w-auto w-full justify-around text-gray-500 font-bold"
        id="menu"
      >
        <nav>
          <ul className="md:flex items-start justify-between pt-8 lg:pt-0 y-full">
            <a href="#home">
              <li className="md:px-5 py-6 md:py-12 transition-all duration-500 border-b-4 border-transparent hover:border-pink-darkest  hover:text-pink-darkest">
                Inicio
              </li>
            </a>
            <a href="#about-us">
              <li className="md:px-5 py-6 md:py-12 transition-all duration-500 border-b-4 border-transparent hover:border-pink-darkest  hover:text-pink-darkest">
                Nosotros
              </li>
            </a>
            <a href="#objectives">
              <li className="md:px-5 py-6 md:py-12 transition-all duration-500 border-b-4 border-transparent hover:border-pink-darkest  hover:text-pink-darkest">
                Objetivos
              </li>
            </a>
            <a href="#contact">
              <li className="md:px-5 py-6 md:py-12 transition-all duration-500 border-b-4 border-transparent hover:border-pink-darkest  hover:text-pink-darkest">
                Contacto
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}
