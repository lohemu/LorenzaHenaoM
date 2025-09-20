import { Container } from '../atoms/Container';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

const services = [
  {
    title: "Mentoría Individual",
    description: "Sesiones personalizadas one-on-one para trabajar en tus objetivos específicos",
    features: ["1 hora por sesión", "Plan personalizado", "Seguimiento semanal", "Material de apoyo"],
    price: "$85",
    period: "/sesión",
    popular: false,
    gradient: "from-blue-main to-blue-dark",
    bgGradient: "from-white via-white to-gray-50",
    iconBg: "from-blue-main to-blue-dark",
    checkBg: "from-blue-main to-blue-dark"
  },
  {
    title: "Programa Transformación",
    description: "Programa integral de 3 meses para una transformación completa de tu vida",
    features: ["12 sesiones incluidas", "Herramientas exclusivas", "Comunidad privada", "Garantía de resultados"],
    price: "$297",
    period: "/mes",
    popular: true,
    gradient: "from-coral-dark to-coral",
    bgGradient: "from-white via-white to-gray-50",
    iconBg: "from-coral-dark to-coral",
    checkBg: "from-coral-dark to-coral"
  },
  {
    title: "Mentoría Grupal",
    description: "Sesiones en grupo pequeño para potenciar el aprendizaje colaborativo",
    features: ["Máximo 6 personas", "2 sesiones por semana", "Red de apoyo", "Precio accesible"],
    price: "$45",
    period: "/sesión",
    popular: false,
    gradient: "from-mint-dark to-mint",
    bgGradient: "from-white via-white to-gray-50",
    iconBg: "from-mint-dark to-mint",
    checkBg: "from-mint-dark to-mint"
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-light via-white to-lavender/30 relative overflow-hidden">
      {/* Elementos decorativos de fondo - con mejor contraste */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-coral/30 rounded-full opacity-50 decorative-blob bg-coral/5"></div>
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-br from-mint/40 to-mint/60 rounded-full opacity-70 decorative-blob shadow-lg" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-main rounded-full opacity-80 shadow-sm"></div>
      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-lavender rounded-full opacity-70 shadow-sm"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-coral-dark rounded-full opacity-60"></div>

      <Container>
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-main/10 to-lavender/20 border border-blue-main/30 text-blue-main rounded-full text-sm font-montserrat font-semibold mb-6 shadow-sm">
            Servicios de Mentoría
          </span>
          
          <Heading level={2} className="text-4xl lg:text-5xl font-montserrat font-light mb-6 max-w-3xl mx-auto text-gray-800">
            Descubre los secretos del
            <span className="block font-dancing text-coral-dark text-5xl lg:text-6xl mt-2 drop-shadow-sm">
              éxito y la felicidad
            </span>
          </Heading>
          
          <Text className="text-lg text-gray-700 max-w-2xl mx-auto font-montserrat font-medium">
            Maximiza tu potencial ahora con nuestros paquetes de mentoría diseñados 
            especialmente para tu crecimiento personal y profesional.
          </Text>
        </div>

        {/* Tarjetas de servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={service.title} className="relative group">
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-coral-dark to-coral text-white px-8 py-3 rounded-full text-sm font-montserrat font-bold shadow-xl border border-white/20">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className={`relative bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${service.popular ? 'border-2 border-coral-dark/60 scale-105 ring-2 ring-coral-dark/20' : 'border-2 border-gray-300 hover:scale-105 hover:border-gray-400'} h-full card-hover`}>
                {/* Elementos decorativos internos */}
                <div className="absolute top-6 right-6">
                  <div className={`w-5 h-5 bg-gradient-to-br ${service.gradient} rounded-full opacity-100 shadow-lg`}></div>
                </div>
                <div className="absolute bottom-6 left-6">
                  <div className={`w-4 h-4 bg-gradient-to-br ${service.gradient} rounded-full opacity-80 shadow-md`}></div>
                </div>

                {/* Icono del servicio ultra destacado */}
                <div className="mb-6 relative">
                  {/* Anillo de brillo exterior */}
                  <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-r ${service.iconBg} rounded-2xl blur-md opacity-40 animate-pulse-custom`}></div>
                  
                  {/* Container principal del icono */}
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${service.iconBg} rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white ring-4 ring-white/50 transform hover:scale-110 transition-all duration-300`}>
                    {/* Brillo interno */}
                    <div className="absolute inset-2 bg-white/20 rounded-lg"></div>
                    
                    {/* Iconos con mayor contraste */}
                    {index === 0 && (
                      <svg className="w-12 h-12 text-white drop-shadow-2xl relative z-10 filter brightness-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-12 h-12 text-white drop-shadow-2xl relative z-10 filter brightness-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-12 h-12 text-white drop-shadow-2xl relative z-10 filter brightness-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    
                    {/* Puntos de brillo decorativos */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-80"></div>
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
                  </div>
                </div>

                <Heading level={3} className="text-2xl font-montserrat font-black text-gray-900 mb-4">
                  {service.title}
                </Heading>
                
                <Text className="text-gray-800 mb-8 text-base leading-relaxed font-montserrat font-semibold">
                  {service.description}
                </Text>

                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-4">
                      <div className={`w-7 h-7 bg-gradient-to-br ${service.checkBg} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-white`}>
                        <svg className="w-4 h-4 text-white font-bold drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20" strokeWidth={1}>
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-800 text-base font-montserrat font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-montserrat font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent drop-shadow-lg`}>
                      {service.price}
                    </span>
                    <span className="text-gray-700 text-lg font-montserrat font-bold">{service.period}</span>
                  </div>
                </div>

                <Button 
                  className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-xl text-white py-4 rounded-2xl font-montserrat font-bold transition-all duration-300 shadow-lg border border-white/20 ${service.popular ? 'shadow-xl' : ''} hover:scale-105`}
                >
                  Comenzar ahora
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA adicional con mejor contraste */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-white to-blue-light/30 rounded-3xl p-10 shadow-2xl max-w-2xl mx-auto border border-blue-main/20 backdrop-blur-sm">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-lavender to-lavender-dark rounded-full mx-auto flex items-center justify-center shadow-xl border border-white/30 p-1">
                <div className="w-18 h-18 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <Heading level={3} className="text-2xl font-montserrat font-bold text-gray-800 mb-4">
              ¿No estás seguro cuál elegir?
            </Heading>
            <Text className="text-gray-700 mb-8 font-montserrat font-medium text-base">
              Agenda una consulta gratuita de 30 minutos y te ayudo a encontrar 
              el programa perfecto para ti.
            </Text>
            <Button className="bg-gradient-to-r from-coral-dark to-coral hover:from-coral hover:to-coral-dark text-white px-10 py-4 rounded-full font-montserrat font-bold shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 hover:scale-105">
              Consulta Gratuita
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

