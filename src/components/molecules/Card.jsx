export default function Card({ 
  title, 
  children, 
  variant = 'default',
  hover = true,
  className = '' 
}) {
  const baseStyles = 'rounded-3xl p-6 transition-all duration-300';
  
  const variants = {
    default: 'bg-white shadow-lg border border-gray-100/50 hover:shadow-xl',
    glass: 'glass shadow-lg hover:shadow-xl',
    'glass-blue': 'glass border-blue-main/20 shadow-lg hover:shadow-xl',
    'glass-coral': 'glass-coral shadow-lg hover:shadow-xl',
    'glass-mint': 'glass-mint shadow-lg hover:shadow-xl',
    'glass-lavender': 'glass-dark border-lavender/20 shadow-lg hover:shadow-xl',
    soft: 'bg-gradient-soft-blue shadow-md hover:shadow-lg',
    'soft-coral': 'bg-gradient-soft-coral shadow-md hover:shadow-lg',
    'soft-mint': 'bg-gradient-soft-mint shadow-md hover:shadow-lg',
    'soft-lavender': 'bg-gradient-soft-lavender shadow-md hover:shadow-lg',
    elevated: 'bg-white shadow-2xl border border-gray-50 hover:shadow-3xl',
    minimal: 'bg-gray-50/50 hover:bg-gray-100/50',
    outlined: 'bg-transparent border-2 border-blue-main/20 hover:border-blue-main/40 hover:bg-blue-light/30'
  };

  const hoverEffects = hover ? 'card-hover transform hover:-translate-y-1' : '';

  const titleStyles = {
    default: 'text-gray-800 font-montserrat',
    glass: 'text-gray-800 font-montserrat',
    'glass-blue': 'text-blue-main font-montserrat',
    'glass-coral': 'text-coral-dark font-montserrat',
    'glass-mint': 'text-gray-800 font-montserrat',
    'glass-lavender': 'text-lavender-dark font-montserrat',
    soft: 'text-gray-800 font-montserrat',
    'soft-coral': 'text-coral-dark font-montserrat',
    'soft-mint': 'text-gray-800 font-montserrat',
    'soft-lavender': 'text-lavender-dark font-montserrat',
    elevated: 'text-gray-800 font-montserrat',
    minimal: 'text-gray-700 font-montserrat',
    outlined: 'text-blue-main font-montserrat'
  };

  const contentStyles = {
    default: 'text-gray-600 font-montserrat',
    glass: 'text-gray-700 font-montserrat',
    'glass-blue': 'text-gray-700 font-montserrat',
    'glass-coral': 'text-gray-700 font-montserrat',
    'glass-mint': 'text-gray-700 font-montserrat',
    'glass-lavender': 'text-gray-700 font-montserrat',
    soft: 'text-gray-600 font-montserrat',
    'soft-coral': 'text-gray-600 font-montserrat',
    'soft-mint': 'text-gray-600 font-montserrat',
    'soft-lavender': 'text-gray-600 font-montserrat',
    elevated: 'text-gray-600 font-montserrat',
    minimal: 'text-gray-600 font-montserrat',
    outlined: 'text-gray-600 font-montserrat'
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${hoverEffects} ${className}`;

  return (
    <div className={combinedClassName}>
      {title && (
        <h3 className={`text-lg font-semibold mb-3 ${titleStyles[variant]}`}>
          {title}
        </h3>
      )}
      <div className={`text-sm leading-6 ${contentStyles[variant]}`}>
        {children}
      </div>
    </div>
  );
}