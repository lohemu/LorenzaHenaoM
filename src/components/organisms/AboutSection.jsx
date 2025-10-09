import { Container } from '../atoms/Container';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { EmailIcon } from '../atoms/EmailIcon';

import PerfilLorenza from '../../assets/img/PerfilLorenza.jpg';

export function AboutSection() {
  return (
    <section id="sobre-mi" className="relative overflow-hidden py-12 lg:py-16 ">
      <div className="space-y-0">
        {/* FILA SUPERIOR - 2 columnas */}
        <Container>
          {/* <div className="grid lg:grid-cols-2 gap-12 items-stretch"> */}
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-12 items-stretch">
            {/* Columna izquierda - Imagen ocupando toda la altura */}
            <div className="flex justify-start order-2 lg:order-1">
              <img
                src={PerfilLorenza}
                alt="Lorenza"
                className="relative w-full h-auto object-cover object-top -mt-20 -ml-20 "
              />
            </div>

            {/* Columna derecha - Heading y primer texto */}
            <div className="relative z-1 flex flex-col justify-center order-1 lg:order-2">
              <Heading 
                level={2} 
                variant="light"
                className="text-4xl lg:text-5xl mb-6"
              >
                Hola, soy
                <span className="block font-dancing text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 animate-fade-in-left" 
                      style={{ animationDelay: '0.9s' }}>
                  Lorenza
                </span>
              </Heading>
              
              <Text 
                size="lg"
                variant="body-large"
                className="md:text-2xl mb-6 animate-fade-in-up"
              >
                Soy mentora, tallerista y artesana. "Ayudo a mujeres que se sienten abrumadas, cansadas y fuera de control a vivir una transformación que les permita reconectar con su poder y su valor. Las guío para que vivan más ligeras, seguras y llenas de alegría".
              </Text>
            </div>
          </div>
        </Container>

        {/* FILA INFERIOR - Una sola columna con textos y botón */}
        <div className="bg-coral py-12 lg:py-16 mt-12">
          <Container>
            {/* Textos ocupando todo el ancho */}
            <Text 
              size="lg"
              variant="body-large"
              className="md:text-2xl mb-8 animate-fade-in-up" 
              style={{ animationDelay: '0.4s' }}
            >
              También soy mamá, docente, investigadora y emprendedora y todas estas diferentes facetas me han llevado a recopilar experiencia en el manejo del tiempo de forma sabia. Planear, organizar y ejecutar tareas en busca de objetivos concretos es algo que puede ser divertido y generar una enorme satisfacción si se hace con intención y propósito.
            </Text>

            <Text 
              size="lg"
              variant="body-large"
              className="md:text-2xl mb-10 animate-fade-in-up" 
              style={{ animationDelay: '0.6s' }}
            >
              Creo firmemente que uno puede lograr lo que se propone si tiene una mentalidad fuerte, disciplina y mucho compromiso con la persona más importante: uno mismo.
            </Text>

            {/* Botón y texto alineados a la derecha */}
            <div className="flex justify-end items-center">
              <div className="text-right">
                <Text 
                  size="sm"
                  variant="caption"
                  color="muted"
                  className="italic mb-4 normal-case"
                >
                  ¿Tienes alguna duda?
                </Text>

                <EmailIcon 
                  size={20}
                  href="mailto:contacto@lorenza.com"
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}

// import { Container } from '../atoms/Container';
// import { Heading } from '../atoms/Heading';
// import { Text } from '../atoms/Text';
// import { Button } from '../atoms/Button';
// import { EmailIcon } from '../atoms/EmailIcon';

// import PerfilLorenza from '../../assets/img/PerfilLorenza.jpg';

// export function AboutSection() {
//   return (
//     <section id="sobre-mi" className="relative overflow-hidden py-12 lg:py-16 ">
//       <div className="space-y-0">
//         {/* FILA SUPERIOR - 2 columnas */}
//         <Container>
//           <div className="grid lg:grid-cols-2 gap-12 items-stretch">
//             {/* Columna izquierda - Imagen ocupando toda la altura */}
//             <div className="flex justify-start">
//               <img
//                 src={PerfilLorenza}
//                 alt="Lorenza"
//                 className="relative w-full h-auto object-cover object-top -mt-20 -ml-20 "
//               />
//             </div>

//             {/* Columna derecha - Heading y primer texto */}
//             <div className="relative z-1 flex flex-col justify-center">
//               <Heading 
//                 level={2} 
//                 variant="light"
//                 className="text-4xl lg:text-5xl mb-6"
//               >
//                 Hola, soy
//                 <span className="block font-dancing text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 animate-fade-in-left" 
//                       style={{ animationDelay: '0.9s' }}>
//                   Lorenza
//                 </span>
//               </Heading>
              
//               <Text 
//                 size="lg"
//                 variant="body-large"
//                 className="md:text-2xl mb-6 animate-fade-in-up"
//               >
//                 Soy mentora, tallerista y artesana. "Ayudo a mujeres que se sienten abrumadas, cansadas y fuera de control a vivir una transformación que les permita reconectar con su poder y su valor. Las guío para que vivan más ligeras, seguras y llenas de alegría".
//               </Text>
//             </div>
//           </div>
//         </Container>

//         {/* FILA INFERIOR - Una sola columna con textos y botón */}
//         <div className="bg-coral py-12 lg:py-16 mt-12">
//           <Container>
//             {/* Textos ocupando todo el ancho */}
//             <Text 
//               size="lg"
//               variant="body-large"
//               className="md:text-2xl mb-8 animate-fade-in-up" 
//               style={{ animationDelay: '0.4s' }}
//             >
//               También soy mamá, docente, investigadora y emprendedora y todas estas diferentes facetas me han llevado a recopilar experiencia en el manejo del tiempo de forma sabia. Planear, organizar y ejecutar tareas en busca de objetivos concretos es algo que puede ser divertido y generar una enorme satisfacción si se hace con intención y propósito.
//             </Text>

//             <Text 
//               size="lg"
//               variant="body-large"
//               className="md:text-2xl mb-10 animate-fade-in-up" 
//               style={{ animationDelay: '0.6s' }}
//             >
//               Creo firmemente que uno puede lograr lo que se propone si tiene una mentalidad fuerte, disciplina y mucho compromiso con la persona más importante: uno mismo.
//             </Text>

//             {/* Botón y texto alineados a la derecha */}
//             <div className="flex justify-end items-center">
//               <div className="text-right">
//                 <Text 
//                   size="sm"
//                   variant="caption"
//                   color="muted"
//                   className="italic mb-4 normal-case"
//                 >
//                   ¿Tienes alguna duda?
//                 </Text>

//                 <EmailIcon 
//                   size={20}
//                   href="mailto:contacto@lorenza.com"
//                 />
//               </div>
//             </div>
//           </Container>
//         </div>
//       </div>
//     </section>
//   );
// }
