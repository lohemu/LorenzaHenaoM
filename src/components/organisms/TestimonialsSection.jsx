import { useState, useEffect } from 'react';
import { Container } from '../atoms/Container';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';

const testimonials = [
  {
    id: 1,
    name: "Johanna",
    role: "",
    content: "Soy feliz porque gracias a Loren alcancé mis objetivos semanales y además tengo tiempo para hacer lo que me gusta. ¡Tiempo para mí!",
    avatar: "J",
    rating: 5
  },
  {
    id: 2,
    name: "Gloria",
    role: "",
    content: "Soy feliz porque gracias a Loren alcancé mis objetivos semanales y además tengo tiempo para hacer lo que me gusta. ¡Tiempo para mí!",
    avatar: "G",
    rating: 5
  },
  {
    id: 3,
    name: "Alejandra",
    role: "",
    content: "Soy feliz porque gracias a Loren alcancé mis objetivos semanales y además tengo tiempo para hacer lo que me gusta. ¡Tiempo para mí!.",
    avatar: "A",
    rating: 5
  }
];

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    let timer;
    if (isAutoScrolling) {
      timer = setInterval(nextTestimonial, 5000);
    }
    return () => clearInterval(timer);
  }, [isAutoScrolling]);

  return (
    <section 
      className="py-20 lg:py-32 bg-gradient-soft-mint relative overflow-hidden" 
      id="testimonios"
      onMouseEnter={() => setIsAutoScrolling(false)}
      onMouseLeave={() => setIsAutoScrolling(true)}
    >
      {/* Elementos decorativos */}
      <div className="absolute top-16 right-20 w-24 h-24 border border-blue-main/20 rounded-full opacity-40 decorative-blob"></div>
      <div className="absolute bottom-20 left-16 w-16 h-16 bg-coral/20 rounded-full opacity-50 decorative-blob" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-lavender rounded-full opacity-60"></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-main rounded-full opacity-50"></div>

      <Container>
        {/* Header */}
        <div className="text-center mb-16">
                   
          <Heading level={2} className="text-4xl lg:text-5xl font-montserrat font-light mb-6 text-coral-dark">
            Lo que dicen
            <span className="block font-dancing text-blue-dark text-5xl lg:text-6xl mt-2">
              otras mujeres
            </span>
          </Heading>
          
        </div>

        {/* Testimonios Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden glass">
            {/* Elementos decorativos en la tarjeta */}
            <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-blue-main/10 to-lavender/10 rounded-full opacity-50 decorative-blob"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-coral/10 to-mint/10 rounded-full opacity-40 decorative-blob" style={{ animationDelay: '2s' }}></div>

            <div className="relative z-10">
              {/* Comillas decorativas */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-coral to-coral-dark rounded-full flex items-center justify-center shadow-lg animate-gentle-glow">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
              </div>

              {/* Contenido del testimonial con transición */}
              <div className="text-center mb-8 transition-all duration-700 ease-in-out transform">
                <Text className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-montserrat font-light italic mb-6">
                  "{testimonials[currentTestimonial].content}"
                </Text>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-coral" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                {/* Avatar y datos */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-main to-lavender rounded-full flex items-center justify-center shadow-lg text-white font-montserrat font-bold text-lg">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-montserrat font-semibold text-gray-800 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-500 text-sm font-montserrat">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Controles de navegación */}
              <div className="flex items-center justify-center gap-4">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-gradient-to-r from-blue-light to-lavender/30 hover:from-blue-main/20 hover:to-lavender/40 rounded-full flex items-center justify-center text-blue-main transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Indicadores */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-gradient-to-r from-coral to-coral-dark w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-gradient-to-r from-blue-light to-lavender/30 hover:from-blue-main/20 hover:to-lavender/40 rounded-full flex items-center justify-center text-blue-main transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats adicionales */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-montserrat font-bold text-gradient-coral mb-2">
              500+
            </div>
            <Text className="text-gray-600 font-montserrat font-medium">Personas transformadas</Text>
          </div>
          <div className="text-center">
            <div className="text-4xl font-montserrat font-bold text-gradient-mint mb-2">
              98%
            </div>
            <Text className="text-gray-600 font-montserrat font-medium">Satisfacción garantizada</Text>
          </div>
          <div className="text-center">
            <div className="text-4xl font-montserrat font-bold text-gradient-blue-lavender mb-2">
              8
            </div>
            <Text className="text-gray-600 font-montserrat font-medium">Años de experiencia</Text>
          </div>
          <div className="text-center">
            <div className="text-4xl font-montserrat font-bold text-gradient-animated mb-2">
              24/7
            </div>
            <Text className="text-gray-600 font-montserrat font-medium">Soporte disponible</Text>
          </div>
        </div>
      </Container>
    </section>
  );
}
