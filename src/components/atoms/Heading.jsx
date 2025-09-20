export function Heading({ 
  level = 1, 
  variant = 'default',
  color = 'default',
  className = '', 
  children 
}) {
  const Tag = `h${level}`;
  
  const baseSizes = { 
    1: 'text-3xl sm:text-4xl lg:text-5xl', 
    2: 'text-2xl sm:text-3xl lg:text-4xl', 
    3: 'text-xl sm:text-2xl lg:text-3xl',
    4: 'text-lg sm:text-xl lg:text-2xl',
    5: 'text-base sm:text-lg lg:text-xl',
    6: 'text-sm sm:text-base lg:text-lg'
  };

  const variants = {
    default: 'font-montserrat font-semibold tracking-tight',
    light: 'font-montserrat font-light tracking-tight',
    medium: 'font-montserrat font-medium tracking-tight',
    bold: 'font-montserrat font-bold tracking-tight',
    script: 'font-dancing font-normal',
    'script-bold': 'font-dancing font-semibold'
  };

  const colors = {
    default: 'text-gray-800',
    light: 'text-gray-600',
    dark: 'text-gray-900',
    white: 'text-white',
    'blue-main': 'text-blue-main',
    'blue-dark': 'text-blue-dark',
    coral: 'text-coral',
    'coral-dark': 'text-coral-dark',
    lavender: 'text-lavender',
    'lavender-dark': 'text-lavender-dark',
    mint: 'text-mint',
    'mint-dark': 'text-mint-dark',
    'gradient-blue-lavender': 'text-gradient-blue-lavender',
    'gradient-coral': 'text-gradient-coral',
    'gradient-mint': 'text-gradient-mint',
    'gradient-animated': 'text-gradient-animated'
  };

  const combinedClassName = `
    ${baseSizes[level] || 'text-lg'} 
    ${variants[variant]} 
    ${colors[color]} 
    ${className}
  `.trim();

  return (
    <Tag className={combinedClassName}>
      {children}
    </Tag>
  );
}