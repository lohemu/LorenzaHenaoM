export default function Button({ 
  as: Tag = 'button', 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  children, 
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-montserrat font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-coral to-coral-dark text-white hover:from-coral-dark hover:to-coral shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-coral/50',
    secondary: 'bg-gradient-to-r from-blue-main to-blue-dark text-white hover:from-blue-dark hover:to-blue-main shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-blue-main/50',
    tertiary: 'bg-gradient-to-r from-lavender to-lavender-dark text-white hover:from-lavender-dark hover:to-lavender shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-lavender/50',
    outline: 'border-2 border-blue-main text-blue-main bg-transparent hover:bg-blue-main hover:text-white focus:ring-blue-main/50',
    'outline-coral': 'border-2 border-coral text-coral-dark bg-transparent hover:bg-coral hover:text-white focus:ring-coral/50',
    'outline-white': 'border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-800 focus:ring-white/50',
    ghost: 'text-gray-600 bg-transparent hover:bg-gray-100 focus:ring-gray-500/50',
    'ghost-white': 'text-white bg-transparent hover:bg-white/10 focus:ring-white/50',
    minimal: 'text-blue-main bg-blue-main/10 hover:bg-blue-main/20 focus:ring-blue-main/50'
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-2.5 text-sm',
    large: 'px-8 py-3 text-base',
    xl: 'px-10 py-4 text-lg'
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <Tag
      className={combinedClassName}
      {...props}
    >
      {children}
    </Tag>
  );
}