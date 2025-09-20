import { Container } from '../atoms/Container';
import { Card } from '../molecules/Card';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';

const features = [
  { 
    title: 'Soporte 24/7', 
    text: 'Siempre disponible para acompañarte en tu proceso de crecimiento.',
    icon: 'support',
    iconBg: 'bg-blue-main',
    cardBg: 'bg-gradient-soft-blue',
    accentColor: 'text-blue-dark',
    hoverShadow: 'hover:shadow-2xl hover:shadow-blue-main/20'
  },
  { 
    title: 'Metodología Personalizada', 
    text: 'Enfoque único adaptado a tus necesidades y objetivos específicos.',
    icon: 'methodology',
    iconBg: 'bg-lavender',
    cardBg: 'bg-gradient-soft-lavender',
    accentColor: 'text-lavender-dark',
    hoverShadow: 'hover:shadow-2xl hover:shadow-lavender/20'
  },
  { 
    title: 'Resultados Garantizados', 
    text: 'Transformación real con seguimiento continuo y resultados medibles.',
    icon: 'results',
    iconBg: 'bg-mint',
    cardBg: 'bg-gradient-soft-mint',
    accentColor: 'text-mint-dark',
    hoverShadow: 'hover:shadow-2xl hover:shadow-mint/20'
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-main relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 right-16 w-20 h-20 border border-lavender rounded-full opacity-30"></div>
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-coral/40 rounded-full"></div>
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-lavender rounded-full opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-coral rounded-full"></div>

      <Container>
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-blue-dark text-sm font-medium mb-4 border-blue-main">
            Beneficios de la Mentoría
          </span>
          
          <Heading level={2} className="text-4xl lg:text-5xl font-light mb-6 max-w-3xl mx-auto text-gray-800">
            Por qué elegir mi
            <span className="block font-dancing text-coral-dark text-5xl lg:text-6xl mt-2">
              acompañamiento
            </span>
          </Heading>
          
          <Text className="text-lg text-gray-700 max-w-2xl mx-auto">
            Mi metodología combina técnicas probadas de coaching con un enfoque personalizado 
            que se adapta a tu estilo de aprendizaje y tus metas específicas.
          </Text>
        </div>

        {/* Grid de características */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={feature.title} className="group">
              <div className={`${feature.cardBg} glass rounded-3xl p-8 ${feature.hoverShadow} transition-all duration-300 transform hover:-translate-y-2 card-hover h-full relative overflow-hidden`}>
                {/* Elementos decorativos */}
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 ${feature.iconBg} rounded-full opacity-60`}></div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className={`w-2 h-2 ${feature.iconBg} rounded-full opacity-40`}></div>
                </div>

                {/* Icono */}
                <div className="mb-6">
                  <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-gentle-glow`}>
                    {feature.icon === 'support' && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                      </svg>
                    )}
                    {feature.icon === 'methodology' && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )}
                    {feature.icon === 'results' && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    )}
                  </div>
                </div>

                <Heading level={3} className={`text-xl font-semibold text-gray-800 mb-4 group-hover:${feature.accentColor} transition-colors duration-300`}>
                  {feature.title}
                </Heading>
                
                <Text className="text-gray-700 leading-relaxed">
                  {feature.text}
                </Text>

                {/* Indicador de hover */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-8 h-8 ${feature.iconBg} rounded-full flex items-center justify-center`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección adicional de valores */}
        <div className="glass rounded-3xl shadow-lg p-8 lg:p-12 relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-8 right-8 w-16 h-16 bg-coral/20 rounded-full decorative-blob"></div>
          <div className="absolute bottom-8 left-8 w-12 h-12 bg-mint/30 rounded-full decorative-blob"></div>

          <div className="relative z-10 text-center">
            <Heading level={3} className="text-3xl lg:text-4xl font-light mb-6 text-gray-800">
              Mi compromiso
              <span className="block font-dancing text-coral-dark text-4xl lg:text-5xl mt-2">
                contigo
              </span>
            </Heading>
            
            <Text className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              No se trata solo de alcanzar tus metas, sino de transformar completamente tu relación 
              contigo mismo y con el mundo que te rodea. Mi compromiso es ser tu guía, tu apoyo y 
              tu compañera en este viaje de autodescubrimiento y crecimiento.
            </Text>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-coral rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse-custom">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <Heading level={4} className="font-semibold text-gray-800 mb-2">Empatía</Heading>
                <Text className="text-gray-600 text-sm">Comprendo tus desafíos porque he estado ahí</Text>
              </div>

              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="w-16 h-16 bg-blue-main rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse-custom">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <Heading level={4} className="font-semibold text-gray-800 mb-2">Confianza</Heading>
                <Text className="text-gray-600 text-sm">Un espacio seguro para tu crecimiento</Text>
              </div>

              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 bg-mint rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse-custom">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <Heading level={4} className="font-semibold text-gray-800 mb-2">Acción</Heading>
                <Text className="text-gray-600 text-sm">Herramientas prácticas para el cambio real</Text>
              </div>

              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="w-16 h-16 bg-lavender rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse-custom">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                </div>
                <Heading level={4} className="font-semibold text-gray-800 mb-2">Claridad</Heading>
                <Text className="text-gray-600 text-sm">Visión clara hacia tus objetivos</Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
