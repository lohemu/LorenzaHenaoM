import { useState } from 'react';
import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';
import { Text } from '../atoms/Text';
import { Heading } from '../atoms/Heading';

export function SubscriptionSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // ⚠️ REEMPLAZA ESTA URL CON LA DE TU GOOGLE FORM
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfonbsBzYGN6c3_GBcr2vKpqLCAHeD--C-_yfuC0JY-eDpG8g/formResponse";

  // https://docs.google.com/forms/d/e/1FAIpQLSfonbsBzYGN6c3_GBcr2vKpqLCAHeD--C-_yfuC0JY-eDpG8g/viewform?usp=header
  // ⚠️ REEMPLAZA CON EL NAME DEL CAMPO EMAIL DE TU FORMULARIO (ej: entry.123456789)
  const EMAIL_FIELD_NAME = "entry.1479482821";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      // Crear FormData para enviar a Google Forms
      const formData = new FormData();
      formData.append(EMAIL_FIELD_NAME, email);
      
      // Enviar usando fetch con mode 'no-cors' para evitar CORS
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Importante para Google Forms
      });

      // Google Forms siempre devuelve éxito con no-cors
      setIsSubscribed(true);
      setEmail('');
      
      // Reset después de 3 segundos
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error:', error);
      // Mostrar como exitoso porque Google Forms con no-cors no devuelve errores útiles
      setIsSubscribed(true);
      setEmail('');
      
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonClick = () => {
    if (!email) return;
    handleSubmit({ preventDefault: () => {} });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative -mt-40 z-20 py-16">  
        <Container>
          <div className="relative">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div 
                className="absolute -top-20 -left-20 w-40 h-40 rounded-full opacity-20 bg-blue-200"
                style={{ 
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  animation: 'blob 7s ease-in-out infinite'
                }}
              ></div>
              <div 
                className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full opacity-20 bg-purple-200"
                style={{ 
                  borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
                  animation: 'blob 7s ease-in-out infinite 2s'
                }}
              ></div>
              <div className="absolute top-1/2 left-1/4 w-6 h-6 rounded-full bg-gray-300 opacity-30"></div>
              <div className="absolute bottom-1/4 right-1/3 w-4 h-4 rounded-full bg-gray-300 opacity-20"></div>
              
              <div className="absolute top-10 right-20 w-24 h-24 border-2 border-gray-300 opacity-20 rounded-full"></div>
              <div className="absolute bottom-20 left-16 w-16 h-16 border border-gray-300 opacity-15 rounded-full"></div>
            </div>

            {/* Contenido principal */}
            <div 
              className="relative rounded-3xl px-8 py-16 lg:px-16 lg:py-20 shadow-2xl overflow-hidden bg-white"
            >
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <div className="mb-8">
                  <Heading 
                    level={2} 
                    variant="script-bold" 
                    color="dark"
                    className="text-4xl lg:text-5xl mb-4 animate-fade-in-up"
                  >
                    Suscríbete al newsletter
                  </Heading>
                  <Text 
                    size="lg" 
                    color="default" 
                    variant="relaxed"
                    className="opacity-90 animate-fade-in-up"
                    style={{ 
                      animationDelay: '0.2s',
                      animationFillMode: 'both'
                    }}
                  >
                    Recibe contenido exclusivo sobre crecimiento personal, consejos de mentoría 
                    y recursos que te ayudarán en tu transformación
                  </Text>
                </div>

                <div 
                  className="animate-fade-in-up"
                  style={{ 
                    animationDelay: '0.4s',
                    animationFillMode: 'both'
                  }}
                >
                  {!isSubscribed ? (
                    <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                      <div className="flex-1 relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Tu email aquí"
                          className="w-full px-6 py-4 rounded-2xl text-gray-800 placeholder-gray-500 border-2 border-gray-200 focus:outline-none focus:border-blue-500 transition-all duration-300 shadow-lg font-montserrat"
                          disabled={isSubmitting}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              handleButtonClick();
                            }
                          }}
                        />
                        
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                          </svg>
                        </div>
                      </div>
                      
                      <Button
                        variant="primary"
                        size="large"
                        disabled={isSubmitting || !email}
                        onClick={handleButtonClick}
                        className="px-8 py-4 whitespace-nowrap font-semibold shadow-lg hover:shadow-xl"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Enviando...
                          </div>
                        ) : (
                          'Suscribirse'
                        )}
                      </Button>
                    </div>
                  ) : (
                    <div 
                      className="rounded-2xl px-6 py-4 max-w-lg mx-auto border border-green-200 bg-green-50 animate-scale-in"
                    >
                      <div className="flex items-center justify-center gap-3 text-green-800">
                        <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <Text color="success" size="lg" weight="medium">
                          ¡Te has suscrito exitosamente!
                        </Text>
                      </div>
                    </div>
                  )}
                </div>

                <div 
                  className="mt-8 animate-fade-in-up"
                  style={{ 
                    animationDelay: '0.6s',
                    animationFillMode: 'both'
                  }}
                >
                  <div className="flex flex-wrap items-center justify-center gap-6">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <Text size="sm" color="light">100% privado y seguro</Text>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <Text size="sm" color="light">Sin spam</Text>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <Text size="sm" color="light">Cancela cuando quieras</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Estilos CSS para animaciones */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </div>
  );
}

