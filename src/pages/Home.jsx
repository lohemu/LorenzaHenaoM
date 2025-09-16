import Hero from '../components/organisms/Hero';
import Features from '../components/organisms/Features';


export function Home() {
  return (
    <Hero />

    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8 text-center">
    //   {/* Título con Dancing Script */}
    //   <h1 className="text-5xl font-dancing text-blue-600 mb-4">
    //     Bienvenido a mi sitio ✨
    //   </h1>

    //   {/* Subtítulo con Dancing Script (otro peso) */}
    //   <h2 className="text-3xl test-font text-gray-700 italic mb-6">
    //     Probando Dancing Script
    //   </h2>

    //   {/* Párrafo con Montserrat */}
    //   <p className="text-lg font-montserrat text-gray-800 max-w-2xl">
    //     Este es un texto con Montserrat.  
    //     Aquí puedes comprobar cómo se combinan una fuente manuscrita (Dancing Script) 
    //     con una fuente sans-serif moderna (Montserrat).
    //   </p>

    //   {/* Botón de ejemplo */}
    //   <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-montserrat text-lg rounded-2xl shadow-md hover:bg-blue-700 transition">
    //     ¡Empieza ahora!
    //   </button>
    // </div>
  );
}
