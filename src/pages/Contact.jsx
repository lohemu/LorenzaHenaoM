import React from 'react';
import { InputTextAtom } from '../components/atoms/InputTextAtom';
import { TextAreaAtom } from "../components/atoms/TextAreaAtom"; 

export const Contact = () => (
  <section className="max-w-4xl mx-auto px-4 py-20 bg-[#F2FBFF] text-black font-montserrat">
    <h1 className="text-4xl font-titulo text-center mb-8">Contáctame</h1>
    <p className="text-lg leading-relaxed mb-8 text-center">
      ¿Lista para dar el siguiente paso? Estoy aquí para ayudarte.
      Puedes escribirme a través del formulario o enviarme un mensaje directo por WhatsApp.
    </p>

    <form className="space-y-6 max-w-md mx-auto">
      <InputTextAtom name="name" type="text" placeholder="Nombre" required />
      <InputTextAtom name="email" type="email" placeholder="Correo electrónico" required />
      <TextAreaAtom name="message" placeholder="Tu mensaje" required />
      <button
        type="submit"
        className="border-2 border-[#E4F7FF] bg-[#B8E6FF] text-black py-3 px-6 rounded-2xl shadow-md hover:bg-[#7BCBFF] transition w-full"
      >
        Enviar mensaje
      </button>
    </form>
  </section>
);


// import React from 'react';
// import { InputTextAtom } from '../components/atoms/InputTextAtom';
// import { TextAreaAtom } from "../components/atoms/TextAreaAtom"; 

// export const Contact = () => (
//   <section className="max-w-4xl mx-auto px-4 py-20">
//     <h1 className="text-4xl font-titulo text-center mb-8">Contáctame</h1>
//     <p className="text-lg leading-relaxed text-gray-700 mb-8 text-center">
//       ¿Lista para dar el siguiente paso? Estoy aquí para ayudarte.
//       Puedes escribirme a través del formulario o enviarme un mensaje directo por WhatsApp.
//     </p>

//     <form className="space-y-6 max-w-md mx-auto">
//       <InputTextAtom
//         name="name"
//         type="text"
//         placeholder="Nombre"
//         required
//       />
//       <InputTextAtom
//         name="email"
//         type="email"
//         placeholder="Correo electrónico"
//         required
//       />
//       <TextAreaAtom
//         name="message"
//         placeholder="Tu mensaje"
//         required
//       />
//       <button
//         type="submit"
//         className="bg-coralLoren text-black py-3 px-6 rounded-2xl shadow-md hover:scale-105 transition-transform w-full"
//       >
//         Enviar mensaje
//       </button>
//     </form>
//   </section>
// );


