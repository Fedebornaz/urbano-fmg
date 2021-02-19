import React from "react";
import Slideshow from "./Slideshow";
import slide1 from "../img/Inicio-foto-1.jpg";
import slide2 from "../img/Inicio-foto-2.jpg";
import slide3 from "../img/Inicio-foto-3.jpg";
import slide4 from "../img/Inicio-foto-4.jpg";

const fadeImages = [slide1, slide2, slide3, slide4];

const Home = () => {
  return (
    <header id="home" className="relative select-text">
      <Slideshow fadeImages={fadeImages} />
      <h1 className="absolute inset-y-1/2 w-full text-center text-4xl font-bold text-white z-40">
        La calidad marca la diferencia.
      </h1>
    </header>
  );
};

export default Home;
