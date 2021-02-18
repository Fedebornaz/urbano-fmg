import React from "react";
import { Fade } from "react-slideshow-image";

// Librería: https://www.npmjs.com/package/react-slideshow-image
import "react-slideshow-image/dist/styles.css";

const Slideshow = ({ fadeImages }) => {
  const properties = {
    autoplay: true,
    arrows: false,
    transitionDuration: 2000,
    pauseOnHover: false,
    Easing: "ease",
  };

  return (
    <div className="slide-container">
      <Fade {...properties}>
        <div className="each-fade">
          <div className="image-container">
            <img
              src={fadeImages[0]}
              className="h-screen w-full bg-cover bg-center bg-no-repeat"
              alt="imagen de fondo del header 1"
            />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img
              src={fadeImages[1]}
              className="h-screen w-full bg-cover bg-center bg-no-repeat"
              alt="imagen de fondo del header 2"
            />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img
              src={fadeImages[2]}
              className="h-screen w-full bg-cover bg-center bg-no-repeat"
              alt="imagen de fondo del header 3"
            />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img
              src={fadeImages[3]}
              className="h-screen w-full bg-cover bg-center bg-no-repeat"
              alt="imagen de fondo del header 4"
            />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;
