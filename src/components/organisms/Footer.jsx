import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Send, Mail, Phone, MapPin, Zap } from 'lucide-react';
import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { SocialIcon } from '../atoms/SocialIcon';
import { handleNavigation } from './NavBar';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleFooterNavigation = (sectionId) => {
    handleNavigation(sectionId);
  };

  return (
    <footer className="relative overflow-hidden bg-lavender">
      {/* Elementos decorativos simples */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-gray-600 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-gray-600 rounded-full"></div>
      </div>

      <Container className="relative z-10">
        {/* Contenido principal del footer */}
        <div className="py-16 lg:py-24">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Columna principal - Información de la empresa */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">

                <div>
                  <Heading
                    level={3}
                    variant="script-bold"
                    color="black"
                    className="text-3xl"
                  >
                    Lorenza Henao M
                  </Heading>
                  <Text
                    size="sm"
                    color="black"
                    className="-mt-1"
                  >

                  </Text>
                </div>
              </div>

              <Text
                size="lg"
                color="black-muted"
                variant="relaxed"
                className="mb-8 max-w-md"
              >
                Te acompaño en tu viaje hacia el crecimiento personal y profesional.
              </Text>

              {/* Redes sociales usando SocialIcon */}
              <div className="flex gap-4 mb-8">
                <SocialIcon
                  icon={Facebook}
                  href="https://facebook.com/LorenzaHenaoM"
                  bgColor="bg-gray-700"
                  hoverBg="hover:bg-gray-600"
                />
                <SocialIcon
                  icon={Instagram}
                  href="https://instagram.com/lorenzahenaom"
                  bgColor="bg-gray-700"
                  hoverBg="hover:bg-gray-600"
                />
                <SocialIcon
                  icon={Linkedin}
                  href="https://linkedin.com/in/lorenzahenaom"
                  bgColor="bg-gray-700"
                  hoverBg="hover:bg-gray-600"
                />
              </div>
            </div>

            {/* Columna de navegación */}
            <div>
              <Heading
                level={4}
                variant="medium"
                color="white"
                className="mb-6"
              >
                Navegación
              </Heading>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => handleFooterNavigation('hero')}
                    className="text-gray-600 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-montserrat"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterNavigation('sobre-mi')}
                    className="text-gray-600 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-montserrat"
                  >
                    Sobre Mí
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterNavigation('mentorias')}
                    className="text-gray-600 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-montserrat"
                  >
                    Mentorías
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterNavigation('recursos')}
                    className="text-gray-600 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-montserrat"
                  >
                    Recursos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterNavigation('testimonios')}
                    className="text-gray-600 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-montserrat"
                  >
                    Testimonios
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterNavigation('contacto')}
                    className="text-gray-600 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-montserrat"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            {/* Columna de contacto */}
            <div>
              <Heading
                level={4}
                variant="medium"
                color="white"
                className="mb-6"
              >
                Contacto
              </Heading>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <Text size="sm" color="light">
                      Email
                    </Text>
                    <Text size="base" color="white-muted">
                      hola@lorenhm.com
                    </Text>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <Text size="sm" color="light">
                      Teléfono
                    </Text>
                    <Text size="base" color="white-muted">
                      +57 (300) 123-4567
                    </Text>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <Text size="sm" color="light">
                      Ubicación
                    </Text>
                    <Text size="base" color="white-muted">
                      Manizales, Colombia
                    </Text>
                  </div>
                </div>
              </div>

              {/* Botón de contacto usando Button component */}
              <div className="mt-8">
                <Button
                  variant="primary"
                  size="medium"
                  onClick={() => {
                    // Opción A: Ir al perfil general
                    window.open('https://calendly.com/lohemu-lorenhm/new-meeting', '_blank', 'noopener,noreferrer');

                    // Opción B: Abrir WhatsApp o email como respaldo
                    // window.open('https://wa.me/573001234567', '_blank');
                  }}
                  className="w-full"
                >
                  Agenda tu sesión
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="border-t border-gray-700"></div>

        {/* Footer bottom */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Text size="sm" color="light">
            © {currentYear} Lorenza Henao M. Todos los derechos reservados.
          </Text>

          <div className="flex items-center gap-6">
            <Link
              to="/privacidad"
              className="text-gray-400 hover:text-white transition-colors duration-300 font-montserrat text-sm"
            >
              Política de Privacidad
            </Link>
            <Link
              to="/terminos"
              className="text-gray-400 hover:text-white transition-colors duration-300 font-montserrat text-sm"
            >
              Términos de Uso
            </Link>
            <Link
              to="/cookies"
              className="text-gray-400 hover:text-white transition-colors duration-300 font-montserrat text-sm"
            >
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
