export function Button({ 
  as: Tag = 'button', 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  children, 
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-montserrat font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    // Variantes principales con colores CSS custom
    primary: 'text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-2 focus:ring-orange-300' + 
             ' bg-gradient-to-r from-[var(--color-coral-dark)] to-[var(--color-coral)] hover:from-[var(--color-coral)] hover:to-[var(--color-coral-dark)]',
    
    secondary: 'text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-2 focus:ring-blue-300' + 
               ' bg-gradient-to-r from-[var(--color-blue-main)] to-[var(--color-blue-dark)] hover:from-[var(--color-blue-dark)] hover:to-[var(--color-blue-main)]',
    
    tertiary: 'text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-2 focus:ring-purple-300' + 
              ' bg-gradient-to-r from-[var(--color-lavender-dark)] to-[var(--color-lavender)] hover:from-[var(--color-lavender)] hover:to-[var(--color-lavender-dark)]',
    
    // Variantes suaves con texto oscuro
    'primary-soft': 'text-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-2 focus:ring-orange-300' + 
                    ' bg-gradient-to-r from-[var(--color-coral)] to-orange-200 hover:from-orange-200 hover:to-[var(--color-coral)]',
    
    'secondary-soft': 'text-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-2 focus:ring-blue-300' + 
                      ' bg-gradient-to-r from-[var(--color-blue-light)] to-[var(--color-blue-main)] hover:from-[var(--color-blue-main)] hover:to-[var(--color-blue-light)]',
    
    'tertiary-soft': 'text-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-2 focus:ring-purple-300' + 
                     ' bg-gradient-to-r from-[var(--color-lavender)] to-[var(--color-mint)] hover:from-[var(--color-mint)] hover:to-[var(--color-lavender)]',
    
    // Variantes outline
    outline: 'border-2 bg-transparent hover:text-white focus:ring-2 focus:ring-blue-300' + 
             ' border-[var(--color-blue-main)] text-[var(--color-blue-main)] hover:bg-[var(--color-blue-main)]',
    
    'outline-coral': 'border-2 bg-transparent hover:text-white focus:ring-2 focus:ring-orange-300' + 
                     ' border-[var(--color-coral-dark)] text-[var(--color-coral-dark)] hover:bg-[var(--color-coral-dark)]',
    
    'outline-lavender': 'border-2 bg-transparent hover:text-white focus:ring-2 focus:ring-purple-300' + 
                        ' border-[var(--color-lavender-dark)] text-[var(--color-lavender-dark)] hover:bg-[var(--color-lavender-dark)]',
    
    'outline-white': 'border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-800 focus:ring-2 focus:ring-white/50',
    
    // Variantes ghost
    ghost: 'text-gray-700 bg-transparent focus:ring-2 focus:ring-blue-300' + 
           ' hover:bg-[var(--color-blue-light)]',
    
    'ghost-coral': 'bg-transparent focus:ring-2 focus:ring-orange-300' + 
                   ' text-[var(--color-coral-dark)] hover:bg-orange-100',
    
    'ghost-lavender': 'bg-transparent focus:ring-2 focus:ring-purple-300' + 
                      ' text-[var(--color-lavender-dark)] hover:bg-purple-100',
    
    'ghost-white': 'text-white bg-transparent hover:bg-white/10 focus:ring-2 focus:ring-white/50',
    
    // Variantes minimal
    minimal: 'focus:ring-2 focus:ring-blue-300' + 
             ' text-[var(--color-blue-dark)] bg-[var(--color-blue-light)] hover:bg-blue-100',
    
    'minimal-coral': 'focus:ring-2 focus:ring-orange-300' + 
                     ' text-[var(--color-coral-dark)] bg-orange-50 hover:bg-orange-100',
    
    'minimal-lavender': 'focus:ring-2 focus:ring-purple-300' + 
                        ' text-[var(--color-lavender-dark)] bg-purple-50 hover:bg-purple-100',
    
    'minimal-mint': 'text-gray-700 bg-green-50 hover:bg-green-100 focus:ring-2 focus:ring-green-300'
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

