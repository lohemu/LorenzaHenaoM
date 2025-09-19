import { Link } from 'react-router-dom';

// Componente NavLink para desktop
function NavLink({ to, children, active = false }) {
  return (
    <Link 
      to={to}
      className={`px-4 py-2 rounded-full text-sm font-montserrat font-medium transition-all duration-300 hover:bg-blue-main/20 hover:shadow-md backdrop-blur-sm ${
        active 
          ? 'text-white bg-blue-main shadow-md border border-blue-main/30' 
          : 'text-blue-dark hover:text-white'
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
      className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-montserrat font-medium transition-all duration-300 backdrop-blur-sm ${
        active 
          ? 'text-white bg-blue-main shadow-md border border-blue-main/30' 
          : 'text-blue-dark hover:text-white hover:bg-blue-main/60'
      }`}
    >
      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
        active ? 'bg-white shadow-sm' : 'bg-blue-main/60'
      }`}></div>
      {children}
    </Link>
  );
}

// Componente principal NavBar
export default function NavBar({ isMenuOpen, toggleMenu }) {
  return (
    <>
      {/* Navegación Desktop */}
      <nav className="hidden lg:flex items-center gap-1">
        <NavLink to="/" active>Inicio</NavLink>
        <NavLink to="/sobre-mi">Sobre Mí</NavLink>
        <NavLink to="/mentorias">Mentorías</NavLink>
        <NavLink to="/recursos">Recursos</NavLink>
        <NavLink to="/testimonios">Testimonios</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
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
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}