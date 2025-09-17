import Container from '../components/atoms/Container';
import Heading from '../components/atoms/Heading';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-pink-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-100 rounded-full opacity-40"></div>
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagen y elementos decorativos */}
          <div className="relative order-2 lg:order-1">
            {/* Línea decorativa curva */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <svg width="120" height="40" viewBox="0 0 120 40" className="text-pink-300">
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
              <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl overflow-hidden shadow-2xl">
                {/* Placeholder para imagen */}
                <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-purple-600 font-medium text-lg">Tu foto aquí</p>
                  </div>
                </div>
              </div>

              {/* Forma decorativa de fondo */}
              <div className="absolute -z-10 -top-4 -left-4 -right-4 -bottom-4 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-[2.5rem] transform -rotate-6"></div>
            </div>

            {/* Elementos flotantes decorativos */}
            <div className="absolute top-16 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-80 shadow-lg animate-pulse"></div>
            <div className="absolute bottom-20 -right-6 w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-70 shadow-lg"></div>
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
                Sobre Mí
              </span>
            </div>

            <Heading level={2} className="text-4xl lg:text-5xl font-light mb-6">
              Hola, soy
              <span className="block font-dancing text-pink-500 text-5xl lg:text-6xl mt-2">
                Lorenza Henao
              </span>
            </Heading>

            <Text className="text-lg text-gray-600 mb-8 leading-relaxed">
              Soy mentora certificada con más de 8 años de experiencia ayudando a personas como tú 
              a descubrir su verdadero potencial. Mi pasión es acompañarte en el proceso de transformación 
              personal y profesional, creando un espacio seguro donde puedas explorar tus sueños y convertirlos en realidad.
            </Text>

            <div className="mb-8">
              <Heading level={3} className="text-xl font-semibold text-gray-800 mb-4">
                Lo que ofrezco:
              </Heading>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <Text className="text-gray-600">
                    <strong>Mentoría personalizada</strong> adaptada a tus necesidades específicas
                  </Text>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <Text className="text-gray-600">
                    <strong>Desarrollo de habilidades</strong> de liderazgo y comunicación efectiva
                  </Text>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <Text className="text-gray-600">
                    <strong>Estrategias prácticas</strong> para superar obstáculos y alcanzar metas
                  </Text>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <Text className="text-gray-600">
                    <strong>Acompañamiento continuo</strong> en tu proceso de crecimiento personal
                  </Text>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Conoce más sobre mí
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-medium transition-all duration-300"
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