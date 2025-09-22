import { Container } from '../atoms/Container';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

import PerfilLorenza from '../../assets/img/PerfilLorenza.jpg';

export function AboutSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="space-y-0">
        {/* FILA SUPERIOR - 2 columnas */}
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Columna izquierda - Imagen ocupando toda la altura */}
          <div className="flex justify-start">
            <img
              src={PerfilLorenza}
              alt="Lorenza"
              className="w-full h-auto object-cover object-top"
            />
          </div>

          {/* Columna derecha - Heading y primer texto */}
          <div className="relative z-1 flex flex-col justify-center overflow-visible">
            <Heading level={2} className="text-4xl lg:text-5xl py-5 font-montserrat font-light mb-4 text-lavender-dark">
              Hola, soy
              <span className="block font-dancing text-gradient-animated text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-1 animate-fade-in-left p-2 overflow-visible" style={{ animationDelay: '0.9s' }}>
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

            {/* Botón y texto alineados a la derecha */}
            <div className="flex justify-end items-center">
              <div className="text-right">
                <p className="text-sm text-gray-500 font-montserrat italic mb-4">
                  ¿Tienes alguna duda?
                </p>

                <div className="bg-coral-dark text-white rounded-full p-3 shadow-lg cursor-pointer hover:bg-coral transition-colors inline-flex">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
