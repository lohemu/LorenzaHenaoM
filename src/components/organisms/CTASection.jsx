import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-700 relative overflow-hidden">
      {/* Elementos decorativos animados */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-white/15 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Formas geométricas flotantes */}
        <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-yellow-400/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-pink-300/40 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-white/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Gradiente overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>

      <Container className="relative z-10">
        <div className="text-center">
          {/* Estrella decorativa superior */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <svg className="w-12 h-12 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-300 rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-yellow-200 rounded-full animate-pulse"></div>
            </div>
          </div>

          <Heading level={2} className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
            Desbloquea
            <span className="block font-dancing text-5xl md:text-6xl lg:text-7xl text-yellow-300 mt-2">
              tus sueños
            </span>
          </Heading>

          <Text className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Ha llegado el momento de tomar el control de tu vida. No dejes que los miedos y las dudas 
            te impidan alcanzar la versión más extraordinaria de ti mismo. Tu transformación comienza con 
            una simple decisión: dar el primer paso.
          </Text>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button className="bg-white text-purple-600 hover:bg-gray-50 px-10 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
              Agenda tu sesión gratuita
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm transition-all duration-300"
            >
              Conocer más sobre mí
            </Button>
          </div>

          {/* Garantía y elementos de confianza */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-3xl mx-auto border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Garantía */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-lg">Garantía 100%</div>
                  <div className="text-white/80 text-sm">30 días o tu dinero de vuelta</div>
                </div>
              </div>

              {/* Separador */}
              <div className="hidden md:block w-px h-12 bg-white/30"></div>

              {/* Certificación */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-lg">Mentora Certificada</div>
                  <div className="text-white/80 text-sm">+8 años de experiencia</div>
                </div>
              </div>

              {/* Separador */}
              <div className="hidden md:block w-px h-12 bg-white/30"></div>

              {/* Soporte */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-lg">Soporte 24/7</div>
                  <div className="text-white/80 text-sm">Siempre disponible para ti</div>
                </div>
              </div>
            </div>
          </div>

          {/* Texto motivacional final */}
          <div className="mt-12">
            <Text className="text-lg text-white/80 font-light italic">
              "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora."
            </Text>
            <Text className="text-white/60 text-sm mt-2">
              - Proverbio chino
            </Text>
          </div>
        </div>
      </Container>

      {/* Estilos adicionales para animaciones */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}