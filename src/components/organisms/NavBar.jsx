import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const smoothScrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    // Agregar offset para evitar que el header oculte el contenido
    const headerOffset = 100; // Ajusta según la altura de tu header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
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
      className={`px-4 py-2 rounded-full text-sm font-montserrat font-medium transition-all duration-300 hover:bg-blue-main/20 hover:shadow-md backdrop-blur-sm ${active
          ? 'text-white bg-blue-main shadow-md border border-blue-main/30'
          : 'text-blue-dark hover:text-white'
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
      className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-montserrat font-medium transition-all duration-300 backdrop-blur-sm w-full text-left ${active
          ? 'text-white bg-blue-main shadow-md border border-blue-main/30'
          : 'text-blue-dark hover:text-white hover:bg-blue-main/60'
        }`}
    >
      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${active ? 'bg-white shadow-sm' : 'bg-blue-main/60'
        }`}></div>
      {children}
    </button>
  );
}

export function NavBar({ isMenuOpen, toggleMenu }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (location.hash && isHome) {
      setTimeout(() => {
        const sectionId = location.hash.substring(1);
        smoothScrollToSection(sectionId);
      }, 100);
    }
  }, [location.hash, isHome]);

  return (
    <>
      {/* Menú móvil - solo el componente de navegación */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 z-40">
          <div
            className="backdrop-blur-md shadow-lg"
            style={{
              background: 'linear-gradient(to right, rgba(199, 184, 234, 0.98), rgba(242, 251, 255, 0.98))'
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <nav className="flex flex-col gap-3">
                <MobileNavLink
                  onClick={toggleMenu}
                  onSectionClick={() => handleNavigation('hero')}
                  active={location.hash === '#hero'}
                >
                  Inicio
                </MobileNavLink>
    
                <MobileNavLink
                  onClick={toggleMenu}
                  onSectionClick={() => handleNavigation('sobre-mi')}
                  active={location.hash === '#sobre-mi'}
                >
                  Sobre Mí
                </MobileNavLink>

                <MobileNavLink
                  onClick={toggleMenu}
                  onSectionClick={() => handleNavigation('mentorias')}
                  active={location.hash === '#mentorias'}
                >
                  Mentorías
                </MobileNavLink>

                <MobileNavLink
                  onClick={toggleMenu}
                  onSectionClick={() => handleNavigation('recursos')}
                  active={location.hash === '#recursos'}
                >
                  Recursos
                </MobileNavLink>

                <MobileNavLink
                  onClick={toggleMenu}
                  onSectionClick={() => handleNavigation('testimonios')}
                  active={location.hash === '#testimonios'}
                >
                  Testimonios
                </MobileNavLink>
                
                <MobileNavLink
                  onClick={toggleMenu}
                  onSectionClick={() => handleNavigation('contacto')}
                  active={location.hash === '#contacto'}
                >
                  Contacto
                </MobileNavLink>

                {/* Redes sociales dentro del NavBar móvil */}
                <div className="pt-4 border-t border-blue-main/20 mt-2">
                  <p className="text-blue-dark font-montserrat font-medium text-sm mb-3 text-center">
                    Sígueme en redes sociales
                  </p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://facebook.com/lorenzahenao"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md transform hover:scale-110 backdrop-blur-sm"
                      style={{ backgroundColor: '#7BCBFF', color: '#FFFFFF' }}
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/lorenzahenao"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md transform hover:scale-110 backdrop-blur-sm"
                      style={{ backgroundColor: '#7BCBFF', color: '#FFFFFF' }}
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297-.878-.807-1.297-1.959-1.297-3.256 0-1.297.49-2.448 1.297-3.326.807-.878 1.959-1.297 3.256-1.297 1.297 0 2.448.49 3.326 1.297.878.807 1.297 1.959 1.297 3.256 0 1.297-.49 2.448-1.297 3.326-.807.878-1.959 1.297-3.256 1.297z"/>
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/lorenzahenao"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md transform hover:scale-110 backdrop-blur-sm"
                      style={{ backgroundColor: '#7BCBFF', color: '#FFFFFF' }}
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
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
// import { useEffect } from 'react';

// const smoothScrollToSection = (sectionId) => {
//   const element = document.getElementById(sectionId);
//   if (element) {
//     element.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     });
//   }
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
//       className={`px-4 py-2 rounded-full text-sm font-montserrat font-medium transition-all duration-300 hover:bg-blue-main/20 hover:shadow-md backdrop-blur-sm ${active
//           ? 'text-white bg-blue-main shadow-md border border-blue-main/30'
//           : 'text-blue-dark hover:text-white'
//         }`}
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
//       className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-montserrat font-medium transition-all duration-300 backdrop-blur-sm w-full text-left ${active
//           ? 'text-white bg-blue-main shadow-md border border-blue-main/30'
//           : 'text-blue-dark hover:text-white hover:bg-blue-main/60'
//         }`}
//     >
//       <div className={`w-2 h-2 rounded-full transition-all duration-300 ${active ? 'bg-white shadow-sm' : 'bg-blue-main/60'
//         }`}></div>
//       {children}
//     </button>
//   );
// }

// export function NavBar({ isMenuOpen, toggleMenu }) {
//   const location = useLocation();
//   const isHome = location.pathname === '/';

//   useEffect(() => {
//     if (location.hash && isHome) {
//       setTimeout(() => {
//         const sectionId = location.hash.substring(1);
//         smoothScrollToSection(sectionId);
//       }, 100);
//     }
//   }, [location.hash, isHome]);

//   return (
//     <>
//       {/* Navegación Desktop */}
//       <nav className="hidden lg:flex items-center gap-1">
//         <NavLink
//           onClick={() => handleNavigation('hero')}
//           active={location.hash === '#hero'}
//         >
//           Inicio
//         </NavLink>
//         <NavLink
//           onClick={() => handleNavigation('sobre-mi')}
//           active={location.hash === '#sobre-mi'}
//         >
//           Sobre Mí
//         </NavLink>
//         {/* ...existing code... */}
//         <NavLink
//           onClick={() => handleNavigation('mentorias')}
//           active={location.hash === '#mentorias'}
//         >
//           Mentorías
//         </NavLink>
//         <NavLink
//           onClick={() => handleNavigation('recursos')}
//           active={location.hash === '#recursos'}
//         >
//           Recursos
//         </NavLink>
//         <NavLink
//           onClick={() => handleNavigation('testimonios')}
//           active={location.hash === '#testimonios'}
//         >
//           Testimonios
//         </NavLink>
//         <NavLink
//           onClick={() => handleNavigation('contacto')}
//           active={location.hash === '#contacto'}
//         >
//           Contacto
//         </NavLink>
//       </nav>




//       {/* Menú móvil */}
//       <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//         }`}>
//         <div
//           className="backdrop-blur-md border-t border-blue-main/30 shadow-lg"
//           style={{
//             background: 'linear-gradient(to right, rgba(199, 184, 234, 0.9), rgba(242, 251, 255, 0.9))'
//           }}
//         >
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//             <nav className="flex flex-col gap-4">
//               <MobileNavLink
//                 onClick={toggleMenu}
//                 onSectionClick={() => handleNavigation('hero')}
//                 active={location.hash === '#hero'}
//               >
//                 Inicio
//               </MobileNavLink>
  
//               <MobileNavLink
//                 onClick={toggleMenu}
//                 onSectionClick={() => handleNavigation('sobre-mi')}
//                 active={location.hash === '#sobre-mi'}
//               >
//                 Sobre mi
//               </MobileNavLink>

//               <MobileNavLink
//                 onClick={toggleMenu}
//                 onSectionClick={() => handleNavigation('mentorias')}
//                 active={location.hash === '#Mentorias'}
//               >
//                 Mentorías
//               </MobileNavLink>

//               <MobileNavLink
//                 onClick={toggleMenu}
//                 onSectionClick={() => handleNavigation('recursos')}
//                 active={location.hash === '#recursos'}
//               >
//                 Recursos
//               </MobileNavLink>

//               <MobileNavLink
//                 onClick={toggleMenu}
//                 onSectionClick={() => handleNavigation('testimonios')}
//                 active={location.hash === '#testimonios'}
//               >
//                 Testimonios
//               </MobileNavLink>

//               <MobileNavLink
//                 onClick={toggleMenu}
//                 onSectionClick={() => handleNavigation('contacto')}
//                 active={location.hash === '#contacto'}
//               >
//                 Contacto
//               </MobileNavLink>


//             </nav>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
