import { Mail } from 'lucide-react';

export function EmailIcon({ 
  size = 20,
  className = '',
  onClick,
  href,
  ...props 
}) {
  const baseStyles = 'bg-coral-dark text-white rounded-full p-3 shadow-lg cursor-pointer hover:bg-coral transition-colors inline-flex items-center justify-center';
  const combinedClassName = `${baseStyles} ${className}`;

  if (href) {
    return (
      <a 
        href={href}
        className={combinedClassName}
        {...props}
      >
        <Mail size={size} />
      </a>
    );
  }

  return (
    <div 
      onClick={onClick}
      className={combinedClassName}
      {...props}
    >
      <Mail size={size} />
    </div>
  );
}