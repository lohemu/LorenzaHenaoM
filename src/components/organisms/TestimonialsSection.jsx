import { useState } from 'react';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Emprendedora",
    content: "Lorenza me ayudó a superar mis miedos y lanzar mi propio negocio. Su enfoque empático y sus herramientas prácticas fueron clave en mi transformación. Ahora tengo una empresa exitosa y, más importante, confianza en mí misma.",
    avatar: "MG",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    role: "Gerente de Ventas",
    content: "El programa de mentoría me transformó completamente. Pasé de ser una persona tímida a liderar mi equipo con confianza. Las técnicas de comunicación que aprendí han mejorado no solo mi carrera, sino también mis relaciones personales.",
    avatar: "CM",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Ruiz",
    role: "Profesional en Transición",
    content: "Después de 15 años en la misma empresa, me sentía perdida. Lorenza me guió para descubrir mi verdadera pasión y hacer una transición exitosa de carrera. Ahora trabajo en lo que amo y soy más feliz que nunca.",
    avatar: "AR",
    rating: 5
  },
  {
    id: 4,
    name: "David Silva",
    role: "Estudiante Universitario",
    content: "La mentoría me ayudó a definir mi rumbo profesional y desarrollar habilidades de liderazgo desde temprana edad. Las sesiones grupales fueron increíbles, conocí personas maravillosas y crecimos juntos.",
    avatar: "DS",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-16 right-20 w-24 h-24 border border-purple-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-16 w-16 h-16 bg-pink-100 rounded-full opacity-40"></div>
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-60"></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-pink-400 rounded-full"></div>

      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            Testimonios
          </span>
          
          <Heading level={2} className="text-4xl lg:text-5xl font-light mb-6">
            Lo que dicen
            <span className="block font-dancing text-pink-500 text-5xl lg:text-6xl mt-2">
              mis mentoreados
            </span>
          </Heading>
          
          <Text className="text-lg text-gray-600 max-w-2xl mx-auto">
            Historias reales de transformación y crecimiento personal que inspirarán tu propio viaje.
          </Text>
        </div>

        {/* Testimonios Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Elementos decorativos en la tarjeta */}
            <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-50"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-40"></div>

            <div className="relative z-10">
              {/* Comillas decorativas */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
              </div>

              {/* Contenido del testimonial */}
              <div className="text-center mb-8">
                <Text className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light italic mb-6">
                  "{testimonials[currentTestimonial].content}"
                </Text>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                {/* Avatar y datos */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg text-white font-bold text-lg">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-800 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Controles de navegación */}
              <div className="flex items-center justify-center gap-4">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-gradient-to-r from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 rounded-full flex items-center justify-center text-purple-600 transition-all duration-300 shadow-md hover:shadow-lg"
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
                          ? 'bg-gradient-to-r from-pink-400 to-purple-500 w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-gradient-to-r from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 rounded-full flex items-center justify-center text-purple-600 transition-all duration-300 shadow-md hover:shadow-lg"
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
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text mb-2">
              500+
            </div>
            <Text className="text-gray-600 font-medium">Personas transformadas</Text>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text mb-2">
              98%
            </div>
            <Text className="text-gray-600 font-medium">Satisfacción garantizada</Text>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text mb-2">
              8
            </div>
            <Text className="text-gray-600 font-medium">Años de experiencia</Text>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text mb-2">
              24/7
            </div>
            <Text className="text-gray-600 font-medium">Soporte disponible</Text>
          </div>
        </div>
      </Container>
    </section>
  );
}