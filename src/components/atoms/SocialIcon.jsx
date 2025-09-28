export const SocialIcon = ({ 
  icon: Icon,
  href,
  bgColor = 'bg-primary',
  iconColor = 'text-white',
  hoverBg = 'hover:bg-primary-dark',
  size = 'w-10 h-10',
  className = ''
}) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        ${bgColor}
        ${iconColor}
        ${hoverBg}
        ${size}
        ${className}
        rounded-full
        flex
        items-center
        justify-center
        transition-colors
        duration-300
      `}
    >
      <Icon className="w-5 h-5 stroke-current" />
    </a>
  );
};
