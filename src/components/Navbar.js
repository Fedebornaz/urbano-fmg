import React from "react";
import logo from "../img/Urbano-logo.png";

export default function Navbar() {
  return (
    <nav className="container min-w-full bg-white fixed z-40 flex flex-row p-6 justify-between items-center shadow-lg">
      <img src={logo} width="200" alt="Logo Urbano FMG" className="mx-7" />
      <ul className="flex justify-around text-gray-500 font-bold text-lg">
        <li className="px-7 hover:text-pink-darkest">
          <a href="#home">Inicio</a>
        </li>
        <li className="px-7 hover:text-pink-darkest">
          <a href="#about-us">Quienes somos</a>
        </li>
        <li className="px-7 hover:text-pink-darkest">
          <a href="#objectives">Objetivos</a>
        </li>
        <li className="px-7 hover:text-pink-darkest">
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
