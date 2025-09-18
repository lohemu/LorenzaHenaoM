import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const services = [
  {
    title: "Mentoría Individual",
    description: "Sesiones personalizadas one-on-one para trabajar en tus objetivos específicos",
    features: ["1 hora por sesión", "Plan personalizado", "Seguimiento semanal", "Material de apoyo"],
    price: "$85",
    period: "/sesión",
    popular: false,
    gradient: "from-blue-main to-blue-dark",
    bgGradient: "from-blue-light to-blue-main/10"
  },
  {
    title: "Programa Transformación",
    description: "Programa integral de 3 meses para una transformación completa de tu vida",
    features: ["12 sesiones incluidas", "Herramientas exclusivas", "Comunidad privada", "Garantía de resultados"],
    price: "$297",
    period: "/mes",
    popular: true,
    gradient: "from-coral to-coral-dark",
    bgGradient: "from-coral/10 to-coral/20"
  },
  {
    title: "Mentoría Grupal",
    description: "Sesiones en grupo pequeño para potenciar el aprendizaje colaborativo",
    features: ["Máximo 6 personas", "2 sesiones por semana", "Red de apoyo", "Precio accesible"],
    price: "$45",
    period: "/sesión",
    popular: false,
    gradient: "from-mint to-mint-dark",
    bgGradient: "from-mint/20 to-mint/30"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-soft-lavender relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-coral/20 rounded-full opacity-40 decorative-blob"></div>
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-mint/30 rounded-full opacity-50 decorative-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-main rounded-full opacity-60"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-lavender rounded-full opacity-50"></div>

      <Container>
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-light to-lavender/40 text-blue-main rounded-full text-sm font-montserrat font-medium mb-4">
            Servicios de Mentoría
          </span>
          
          <Heading level={2} className="text-4xl lg:text-5xl font-montserrat font-light mb-6 max-w-3xl mx-auto text-gray-800">
            Descubre los secretos del
            <span className="block font-dancing text-coral-dark text-5xl lg:text-6xl mt-2">
              éxito y la felicidad
            </span>
          </Heading>
          
          <Text className="text-lg text-gray-600 max-w-2xl mx-auto font-montserrat">
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
                  <span className="bg-gradient-to-r from-coral to-coral-dark text-white px-6 py-2 rounded-full text-sm font-montserrat font-medium shadow-lg">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className={`relative bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${service.popular ? 'border-2 border-coral/30 scale-105' : 'hover:scale-105'} h-full card-hover`}>
                {/* Elementos decorativos */}
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 bg-gradient-to-br ${service.gradient} rounded-full opacity-60`}></div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className={`w-2 h-2 bg-gradient-to-br ${service.gradient} rounded-full opacity-40`}></div>
                </div>

                {/* Icono del servicio */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    {index === 0 && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                  </div>
                </div>

                <Heading level={3} className="text-xl font-montserrat font-semibold text-gray-800 mb-3">
                  {service.title}
                </Heading>
                
                <Text className="text-gray-600 mb-6 text-sm leading-relaxed font-montserrat">
                  {service.description}
                </Text>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-5 h-5 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-600 text-sm font-montserrat">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-montserrat font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.price}
                    </span>
                    <span className="text-gray-500 text-sm font-montserrat">{service.period}</span>
                  </div>
                </div>

                <Button 
                  className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white py-3 rounded-2xl font-montserrat font-medium transition-all duration-300 ${service.popular ? 'shadow-lg' : ''}`}
                >
                  Comenzar ahora
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto glass">
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-lavender to-lavender-dark rounded-full mx-auto flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <Heading level={3} className="text-2xl font-montserrat font-semibold text-gray-800 mb-3">
              ¿No estás seguro cuál elegir?
            </Heading>
            <Text className="text-gray-600 mb-6 font-montserrat">
              Agenda una consulta gratuita de 30 minutos y te ayudo a encontrar 
              el programa perfecto para ti.
            </Text>
            <Button className="bg-gradient-to-r from-coral to-coral-dark hover:from-coral-dark hover:to-coral text-white px-8 py-3 rounded-full font-montserrat font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              Consulta Gratuita
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}