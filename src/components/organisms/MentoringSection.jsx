import { Container } from '../atoms/Container';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

import Agenda from '../../assets/img/Agenda.JPG';

// Importar íconos de Lucide (corregidos)
import { Target, Settings, Clock, Scale } from "lucide-react";

export function MentoringSection() {
  return (    
    <section className="relative overflow-hidden">
       
        <div className="w-full">
          <Container>
            <div className="w-full text-center">
              <div className="relative z-1 flex flex-col justify-center items-center">
                <Heading level={3} className="text-4xl lg:text-5xl py-5 font-montserrat font-light mb-2 text-lavender-dark w-full">
                  Mentorías personalizadas
                </Heading>
                <span className="block font-dancing text-blue-dark text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 animate-fade-in-left w-full" style={{ animationDelay: '0.2s' }}>
                  para mujeres como tú
                </span>
                <Text className="text-lg md:text-2xl text-gray-600 mb-4 max-w-4xl animate-fade-in-up font-montserrat w-full">
                  En mis sesiones descubrirás cómo manejar tu tiempo sabiamente, dejar atrás la sensación de correr todo el día y crear hábitos que te devuelvan tu energía.
                </Text>              
              </div>
            </div>
          </Container>
        </div>

      <div className="space-y-0">
        {/* FILA SUPERIOR - 2 columnas */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[500px]">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 py-8">
              {/* 1. Claridad en tus prioridades */}
              <div className="flex items-center gap-4 p-4">
                <Target className="w-10 h-10 text-blue-dark flex-shrink-0" />
                <Text className="text-lg md:text-xl text-gray-700 font-montserrat">
                  Claridad en tus prioridades
                </Text>
              </div>

              {/* 2. Herramientas prácticas */}
              <div className="flex items-center gap-4 p-4">
                <Settings className="w-10 h-10 text-blue-dark flex-shrink-0" />
                <Text className="text-lg md:text-xl text-gray-700 font-montserrat">
                  Herramientas prácticas para tu día a día
                </Text>
              </div>

              {/* 3. Más tiempo */}
              <div className="flex items-center gap-4 p-4">
                <Clock className="w-10 h-10 text-blue-dark flex-shrink-0" />
                <Text className="text-lg md:text-xl text-gray-700 font-montserrat">
                  Más tiempo para ti y tus proyectos
                </Text>
              </div>

              {/* 4. Equilibrio y propósito */}
              <div className="flex items-center gap-4 p-4">
                <Scale className="w-10 h-10 text-blue-dark flex-shrink-0" />
                <Text className="text-lg md:text-xl text-gray-700 font-montserrat">
                  Vida con equilibrio y propósito
                </Text>
              </div>
            </div>
          </Container>

          {/* Columna derecha - Imagen */}
          <div className="flex justify-center items-center">
            <img
              src={Agenda}
              alt="Agenda"
              className="w-full h-auto max-w-md lg:max-w-lg object-cover object-center rounded-lg shadow-lg"
            />
          </div>
        </div>       
      </div>           
    </section>
  );
}
