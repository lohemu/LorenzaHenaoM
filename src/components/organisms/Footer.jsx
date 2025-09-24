import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Send, Mail, Phone, MapPin, Zap } from 'lucide-react';
import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';
import { handleNavigation } from './NavBar';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleFooterNavigation = (sectionId) => {
    handleNavigation(sectionId);
  };

  return (
    <footer className="bg-gradient-to-br from-gray-800 via-blue-main/80 to-lavender/60 text-grey relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full decorative-blob"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full opacity-5 decorative-blob" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-coral rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-mint rounded-full opacity-50"></div>
      </div>

      <Container className="relative z-10">
        {/* Contenido principal del footer */}
        <div className="py-16 lg:py-24">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Columna principal - Información de la empresa */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-coral to-coral-dark rounded-3xl flex items-center justify-center shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="logo-font text-3xl text-gradient-blue-lavender font-bold">
                    Lorenza Henao
                  </div>
                  <div className="text-sm text-gray-300 -mt-1 font-montserrat">Mentora Personal</div>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md font-montserrat">
                Transformando vidas a través de la mentoría personalizada. 
                Te acompaño en tu viaje hacia el crecimiento personal y profesional.
              </p>

              {/* Redes sociales */}
              <div className="flex gap-4 mb-8">
                <SocialLink 
                  href="https://facebook.com/lorenzahenao" 
                  icon="facebook" 
                  label="Facebook"
                />
                <SocialLink 
                  href="https://instagram.com/lorenzahenao" 
                  icon="instagram" 
                  label="Instagram"
                />
                <SocialLink 
                  href="https://linkedin.com/in/lorenzahenao" 
                  icon="linkedin" 
                  label="LinkedIn"
                />
                <SocialLink 
                  href="https://t.me/lorenzahenao" 
                  icon="telegram" 
                  label="Telegram"
                />
              </div>
            </div>

            {/* Columna de navegación */}
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-6 text-white">Navegación</h4>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => handleFooterNavigation('hero')}
                    className="text-gray-300 hover:text-coral transition-colors duration-300 hover:translate-x-1 transform inline-block font-montserrat"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterNavigation('sobre-mi')}
                    className="text-gray-300 hover:text-coral transition-colors duration-300 hover:translate-x-1 transform inline-block font-montserrat"
                  >
                    Sobre Mí
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterNavigation('mentorias')}
                    className="text-gray-300 hover:text-coral transition-colors duration-300 hover:translate-x-1 transform inline-block font-montserrat"
                  >
                    Mentorías
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterNavigation('recursos')}
                    className="text-gray-300 hover:text-coral transition-colors duration-300 hover:translate-x-1 transform inline-block font-montserrat"
                  >
                    Recursos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterNavigation('testimonios')}
                    className="text-gray-300 hover:text-coral transition-colors duration-300 hover:translate-x-1 transform inline-block font-montserrat"
                  >
                    Testimonios
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterNavigation('contacto')}
                    className="text-gray-300 hover:text-coral transition-colors duration-300 hover:translate-x-1 transform inline-block font-montserrat"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            {/* Columna de contacto */}
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-6 text-white">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-coral/20 to-coral-dark/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-montserrat">Email</p>
                    <p className="text-gray-300 font-montserrat">hola@lorenzahenao.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-mint/20 to-mint-dark/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-mint" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-montserrat">Teléfono</p>
                    <p className="text-gray-300 font-montserrat">+57 (300) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-main/20 to-lavender/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-main" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-montserrat">Ubicación</p>
                    <p className="text-gray-300 font-montserrat">Manizales, Colombia</p>
                  </div>
                </div>
              </div>

              {/* Botón de contacto */}
              <div className="mt-8">
                <Button 
                  onClick={() => handleFooterNavigation('contacto')}
                  className="w-full bg-gradient-to-r from-coral to-coral-dark hover:from-coral-dark hover:to-coral text-white py-3 rounded-2xl font-montserrat font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Agenda tu sesión
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="border-t border-white/10"></div>

        {/* Footer bottom */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm font-montserrat">
            © {currentYear} Lorenza Henao. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-6 text-sm font-montserrat">
            <Link to="/privacidad" className="text-gray-400 hover:text-coral transition-colors duration-300">
              Política de Privacidad
            </Link>
            <Link to="/terminos" className="text-gray-400 hover:text-coral transition-colors duration-300">
              Términos de Uso
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-coral transition-colors duration-300">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// Componente para links de redes sociales con Lucide React
function SocialLink({ href, icon, label }) {
  const getIcon = () => {
    switch (icon) {
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'telegram':
        return <Send className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <a
      href={href}
      className="w-12 h-12 bg-gradient-to-br from-coral/20 to-lavender/20 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:from-coral/30 hover:to-lavender/30 transition-all duration-300 hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {getIcon()}
    </a>
  );
}

