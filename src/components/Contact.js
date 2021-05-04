import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";

// Para mayor seguridad pongo el USER ID del servicio EmailJS en un .env y lo incluyo en el .gitignore
init(process.env.REACT_APP_USER_ID);

const Contact = () => {
  // Asigno en variables los componentes que voy a utilizar de la libreria React Hook Form.
  const { register, handleSubmit, watch, errors } = useForm();

  // Para generar el número de contacto de la entrada en el form.
  const [contactNumber, setContactNumber] = useState("000000");
  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  // Para detectar los caracteres restantes en
  const message = watch("message") || "";
  const messageCharsLeft = 1500 - message.length;

  // Función que se va a ejecutar cuando se le hace un Submit al form de contacto.
  const onSubmit = (data) => {
    const form = document.querySelector("#contact-form");

    console.log(data);
    generateContactNumber();

    sendForm("contact_service", "contact_form", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        form.reset();
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div
      className="h-auto md:h-screen w-full flex flex-col items-center py-20 px-6 md:px-32 bg-gray-900"
      id="contact"
    >
      <div className="mt-8 w-full h-full flex flex-col lg:flex-row">
        <div className="bg-white rounded-md w-full md:w-1/2 h-auto mt-7">
          <form
            className="flex flex-col px-10 py-7"
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-lg font-bold mb-5 text-gray-900">
              Completá con tus datos y te responderemos vía mail a la brevedad.
            </h1>
            <input
              type="text"
              placeholder="Nombre"
              name="user_name"
              className="p-2 bg-gray-200 rounded"
              ref={register}
            />
            <input
              type="email"
              placeholder="Tu casilla de email"
              name="user_mail"
              className="mt-2 p-2 bg-gray-200 rounded"
              ref={register}
            />
            <input
              type="text"
              placeholder="Asunto"
              name="user_subject"
              className="mt-2 mb-2 p-2 bg-gray-200 rounded"
              ref={register}
            />
            <textarea
              placeholder="Cuerpo del mail"
              name="message"
              className="p-2 bg-gray-200 rounded"
              maxLength="1500"
              rows="4"
              ref={register}
            ></textarea>
            <p className="font-light text-xs text-right">{messageCharsLeft}</p>
            <input type="hidden" name="contact_number" value={contactNumber} />

            <button
              type="submit"
              className="mt-2 bg-pink-darkest shadow-md text-white p-2 rounded"
            >
              Enviar
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 max-h-full p-10 lg:p-14 mt-4 md:mt-0">
          <div className="text-white">
            <p className="text-2xl text-pink-darkest font-bold">
              Facundo Avila - Perito
            </p>
            <p>
              <em className="font-bold">Mail: </em>f.avila@urbanofmg.com.ar
            </p>
            <p>
              <em className="font-bold">Celular: </em>+54 9 11 5886-8221
            </p>
            <div className="bg-pink-darkest w-24 h-0.5 mt-2"></div>
          </div>
          <div className="text-white mt-10">
            <p className="text-2xl text-pink-darkest font-bold">
              Mariano Caravello - Perito
            </p>
            <p>
              <em className="font-bold">Mail: </em>m.caravello@urbanofmg.com.ar
            </p>
            <p>
              <em className="font-bold">Celular: </em>+54 9 11 5023-2830
            </p>
            <div className="bg-pink-darkest w-24 h-0.5 mt-2"></div>
          </div>
          <div className="text-white mt-10">
            <p className="text-2xl text-pink-darkest font-bold">
              Gabriela Echeverria - Administración
            </p>
            <p>
              <em className="font-bold">Mail: </em>g.echeverria@urbanofmg.com.ar
            </p>
            <p>
              <em className="font-bold">Celular: </em>+54 11 25415908
            </p>
            <div className="bg-pink-darkest w-24 h-0.5 mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
