import { Container } from '../atoms/Container';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

import Agenda from '../../assets/img/Agenda.jpg';

// Importar íconos de Lucide (corregidos)
import { Target, Settings, Clock, Scale } from "lucide-react";

export function MentoringSection() {
  return (
    <section className="relative overflow-hidden">

      <div className="w-full py-5">
        <Container size="default" padding="default">
          <div className="w-full text-center">
            <div className="relative z-1 flex flex-col justify-center items-center">
              <Heading
                level={1}
                variant="light"
                color="default"
                className="py-5 mt-5 mb-0 animate-fade-in-up"
              >
                Mentorías personalizadas
                <span className="block font-dancing text-gray-700 text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
                  para mujeres como tú
                </span>
              </Heading>             

            </div>
          </div>
        </Container>
      </div>

      <div className="space-y-0">
        {/* FILA - 2 columnas */}

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[500px] bg-gray-50">
          <Container size="default" padding="default">
            <div className="w-full text-center">
              <div className="relative z-1 flex flex-col justify-center items-center">

                <Text 
                  size="lg" 
                  weight="normal" 
                  color="default"
                  variant="body"
                  className="md:text-2xl mb-0 max-w-4xl animate-fade-in-up w-full"
                >
                  En mis sesiones descubrirás cómo manejar tu tiempo sabiamente, dejar atrás la sensación de correr todo el día y crear hábitos que te devuelvan tu energía.
                </Text>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8 py-8">
              {/* 1. Claridad en tus prioridades */}
              <div className="flex items-center gap-4 p-4">
                <Target className="w-10 h-10 text-gray-700 flex-shrink-0" />
                <Text 
                  size="lg" 
                  weight="normal" 
                  color="dark"
                  variant="default"
                  className="md:text-xl"
                >
                  Claridad en tus prioridades
                </Text>
              </div>

              {/* 2. Herramientas prácticas */}
              <div className="flex items-center gap-4 p-4">
                <Settings className="w-10 h-10 text-gray-700 flex-shrink-0" />
                <Text 
                  size="lg" 
                  weight="normal" 
                  color="dark"
                  variant="default"
                  className="md:text-xl"
                >
                  Herramientas prácticas para tu día a día
                </Text>
              </div>

              {/* 3. Más tiempo */}
              <div className="flex items-center gap-4 p-4">
                <Clock className="w-10 h-10 text-gray-700 flex-shrink-0" />
                <Text 
                  size="lg" 
                  weight="normal" 
                  color="dark"
                  variant="default"
                  className="md:text-xl"
                >
                  Más tiempo para ti y tus proyectos
                </Text>
              </div>

              {/* 4. Equilibrio y propósito */}
              <div className="flex items-center gap-4 p-4">
                <Scale className="w-10 h-10 text-gray-700 flex-shrink-0" />
                <Text 
                  size="lg" 
                  weight="normal" 
                  color="dark"
                  variant="default"
                  className="md:text-xl"
                >
                  Vida con equilibrio y propósito
                </Text>
              </div>
            </div>
          </Container>

          {/* Columna derecha - Imagen */}
          <div className="w-full h-full object-cover object-top">
            <img
              src={Agenda}
              alt="Agenda"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
