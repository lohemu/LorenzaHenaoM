import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { SocialIcon } from '../atoms/SocialIcon';

const smoothScrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    window.history.pushState(null, '', `#${sectionId}`);
  }
};

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
  
  return 'hero';
};

export const handleNavigation = (sectionId) => {
  const isHome = window.location.pathname === '/';

  if (isHome) {
    smoothScrollToSection(sectionId);
  } else {
    window.location.href = `/${sectionId ? `#${sectionId}` : ''}`;
  }
};

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

function MobileNavLink({ children, onClick, active = false, onSectionClick }) {
  const handleClick = () => {
    if (onSectionClick) {
      onSectionClick();
    }
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-montserrat font-medium transition-all duration-300 w-full text-left ${
        active
          ? 'bg-gray-900 text-white shadow-md'
          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
      }`}
    >
      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
        active ? 'bg-white' : 'bg-gray-400'
      }`}></div>
      {children}
    </button>
  );
}

export function NavBar({ isMenuOpen, toggleMenu }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const section = getCurrentSection();
      setCurrentSection(section);
      
      const newHash = `#${section}`;
      if (window.location.hash !== newHash) {
        window.history.replaceState(null, '', newHash);
      }
    };

    const initialSection = location.hash ? location.hash.substring(1) : getCurrentSection();
    setCurrentSection(initialSection);

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome, location.pathname]);

  useEffect(() => {
    if (location.hash && isHome) {
      setTimeout(() => {
        const sectionId = location.hash.substring(1);
        smoothScrollToSection(sectionId);
        setCurrentSection(sectionId);
      }, 100);
    }
  }, [location.hash, isHome]);

  const isSectionActive = (sectionId) => {
    if (!isHome) return false;
    
    if (sectionId === 'recursos' && currentSection === 'suscription') {
      return true;
    }
    
    return currentSection === sectionId;
  };

  return (
    <>
      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 z-40">
          <div className="bg-white border-t border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <nav className="flex flex-col gap-3">
                <MobileNavLink
                  onClick={toggleMenu}
                  onSectionClick={() => handleNavigation('hero')}
                  active={isSectionActive('hero')}
                >
                  Inicio
                </MobileNavLink>
    
                <MobileNavLink
                  onClick={toggleMenu}
                  onSectionClick={() => handleNavigation('sobre-mi')}
                  active={isSectionActive('sobre-mi')}
                >
                  Sobre Mí
                </MobileNavLink>

                <MobileNavLink
                  onClick={toggleMenu}
                  onSectionClick={() => handleNavigation('mentorias')}
                  active={isSectionActive('mentorias')}
                >
                  Mentorías
                </MobileNavLink>

                <MobileNavLink
                  onClick={toggleMenu}
                  onSectionClick={() => handleNavigation('recursos')}
                  active={isSectionActive('recursos')}
                >
                  Recursos
                </MobileNavLink>

                <MobileNavLink
                  onClick={toggleMenu}
                  onSectionClick={() => handleNavigation('testimonios')}
                  active={isSectionActive('testimonios')}
                >
                  Testimonios
                </MobileNavLink>
                
                <MobileNavLink
                  onClick={toggleMenu}
                  onSectionClick={() => handleNavigation('contacto')}
                  active={isSectionActive('contacto')}
                >
                  Contacto
                </MobileNavLink>

                {/* Redes sociales dentro del NavBar móvil */}
                <div className="pt-4 border-t border-gray-200 mt-2">
                  <p className="text-gray-600 font-montserrat font-medium text-sm mb-3 text-center">
                    Sígueme en redes sociales
                  </p>
                  <div className="flex justify-center gap-4">
                    <SocialIcon 
                      icon={Facebook}
                      href="https://facebook.com/lorenzahenao"
                      bgColor="bg-gray-700"
                      iconColor="text-white"
                      hoverBg="hover:bg-gray-900"
                      size="w-10 h-10"
                    />
                    <SocialIcon 
                      icon={Instagram}
                      href="https://instagram.com/lorenzahenao"
                      bgColor="bg-gray-700"
                      iconColor="text-white"
                      hoverBg="hover:bg-gray-900"
                      size="w-10 h-10"
                    />
                    <SocialIcon 
                      icon={Linkedin}
                      href="https://linkedin.com/in/lorenzahenao"
                      bgColor="bg-gray-700"
                      iconColor="text-white"
                      hoverBg="hover:bg-gray-900"
                      size="w-10 h-10"
                    />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// import { useLocation } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// const smoothScrollToSection = (sectionId) => {
//   const element = document.getElementById(sectionId);
//   if (element) {
//     const headerOffset = 80;
//     const elementPosition = element.getBoundingClientRect().top;
//     const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

//     window.scrollTo({
//       top: offsetPosition,
//       behavior: 'smooth'
//     });
    
//     window.history.pushState(null, '', `#${sectionId}`);
//   }
// };

// // Función para detectar la sección activa basada en el scroll
// const getCurrentSection = () => {
//   const sections = ['hero', 'sobre-mi', 'mentorias', 'recursos', 'suscription', 'testimonios', 'contacto'];
//   const headerOffset = 100;
  
//   for (let i = sections.length - 1; i >= 0; i--) {
//     const section = document.getElementById(sections[i]);
//     if (section) {
//       const rect = section.getBoundingClientRect();
//       if (rect.top <= headerOffset) {
//         return sections[i];
//       }
//     }
//   }
  
//   return 'hero';
// };

// export const handleNavigation = (sectionId) => {
//   const isHome = window.location.pathname === '/';

//   if (isHome) {
//     smoothScrollToSection(sectionId);
//   } else {
//     window.location.href = `/${sectionId ? `#${sectionId}` : ''}`;
//   }
// };

// function NavLink({ children, active = false, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`px-4 py-2 rounded-lg text-sm font-montserrat font-medium transition-all duration-300 ${
//         active
//           ? 'bg-gray-900 text-white shadow-md'
//           : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
//       }`}
//     >
//       {children}
//     </button>
//   );
// }

// function MobileNavLink({ children, onClick, active = false, onSectionClick }) {
//   const handleClick = () => {
//     if (onSectionClick) {
//       onSectionClick();
//     }
//     onClick();
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-montserrat font-medium transition-all duration-300 w-full text-left ${
//         active
//           ? 'bg-gray-900 text-white shadow-md'
//           : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
//       }`}
//     >
//       <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
//         active ? 'bg-white' : 'bg-gray-400'
//       }`}></div>
//       {children}
//     </button>
//   );
// }

// export function NavBar({ isMenuOpen, toggleMenu }) {
//   const location = useLocation();
//   const isHome = location.pathname === '/';
//   const [currentSection, setCurrentSection] = useState('hero');

//   useEffect(() => {
//     if (!isHome) return;

//     const handleScroll = () => {
//       const section = getCurrentSection();
//       setCurrentSection(section);
      
//       const newHash = `#${section}`;
//       if (window.location.hash !== newHash) {
//         window.history.replaceState(null, '', newHash);
//       }
//     };

//     const initialSection = location.hash ? location.hash.substring(1) : getCurrentSection();
//     setCurrentSection(initialSection);

//     window.addEventListener('scroll', handleScroll, { passive: true });
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [isHome, location.pathname]);

//   useEffect(() => {
//     if (location.hash && isHome) {
//       setTimeout(() => {
//         const sectionId = location.hash.substring(1);
//         smoothScrollToSection(sectionId);
//         setCurrentSection(sectionId);
//       }, 100);
//     }
//   }, [location.hash, isHome]);

//   const isSectionActive = (sectionId) => {
//     if (!isHome) return false;
    
//     if (sectionId === 'recursos' && currentSection === 'suscription') {
//       return true;
//     }
    
//     return currentSection === sectionId;
//   };

//   return (
//     <>
//       {/* Menú móvil */}
//       {isMenuOpen && (
//         <div className="lg:hidden absolute top-full left-0 right-0 z-40">
//           <div className="bg-white border-t border-gray-200 shadow-lg">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//               <nav className="flex flex-col gap-3">
//                 <MobileNavLink
//                   onClick={toggleMenu}
//                   onSectionClick={() => handleNavigation('hero')}
//                   active={isSectionActive('hero')}
//                 >
//                   Inicio
//                 </MobileNavLink>
    
//                 <MobileNavLink
//                   onClick={toggleMenu}
//                   onSectionClick={() => handleNavigation('sobre-mi')}
//                   active={isSectionActive('sobre-mi')}
//                 >
//                   Sobre Mí
//                 </MobileNavLink>

//                 <MobileNavLink
//                   onClick={toggleMenu}
//                   onSectionClick={() => handleNavigation('mentorias')}
//                   active={isSectionActive('mentorias')}
//                 >
//                   Mentorías
//                 </MobileNavLink>

//                 <MobileNavLink
//                   onClick={toggleMenu}
//                   onSectionClick={() => handleNavigation('recursos')}
//                   active={isSectionActive('recursos')}
//                 >
//                   Recursos
//                 </MobileNavLink>

//                 <MobileNavLink
//                   onClick={toggleMenu}
//                   onSectionClick={() => handleNavigation('testimonios')}
//                   active={isSectionActive('testimonios')}
//                 >
//                   Testimonios
//                 </MobileNavLink>
                
//                 <MobileNavLink
//                   onClick={toggleMenu}
//                   onSectionClick={() => handleNavigation('contacto')}
//                   active={isSectionActive('contacto')}
//                 >
//                   Contacto
//                 </MobileNavLink>

//                 {/* Redes sociales dentro del NavBar móvil */}
//                 <div className="pt-4 border-t border-gray-200 mt-2">
//                   <p className="text-gray-600 font-montserrat font-medium text-sm mb-3 text-center">
//                     Sígueme en redes sociales
//                   </p>
//                   <div className="flex justify-center gap-4">
//                     <a
//                       href="https://facebook.com/lorenzahenao"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-900 transform hover:scale-110"
//                       aria-label="Facebook"
//                     >
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                       </svg>
//                     </a>
//                     <a
//                       href="https://instagram.com/lorenzahenao"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-900 transform hover:scale-110"
//                       aria-label="Instagram"
//                     >
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zm5.96 18.192c-1.14.68-2.55 1.07-4.07 1.07s-2.93-.39-4.07-1.07c-.64-.38-1.14-.92-1.42-1.54-.28-.62-.28-1.32 0-1.94.28-.62.78-1.16 1.42-1.54 1.14-.68 2.55-1.07 4.07-1.07s2.93.39 4.07 1.07c.64.38 1.14.92 1.42 1.54.28.62.28 1.32 0 1.94-.28.62-.78 1.16-1.42 1.54z"/>
//                       </svg>
//                     </a>
//                     <a
//                       href="https://linkedin.com/in/lorenzahenao"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-900 transform hover:scale-110"
//                       aria-label="LinkedIn"
//                     >
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </nav>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

