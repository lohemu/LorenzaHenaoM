import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { Container } from '../atoms/Container';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';

import Testimonio1 from '../../assets/img/Testimonio1.jpg';

const testimonials = [
  {
    id: 1,
    name: "Johanna",
    role: "",
    content: "Soy feliz porque gracias a Loren alcancé mis objetivos semanales y además tengo tiempo para hacer lo que me gusta. Tiempo para mí!",
    avatar: Testimonio1,
    rating: 5
  },
  {
    id: 2,
    name: "Gloria",
    role: "",
    content: "Gracias a Loren alcancé mis objetivos semanales.",
    avatar: null, // Sin foto, mostrará la inicial
    rating: 5
  },
  {
    id: 3,
    name: "Alejandra",
    role: "",
    content: "Tengo tiempo para hacer lo que me gusta. Tiempo para mí",
    avatar: null, // Sin foto, mostrará la inicial
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
      timer = setInterval(nextTestimonial, 2500);
    }
    return () => clearInterval(timer);
  }, [isAutoScrolling]);

  const renderAvatar = (testimonial) => {
    // Si hay una imagen de avatar, la mostramos
    if (testimonial.avatar && typeof testimonial.avatar === 'string' && testimonial.avatar.includes('.')) {
      return (
        <img 
          src={testimonial.avatar} 
          alt={`Foto de ${testimonial.name}`}
          className="w-14 h-14 rounded-full object-cover shadow-lg"
        />
      );
    }
    
    // Si no hay imagen, mostramos la inicial
    return (
      <div className="w-14 h-14 bg-gradient-to-br from-blue-main to-lavender rounded-full flex items-center justify-center shadow-lg text-white font-montserrat font-bold text-base">
        {testimonial.name.charAt(0).toUpperCase()}
      </div>
    );
  };

  return (
    <section 
      className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[600px] bg-gradient-soft-lavender rounded-3xl p-8 lg:p-12" 
      id="testimonios"
      onMouseEnter={() => setIsAutoScrolling(false)}
      onMouseLeave={() => setIsAutoScrolling(true)}
    >  
      {/* Columna 1: Título (4 columnas en lg) */}
      <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left pr-0 lg:pr-6">
        <Heading level={2} className="text-4xl lg:text-5xl xl:text-6xl font-montserrat font-light text-coral-dark leading-tight">
          Lo que dicen
          <span className="block font-dancing text-blue-dark text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 animate-fade-in-left overflow-visible" style={{ animationDelay: '0.9s' }}>
            otras mujeres
          </span>
        </Heading>          
      </div>

      {/* Columna 2: Carousel de testimonios (8 columnas en lg) */}
      <div className="lg:col-span-8 flex justify-center lg:justify-end">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 relative overflow-hidden glass">
            {/* Elementos decorativos en la tarjeta */}
            <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-main/10 to-lavender/10 rounded-full opacity-50 decorative-blob"></div>
            <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-br from-coral/10 to-mint/10 rounded-full opacity-40 decorative-blob" style={{ animationDelay: '2s' }}></div>

            <div className="relative z-10">
              {/* Contenido del testimonial */}
              <div className="text-center mb-8 transition-all duration-700 ease-in-out transform">
                
                 <div className="flex items-start gap-4 text-gray-800">
              <Quote className="w-8 h-8 rotate-180 scale-x-[-1] mt-2 flex-shrink-0" />
              <span className="text-2xl italic font-bold">{testimonials[currentTestimonial].content}</span>
              <Quote className="w-8 h-8 mt-2 flex-shrink-0" />
            </div>

               
             

                {/* Avatar y datos */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  {renderAvatar(testimonials[currentTestimonial])}
                  <div className="text-left">
                    <div className="font-montserrat font-semibold text-gray-800 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    {testimonials[currentTestimonial].role && (
                      <div className="text-gray-500 text-sm font-montserrat">
                        {testimonials[currentTestimonial].role}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Controles de navegación */}
              <div className="flex items-center justify-center gap-6">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-gradient-to-r from-blue-light to-lavender/30 hover:from-blue-main/20 hover:to-lavender/40 rounded-full flex items-center justify-center text-blue-main transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Indicadores */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-gradient-to-r from-coral to-coral-dark w-8' 
                          : 'bg-gray-300 hover:bg-gray-400 w-3'
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-gradient-to-r from-blue-light to-lavender/30 hover:from-blue-main/20 hover:to-lavender/40 rounded-full flex items-center justify-center text-blue-main transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
