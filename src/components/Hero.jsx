import React from "react";
import img3 from '../assets/banner.png';

const Hero = () => {
  return (
    <div className="relative w-full h-full md:h-screen">
      {/* Imagen de fondo */}
      <img
        src={img3}
        alt="Hero Banner"
        className="object-cover md:w-full md:h-full"
      />

      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Contenedor de texto centrado */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Bienvenido a Rescudo Fortalix
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white drop-shadow-md max-w-2xl">
          Brindamos soluciones de seguridad privada con innovación y confianza.
        </p> */}
        {/* <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors">
          Contáctanos
        </button> */}
      </div>
    </div>
  );
};

export default Hero;
