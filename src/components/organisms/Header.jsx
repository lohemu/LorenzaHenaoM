import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Container } from '../atoms/Container';
import { NavBar } from './NavBar';
import { handleNavigation } from './NavBar'; // Importar la función de navegación

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
      className={`px-4 py-2 rounded-full text-sm font-montserrat font-medium transition-all duration-300 hover:bg-blue-main/20 hover:shadow-md backdrop-blur-sm ${active
          ? 'text-white bg-blue-main shadow-md border border-blue-main/30'
          : 'text-blue-dark hover:text-white'
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
    handleNavigation('hero'); // Navegar al inicio/hero
    setIsMenuOpen(false); // Cerrar menú móvil si está abierto
  };

  // Función para determinar si una sección está activa
  const isSectionActive = (sectionId) => {
    if (!isHome) return false;
    
    // Para la sección de suscripción, considerarla parte de recursos para la navegación
    if (sectionId === 'recursos' && currentSection === 'suscription') {
      return true;
    }
    
    return currentSection === sectionId;
  };

  return (
    <header 
      className="sticky top-0 z-50 backdrop-blur-md border-b border-white/30 shadow-lg"
      style={{
        background: 'linear-gradient(to right, rgba(242, 251, 255, 0.85), rgba(199, 184, 234, 0.85))'
      }}
    >
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <button 
          onClick={handleLogoClick}
          className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-105"
        >
          <div className="block">
            <div 
              className="logo-font text-blue-dark text-xl sm:text-2xl lg:text-3xl font-bold drop-shadow-lg group-hover:text-coral transition-colors duration-300"
            >
              Lorenza Henao M
            </div>
            <div className="text-xs text-blue-dark/80 -mt-1 font-montserrat font-medium drop-shadow-md group-hover:text-blue-main transition-colors duration-300">
              
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
            href="https://facebook.com/lorenzahenao" 
            icon="facebook"
            label="Facebook"
          />
          <SocialIcon 
            href="https://instagram.com/lorenzahenao" 
            icon="instagram"
            label="Instagram"
          />
          <SocialIcon 
            href="https://linkedin.com/in/lorenzahenao" 
            icon="linkedin"
            label="LinkedIn"
          />
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={toggleMenu}
          className="lg:hidden w-10 h-10 bg-blue-main/20 rounded-xl flex items-center justify-center text-blue-dark hover:bg-blue-main/40 hover:text-white transition-all duration-300 shadow-md backdrop-blur-sm"
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

      {/* El menú móvil ahora se renderiza directamente desde NavBar */}
      <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

// Componente para iconos de redes sociales con Lucide React
function SocialIcon({ href, icon, label, mobile = false }) {
  const iconComponents = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
  };

  const IconComponent = iconComponents[icon];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${
        mobile
          ? 'w-14 h-14 hover:shadow-xl'
          : 'w-12 h-12 hover:shadow-lg'
      } rounded-full flex items-center justify-center transition-all duration-300 shadow-md transform hover:scale-110 backdrop-blur-sm`}
      style={{
        backgroundColor: '#7BCBFF',
        color: '#FFFFFF'
      }}
      aria-label={label}
    >
      <IconComponent 
        className={`${mobile ? 'w-8 h-8' : 'w-7 h-7'}`}
      />
    </a>
  );
}

// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Facebook, Instagram, Linkedin } from 'lucide-react';
// import { Container } from '../atoms/Container';
// import { NavBar } from './NavBar';
// import { handleNavigation } from './NavBar'; // Importar la función de navegación

// // Componente NavLink para navegación desktop
// function NavLink({ children, active = false, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`px-4 py-2 rounded-full text-sm font-montserrat font-medium transition-all duration-300 hover:bg-blue-main/20 hover:shadow-md backdrop-blur-sm ${active
//           ? 'text-white bg-blue-main shadow-md border border-blue-main/30'
//           : 'text-blue-dark hover:text-white'
//         }`}
//     >
//       {children}
//     </button>
//   );
// }

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   // Función para manejar click en el logo/nombre
//   const handleLogoClick = (e) => {
//     e.preventDefault();
//     handleNavigation('hero'); // Navegar al inicio/hero
//     setIsMenuOpen(false); // Cerrar menú móvil si está abierto
//   };

