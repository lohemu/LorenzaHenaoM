import React from "react";

export function TestimonialCard({ nombre, testimonio, foto }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md text-center max-w-sm mx-auto">
      <img
        src={foto}
        alt={`Foto de ${nombre}`}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <p className="text-gray-700 italic mb-4">"{testimonio}"</p>
      <h3 className="text-xl font-semibold text-azulLoren">{nombre}</h3>
    </div>
  );
}