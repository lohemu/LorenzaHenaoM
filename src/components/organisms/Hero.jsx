import { Container } from '../atoms/Container';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

import FotoLoren from '../../assets/img/FotoLoren.png';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden min-h-screen flex items-center bg-gradient-soft-lavender"
    >
      <Container className="relative z-1 py-0 grid lg:grid-cols-2 gap-12 items-center h-full">
        <div className="text-center lg:text-left">
          <Heading
            level={1}
            variant="light"
            className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-tight mb-6 animate-fade-in-up"
          >
            Sé tu prioridad, organiza tu vida,
            <span className="block font-dancing text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 animate-fade-in-left"
              style={{ animationDelay: '0.2s' }}>
              recupera tu energía y reconecta con tu poder y tu valor.
            </span>
          </Heading>

          <Text
            size="lg"
            variant="body-large"
            className="md:text-2xl mb-10 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Te acompaño a transformar el caos y la rutina en una vida plena, llena de propósito, disciplina y valor.
          </Text>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}>
            <Button
              variant="primary"
              size="large"
              onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 text-lg"
            >
              Descubre más
            </Button>
            <Button
              variant="secondary"
              size="large"
              onClick={() => {
                // Opción A: Ir al perfil general
                window.open('https://calendly.com/luisgt-movil/30min', '_blank', 'noopener,noreferrer');

                // Opción B: Abrir WhatsApp o email como respaldo
                // window.open('https://wa.me/573001234567', '_blank');
              }}
              className="px-8 py-4 text-lg"
            >
              Agendate
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
  );
}
