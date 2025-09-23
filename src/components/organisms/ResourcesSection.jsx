import { Container } from '../atoms/Container';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

// Importar íconos de Lucide
import { Download, Calendar, FileText, Clock } from "lucide-react";

import Descarga from '../../assets/img/descarga.jpg';
import Calendario from '../../assets/img/Calendario.png';

// Importar íconos de Lucide (corregidos)


export function ResourcesSection() {

  const resources = [
    {
      id: 1,
      title: "Mini guía: 5 pasos para encontrar tiempo para ti",
      subtitle: "",
      description: "Descubre cómo reorganizar tu semana para crear espacios de autocuidado y proyectos personales.",
      icon: Calendar,
      downloadLink: "#", // Reemplazar con enlace real
      image: Descarga, // Imagen de mockup de planificador
      featured: true
    },
    // Recursos adicionales - comentados para agregar después
    
    {
      id: 2,
      title: "Calendario semanal descargable",
      subtitle: "",
      description: "Organiza tu día identificando las tareas más importantes y reserva tiempo para ti.",
      icon: FileText,
      downloadLink: "#",
      image: Calendario,
      featured: false
    },
    /*
    {
      id: 3,
      title: "Guía de rutinas matutinas",
      subtitle: "Checklist personalizable",
      description: "Crea una mañana que te llene de energía y te prepare para un día productivo y equilibrado.",
      icon: Clock,
      downloadLink: "#",
      image: "",
      featured: false
    }
    */
  ];

  return (
    <section className="relative overflow-hidden bg-mint">

      <div className="w-full py-5 bg-lavender-dark" >
        <Container>
          <div className="w-full text-center">
            <div className="relative z-1 flex flex-col justify-center items-center">
              <Heading
                level={1}
                className="text-3xl md:text-4xl py-5 mt-5 lg:text-4xl xl:text-5xl font-montserrat font-light leading-tight mb-0 text-white animate-fade-in-up" >
                EMPIEZA HOY MISMO
                <span className="block font-dancing text-mint text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
                  Descarga recursos gratuitos
                </span>
              </Heading>             
              <Text className="text-lg md:text-2xl text-gray-600 mb-0 max-w-4xl animate-fade-in-up font-montserrat w-full">
                  que te ayudarán a dar el primer paso hacia una vida más organizada y plena.
              </Text>
            </div>
          </div>
        </Container>
      </div>
        
      <Container>
        <div className="w-full text-center">
          <div className="relative z-1 flex flex-col justify-center items-center">
            {/* Grid de recursos */}
            <div className="grid gap-8 md:gap-12 m-10">
              {resources.map((resource, index) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  index={index}
                  isEven={index % 2 === 0}
                />
              ))}
            </div>
                
          </div>
        </div>           
      </Container>        
    </section>
  );
}


