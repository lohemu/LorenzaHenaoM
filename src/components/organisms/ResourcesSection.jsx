import { useState } from 'react';
import { Container } from '../atoms/Container';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { DownloadModal } from '../molecules/DownloadModal';

// Importar íconos de Lucide
import { Download, Calendar, FileText } from "lucide-react";

import Descarga from '../../assets/img/descarga.png';
import Calendario from '../../assets/img/Calendario.png';

export function ResourcesSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);

  const resources = [
    {
      id: 1,
      title: "Mini guía: 5 pasos para encontrar tiempo para ti",
      subtitle: "",
      description: "Descubre cómo reorganizar tu semana para crear espacios de autocuidado y proyectos personales.",
      icon: Calendar,
      downloadLink: "https://drive.google.com/uc?export=download&id=TU_FILE_ID_AQUI", // ⚠️ Reemplazar con tu ID de Google Drive
      image: Descarga,
      featured: true
    },
    {
      id: 2,
      title: "Calendario semanal descargable",
      subtitle: "",
      description: "Organiza tu día identificando las tareas más importantes y reserva tiempo para ti.",
      icon: FileText,
      downloadLink: "https://drive.google.com/uc?export=download&id=TU_FILE_ID_AQUI", // ⚠️ Reemplazar con tu ID de Google Drive
      image: Calendario,
      featured: false
    }
  ];

  const handleDownloadClick = (resource) => {
    setSelectedResource(resource);
    setModalOpen(true);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-soft-lavender">
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
                  EMPIEZA HOY MISMO
                  <span className="block font-dancing text-gray-700 text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
                    Descarga recursos gratuitos
                  </span>
                </Heading>         
                <Text 
                  size="lg" 
                  color="light"
                  variant="body"
                  className="md:text-2xl mb-0 max-w-4xl animate-fade-in-up w-full"
                >
                  que te ayudarán a dar el primer paso hacia una vida más organizada y plena.
                </Text>    
              </div>
            </div>
          </Container>
        </div>
        
        <Container className="mb-40">
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
                    onDownloadClick={() => handleDownloadClick(resource)}
                  />
                ))}
              </div>
            </div>
          </div>           
        </Container>        
      </section>

      {/* Modal de descarga */}
      <DownloadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        resourceTitle={selectedResource?.title}
        downloadUrl={selectedResource?.downloadLink}
      />
    </>
  );
}

