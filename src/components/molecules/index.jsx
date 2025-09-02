import { useState } from 'react';

// Navigation.jsx
export const Navigation = ({ onItemClick, className = '' }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#', active: true },
    { name: 'Features', href: '#features' },
    { 
      name: 'Pages', 
      href: '#',
      dropdown: [
        { name: 'Blog Grid', href: '/blog-grid' },
        { name: 'Blog Single', href: '/blog-single' },
        { name: 'Sign In', href: '/signin' },
        { name: 'Sign Up', href: '/signup' },
        { name: '404', href: '/404' }
      ]
    },
    { name: 'Support', href: '#support' }
  ];

  return (
    <nav className={className}>
      <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-4 lg:space-y-0">
        {navItems.map((item, index) => (
          <li key={index} className="relative">
            {item.dropdown ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center space-x-1 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    item.active ? 'text-blue-600 dark:text-blue-400' : ''
                  }`}
                >
                  <span>{item.name}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    fill="currentColor" 
                    viewBox="0 0 512 512"
                  >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </button>
                
                {dropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <li key={dropIndex}>
                        <a
                          href={dropItem.href}
                          onClick={onItemClick}
                          className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {dropItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a
                href={item.href}
                onClick={onItemClick}
                className={`text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                  item.active ? 'text-blue-600 dark:text-blue-400' : ''
                }`}
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

// SectionTitle.jsx
export const SectionTitle = ({ title, description, className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 max-w-4xl mx-auto leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

// FeatureCard.jsx
export const FeatureCard = ({ icon, title, description, color, className = '', ...props }) => {
  return (
    <div className={`flex items-start space-x-4 p-6 ${className}`} {...props}>
      <div className={`flex items-center justify-center w-16 h-16 rounded-lg ${color}`}>
        <img src={icon} alt="Icon" className="w-8 h-8" />
      </div>
      <div>
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

// TeamCard.jsx
export const TeamCard = ({ image, name, position, socialLinks, className = '', ...props }) => {
  return (
    <div className={`text-center ${className}`} {...props}>
      <div className="relative mb-6 group">
        <img className="w-full rounded-lg" src={image} alt={name} />
        
        <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4">
            <ul className="flex space-x-3">
              <li>
                <a href={socialLinks.facebook} className="text-blue-600 hover:text-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 10 18">
                    <path d="M6.66634 10.25H8.74968L9.58301 6.91669H6.66634V5.25002C6.66634 4.39169 6.66634 3.58335 8.33301 3.58335H9.58301V0.783354C9.31134 0.74752 8.28551 0.666687 7.20218 0.666687C4.93968 0.666687 3.33301 2.04752 3.33301 4.58335V6.91669H0.833008V10.25H3.33301V17.3334H6.66634V10.25Z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href={socialLinks.twitter} className="text-blue-400 hover:text-blue-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M17.4683 1.71333C16.8321 1.99475 16.1574 2.17956 15.4666 2.26167C16.1947 1.82619 16.7397 1.14085 16.9999 0.333333C16.3166 0.74 15.5674 1.025 14.7866 1.17917C14.2621 0.617982 13.5669 0.245803 12.809 0.120487C12.0512 -0.00482822 11.2732 0.123742 10.596 0.486211C9.91875 0.848679 9.38024 1.42474 9.06418 2.12483C8.74812 2.82492 8.67221 3.60982 8.84825 4.3575C7.46251 4.28805 6.10686 3.92794 4.86933 3.30055C3.63179 2.67317 2.54003 1.79254 1.66492 0.715833C1.35516 1.24788 1.19238 1.85269 1.19326 2.46833C1.19326 3.67667 1.80826 4.74417 2.74326 5.36917C2.18993 5.35175 1.64878 5.20232 1.16492 4.93333V4.97667C1.16509 5.78142 1.44356 6.56135 1.95313 7.18422C2.46269 7.80709 3.17199 8.23456 3.96075 8.39417C3.4471 8.53337 2.90851 8.55388 2.38576 8.45417C2.60814 9.14686 3.04159 9.75267 3.62541 10.1868C4.20924 10.6209 4.9142 10.8615 5.64159 10.875C4.91866 11.4428 4.0909 11.8625 3.20566 12.1101C2.32041 12.3578 1.39503 12.4285 0.482422 12.3183C2.0755 13.3429 3.93 13.8868 5.82409 13.885C12.2349 13.885 15.7408 8.57417 15.7408 3.96833C15.7408 3.81833 15.7366 3.66667 15.7299 3.51833C16.4123 3.02514 17.0013 2.41418 17.4691 1.71417L17.4683 1.71333Z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href={socialLinks.linkedin} className="text-blue-700 hover:text-blue-800 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 17 16">
                    <path d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665V2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665V5.06665Z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {name}
      </h4>
      <p className="text-gray-600 dark:text-gray-300">
        {position}
      </p>
    </div>
  );
};

// ServiceCard.jsx
export const ServiceCard = ({ icon, title, description, className = '', ...props }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center ${className}`} {...props}>
      <img src={icon} alt="Icon" className="w-16 h-16 mx-auto mb-6" />
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

// PricingCard.jsx
export const PricingCard = ({ name, price, period, features, isPopular, className = '', ...props }) => {
  return (
    <div className={`relative bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
      isPopular ? 'ring-2 ring-blue-600 scale-105' : ''
    } ${className}`} {...props}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
        {name}
      </h4>

      <div className="text-center mb-6">
        <h2 className={`text-4xl font-bold mb-2 ${
          name === 'Basic' ? 'text-green-500' : 'text-gray-900 dark:text-white'
        }`}>
          ${price}
        </h2>
        <span className="text-gray-600 dark:text-gray-300">
          {period}
        </span>
      </div>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        No credit card required
      </p>

      {/* Button */}
      <div className="mb-8">
        <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
          isPopular 
            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
        }`}>
          Try for free
        </button>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <p className="text-center text-gray-900 dark:text-white font-semibold">
        7-day free trial
      </p>
    </div>
  );
};