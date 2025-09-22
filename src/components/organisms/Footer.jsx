import { Link } from 'react-router-dom';
import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

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
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="logo-font text-3xl text-gradient-blue-lavender font-bold">
                    Lorenza Henao
                  </div>
                  <div className="text-sm text-gray-300 -mt-1 font-montserrat"></div>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md font-montserrat">
                Transformando vidas a través de la mentoría personalizada. 
                Te acompaño en tu viaje hacia el crecimiento personal y profesional.
              </p>

              {/* Redes sociales */}
              <div className="flex gap-4 mb-8">
                <SocialLink href="#" icon="instagram" />
                <SocialLink href="#" icon="linkedin" />
                <SocialLink href="#" icon="youtube" />
                <SocialLink href="#" icon="twitter" />
              </div>

              
            </div>

            {/* Columna de navegación */}
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-6 text-white">Navegación</h4>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-coral transition-colors duration-300 hover:translate-x-1 transform inline-block font-montserrat">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/sobre-mi" className="text-gray-300 hover:text-coral transition-colors duration-300 hover:translate-x-1 transform inline-block font-montserrat">
                    Sobre Mí
                  </Link>
                </li>
                <li>
                  <Link to="/mentorias" className="text-gray-300 hover:text-coral transition-colors duration-300 hover:translate-x-1 transform inline-block font-montserrat">
                    Mentorías
                  </Link>
                </li>
                <li>
                  <Link to="/recursos" className="text-gray-300 hover:text-coral transition-colors duration-300 hover:translate-x-1 transform inline-block font-montserrat">
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link to="/testimonios" className="text-gray-300 hover:text-coral transition-colors duration-300 hover:translate-x-1 transform inline-block font-montserrat">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="text-gray-300 hover:text-coral transition-colors duration-300 hover:translate-x-1 transform inline-block font-montserrat">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna de contacto */}
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-6 text-white">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-coral/20 to-coral-dark/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-montserrat">Email</p>
                    <p className="text-gray-300 font-montserrat">hola@lorenzahenao.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-mint/20 to-mint-dark/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-montserrat">Teléfono</p>
                    <p className="text-gray-300 font-montserrat">+57 (300) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-main/20 to-lavender/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
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
                  as={Link} 
                  to="/contacto"
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

// Componente para links de redes sociales
function SocialLink({ href, icon }) {
  const getIcon = () => {
    switch (icon) {
      case 'instagram':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.098.118.112.22.083.402-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.743-1.378l-.742 2.852c-.269 1.041-1.06 2.345-1.516 3.14C9.05 23.824 10.504 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'youtube':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        );
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
    >
      {getIcon()}
    </a>
  );
}