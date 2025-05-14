export const Home = () => (
    <section className="max-w-6xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-titulo mb-6">Toma el control de tu tiempo y tu vida</h1>
      <p className="text-lg text-gray-700 mb-8">
      "Ayudo a mujeres que se sienten abrumadas, cansadas y fuera de control a vivir una transformación que les permita 
      reconectar con su poder y su valor. Las guío para que vivan más ligeras, seguras y llenas de alegría."
      </p>
      <div className="flex justify-center gap-6 mt-10">
        <a
          href="/mentorias"
          className="bg-coralLoren text-white py-3 px-6 rounded-2xl shadow-md hover:scale-105 transition-transform"
        >
          Conoce mis mentorías
        </a>
        <a
          href="/recursos"
          className="bg-azulLoren text-white py-3 px-6 rounded-2xl shadow-md hover:scale-105 transition-transform"
        >
          Descarga recursos
        </a>
      </div>
    </section>
  );
  
  