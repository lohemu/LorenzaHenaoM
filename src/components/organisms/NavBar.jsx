import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const smoothScrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
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
      className={`px-4 py-2 rounded-full text-sm font-montserrat font-medium transition-all duration-300 hover:bg-blue-main/20 hover:shadow-md backdrop-blur-sm ${
        active 
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
      className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-montserrat font-medium transition-all duration-300 backdrop-blur-sm w-full text-left ${
        active 
          ? 'text-white bg-blue-main shadow-md border border-blue-main/30' 
          : 'text-blue-dark hover:text-white hover:bg-blue-main/60'
      }`}
    >
      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
        active ? 'bg-white shadow-sm' : 'bg-blue-main/60'
      }`}></div>
      {children}
    </button>
  );
}

export default function NavBar({ isMenuOpen, toggleMenu }) {
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
        {/* ...existing code... */}
 <NavLink 
          onClick={() => handleNavigation('servicios')}
          active={location.hash === '#servicios'}
        >
          Servicios
        </NavLink>
        <NavLink 
          onClick={() => handleNavigation('testimonios')}
          active={location.hash === '#testimonios'}
        >
          Testimonios
        </NavLink>
        <NavLink 
          onClick={() => handleNavigation('blog')}
          active={location.hash === '#blog'}
        >
          Blog
        </NavLink>
        <NavLink 
          onClick={() => handleNavigation('contacto')}
          active={location.hash === '#contacto'}
        >
          Contacto
        </NavLink>
      </nav>




      {/* Menú móvil */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div 
          className="backdrop-blur-md border-t border-blue-main/30 shadow-lg"
          style={{
            background: 'linear-gradient(to right, rgba(199, 184, 234, 0.9), rgba(242, 251, 255, 0.9))'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <nav className="flex flex-col gap-4">
              <MobileNavLink 
                onClick={toggleMenu} 
                onSectionClick={() => handleNavigation('hero')}
                active={location.hash === '#hero'}
              >
                Inicio
              </MobileNavLink>
              {/* ...existing code... */}

<MobileNavLink 
                onClick={toggleMenu}
                onSectionClick={() => handleNavigation('servicios')}
                active={location.hash === '#servicios'}
              >
                Servicios
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
                onSectionClick={() => handleNavigation('blog')}
                active={location.hash === '#blog'}
              >
                Blog
              </MobileNavLink>
              <MobileNavLink 
                onClick={toggleMenu}
                onSectionClick={() => handleNavigation('contacto')}
                active={location.hash === '#contacto'}
              >
                Contacto
              </MobileNavLink>


            </nav>
          </div>
        </div>
      </div>
    </>
  );
}


// import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';

// // Función utilitaria para hacer scroll suave a una sección
// const smoothScrollToSection = (sectionId) => {
//   const element = document.getElementById(sectionId);
//   if (element) {
//     element.scrollIntoView({ 
//       behavior: 'smooth',
//       block: 'start'
//     });
//   }
// };

// // Función para manejar la navegación (exportada para uso en Header)
// export const handleNavigation = (sectionId) => {
//   const isHome = window.location.pathname === '/';
  
//   if (isHome) {
//     // Si estamos en la página de inicio, hacer scroll a la sección
//     if (sectionId && sectionId !== 'inicio') {
//       smoothScrollToSection(sectionId);
//     } else {
//       // Si es 'inicio' o no hay sectionId, ir al inicio de la página
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   } else {
//     // Si estamos en otra página, navegar a inicio y luego hacer scroll
//     window.location.href = `/${sectionId ? `#${sectionId}` : ''}`;
//   }
// };

// // Componente NavLink para desktop
// function NavLink({ children, active = false, onClick }) {
//   return (
//     <button 
//       onClick={onClick}
//       className={`px-4 py-2 rounded-full text-sm font-montserrat font-medium transition-all duration-300 hover:bg-blue-main/20 hover:shadow-md backdrop-blur-sm ${
//         active 
//           ? 'text-white bg-blue-main shadow-md border border-blue-main/30' 
//           : 'text-blue-dark hover:text-white'
//       }`}
//     >
//       {children}
//     </button>
//   );
// }

// // Componente NavLink para móvil
// function MobileNavLink({ children, onClick, active = false, onSectionClick }) {
//   const handleClick = () => {
//     if (onSectionClick) {
//       onSectionClick();
//     }
//     onClick(); // Cerrar el menú móvil
//   };

//   return (
//     <button 
//       onClick={handleClick}
//       className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-montserrat font-medium transition-all duration-300 backdrop-blur-sm w-full text-left ${
//         active 
//           ? 'text-white bg-blue-main shadow-md border border-blue-main/30' 
//           : 'text-blue-dark hover:text-white hover:bg-blue-main/60'
//       }`}
//     >
//       <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
//         active ? 'bg-white shadow-sm' : 'bg-blue-main/60'
//       }`}></div>
//       {children}
//     </button>
//   );
// }

// // Componente principal NavBar
// export default function NavBar({ isMenuOpen, toggleMenu }) {
//   const location = useLocation();
//   const isHome = location.pathname === '/';

//   // Efecto para manejar el scroll cuando se carga la página con hash
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
//           onClick={() => handleNavigation('inicio')}
//           active={isHome && !location.hash}
//         >
//           Inicio
//         </NavLink>
//         <NavLink 
//           onClick={() => handleNavigation('sobre-mi')}
//           active={location.hash === '#sobre-mi'}
//         >
//           Sobre Mí
//         </NavLink>
//         <NavLink 
//           onClick={() => handleNavigation('servicios')}
//           active={location.hash === '#servicios'}
//         >
//           Servicios
//         </NavLink>
//         <NavLink 
//           onClick={() => handleNavigation('testimonios')}
//           active={location.hash === '#testimonios'}
//         >
//           Testimonios
//         </NavLink>
//         <NavLink 
//           onClick={() => handleNavigation('blog')}
//           active={location.hash === '#blog'}
//         >
//           Blog
//         </NavLink>
//         <NavLink 
//           onClick={() => handleNavigation('contacto')}
//           active={location.hash === '#contacto'}
//         >
//           Contacto
//         </NavLink>
//       </nav>

//       {/* Menú móvil */}
//       <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
//         isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//       }`}>
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
//                 onSectionClick={() => handleNavigation('inicio')}
//                 active={isHome && !location.hash}
//               >
//                 Inicio
//               </MobileNavLink>
//               <MobileNavLink 
//                 onClick={toggleMenu}
//                 onSectionClick={() => handleNavigation('sobre-mi')}
//                 active={location.hash === '#sobre-mi'}
//               >
//                 Sobre Mí
//               </MobileNavLink>
//               <MobileNavLink 
//                 onClick={toggleMenu}
//                 onSectionClick={() => handleNavigation('servicios')}
//                 active={location.hash === '#servicios'}
//               >
//                 Servicios
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
//                 onSectionClick={() => handleNavigation('blog')}
//                 active={location.hash === '#blog'}
//               >
//                 Blog
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