// Componente para cada tarjeta de recurso
function ResourceCard({ resource, index, isEven, onDownloadClick }) {
  const IconComponent = resource.icon;

  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 animate-fade-in-up ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
      style={{ animationDelay: `${0.4 + index * 0.2}s` }}
    >
      {/* Contenido del recurso */}
      <div className="flex-1 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shadow-lg">
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <div className="h-px flex-1 bg-gray-300 max-w-16"></div>
        </div>

        <Heading 
          level={3} 
          variant="semibold"
          color="darker"
          className="text-2xl lg:text-3xl mb-2"
        >
          {resource.title}
        </Heading>

        {resource.subtitle && (
          <Text 
            variant="script"
            color="default"
            className="text-lg mb-4"
          >
            {resource.subtitle}
          </Text>
        )}

        <Text 
          variant="body"
          color="default"
          className="mb-8 text-base lg:text-lg leading-relaxed"
        >
          {resource.description}
        </Text>

        {/* Botón de descarga */}
        <div className="space-y-4">
          <Button
            variant="primary"
            size="large"
            className="px-8 py-4 text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            onClick={onDownloadClick}
          >
            <Download className="w-5 h-5 mr-2" />
            Descargar Gratis
          </Button>

          <Text 
            size="sm" 
            color="muted"
            variant="body"
          >
            Sin spam, sin suscripciones. Solo recursos útiles.
          </Text>
        </div>
      </div>
      
      {/* Imagen del mockup */}
      <div className="flex-1 max-w-md">
        <div className="relative group">
          <div className="absolute inset-0 bg-gray-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
            <img
              src={resource.image}
              alt={resource.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { Container } from '../atoms/Container';
// import { Heading } from '../atoms/Heading';
// import { Text } from '../atoms/Text';
// import { Button } from '../atoms/Button';

// // Importar íconos de Lucide
// import { Download, Calendar, FileText, Clock } from "lucide-react";

// import Descarga from '../../assets/img/descarga.jpg';
// import Calendario from '../../assets/img/Calendario.png';

// export function ResourcesSection() {

//   const resources = [
//     {
//       id: 1,
//       title: "Mini guía: 5 pasos para encontrar tiempo para ti",
//       subtitle: "",
//       description: "Descubre cómo reorganizar tu semana para crear espacios de autocuidado y proyectos personales.",
//       icon: Calendar,
//       downloadLink: "#", // Reemplazar con enlace real
//       image: Descarga, // Imagen de mockup de planificador
//       featured: true
//     },
//     {
//       id: 2,
//       title: "Calendario semanal descargable",
//       subtitle: "",
//       description: "Organiza tu día identificando las tareas más importantes y reserva tiempo para ti.",
//       icon: FileText,
//       downloadLink: "#",
//       image: Calendario,
//       featured: false
//     }
//   ];

//   return (
//     <section className="relative overflow-hidden bg-gradient-soft-lavender">

//       <div className="w-full py-5 ">

//          <Container size="default" padding="default">
//           <div className="w-full text-center">
//             <div className="relative z-1 flex flex-col justify-center items-center">
//               <Heading
//                 level={1}
//                 variant="light"
//                 color="default"
//                 className="py-5 mt-5 mb-0 animate-fade-in-up"
//               >
//                 EMPIEZA HOY MISMO
//                 <span className="block font-dancing text-gray-700 text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
//                   Descarga recursos gratuitos
//                 </span>
//               </Heading>         
//                <Text 
//                 size="lg" 
//                 color="light"
//                 variant="body"
//                 className="md:text-2xl mb-0 max-w-4xl animate-fade-in-up w-full"
//               >
//                 que te ayudarán a dar el primer paso hacia una vida más organizada y plena.
//               </Text>    

//             </div>
//           </div>
//         </Container>
//       </div>
        
//       <Container className="mb-40">
//         <div className="w-full text-center">
//           <div className="relative z-1 flex flex-col justify-center items-center">
//             {/* Grid de recursos */}
//             <div className="grid gap-8 md:gap-12 m-10">
//               {resources.map((resource, index) => (
//                 <ResourceCard
//                   key={resource.id}
//                   resource={resource}
//                   index={index}
//                   isEven={index % 2 === 0}
//                 />
//               ))}
//             </div>
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
//       {/* Contenido del recurso */}
//       <div className="flex-1 text-center lg:text-left">
//         <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
//           <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shadow-lg">
//             <IconComponent className="w-6 h-6 text-white" />
//           </div>
//           <div className="h-px flex-1 bg-gray-300 max-w-16"></div>
//         </div>

//         <Heading 
//           level={3} 
//           variant="semibold"
//           color="darker"
//           className="text-2xl lg:text-3xl mb-2"
//         >
//           {resource.title}
//         </Heading>

//         <Text 
//           variant="script"
//           color="default"
//           className="text-lg mb-4"
//         >
//           {resource.subtitle}
//         </Text>

//         <Text 
//           variant="body"
//           color="default"
//           className="mb-8 text-base lg:text-lg leading-relaxed"
//         >
//           {resource.description}
//         </Text>

//         {/* Botón de descarga */}
//         <div className="space-y-4">
//           <Button
//             variant="primary"
//             size="large"
//             className="px-8 py-4 text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
//             onClick={() => {
//               // Aquí iría la lógica de descarga
//               console.log(`Descargando recurso: ${resource.title}`);
//             }}
//           >
//             <Download className="w-5 h-5 mr-2" />
//             Descargar Gratis
//           </Button>

//           <Text 
//             size="sm" 
//             color="muted"
//             variant="body"
//           >
//             Sin spam, sin suscripciones. Solo recursos útiles.
//           </Text>
//         </div>
//       </div>
      
//       {/* Imagen del mockup */}
//       <div className="flex-1 max-w-md">
//         <div className="relative group">
//           <div className="absolute inset-0 bg-gray-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
//           <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
//             <img
//               src={resource.image}
//               alt={resource.title}
//               className="w-full h-64 md:h-80 object-cover"
//             />
//             <div className="absolute inset-0 bg-gray-900/10"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

