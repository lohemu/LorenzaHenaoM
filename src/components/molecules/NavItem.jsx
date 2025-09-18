import { NavLink } from 'react-router-dom';

export default function NavItem({ 
  to, 
  variant = 'default',
  size = 'medium',
  children 
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
      active: 'text-blue-main bg-gradient-to-r from-blue-main/15 to-lavender/15',
      inactive: 'text-gray-600 hover:text-blue-main hover:bg-blue-main/10'
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
    }
  };

  const variantStyles = variants[variant];
  const sizeStyles = sizes[size];

  return (
    <NavLink
      to={to}
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