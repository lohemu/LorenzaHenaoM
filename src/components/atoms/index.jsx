// Container.jsx
export const Container = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto px-4 xl:px-0 ${className}`}>
      {children}
    </div>
  );
};

// Button.jsx
export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-900 dark:text-white dark:hover:bg-gray-800 focus:ring-gray-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

// Logo.jsx
export const Logo = ({ darkMode = false, className = '' }) => {
  return (
    <a href="/" className={className}>
      <img 
        className={`h-8 ${darkMode ? 'block' : 'dark:hidden'}`}
        src="/images/logo-light.svg" 
        alt="Logo Light" 
      />
      <img 
        className={`h-8 ${darkMode ? 'hidden' : 'hidden dark:block'}`}
        src="/images/logo-dark.svg" 
        alt="Logo Dark" 
      />
    </a>
  );
};

// HamburgerMenu.jsx
export const HamburgerMenu = ({ isOpen, onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`relative w-8 h-8 flex flex-col justify-center items-center ${className}`}
      aria-label="Toggle menu"
    >
      <span className="sr-only">Toggle menu</span>
      <div className="relative w-6 h-6">
        <span 
          className={`absolute h-0.5 w-6 bg-gray-900 dark:bg-white transform transition-all duration-300 ${
            isOpen ? 'rotate-45 top-3' : 'top-1'
          }`}
        />
        <span 
          className={`absolute h-0.5 w-6 bg-gray-900 dark:bg-white transform transition-all duration-300 top-3 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span 
          className={`absolute h-0.5 w-6 bg-gray-900 dark:bg-white transform transition-all duration-300 ${
            isOpen ? '-rotate-45 top-3' : 'top-5'
          }`}
        />
      </div>
    </button>
  );
};

// ThemeToggle.jsx
export const ThemeToggle = ({ className = '' }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) {
      setDarkMode(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <label className={`relative inline-flex items-center cursor-pointer ${className}`}>
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        className="sr-only"
      />
      <div className="relative">
        {/* Sun Icon */}
        <svg 
          className={`w-6 h-6 text-yellow-500 transition-opacity duration-300 ${
            darkMode ? 'opacity-0' : 'opacity-100'
          }`}
          fill="currentColor" 
          viewBox="0 0 25 25"
        >
          <path d="M12.0908 18.6363C10.3549 18.6363 8.69 17.9467 7.46249 16.7192C6.23497 15.4916 5.54537 13.8268 5.54537 12.0908C5.54537 10.3549 6.23497 8.69 7.46249 7.46249C8.69 6.23497 10.3549 5.54537 12.0908 5.54537C13.8268 5.54537 15.4916 6.23497 16.7192 7.46249C17.9467 8.69 18.6363 10.3549 18.6363 12.0908C18.6363 13.8268 17.9467 15.4916 16.7192 16.7192C15.4916 17.9467 13.8268 18.6363 12.0908 18.6363ZM12.0908 16.4545C13.2481 16.4545 14.358 15.9947 15.1764 15.1764C15.9947 14.358 16.4545 13.2481 16.4545 12.0908C16.4545 10.9335 15.9947 9.8236 15.1764 9.00526C14.358 8.18692 13.2481 7.72718 12.0908 7.72718C10.9335 7.72718 9.8236 8.18692 9.00526 9.00526C8.18692 9.8236 7.72718 10.9335 7.72718 12.0908C7.72718 13.2481 8.18692 14.358 9.00526 15.1764C9.8236 15.9947 10.9335 16.4545 12.0908 16.4545ZM10.9999 0.0908203H13.1817V3.36355H10.9999V0.0908203ZM10.9999 20.8181H13.1817V24.0908H10.9999V20.8181ZM2.83446 4.377L4.377 2.83446L6.69082 5.14828L5.14828 6.69082L2.83446 4.37809V4.377ZM17.4908 19.0334L19.0334 17.4908L21.3472 19.8046L19.8046 21.3472L17.4908 19.0334ZM19.8046 2.83337L21.3472 4.377L19.0334 6.69082L17.4908 5.14828L19.8046 2.83446V2.83337ZM5.14828 17.4908L6.69082 19.0334L4.377 21.3472L2.83446 19.8046L5.14828 17.4908ZM24.0908 10.9999V13.1817H20.8181V10.9999H24.0908ZM3.36355 10.9999V13.1817H0.0908203V10.9999H3.36355Z" />
        </svg>
        {/* Moon Icon */}
        <img 
          className={`absolute top-0 w-6 h-6 transition-opacity duration-300 ${
            darkMode ? 'opacity-100' : 'opacity-0'
          }`}
          src="/images/icon-moon.svg" 
          alt="Moon" 
        />
      </div>
    </label>
  );
};

// PlayButton.jsx
export const PlayButton = ({ href, text, className = '' }) => {
  return (
    <a 
      href={href} 
      data-fslightbox
      className={`inline-flex items-center space-x-4 group ${className}`}
    >
      <span className="relative flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
        <span className="absolute inset-0 bg-blue-600 rounded-full opacity-20 animate-pulse"></span>
        <img src="/images/icon-play.svg" alt="Play" className="w-6 h-6 relative z-10" />
      </span>
      <span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {text}
      </span>
    </a>
  );
};

// PricingToggle.jsx
export const PricingToggle = ({ isAnnually, onChange, className = '' }) => {
  return (
    <button 
      onClick={onChange}
      className={`relative inline-flex h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
    >
      <div 
        className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isAnnually ? 'translate-x-8' : 'translate-x-1'
        }`}
      />
    </button>
  );
};