import { Quote } from 'lucide-react';

export function Card({ 
  title, 
  children, 
  variant = 'default',
  hover = true,
  className = '',
  // Props especificos para testimonios
  testimonial = null,
  // Nuevas props para personalización
  bgClassName = '',
  textClassName = '',
  quoteClassName = '',
  avatarClassName = '',
  nameClassName = '',
  decorativeBlobClassName = ''
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
    outlined: 'bg-transparent border-2 border-blue-main/20 hover:border-blue-main/40 hover:bg-blue-light/30',
    testimonial: 'bg-white rounded-3xl shadow-2xl glass relative overflow-hidden'
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
    outlined: 'text-blue-main font-montserrat',
    testimonial: 'text-gray-800 font-montserrat'
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
    outlined: 'text-gray-600 font-montserrat',
    testimonial: 'text-gray-700 font-montserrat'
  };

  const renderAvatar = (testimonial) => {
    // Si hay una imagen de avatar, la mostramos
    if (testimonial.avatar && typeof testimonial.avatar === 'string' && testimonial.avatar.includes('.')) {
      return (
        <img 
          src={testimonial.avatar} 
          alt={`Foto de ${testimonial.name}`}
          className="w-14 h-14 rounded-full object-cover shadow-lg"
        />
      );
    }
    
    // Si no hay imagen, mostramos la inicial
    // Si se proporciona avatarClassName, lo usamos; si no, usamos el gradiente por defecto
    const defaultAvatarClasses = avatarClassName || 'bg-gradient-to-br from-blue-main to-lavender';
    return (
      <div className={`w-14 h-14 ${defaultAvatarClasses} rounded-full flex items-center justify-center shadow-lg text-white font-montserrat font-bold text-base`}>
        {testimonial.name.charAt(0).toUpperCase()}
      </div>
    );
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${hoverEffects} ${className}`;

  // Si es un testimonio, renderizar el layout específico
  if (testimonial) {
    // Usar valores por defecto si no se proporcionan las props personalizadas
    const testimonialBg = bgClassName || 'bg-white rounded-3xl shadow-2xl relative overflow-hidden';
    const testimonialText = textClassName || 'text-gray-800';
    const quoteColor = quoteClassName || 'text-gray-800';
    const nameColor = nameClassName || 'text-gray-800';
    const blobBg = decorativeBlobClassName || 'bg-gradient-to-br from-blue-main/10 to-lavender/10';

    return (
      <div className={`${testimonialBg} p-8 lg:p-10`}>
        {/* Elementos decorativos en la tarjeta */}
        <div className={`absolute top-6 right-6 w-16 h-16 ${blobBg} rounded-full opacity-50 decorative-blob`}></div>
        <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-br from-coral/10 to-mint/10 rounded-full opacity-40 decorative-blob" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10">
          {/* Contenido del testimonial */}
          <div className="text-center mb-8 transition-all duration-700 ease-in-out transform">
            {/* Quote con el contenido */}
            <div className="flex items-start gap-4 mb-6">
              <Quote className={`w-8 h-8 rotate-180 scale-x-[-1] mt-2 flex-shrink-0 ${quoteColor}`} />
              <span className={`text-2xl italic font-bold ${testimonialText}`}>{testimonial.content}</span>
              <Quote className={`w-8 h-8 mt-2 flex-shrink-0 ${quoteColor}`} />
            </div>

            {/* Avatar y datos */}
            <div className="flex items-center justify-center gap-4">
              {renderAvatar(testimonial)}
              <div className="text-left">
                <div className={`font-montserrat font-semibold text-lg ${nameColor}`}>
                  {testimonial.name}
                </div>
                {testimonial.role && (
                  <div className="text-gray-500 text-sm font-montserrat">
                    {testimonial.role}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contenido adicional si se proporciona */}
          {children && (
            <div className={`text-sm leading-6 ${contentStyles.testimonial}`}>
              {children}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Layout por defecto para otros usos
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

