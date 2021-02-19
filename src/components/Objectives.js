import React from "react";

const Objectives = () => {
  return (
    <div
      className="h-screen w-full flex flex-col py-10 bg-wine-pattern"
      id="objectives"
    >
      <div className="w-full h-full flex justify-center mt-24">
        <div className="w-1/3 h-full p-4 bg-white rounded-md mx-6 shadow-2xl transition-all duration-300 transform hover:scale-105">
          <h1 className="mt-12 text-pink-darkest text-center text-5xl font-bold">
            Misión
          </h1>
          <div className="h-0.5 w-1/2 mt-16 ml-4 bg-pink-darkest"></div>
          <p className="mt-1 p-4 text-justify text-gray-800 text-lg font-light leading-loose">
            A través de la transparencia y la diligencia, nos enfocamos en
            brindar soluciones prácticas a los procesos de liquidación de
            siniestros en el ramo automotor.
          </p>
        </div>
        <div className="w-1/3 h-full p-4 bg-white rounded-md mx-6 shadow-2xl transition-all duration-300 transform hover:scale-105">
          <h1 className="mt-12 text-pink-darkest text-center text-5xl font-bold">
            Visión
          </h1>
          <div className="h-0.5 w-1/2 mt-16 ml-4 bg-pink-darkest"></div>
          <p className="mt-1 p-4 text-justify text-gray-800 text-lg font-light leading-loose">
            Generar <em className="font-bold text-pink-darkest">VALOR</em>.
            Contribuir por medio de nuestra experiencia y nuestros valores, a
            una mejora en el desarrollo de los procesos en los distintos ramos
            del mercado asegurador.
          </p>
        </div>
        <div className="w-1/3 h-full p-4 bg-white rounded-md mx-6 shadow-2xl transition-all duration-300 transform hover:scale-105">
          <h1 className="mt-12 text-pink-darkest text-center text-5xl font-bold">
            Valores
          </h1>
          <div className="h-0.5 w-1/2 mt-16 ml-4 bg-pink-darkest"></div>
          <ul className="mt-1 p-4 text-justify text-gray-800 text-lg font-light leading-loose">
            <li>✨ Transparencia</li>
            <li>🤝🏻 Confianza</li>
            <li>🛠️ Responsabilidad</li>
            <li>📚 Integridad</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
