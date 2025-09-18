export default function Container({ 
  size = 'default',
  padding = 'default',
  className = '', 
  children 
}) {
  const sizes = {
    sm: 'max-w-3xl',
    default: 'max-w-7xl',
    lg: 'max-w-8xl',
    full: 'max-w-full',
    prose: 'max-w-4xl',
    narrow: 'max-w-2xl'
  };

  const paddings = {
    none: '',
    sm: 'px-3 sm:px-4 lg:px-6',
    default: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12',
    xl: 'px-8 sm:px-12 lg:px-16'
  };

  const combinedClassName = `mx-auto w-full ${sizes[size]} ${paddings[padding]} ${className}`;

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
}