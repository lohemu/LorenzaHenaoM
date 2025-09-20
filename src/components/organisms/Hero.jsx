import { Container } from '../atoms/Container';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

import FotoLoren from '../../assets/img/FotoLoren.png';

export function Hero() {
  return (
    <>
      {/* Sección Principal - Hero */}
      <section id="inicio" className="relative overflow-hidden bg-gradient-soft-coral min-h-screen flex items-center pattern-dots">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-4 h-4 bg-coral rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-6 h-6 bg-mint rounded-full opacity-50 animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-1/4 w-8 h-8 bg-lavender rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-10 w-3 h-3 bg-blue-main rounded-full opacity-70 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Formas orgánicas decorativas */}
          <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-lavender/20 rounded-full decorative-blob opacity-30"></div>
          <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-coral/20 rounded-full decorative-blob opacity-25" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-2/3 left-1/5 w-12 h-12 bg-mint/30 rounded-full decorative-blob opacity-35" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <Container className="relative z-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Elemento decorativo superior */}
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-coral to-coral-dark rounded-full animate-gentle-glow"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-mint rounded-full animate-ping"></div>
              </div>
            </div>

            <Heading 
              level={1} 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-light leading-tight mb-6 text-coral-dark animate-fade-in-up"
            >
              Sé tu prioridad, organiza tu vida, 
              <span className="block font-dancing text-blue-dark text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
                recupera tu energía y reconecta con tu poder y tu valor.
              </span>
            </Heading>

            {/* Decoración intermedia */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-blue-main rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-lavender rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-2 h-2 bg-mint rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            <Text className="text-lg md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up font-montserrat" style={{ animationDelay: '0.4s' }}>
              Te acompaño a transformar el caos y la rutina en una vida plena, llena de propósito, disciplina y valor.
            </Text>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button 
                onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-coral to-coral-dark hover:from-coral-dark hover:to-coral text-white px-8 py-4 rounded-full text-lg font-montserrat font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 btn-coral-hover"
              >
                Descubre más
              </Button>
              <Button variant="secondary">Botón Azul</Button>
              <a 
                href="tel:+573001234567" 
                className="flex items-center gap-2 text-gray-600 hover:text-blue-main transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300 group-hover:bg-blue-light">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <span className="font-montserrat">Llámame: (300) 123 - 4567</span>
              </a>
            </div>

            {/* Iconos de beneficios con colores actualizados */}
            <div className="flex justify-center lg:justify-start gap-8 mt-12 opacity-70 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              
              {/* Icono Crecimiento - Menta con mayor contraste */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 hero-benefit-growth rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 font-montserrat font-medium">Crecimiento</span>
              </div>
              
              {/* Icono Bienestar - Azul con mayor contraste */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 hero-benefit-wellness rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 font-montserrat font-medium">Bienestar</span>
              </div>
              
              {/* Icono Potencial - Lavanda con mayor contraste */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 hero-benefit-potential rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 font-montserrat font-medium">Potencial</span>
              </div>
              
              {/* Icono Claridad - Coral con mayor contraste */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 hero-benefit-clarity rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 font-montserrat font-medium">Claridad</span>
              </div>
              
            </div>
          </div>

          {/* Imagen del héroe */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            {/* Contenedor de la imagen principal */}
            <div className="relative z-10 aspect-[4/5] rounded-3xl bg-gradient-to-br from-blue-main/20 via-lavender/20 to-coral/20 shadow-2xl overflow-hidden group">
              {/* Placeholder para la imagen */}
              <div className="w-full h-full bg-gradient-soft-blue flex items-center justify-center relative">
                <div className="text-center">
                  <img 
                    src={FotoLoren} 
                    alt="Lorenza" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Overlay decorativo */}
                <div className="absolute inset-0 bg-gradient-to-br from-coral/5 to-lavender/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Elementos decorativos alrededor de la imagen */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-mint to-mint-dark rounded-full opacity-80 shadow-lg animate-float"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-coral to-coral-dark rounded-full opacity-70 shadow-lg animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-main to-blue-dark rounded-full opacity-60 shadow-lg animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/3 -left-4 w-10 h-10 bg-gradient-to-br from-lavender to-lavender-dark rounded-full opacity-50 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}></div>

            {/* Forma orgánica de fondo */}
            <div className="absolute -z-10 top-8 left-8 right-8 bottom-8 bg-gradient-to-br from-blue-main/10 to-lavender/10 rounded-[3rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-500 decorative-blob"></div>
          </div>
        </Container>
      </section>
    </>
  );
}
