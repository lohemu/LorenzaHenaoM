import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-blue-main/20 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-lavender/20 rounded-full opacity-50 decorative-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-mint rounded-full opacity-40"></div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-coral rounded-full opacity-50"></div>
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagen y elementos decorativos */}
          <div className="relative order-2 lg:order-1">
            {/* Línea decorativa curva */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <svg width="120" height="40" viewBox="0 0 120 40" className="text-coral/50">
                <path
                  d="M10,30 Q60,5 110,30"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>

            {/* Imagen principal */}
            <div className="relative z-10 aspect-[4/5] max-w-md mx-auto">
              <div className="w-full h-full bg-gradient-soft-blue rounded-3xl overflow-hidden shadow-2xl">
                {/* Placeholder para imagen */}
                <div className="w-full h-full bg-gradient-to-br from-blue-light to-lavender/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-coral to-coral-dark rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-blue-main font-montserrat font-semibold text-lg">Tu foto aquí</p>
                  </div>
                </div>
              </div>

              {/* Forma decorativa de fondo */}
              <div className="absolute -z-10 -top-4 -left-4 -right-4 -bottom-4 bg-gradient-to-br from-lavender/20 to-coral/20 rounded-[2.5rem] transform -rotate-6 decorative-blob"></div>
            </div>

            {/* Elementos flotantes decorativos */}
            <div className="absolute top-16 -left-8 w-16 h-16 bg-gradient-to-br from-mint to-mint-dark rounded-full opacity-80 shadow-lg animate-pulse"></div>
            <div className="absolute bottom-20 -right-6 w-12 h-12 bg-gradient-to-br from-blue-main to-blue-dark rounded-full opacity-70 shadow-lg"></div>
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-light to-lavender/30 text-blue-main rounded-full text-sm font-montserrat font-medium mb-4">
                Sobre Mí
              </span>
            </div>

            <Heading level={2} className="text-4xl lg:text-5xl font-montserrat font-light mb-6 text-gray-800">
              Hola, soy
              <span className="block font-dancing text-coral-dark text-5xl lg:text-6xl mt-2">
                Lorenza
              </span>
            </Heading>

            <Text className="text-lg text-gray-600 mb-8 leading-relaxed font-montserrat">
              Soy mentora, tallerista y artesana. "Ayudo a mujeres que se sienten abrumadas, cansadas y fuera de control a vivir una transformación que les permita reconectar con su poder y su valor. Las guío para que vivan más ligeras, seguras y llenas de alegría.
            </Text>


            <Text className="text-lg text-gray-600 mb-8 leading-relaxed font-montserrat">
              También soy mamá, docente, investigadora y emprendedora y todas estas diferentes facetas me han llevado a recopilar experiencia en el manejo del tiempo de forma sabia. Planear, organizar y ejecutar tareas en busca de objetivos concretos es algo que puede ser divertido y generar una enorme satisfacción si se hace con intención y propósito.
            </Text>


           <Text className="text-lg text-gray-600 mb-8 leading-relaxed font-montserrat">
             Creo firmemente que uno puede lograr lo que se propone si tiene una mentalidad fuerte, disciplina y mucho compromiso con la persona más importante: uno mismo.
            </Text>



            

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-coral to-coral-dark hover:from-coral-dark hover:to-coral text-white px-8 py-3 rounded-full font-montserrat font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Conoce más sobre mí
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-blue-main/30 text-blue-main hover:bg-blue-light px-8 py-3 rounded-full font-montserrat font-medium transition-all duration-300"
              >
                Ver mis certificaciones
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}