// Componente para cada tarjeta de recurso
function ResourceCard({ resource, index, isEven }) {
  const IconComponent = resource.icon;

  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 animate-fade-in-up ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
        }`}
      style={{ animationDelay: `${0.4 + index * 0.2}s` }}
    >
     

      {/* Contenido del recurso */}
      <div className="flex-1 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-main to-lavender flex items-center justify-center shadow-lg">
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-blue-main/30 to-transparent max-w-16"></div>
        </div>

        <Heading level={3} className="text-2xl lg:text-3xl font-montserrat font-semibold text-blue-dark mb-2">
          {resource.title}
        </Heading>

        <Text className="text-lg font-dancing text-lavender-dark mb-4">
          {resource.subtitle}
        </Text>

        <Text className="text-gray-600 font-montserrat mb-8 text-base lg:text-lg leading-relaxed">
          {resource.description}
        </Text>

        {/* Botón de descarga */}
        <div className="space-y-4">
          <Button
            variant="primary"
            size="lg"
            className="bg-gradient-to-r from-blue-main to-lavender text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            onClick={() => {
              // Aquí iría la lógica de descarga
              console.log(`Descargando recurso: ${resource.title}`);
            }}
          >
            <Download className="w-5 h-5 mr-2" />
            Descargar Gratis
          </Button>

          <Text className="text-sm text-gray-500 font-montserrat">
            Sin spam, sin suscripciones. Solo recursos útiles.
          </Text>
        </div>
      </div>
       {/* Imagen del mockup */}
      <div className="flex-1 max-w-md">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-main/20 to-lavender/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
            <img
              src={resource.image}
              alt={resource.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-main/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}







//--------------------------------------------------------------------------------------
// import { Container } from '../atoms/Container';
// import { Heading } from '../atoms/Heading';
// import { Text } from '../atoms/Text';
// import { Button } from '../atoms/Button';

// // Importar íconos de Lucide
// import { Download, Calendar, FileText, Clock } from "lucide-react";

// import Descarga from '../../assets/img/descarga.jpg';

// export function ResourcesSection() {
//   // Datos de recursos - fácil de expandir
//   const resources = [
//     {
//       id: 1,
//       title: "Mini guía: 5 pasos para encontrar tiempo para ti",
//       subtitle: "Calendario semanal descargable",
//       description: "Descubre cómo reorganizar tu semana para crear espacios de autocuidado y proyectos personales.",
//       icon: Calendar,
//       downloadLink: "#", // Reemplazar con enlace real
//       image: Descarga, // Imagen de mockup de planificador
//       featured: true
//     },
//     // Recursos adicionales - comentados para agregar después
//     /*
//     {
//       id: 2,
//       title: "Planificador diario de prioridades",
//       subtitle: "Template PDF editable",
//       description: "Organiza tu día identificando las 3 tareas más importantes y reserva tiempo para ti.",
//       icon: FileText,
//       downloadLink: "#",
//       image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       featured: false
//     },
//     {
//       id: 3,
//       title: "Guía de rutinas matutinas",
//       subtitle: "Checklist personalizable",
//       description: "Crea una mañana que te llene de energía y te prepare para un día productivo y equilibrado.",
//       icon: Clock,
//       downloadLink: "#",
//       image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       featured: false
//     }
//     */
//   ];

//   return (
//     <section className="relative overflow-hidden py-20 lg:py-32">
//       {/* Fondo decorativo con patrones suaves */}
//       <div className="absolute inset-0 pattern-dots opacity-30"></div>

//       {/* Blob decorativo */}
//       <div className="absolute top-20 -right-32 w-64 h-64 bg-gradient-to-br from-mint/20 to-lavender/20 decorative-blob animate-float"></div>
//       <div className="absolute -bottom-20 -left-32 w-48 h-48 bg-gradient-to-br from-coral/20 to-blue-main/20 decorative-blob animate-float" style={{ animationDelay: '2s' }}></div>

//       <Container>
//         {/* Header de la sección */}
//         <div className="text-center mb-16">
//           <Heading level={2} className="text-4xl lg:text-5xl font-montserrat font-light mb-4 text-lavender-dark animate-fade-in-up">
//             EMPIEZA HOY MISMO
//           </Heading>
//           <Text className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto animate-fade-in-up font-montserrat" style={{ animationDelay: '0.2s' }}>
//             <span className="block font-dancing text-blue-dark text-2xl md:text-3xl lg:text-4xl mb-4">
//               Descarga recursos gratuitos
//             </span>
//             que te ayudarán a dar el primer paso hacia una vida más organizada y plena.
//           </Text>
//         </div>

//         {/* Grid de recursos */}
//         <div className="grid gap-8 md:gap-12">
//           {resources.map((resource, index) => (
//             <ResourceCard
//               key={resource.id}
//               resource={resource}
//               index={index}
//               isEven={index % 2 === 0}
//             />
//           ))}
//         </div>


//         {/* CTA Newsletter */}
//         <div className="glass-mint rounded-3xl p-6 border border-mint/20">
//           <h4 className="text-lg font-montserrat font-semibold mb-2 text-white">
//             Mantente conectada
//           </h4>
//           <p className="text-gray-300 text-sm mb-4 font-montserrat">
//             Recibe consejos exclusivos cada semana
//           </p>
//           <div className="flex gap-3">
//             <input
//               type="email"
//               placeholder="tu@email.com"
//               className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-coral transition-colors font-montserrat"
//             />
//             <Button className="bg-gradient-to-r from-coral to-coral-dark hover:from-coral-dark hover:to-coral px-6 py-2 rounded-full text-sm font-montserrat font-medium">
//               Suscribir
//             </Button>
//           </div>
//         </div>

       
//       </Container>
//     </section>
//   );
// }

// // Componente para cada tarjeta de recurso
// function ResourceCard({ resource, index, isEven }) {
//   const IconComponent = resource.icon;

//   return (
//     <div
//       className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 animate-fade-in-up ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
//         }`}
//       style={{ animationDelay: `${0.4 + index * 0.2}s` }}
//     >
//       {/* Imagen del mockup */}
//       <div className="flex-1 max-w-md">
//         <div className="relative group">
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-main/20 to-lavender/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
//           <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
//             <img
//               src={resource.image}
//               alt={resource.title}
//               className="w-full h-64 md:h-80 object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-blue-main/10 to-transparent"></div>
//           </div>
//         </div>
//       </div>

//       {/* Contenido del recurso */}
//       <div className="flex-1 text-center lg:text-left">
//         <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
//           <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-main to-lavender flex items-center justify-center shadow-lg">
//             <IconComponent className="w-6 h-6 text-white" />
//           </div>
//           <div className="h-px flex-1 bg-gradient-to-r from-blue-main/30 to-transparent max-w-16"></div>
//         </div>

//         <Heading level={3} className="text-2xl lg:text-3xl font-montserrat font-semibold text-blue-dark mb-2">
//           {resource.title}
//         </Heading>

//         <Text className="text-lg font-dancing text-lavender-dark mb-4">
//           {resource.subtitle}
//         </Text>

//         <Text className="text-gray-600 font-montserrat mb-8 text-base lg:text-lg leading-relaxed">
//           {resource.description}
//         </Text>

//         {/* Botón de descarga */}
//         <div className="space-y-4">
//           <Button
//             variant="primary"
//             size="lg"
//             className="bg-gradient-to-r from-blue-main to-lavender text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
//             onClick={() => {
//               // Aquí iría la lógica de descarga
//               console.log(`Descargando recurso: ${resource.title}`);
//             }}
//           >
//             <Download className="w-5 h-5 mr-2" />
//             Descargar Gratis
//           </Button>

//           <Text className="text-sm text-gray-500 font-montserrat">
//             Sin spam, sin suscripciones. Solo recursos útiles.
//           </Text>
//         </div>
//       </div>
//     </div>
//   );
// }