import React from "react";
import logo from "../img/Icon.png";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="h-20 w-full bg-white flex justify-center items-center">
      <ul className="flex text-sm">
        <li>
          <img src={logo} width="16" alt="Círculo del logo" />
        </li>
        <li className="ml-2">
          {currentYear} <em className="text-pink-darkest">|</em>
        </li>
        <li className="ml-2">
          Desarrollado por{" "}
          <a
            className="text-pink-darkest font-semibold"
            href="https://github.com/Fedebornaz"
            target="_blank"
            rel="noreferrer"
          >
            Federico Bornaz
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
