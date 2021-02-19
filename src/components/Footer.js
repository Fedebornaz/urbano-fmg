import React from "react";

const Footer = () => {
  return (
    <footer className="h-20 w-full bg-white flex justify-center items-center">
      <ul className="flex text-sm">
        <li>
          2021 <em className="text-pink-darkest">|</em>
        </li>
        <li className="ml-2">
          Página web desarrollada por{" "}
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
