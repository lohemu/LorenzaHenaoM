//Código sugeruido por Copilot con base en los cambios hechos por Robotina

import { TestimonialCard } from "../components/TestimonialCard";

export const Home = () => (
  <section className="max-w-6xl mx-auto px-4 py-20 bg-fondo text-black font-montserrat flex flex-col items-center">
    <h1 className="text-5xl font-titulo mb-6 text-black drop-shadow-sm">
      Toma el control de tu tiempo y tu vida
    </h1>
    <p className="text-lg mb-10 max-w-2xl text-center">
      "Ayudo a mujeres que se sienten abrumadas, cansadas y fuera de control a vivir una transformación que les permita 
      reconectar con su poder y su valor. Las guío para que vivan más ligeras, seguras y llenas de alegría."
    </p>
    <div className="flex flex-col md:flex-row justify-center gap-8 mb-12 w-full">
      <TestimonialCard 
        nombre="Luigi" 
        testimonio="Desde que Loren me enseñó a manejar el tiempo mi tensión arterial mejoró." 
        foto="src/assets/luigi.jpg" 
      />
      <TestimonialCard 
        nombre="Loren" 
        testimonio="Las mentorías de Loren me ayudaron a priorizarme." 
        foto="src/assets/Loren.jpg" 
      />
    </div>
    <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-md">
      <a
        href="/mentorias"
        className="border-2 border-bordeLoren bg-contraste1 text-black py-3 px-6 rounded-2xl shadow-md hover:bg-contraste2 transition text-center font-semibold"
      >
        Conoce mis mentorías
      </a>
      <a
        href="/recursos"
        className="border-2 border-bordeLoren bg-contraste1 text-black py-3 px-6 rounded-2xl shadow-md hover:bg-contraste2 transition text-center font-semibold"
      >
        Descarga recursos
      </a>
    </div>
  </section>
);


//Código sugerido por Robotina con nuevos estilos de color y fuente
// import { TestimonialCard } from "../components/TestimonialCard";

// export const Home = () => (
//   <section className="max-w-6xl mx-auto px-4 py-20 text-center bg-[#F2FBFF] text-black font-montserrat">
//     <h1 className="text-5xl font-titulo mb-6 text-black">Toma el control de tu tiempo y tu vida</h1>
//     <p className="text-lg mb-8">
//       "Ayudo a mujeres que se sienten abrumadas, cansadas y fuera de control a vivir una transformación que les permita 
//       reconectar con su poder y su valor. Las guío para que vivan más ligeras, seguras y llenas de alegría."
//     </p>
//     <TestimonialCard nombre="Luigi" testimonio="Desde que Loren me enseñó a manejar el tiempo mi tensión arterial mejoró." foto="src/assets/luigi.jpg" />
//     <TestimonialCard nombre="Loren" testimonio="Las mentorías de Loren me ayudaron a priorizarme." foto="src/assets/Loren.jpg" />
//     <div className="flex justify-center gap-6 mt-10">        
//       <a
//         href="/mentorias"
//         className="border-2 border-[#E4F7FF] bg-[#B8E6FF] text-black py-3 px-6 rounded-2xl shadow-md hover:bg-[#7BCBFF] transition"
//       >
//         Conoce mis mentorías
//       </a>
//       <a
//         href="/recursos"
//         className="border-2 border-[#E4F7FF] bg-[#B8E6FF] text-black py-3 px-6 rounded-2xl shadow-md hover:bg-[#7BCBFF] transition"
//       >
//         Descarga recursos
//       </a>
//     </div>
//   </section>
// );


//Código original 
// import { TestimonialCard } from "../components/TestimonialCard";

// export const Home = () => (
//     <section className="max-w-6xl mx-auto px-4 py-20 text-center">
//       <h1 className="text-5xl font-titulo mb-6">Toma el control de tu tiempo y tu vida</h1>
//       <p className="text-lg text-gray-700 mb-8">
//       "Ayudo a mujeres que se sienten abrumadas, cansadas y fuera de control a vivir una transformación que les permita 
//       reconectar con su poder y su valor. Las guío para que vivan más ligeras, seguras y llenas de alegría."
//       </p>
//       <TestimonialCard nombre="Luigi" testimonio="Desde que Loren me enseñó a manejar el tiempo mi tensión arterial mejoró." foto="src/assets/luigi.jpg" />
//       <TestimonialCard nombre="Loren" testimonio="Las mentorías de Loren me ayudaron a priorizarme." foto="src/assets/Loren.jpg" />
//       <div className="flex justify-center gap-6 mt-10">        
//         <a
//           href="/mentorias"
//           className="bg-coralLoren text-blue py-3 px-6 rounded-2xl shadow-md hover:scale-105 transition-transform"
//         >
//           Conoce mis mentorías
//         </a>
//         <a
//           href="/recursos"
//           className="bg-azulLoren text-blue py-3 px-6 rounded-2xl shadow-md hover:scale-105 transition-transform"
//         >
//           Descarga recursos
//         </a>
//       </div>
      
//     </section>
//   );
  
  