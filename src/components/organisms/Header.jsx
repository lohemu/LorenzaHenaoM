import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../atoms/Container';
import NavBar from './NavBar';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-gray-800 via-blue-main/80 to-lavender/60 backdrop-blur-md border-b border-blue-main/30 shadow-lg">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-main to-blue-dark rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="hidden sm:block">
            <div className="logo-font text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-main to-blue-dark bg-clip-text text-transparent">
              Lorenza Henao M
            </div>
            <div className="text-xs text-blue-dark/70 -mt-1 font-montserrat font-medium">
              
            </div>
          </div>
        </Link>

        {/* Navegación - usando el componente NavBar */}
        <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        {/* Redes Sociales Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <SocialIcon 
            href="https://facebook.com/lorenzahenao" 
            icon="facebook"
            label="Facebook"
          />
          <SocialIcon 
            href="https://instagram.com/lorenzahenao" 
            icon="instagram"
            label="Instagram"
          />
          <SocialIcon 
            href="https://linkedin.com/in/lorenzahenao" 
            icon="linkedin"
            label="LinkedIn"
          />
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={toggleMenu}
          className="lg:hidden w-10 h-10 bg-blue-main/20 rounded-xl flex items-center justify-center text-blue-dark hover:bg-blue-main/40 hover:text-white transition-all duration-300 shadow-md"
        >
          <svg 
            className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </Container>

      {/* Menú móvil con redes sociales */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-lavender/95 backdrop-blur-md border-t border-blue-main/30 shadow-lg">
          <Container className="py-6">
            <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            
            {/* Redes Sociales Móvil */}
            <div className="pt-4 border-t border-blue-main/30 mt-4">
              <p className="text-blue-dark font-montserrat font-medium text-sm mb-3">
                Sígueme en redes sociales
              </p>
              <div className="flex justify-center gap-4">
                <SocialIcon 
                  href="https://facebook.com/lorenzahenao" 
                  icon="facebook"
                  label="Facebook"
                  mobile
                />
                <SocialIcon 
                  href="https://instagram.com/lorenzahenao" 
                  icon="instagram"
                  label="Instagram"
                  mobile
                />
                <SocialIcon 
                  href="https://linkedin.com/in/lorenzahenao" 
                  icon="linkedin"
                  label="LinkedIn"
                  mobile
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}

// Componente para iconos de redes sociales
function SocialIcon({ href, icon, label, mobile = false }) {
  const iconMap = {
    facebook: (
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    ),
    instagram: (
      <>
        <path d="M12.017 0C8.396 0 7.929.016 6.684.08 5.441.145 4.59.299 3.846.526a7.86 7.86 0 0 0-2.834 1.847A7.86 7.86 0 0 0 .186 5.207C-.041 5.95-.195 6.802-.26 8.045-.324 9.29-.34 9.758-.34 13.378c0 3.621.016 4.089.08 5.334.065 1.243.219 2.095.446 2.838a7.86 7.86 0 0 0 1.847 2.834 7.86 7.86 0 0 0 2.834 1.847c.744.227 1.596.381 2.838.446 1.245.064 1.713.08 5.334.08 3.621 0 4.089-.016 5.334-.08 1.243-.065 2.095-.219 2.838-.446a7.86 7.86 0 0 0 2.834-1.847 7.86 7.86 0 0 0 1.847-2.834c.227-.744.381-1.596.446-2.838.064-1.245.08-1.713.08-5.334 0-3.621-.016-4.089-.08-5.334-.065-1.243-.219-2.095-.446-2.838a7.86 7.86 0 0 0-1.847-2.834A7.86 7.86 0 0 0 18.792.526C18.049.299 17.197.145 15.954.08 14.709.016 14.241 0 10.621 0h1.396z" />
        <path d="M12.017 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.846-10.405a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
      </>
    ),
    linkedin: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${
        mobile
          ? 'w-12 h-12 bg-blue-main/20 hover:bg-blue-main text-blue-dark hover:text-white'
          : 'w-10 h-10 bg-blue-main/20 hover:bg-blue-main text-blue-dark hover:text-white'
      } rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105`}
      aria-label={label}
    >
      <svg 
        className={`${mobile ? 'w-6 h-6' : 'w-5 h-5'}`}
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        {iconMap[icon]}
      </svg>
    </a>
  );
}