//   return (
//     <header 
//       className="sticky top-0 z-50 backdrop-blur-md border-b border-white/30 shadow-lg"
//       style={{
//         background: 'linear-gradient(to right, rgba(242, 251, 255, 0.85), rgba(199, 184, 234, 0.85))'
//       }}
//     >
//       <Container className="flex h-20 items-center justify-between">
//         {/* Logo */}
//         <button 
//           onClick={handleLogoClick}
//           className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-105"
//         >
//           <div className="block">
//             <div 
//               className="logo-font text-blue-dark text-xl sm:text-2xl lg:text-3xl font-bold drop-shadow-lg group-hover:text-coral transition-colors duration-300"
//             >
//               Lorenza Henao M
//             </div>
//             <div className="text-xs text-blue-dark/80 -mt-1 font-montserrat font-medium drop-shadow-md group-hover:text-blue-main transition-colors duration-300">
              
//             </div>
//           </div>
//         </button>

//         {/* Navegación Desktop */}
//         <nav className="hidden lg:flex items-center gap-1">
//           <NavLink
//             onClick={() => handleNavigation('hero')}
//             active={location.hash === '#hero' || location.hash === ''}
//           >
//             Inicio
//           </NavLink>
//           <NavLink
//             onClick={() => handleNavigation('sobre-mi')}
//             active={location.hash === '#sobre-mi'}
//           >
//             Sobre Mí
//           </NavLink>
//           <NavLink
//             onClick={() => handleNavigation('mentorias')}
//             active={location.hash === '#mentorias'}
//           >
//             Mentorías
//           </NavLink>
//           <NavLink
//             onClick={() => handleNavigation('recursos')}
//             active={location.hash === '#recursos'}
//           >
//             Recursos
//           </NavLink>
//           <NavLink
//             onClick={() => handleNavigation('testimonios')}
//             active={location.hash === '#testimonios'}
//           >
//             Testimonios
//           </NavLink>
//           <NavLink
//             onClick={() => handleNavigation('contacto')}
//             active={location.hash === '#contacto'}
//           >
//             Contacto
//           </NavLink>
//         </nav>

//         {/* Navegación Móvil - usando el componente NavBar */}
//         <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

//         {/* Redes Sociales Desktop */}
//         <div className="hidden lg:flex items-center gap-4">
//           <SocialIcon 
//             href="https://facebook.com/lorenzahenao" 
//             icon="facebook"
//             label="Facebook"
//           />
//           <SocialIcon 
//             href="https://instagram.com/lorenzahenao" 
//             icon="instagram"
//             label="Instagram"
//           />
//           <SocialIcon 
//             href="https://linkedin.com/in/lorenzahenao" 
//             icon="linkedin"
//             label="LinkedIn"
//           />
//         </div>

//         {/* Botón menú móvil */}
//         <button
//           onClick={toggleMenu}
//           className="lg:hidden w-10 h-10 bg-blue-main/20 rounded-xl flex items-center justify-center text-blue-dark hover:bg-blue-main/40 hover:text-white transition-all duration-300 shadow-md backdrop-blur-sm"
//         >
//           <svg 
//             className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} 
//             fill="none" 
//             stroke="currentColor" 
//             viewBox="0 0 24 24"
//           >
//             {isMenuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </Container>

//       {/* El menú móvil ahora se renderiza directamente desde NavBar */}
//       <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
//     </header>
//   );
// }

// // Componente para iconos de redes sociales con Lucide React
// function SocialIcon({ href, icon, label, mobile = false }) {
//   const iconComponents = {
//     facebook: Facebook,
//     instagram: Instagram,
//     linkedin: Linkedin,
//   };

//   const IconComponent = iconComponents[icon];

//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className={`group ${
//         mobile
//           ? 'w-14 h-14 hover:shadow-xl'
//           : 'w-12 h-12 hover:shadow-lg'
//       } rounded-full flex items-center justify-center transition-all duration-300 shadow-md transform hover:scale-110 backdrop-blur-sm`}
//       style={{
//         backgroundColor: '#7BCBFF',
//         color: '#FFFFFF'
//       }}
//       aria-label={label}
//     >
//       <IconComponent 
//         className={`${mobile ? 'w-8 h-8' : 'w-7 h-7'}`}
//       />
//     </a>
//   );
// }