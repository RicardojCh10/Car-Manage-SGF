// ! Páginas principales para el enrutamiento

// src/pages/Home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-[#2F4F75] mb-4">
        Bienvenido al Sistema de Gestión de Flotilla
      </h1>
      <p className="text-[#767676] mb-8 max-w-md">
        Este sistema le ayudará a administrar de manera eficiente su flotilla de vehículos, 
        contratos, mantenimiento y seguros, minimizando errores humanos y mejorando la productividad.
      </p>
      <button className="bg-[#2F4F75] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1e3b58] transition duration-300">
        Iniciar Sesión
      </button>
    </div>
  );
};

export default Home;
