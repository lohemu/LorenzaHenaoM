import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../atoms/Container';
import Button from '../atoms/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100/50 shadow-sm">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="hidden sm:block">
            <div className="logo-font text-2xl lg:text-3xl text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text">
              Lorenza Henao
            </div>
            <div className="text-xs text-gray-500 -mt-1">Mentora Certificada</div>
          </div>
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavLink to="/" active>Inicio</NavLink>
          <NavLink to="/sobre-mi">Sobre Mí</NavLink>
          <NavLink to="/mentorias">Mentorías</NavLink>
          <NavLink to="/recursos">Recursos</NavLink>
          <NavLink to="/testimonios">Testimonios</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>

        {/* Botón CTA Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            as={Link} 
            to="/contacto" 
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Agenda tu sesión
          </Button>
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={toggleMenu}
          className="lg:hidden w-10 h-10 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center text-purple-600 hover:from-pink-200 hover:to-purple-200 transition-all duration-300"
        >
          <svg 
            className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </Container>

      {/* Menú móvil */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-purple-100/50">
          <Container className="py-6">
            <nav className="flex flex-col gap-4">
              <MobileNavLink to="/" onClick={toggleMenu} active>
                Inicio
              </MobileNavLink>
              <MobileNavLink to="/sobre-mi" onClick={toggleMenu}>
                Sobre Mí
              </MobileNavLink>
              <MobileNavLink to="/mentorias" onClick={toggleMenu}>
                Mentorías
              </MobileNavLink>
              <MobileNavLink to="/recursos" onClick={toggleMenu}>
                Recursos
              </MobileNavLink>
              <MobileNavLink to="/testimonios" onClick={toggleMenu}>
                Testimonios
              </MobileNavLink>
              <MobileNavLink to="/contacto" onClick={toggleMenu}>
                Contacto
              </MobileNavLink>
              
              <div className="pt-4 border-t border-purple-100/50 mt-2">
                <Button 
                  as={Link} 
                  to="/contacto" 
                  onClick={toggleMenu}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-2xl font-medium shadow-lg"
                >
                  Agenda tu sesión gratuita
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}

// Componente NavLink para desktop
function NavLink({ to, children, active = false }) {
  return (
    <Link 
      to={to}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 ${
        active 
          ? 'text-purple-600 bg-gradient-to-r from-pink-100 to-purple-100' 
          : 'text-gray-600 hover:text-purple-600'
      }`}
    >
      {children}
    </Link>
  );
}

// Componente NavLink para móvil
function MobileNavLink({ to, children, onClick, active = false }) {
  return (
    <Link 
      to={to}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 ${
        active 
          ? 'text-purple-600 bg-gradient-to-r from-pink-100 to-purple-100' 
          : 'text-gray-600 hover:text-purple-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50'
      }`}
    >
      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
        active ? 'bg-gradient-to-r from-pink-400 to-purple-500' : 'bg-gray-300'
      }`}></div>
      {children}
    </Link>
  );
}