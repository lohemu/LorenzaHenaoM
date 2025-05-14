import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-azulLoren">Lorenza Henao M</h1>
      <nav className="space-x-6">
        <Link to="/" className="text-gray-700 hover:text-coralLoren">Inicio</Link>
        <Link to="/sobre-mi" className="text-gray-700 hover:text-coralLoren">Sobre mí</Link>
        <Link to="/mentorias" className="text-gray-700 hover:text-coralLoren">Mentorías</Link>
        <Link to="/recursos" className="text-gray-700 hover:text-coralLoren">Recursos</Link>
        <Link to="/contacto" className="text-gray-700 hover:text-coralLoren">Contacto</Link>
      </nav>
    </div>
  </header>
);

