export default function Text({ 
  size = 'base',
  weight = 'normal',
  color = 'default',
  variant = 'default',
  className = '', 
  children 
}) {
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm', 
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  };

  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const colors = {
    default: 'text-gray-600',
    light: 'text-gray-500',
    dark: 'text-gray-700',
    darker: 'text-gray-800',
    white: 'text-white',
    'white-muted': 'text-white/90',
    'white-soft': 'text-white/80',
    'blue-main': 'text-blue-main',
    'blue-dark': 'text-blue-dark',
    coral: 'text-coral',
    'coral-dark': 'text-coral-dark',
    lavender: 'text-lavender',
    'lavender-dark': 'text-lavender-dark',
    mint: 'text-mint',
    'mint-dark': 'text-mint-dark',
    muted: 'text-gray-400',
    'muted-light': 'text-gray-300',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600',
    'gradient-blue-lavender': 'text-gradient-blue-lavender',
    'gradient-coral': 'text-gradient-coral',
    'gradient-mint': 'text-gradient-mint',
    'gradient-animated': 'text-gradient-animated'
  };

  const variants = {
    default: 'font-montserrat leading-7',
    compact: 'font-montserrat leading-6',
    relaxed: 'font-montserrat leading-8',
    loose: 'font-montserrat leading-9',
    script: 'font-dancing leading-7',
    caption: 'font-montserrat leading-5 tracking-wide uppercase text-xs font-medium',
    body: 'font-montserrat leading-7',
    'body-large': 'font-montserrat leading-8'
  };

  const combinedClassName = `
    ${sizes[size]} 
    ${weights[weight]} 
    ${colors[color]} 
    ${variants[variant]} 
    ${className}
  `.trim();

  return (
    <p className={combinedClassName}>
      {children}
    </p>
  );
}