import { useState, useEffect } from 'react';
import { Container } from '../atoms/Container';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Card } from './../molecules/Card';

import Testimonio1 from '../../assets/img/Testimonio1.jpg';

const testimonials = [
  {
    id: 1,
    name: "Johanna",
    role: "",
    content: "Soy feliz porque gracias a Loren alcancé mis objetivos semanales y además tengo tiempo para hacer lo que me gusta. Tiempo para mí!",
    avatar: null,
    rating: 5
  },
  {
    id: 2,
    name: "Gloria",
    role: "",
    content: "Gracias a Loren alcancé mis objetivos semanales.",
    avatar: null,
    rating: 5
  },
  {
    id: 3,
    name: "Alejandra",
    role: "",
    content: "Tengo tiempo para hacer lo que me gusta. Tiempo para mí",
    avatar: Testimonio1,
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

  return (
    <section 
      className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[600px] bg-gradient-soft-coral rounded-3xl p-8 lg:p-12" 
      id="testimonios"
      onMouseEnter={() => setIsAutoScrolling(false)}
      onMouseLeave={() => setIsAutoScrolling(true)}
    >  
      {/* Columna 1: Título (4 columnas en lg) */}
      <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left pr-0 lg:pr-6">
        <Heading 
          level={2} 
          variant="light" 
          className="text-4xl lg:text-5xl xl:text-6xl leading-tight"
        >
          Lo que dicen
        </Heading>
        <Heading 
          level={2}
          variant="script" 
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 animate-fade-in-left overflow-visible" 
          style={{ animationDelay: '0.9s' }}
        >
          otras mujeres
        </Heading>
      </div>

      {/* Columna 2: Carousel de testimonios (8 columnas en lg) */}
      <div className="lg:col-span-8 flex justify-center lg:justify-end">
        <div className="w-full max-w-2xl">
          {/* Card con estilos personalizables */}
          <Card 
            testimonial={testimonials[currentTestimonial]}
            className="transition-all duration-700 ease-in-out transform"
            // Puedes personalizar cada aspecto desde aquí:
             bgClassName="bg-gradient-soft-lavender rounded-3xl shadow-2xl relative overflow-hidden"
            // textClassName="text-coral-dark"
            // quoteClassName="text-mint-dark"
            // nameClassName="text-gray-900"
            // avatarClassName="bg-gradient-to-br from-coral to-coral-dark"
            // decorativeBlobClassName="bg-gradient-to-br from-mint/20 to-coral/10"
          />

          {/* Controles de navegación */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 shadow-md hover:shadow-lg"
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
                      ? 'bg-gray-700 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400 w-3'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


