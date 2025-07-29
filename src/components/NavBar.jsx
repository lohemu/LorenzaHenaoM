// NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-titulo text-black">Loren</span>
        </Link>

        {/* Menú de navegación */}
        <div className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className="text-black hover:text-contraste2 transition font-medium"
          >
            Inicio
          </Link>
          <Link 
            to="/mentorias" 
            className="text-black hover:text-contraste2 transition font-medium"
          >
            Mentorías
          </Link>
          <Link 
            to="/recursos" 
            className="text-black hover:text-contraste2 transition font-medium"
          >
            Recursos
          </Link>
          <Link 
            to="/sobre-mi" 
            className="text-black hover:text-contraste2 transition font-medium"
          >
            Sobre mí
          </Link>
          <Link 
            to="/contacto" 
            className="text-black hover:text-contraste2 transition font-medium"
          >
            Contacto
          </Link>
        </div>

        {/* Botón móvil (hamburguesa) */}
        <button className="md:hidden text-black focus:outline-none">
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>

      {/* Menú móvil (se muestra al hacer clic en el botón hamburguesa) */}
      {/* Aquí iría la lógica para mostrar/ocultar el menú en móvil */}
    </nav>
  );
};