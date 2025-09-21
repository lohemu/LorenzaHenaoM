import { Container } from '../atoms/Container';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

import FotoLoren from '../../assets/img/FotoLoren.png';

export function Hero() {
  return (
    <>
      {/* Sección Principal - Hero */}
      <section 
        id="inicio" 
        className="relative overflow-hidden min-h-screen flex items-center pattern-dots"
        style={{
          background: 'linear-gradient(135deg, #F2FBFF, #C7B8EA, #FFB9A7)'
        }}
      >

        <Container className="relative z-1 py-0 grid lg:grid-cols-2 gap-12 items-center h-full">
          <div className="text-center lg:text-left">
            <Heading
              level={1}
              className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-montserrat font-light leading-tight mb-6 text-lavender-dark animate-fade-in-up"
            >
              Sé tu prioridad, organiza tu vida,
              <span className="block font-dancing text-blue-dark text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
                recupera tu energí­a y reconecta con tu poder y tu valor.
              </span>
            </Heading>

            <Text className="text-lg md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up font-montserrat" style={{ animationDelay: '0.4s' }}>
              Te acompaño a transformar el caos y la rutina en una vida plena, llena de propósito, disciplina y valor.
            </Text>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button
                onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-coral to-coral-dark hover:from-coral-dark hover:to-coral text-white px-8 py-4 rounded-full text-lg font-montserrat font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 btn-coral-hover"
              >
                Descubre más
              </Button>

            </div>


          </div>

          <div className="flex items-end justify-end h-full">
            <img
              src={FotoLoren}
              alt="Lorenza"
              className="w-full h-auto object-cover object-bottom max-h-full translate-y-10"
            />
          </div>

        </Container>
      </section>
    </>
  );
}

// import { Container } from '../atoms/Container';
// import { Heading } from '../atoms/Heading';
// import { Text } from '../atoms/Text';
// import { Button } from '../atoms/Button';

// import FotoLoren from '../../assets/img/FotoLoren.png';

// export function Hero() {
//   return (
//     <>
//       {/* Sección Principal - Hero */}
//       <section id="inicio" className="relative overflow-hidden bg-gradient-main  min-h-screen flex items-center pattern-dots">

//         <Container className="relative z-1 py-0 grid lg:grid-cols-2 gap-12 items-center">
//           <div className="text-center lg:text-left">
//             <Heading
//               level={1}
//               className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-montserrat font-light leading-tight mb-6 text-coral-dark animate-fade-in-up"
//             >
//               Sé tu prioridad, organiza tu vida,
//               <span className="block font-dancing text-blue-dark text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
//                 recupera tu energía y reconecta con tu poder y tu valor.
//               </span>
//             </Heading>

//             <Text className="text-lg md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up font-montserrat" style={{ animationDelay: '0.4s' }}>
//               Te acompaño a transformar el caos y la rutina en una vida plena, llena de propósito, disciplina y valor.
//             </Text>

//             <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
//               <Button
//                 onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
//                 className="bg-gradient-to-r from-coral to-coral-dark hover:from-coral-dark hover:to-coral text-white px-8 py-4 rounded-full text-lg font-montserrat font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 btn-coral-hover"
//               >
//                 Descubre más
//               </Button>

//             </div>


//           </div>

//           <div className="flex self-end">
//             <img
//               src={FotoLoren}
//               alt="Lorenza"
//               className="w-full h-auto object-cover self-end translate-y-10"
              
//             />
//           </div>

//         </Container>
//       </section>
//     </>
//   );
// }
