import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Container } from '../atoms/Container';
import { NavBar } from './NavBar';
import { handleNavigation } from './NavBar'; // Importar la función de navegación

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
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Función para manejar click en el logo/nombre
  const handleLogoClick = (e) => {
    e.preventDefault();
    handleNavigation('hero'); // Navegar al inicio/hero
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
            active={location.hash === '#hero'}
          >
            Inicio
          </NavLink>
          <NavLink
            onClick={() => handleNavigation('sobre-mi')}
            active={location.hash === '#sobre-mi'}
          >
            Sobre Mí
          </NavLink>
          <NavLink
            onClick={() => handleNavigation('mentorias')}
            active={location.hash === '#mentorias'}
          >
            Mentorías
          </NavLink>
          <NavLink
            onClick={() => handleNavigation('recursos')}
            active={location.hash === '#recursos'}
          >
            Recursos
          </NavLink>
          <NavLink
            onClick={() => handleNavigation('testimonios')}
            active={location.hash === '#testimonios'}
          >
            Testimonios
          </NavLink>
          <NavLink
            onClick={() => handleNavigation('contacto')}
            active={location.hash === '#contacto'}
          >
            Contacto
          </NavLink>
        </nav>

        {/* Navegación Móvil - usando el componente NavBar */}
        <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

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
// import { Link } from 'react-router-dom';
// import { Facebook, Instagram, Linkedin } from 'lucide-react';
// import { Container } from '../atoms/Container';
// import { NavBar } from './NavBar';
// import { handleNavigation } from './NavBar'; // Importar la función de navegación

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   // Función para manejar click en el logo/nombre
//   const handleLogoClick = (e) => {
//     e.preventDefault();
//     handleNavigation('inicio'); // Navegar al inicio/hero
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
//           <div className="hidden sm:block">
//             <div 
//               className="logo-font text-blue-dark text-2xl lg:text-3xl font-bold drop-shadow-lg group-hover:text-coral transition-colors duration-300"
//             >
//               Lorenza Henao M
//             </div>
//             <div className="text-xs text-blue-dark/80 -mt-1 font-montserrat font-medium drop-shadow-md group-hover:text-blue-main transition-colors duration-300">
              
//             </div>
//           </div>
//         </button>

//         {/* Navegación - usando el componente NavBar */}
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

//       {/* Menú móvil con redes sociales */}
//       <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
//         isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//       }`}>
//         <div 
//           className="backdrop-blur-md border-t border-blue-main/30 shadow-lg"
//           style={{
//             background: 'linear-gradient(to right, rgba(199, 184, 234, 0.9), rgba(242, 251, 255, 0.9))'
//           }}
//         >
//           <Container className="py-6">
//             <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            
//             {/* Redes Sociales Móvil */}
//             <div className="pt-4 border-t border-blue-main/30 mt-4">
//               <p className="text-lavender font-montserrat font-medium text-sm mb-3 drop-shadow-sm">
//                 Sígueme en redes sociales
//               </p>
//               <div className="flex justify-center gap-5">
//                 <SocialIcon 
//                   href="https://facebook.com/lorenzahenao" 
//                   icon="facebook"
//                   label="Facebook"
//                   mobile
//                 />
//                 <SocialIcon 
//                   href="https://instagram.com/lorenzahenao" 
//                   icon="instagram"
//                   label="Instagram"
//                   mobile
//                 />
//                 <SocialIcon 
//                   href="https://linkedin.com/in/lorenzahenao" 
//                   icon="linkedin"
//                   label="LinkedIn"
//                   mobile
//                 />
//               </div>
//             </div>
//           </Container>
//         </div>
//       </div>
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

