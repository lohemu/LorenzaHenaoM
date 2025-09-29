import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Container } from '../atoms/Container';
import { NavBar } from './NavBar';
import { SocialIcon } from '../atoms/SocialIcon';
import { handleNavigation } from './NavBar';

// Función para detectar la sección activa basada en el scroll
const getCurrentSection = () => {
  const sections = ['hero', 'sobre-mi', 'mentorias', 'recursos', 'suscription', 'testimonios', 'contacto'];
  const headerOffset = 100;
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= headerOffset) {
        return sections[i];
      }
    }
  }
  
  return 'hero'; // Default
};

// Componente NavLink para navegación desktop
function NavLink({ children, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-montserrat font-medium transition-all duration-300 ${
        active
          ? 'bg-gray-900 text-white shadow-md'
          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Efecto para detectar la sección activa basada en el scroll
  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const section = getCurrentSection();
      setCurrentSection(section);
    };

    // Detectar la sección inicial
    const initialSection = location.hash ? location.hash.substring(1) : getCurrentSection();
    setCurrentSection(initialSection);

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome, location.pathname]);

  // Función para manejar click en el logo/nombre
  const handleLogoClick = (e) => {
    e.preventDefault();
    handleNavigation('hero');
    setIsMenuOpen(false);
  };

  // Función para determinar si una sección está activa
  const isSectionActive = (sectionId) => {
    if (!isHome) return false;
    
    if (sectionId === 'recursos' && currentSection === 'suscription') {
      return true;
    }
    
    return currentSection === sectionId;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <button 
          onClick={handleLogoClick}
          className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-105"
        >
          <div className="block">
            <div className="font-dancing text-gray-900 text-xl sm:text-2xl lg:text-3xl font-bold">
              Lorenza Henao M
            </div>
            <div className="text-xs text-gray-600 -mt-1 font-montserrat font-medium">
              
            </div>
          </div>
        </button>

        {/* Navegación Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavLink
            onClick={() => handleNavigation('hero')}
            active={isSectionActive('hero')}
          >
            Inicio
          </NavLink>
          <NavLink
            onClick={() => handleNavigation('sobre-mi')}
            active={isSectionActive('sobre-mi')}
          >
            Sobre Mí
          </NavLink>
          <NavLink
            onClick={() => handleNavigation('mentorias')}
            active={isSectionActive('mentorias')}
          >
            Mentorías
          </NavLink>
          <NavLink
            onClick={() => handleNavigation('recursos')}
            active={isSectionActive('recursos')}
          >
            Recursos
          </NavLink>
          <NavLink
            onClick={() => handleNavigation('testimonios')}
            active={isSectionActive('testimonios')}
          >
            Testimonios
          </NavLink>
          <NavLink
            onClick={() => handleNavigation('contacto')}
            active={isSectionActive('contacto')}
          >
            Contacto
          </NavLink>
        </nav>

        {/* Redes Sociales Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <SocialIcon 
            icon={Facebook}
            href="https://facebook.com/LorenzaHenaoM"
            bgColor="bg-gray-700"
            iconColor="text-white"
            hoverBg="hover:bg-gray-900"
          />
          <SocialIcon 
            icon={Instagram}
            href="https://instagram.com/lorenzahenaom"
            bgColor="bg-gray-700"
            iconColor="text-white"
            hoverBg="hover:bg-gray-900"
          />
          <SocialIcon 
            icon={Linkedin}
            href="https://linkedin.com/in/lorenzahenaom"
            bgColor="bg-gray-700"
            iconColor="text-white"
            hoverBg="hover:bg-gray-900"
          />
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={toggleMenu}
          className="lg:hidden w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all duration-300"
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

      <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}
