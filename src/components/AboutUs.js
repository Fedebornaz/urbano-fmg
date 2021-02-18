import React from "react";

const AboutUs = () => {
  return (
    <div
      className="h-screen w-full flex flex-col items-center bg-gray-200 py-20 px-44"
      id="about-us"
    >
      <h1 className="text-5xl text-pink-darkest font-bold mt-20">
        ¿Quiénes somos?
      </h1>
      <p className="text-lg mt-20">
        Somos una empresa formada por profesionales, con trayectoria y una
        amplia experiencia en la industria automotriz y la resolución de
        siniestros automotores.
      </p>
      <p className="text-lg mt-10">
        Nuestro compromiso es brindar un servicio de excelencia, aplicando la
        experiencia obtenida, para brindar soluciones acordes a las necesidades
        de todos los actores involucrados. Contamos con presencia en la Ciudad
        de Buenos Aires, GBA Norte, las dos ciudades más importantes de Tierra
        del Fuego, Río Grande y Ushuaia, y realizando peritaciones remotas en
        todo el país.
      </p>
    </div>
  );
};

export default AboutUs;
