import { Container } from '../atoms/Container';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

import Agenda from '../../assets/img/Agenda.JPG';

export function MentoringSection() {
  return (    
    <section className="relative overflow-hidden">
      <div className="space-y-0">
        {/* FILA SUPERIOR - 2 columnas */}
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Columna izquierda - Imagen ocupando toda la altura */}
          <div className="flex justify-start">
            <img
              src={Agenda}
              alt="Lorenza"
              className="w-full h-auto object-cover object-top"
            />
          </div>

          {/* Columna derecha - Heading y primer texto */}
          <div className="relative z-1 flex flex-col justify-center">
            <Heading level={2} className="text-4xl lg:text-5xl py-5 font-montserrat font-light mb-4 text-lavender-dark">
              Hola, soy
              <span className="block font-dancing text-blue-dark text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-1 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
                Lorenza
              </span>
            </Heading>
            <Text className="text-lg md:text-2xl text-gray-600 mb-4 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up font-montserrat">
              Soy mentora, tallerista y artesana. "Ayudo a mujeres que se sienten abrumadas, cansadas y fuera de control a vivir una transformación que les permita reconectar con su poder y su valor. Las guío para que vivan más ligeras, seguras y llenas de alegría".
            </Text>
          </div>
        </div>

        {/* FILA INFERIOR - Una sola columna con textos y botón */}
        <div className='bg-coral px-6 py-8'>
          <Container>
            {/* Textos ocupando todo el ancho */}
            <Text className="text-lg md:text-2xl text-gray-600 mb-8 animate-fade-in-up font-montserrat" style={{ animationDelay: '0.4s' }}>
              También soy mamá, docente, investigadora y emprendedora y todas estas diferentes facetas me han llevado a recopilar experiencia en el manejo del tiempo de forma sabia. Planear, organizar y ejecutar tareas en busca de objetivos concretos es algo que puede ser divertido y generar una enorme satisfacción si se hace con intención y propósito.
            </Text>

            <Text className="text-lg md:text-2xl text-gray-600 mb-10 animate-fade-in-up font-montserrat" style={{ animationDelay: '0.6s' }}>
              Creo firmemente que uno puede lograr lo que se propone si tiene una mentalidad fuerte, disciplina y mucho compromiso con la persona más importante: uno mismo.
            </Text>

            
          </Container>
        </div>
      </div>           
    </section>
  );
}
