import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="bg-fondo border-b border-bordeLoren shadow-md sticky top-0 z-50 font-montserrat">
    <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center">
      <h1 className="text-2xl font-titulo text-black mb-4">Lorenza Henao M</h1>
      <nav>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/">
            <button className="bg-contraste1 text-black hover:bg-contraste2 font-semibold transition px-4 py-2 rounded-2xl shadow-md border-0">
              Inicio
            </button>
          </Link>
          <Link to="/sobre-mi">
            <button className="bg-contraste1 text-black hover:bg-contraste2 font-semibold transition px-4 py-2 rounded-2xl shadow-md border-0">
              Sobre mí
            </button>
          </Link>
          <Link to="/mentorias">
            <button className="bg-contraste1 text-black hover:bg-contraste2 font-semibold transition px-4 py-2 rounded-2xl shadow-md border-0">
              Mentorías
            </button>
          </Link>
          <Link to="/recursos">
            <button className="bg-contraste1 text-black hover:bg-contraste2 font-semibold transition px-4 py-2 rounded-2xl shadow-md border-0">
              Recursos
            </button>
          </Link>
          <Link to="/contacto">
            <button className="bg-contraste1 text-black hover:bg-contraste2 font-semibold transition px-4 py-2 rounded-2xl shadow-md border-0">
              Contacto
            </button>
          </Link>
        </div>
      </nav>
    </div>
  </header>
);




//Código original
// import { Link } from 'react-router-dom';

// export const Header = () => (
//   <header className="bg-white shadow-md sticky top-0 z-50">
//     <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold text-azulLoren">Lorenza Henao M</h1>
//       <nav className="space-x-6">
//         <Link to="/" className="text-gray-700 hover:text-coralLoren">Inicio</Link>
//         <Link to="/sobre-mi" className="text-gray-700 hover:text-coralLoren">Sobre mí</Link>
//         <Link to="/mentorias" className="text-gray-700 hover:text-coralLoren">Mentorías</Link>
//         <Link to="/recursos" className="text-gray-700 hover:text-coralLoren">Recursos</Link>
//         <Link to="/contacto" className="text-gray-700 hover:text-coralLoren">Contacto</Link>
//       </nav>
//     </div>
//   </header>
// );

