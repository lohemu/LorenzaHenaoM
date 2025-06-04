import { TextAreaAtom } from "../components/atoms/TextAreaAtom"; 

export const Contact = () => (
  <section className="max-w-4xl mx-auto px-4 py-20">
    <h1 className="text-4xl font-titulo text-center mb-8">Contáctame</h1>
    <p className="text-lg leading-relaxed text-gray-700 mb-8 text-center">
      ¿Lista para dar el siguiente paso? Estoy aquí para ayudarte.
      Puedes escribirme a través del formulario o enviarme un mensaje directo por WhatsApp.
    </p>

    <form className="space-y-6 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Nombre"
        className="w-full border border-gray-300 rounded-md p-3 focus:border-azulLoren"
        required
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        className="w-full border border-gray-300 rounded-md p-3 focus:border-azulLoren"
        required
      />
      
      <TextAreaAtom placeholder="Tu mensaje" />

      <button
        type="submit"
        className="bg-coralLoren text-black py-3 px-6 rounded-2xl shadow-md hover:scale-105 transition-transform w-full"
      >
        Enviar mensaje
      </button>
    </form>
  </section>
);


// export const Contact = () => (
//     <section className="max-w-4xl mx-auto px-4 py-20">
//       <h1 className="text-4xl font-titulo text-center mb-8">Contáctame</h1>
//       <p className="text-lg leading-relaxed text-gray-700 mb-8 text-center">
//         ¿Lista para dar el siguiente paso? Estoy aquí para ayudarte.
//         Puedes escribirme a través del formulario o enviarme un mensaje directo por WhatsApp.
//       </p>
      
//       <form className="space-y-6 max-w-md mx-auto">
//         <input
//           type="text"
//           placeholder="Nombre"
//           className="w-full border border-gray-300 rounded-md p-3 focus:border-azulLoren"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Correo electrónico"
//           className="w-full border border-gray-300 rounded-md p-3 focus:border-azulLoren"
//           required
//         />
//         <textarea
//           placeholder="Tu mensaje"
//           rows="5"
//           className="w-full border border-gray-300 rounded-md p-3 focus:border-azulLoren"
//           required
//         ></textarea>
//         <button
//           type="submit"
//           className="bg-coralLoren text-white py-3 px-6 rounded-2xl shadow-md hover:scale-105 transition-transform w-full"
//         >
//           Enviar mensaje
//         </button>
//       </form>
//     </section>
//   );
  
 
  