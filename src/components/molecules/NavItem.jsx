import { NavLink } from 'react-router-dom';
import { handleNavigation } from './NavBar';

export function NavItem({ 
  to, 
  sectionId,
  variant = 'default',
  size = 'medium',
  children,
  onClick 
}) {
  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-sm',
    large: 'px-5 py-2.5 text-base'
  };

  const variants = {
    default: {
      base: 'font-montserrat font-medium transition-all duration-300 rounded-full',
      active: 'text-blue-main bg-gradient-to-r from-blue-main/20 to-lavender/20 shadow-sm',
      inactive: 'text-gray-600 hover:text-blue-main hover:bg-blue-main/10'
    },
    minimal: {
      base: 'font-montserrat font-medium transition-all duration-300 rounded-lg',
      active: 'text-blue-main border-b-2 border-blue-main',
      inactive: 'text-gray-600 hover:text-blue-main'
    },
    pill: {
      base: 'font-montserrat font-medium transition-all duration-300 rounded-full',
      active: 'text-white bg-gradient-to-r from-coral to-coral-dark shadow-lg',
      inactive: 'text-gray-600 hover:text-coral hover:bg-coral/10'
    },
    ghost: {
      base: 'font-montserrat font-medium transition-all duration-300 rounded-xl',
      active: 'text-blue-main bg-blue-main/5',
      inactive: 'text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'
    },
    'header-light': {
      base: 'font-montserrat font-medium transition-all duration-300 rounded-full',
      active: 'text-white bg-blue-main shadow-md border border-blue-main/30',
      inactive: 'text-blue-dark hover:text-white hover:bg-blue-main/20'
    },
    'footer-dark': {
      base: 'font-montserrat font-medium transition-all duration-300 rounded-lg',
      active: 'text-coral',
      inactive: 'text-gray-300 hover:text-coral hover:translate-x-1 transform'
    },
    sidebar: {
      base: 'font-montserrat font-medium transition-all duration-300 rounded-2xl w-full text-left',
      active: 'text-blue-main bg-gradient-to-r from-blue-main/10 to-lavender/10 border-r-3 border-blue-main',
      inactive: 'text-gray-600 hover:text-blue-main hover:bg-blue-main/5'
    },
    'mobile-nav': {
      base: 'font-montserrat font-medium transition-all duration-300 rounded-2xl w-full text-left flex items-center gap-3',
      active: 'text-white bg-blue-main shadow-md border border-blue-main/30',
      inactive: 'text-blue-dark hover:text-white hover:bg-blue-main/60'
    }
  };

  const variantStyles = variants[variant];
  const sizeStyles = sizes[size];

  // Si hay sectionId, usar navegación por secciones
  if (sectionId) {
    const handleClick = (e) => {
      e.preventDefault();
      handleNavigation(sectionId);
      if (onClick) onClick();
    };

    // Determinar si está activo basado en el hash actual y la sección visible
    const isActive = () => {
      const currentHash = window.location.hash.substring(1);
      const currentSection = currentHash || 'hero';
      
      // Mapeo de secciones para casos especiales
      const sectionMapping = {
        'suscription': 'recursos', // Si la suscripción debe activar recursos
        // Agregar otros mapeos si es necesario
      };
      
      const mappedSection = sectionMapping[currentSection] || currentSection;
      const mappedSectionId = sectionMapping[sectionId] || sectionId;
      
      return mappedSection === mappedSectionId;
    };

    return (
      <button
        onClick={handleClick}
        className={`${variantStyles.base} ${sizeStyles} ${
          isActive() ? variantStyles.active : variantStyles.inactive
        }`}
      >
        {variant === 'mobile-nav' && (
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
            isActive() ? 'bg-white shadow-sm' : 'bg-blue-main/60'
          }`}></div>
        )}
        {children}
      </button>
    );
  }

  // Si hay `to`, usar navegación tradicional con React Router
  if (to) {
    return (
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `${variantStyles.base} ${sizeStyles} ${
            isActive ? variantStyles.active : variantStyles.inactive
          }`
        }
      >
        {children}
      </NavLink>
    );
  }

  // Botón genérico si no hay `to` ni `sectionId`
  return (
    <button
      onClick={onClick}
      className={`${variantStyles.base} ${sizeStyles} ${variantStyles.inactive}`}
    >
      {children}
    </button>
  );
}
