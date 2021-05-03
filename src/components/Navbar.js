import React from "react";
import logo from "../img/Urbano-logo.png";
import hamburger from "../img/menu.svg";

export default function Navbar() {
  return (
    <nav className="container min-w-full bg-white fixed z-40 flex flex-row py-6 px-8 lg:px-32 justify-between items-center shadow-lg font-bold text-base">
      <img src={logo} width="200" alt="Logo Urbano FMG" />

      <button className="md:hidden">
        <img src={hamburger} alt="Menú hamburguesa" width="40" height="40" />
      </button>

      <ul className="hidden md:inline-flex justify-around text-gray-500 font-bold text-base">
        <li className="px-5 transition-all duration-500 hover:text-pink-darkest">
          <a href="#home">Inicio</a>
        </li>
        <li className="px-5 transition-all duration-500 hover:text-pink-darkest">
          <a href="#about-us">Nosotros</a>
        </li>
        <li className="px-5 transition-all duration-500 hover:text-pink-darkest">
          <a href="#objectives">Objetivos</a>
        </li>
        <li className="px-5 transition-all duration-500 hover:text-pink-darkest">
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
