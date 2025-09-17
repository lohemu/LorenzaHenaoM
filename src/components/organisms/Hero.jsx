import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import AboutSection from '../organisms/AboutSection';
import ServicesSection from '../organisms/ServicesSection';
import TestimonialsSection from '../organisms/TestimonialsSection';
import CTASection from '../organisms/CTASection';
import BlogSection from '../organisms/BlogSection';

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 min-h-screen flex items-center">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-6 h-6 bg-pink-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-1/4 w-8 h-8 bg-purple-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-10 w-3 h-3 bg-indigo-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Formas geométricas decorativas */}
          <div className="absolute top-1/4 left-1/3 w-16 h-16 border border-pink-300 rounded-full opacity-20 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-purple-300 rotate-45 opacity-15 animate-pulse"></div>
        </div>

        <Container className="relative z-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Estrella decorativa superior */}
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="relative">
                <svg className="w-8 h-8 text-yellow-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
              </div>
            </div>

            <Heading 
              level={1} 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in-up"
            >
              Transforma tu vida con
              <span className="block font-dancing text-pink-500 text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
                mentoría personalizada
              </span>
            </Heading>

            {/* Estrella decorativa intermedia */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative">
                <svg className="w-6 h-6 text-pink-400 animate-spin" style={{ animationDuration: '8s' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>

            <Text className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Descubre tu potencial, supera tus límites y alcanza tus sueños más ambiciosos. 
              Te acompaño en tu proceso de crecimiento personal y profesional.
            </Text>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 btn-gradient-hover">
                Comenzar mi transformación
              </Button>
              <a 
                href="tel:+573001234567" 
                className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <span>Llámame: (300) 123 - 4567</span>
              </a>
            </div>

            {/* Iconos de beneficios */}
            <div className="flex justify-center lg:justify-start gap-8 mt-12 opacity-60 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Crecimiento</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Bienestar</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Potencial</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Ideas</span>
              </div>
            </div>
          </div>

          {/* Imagen del héroe */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            {/* Contenedor de la imagen principal */}
            <div className="relative z-10 aspect-[4/5] rounded-3xl bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 shadow-2xl overflow-hidden group">
              {/* Placeholder para la imagen */}
              <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-purple-600 font-medium text-lg">Lorenza Henao</p>
                  <p className="text-purple-400 text-sm">Mentora Certificada</p>
                </div>
                
                {/* Overlay decorativo */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Elementos decorativos alrededor de la imagen */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-80 shadow-lg animate-float"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-pink-400 to-red-400 rounded-full opacity-70 shadow-lg animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-60 shadow-lg animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/3 -left-4 w-10 h-10 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-50 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}></div>

            {/* Forma orgánica de fondo */}
            <div className="absolute -z-10 top-8 left-8 right-8 bottom-8 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-[3rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
          </div>
        </Container>
      </section>

      {/* Agregar todas las secciones adicionales */}
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <BlogSection />
    </>
  );
}


// import Container from '../atoms/Container';
// import Heading from '../atoms/Heading';
// import Text from '../atoms/Text';
// import Button from '../atoms/Button';

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 min-h-screen flex items-center">
//       {/* Elementos decorativos de fondo */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-60"></div>
//         <div className="absolute top-32 right-20 w-6 h-6 bg-pink-400 rounded-full opacity-40"></div>
//         <div className="absolute bottom-40 left-1/4 w-8 h-8 bg-purple-400 rounded-full opacity-30"></div>
//         <div className="absolute top-1/2 right-10 w-3 h-3 bg-indigo-400 rounded-full opacity-50"></div>
        
//         {/* Formas geométricas decorativas */}
//         <div className="absolute top-1/4 left-1/3 w-16 h-16 border border-pink-300 rounded-full opacity-20"></div>
//         <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-purple-300 rotate-45 opacity-15"></div>
//       </div>

//       <Container className="relative z-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
//         <div className="text-center lg:text-left">
//           {/* Estrella decorativa */}
//           <div className="flex justify-center lg:justify-start mb-6">
//             <div className="relative">
//               <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
//               </svg>
//               <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full"></div>
//             </div>
//           </div>

//           <Heading 
//             level={1} 
//             className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent"
//           >
//             Transforma tu vida con
//             <span className="block font-dancing text-pink-500 text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2">
//               mentoría personalizada
//             </span>
//           </Heading>

//           {/* Estrella decorativa */}
//           <div className="flex justify-center lg:justify-start mb-8">
//             <div className="relative">
//               <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
//               </svg>
//             </div>
//           </div>

//           <Text className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
//             Descubre tu potencial, supera tus límites y alcanza tus sueños más ambiciosos. 
//             Te acompaño en tu proceso de crecimiento personal y profesional.
//           </Text>
          
//           <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
//             <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//               Comenzar mi transformación
//             </Button>
//             <a 
//               href="tel:+573001234567" 
//               className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
//             >
//               <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
//                 </svg>
//               </div>
//               <span>Llámame: (300) 123 - 4567</span>
//             </a>
//           </div>

//           {/* Iconos de beneficios */}
//           <div className="flex justify-center lg:justify-start gap-8 mt-12 opacity-60">
//             <div className="flex flex-col items-center gap-2">
//               <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                 </svg>
//               </div>
//               <span className="text-sm text-gray-500">Crecimiento</span>
//             </div>
            
//             <div className="flex flex-col items-center gap-2">
//               <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                 </svg>
//               </div>
//               <span className="text-sm text-gray-500">Bienestar</span>
//             </div>
            
//             <div className="flex flex-col items-center gap-2">
//               <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </div>
//               <span className="text-sm text-gray-500">Potencial</span>
//             </div>
            
//             <div className="flex flex-col items-center gap-2">
//               <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                 </svg>
//               </div>
//               <span className="text-sm text-gray-500">Ideas</span>
//             </div>
//           </div>
//         </div>

//         {/* Imagen del héroe */}
//         <div className="relative">
//           {/* Contenedor de la imagen principal */}
//           <div className="relative z-10 aspect-[4/5] rounded-3xl bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 shadow-2xl overflow-hidden">
//             {/* Placeholder para la imagen */}
//             <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
//               <div className="text-center">
//                 <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
//                   <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                   </svg>
//                 </div>
//                 <p className="text-purple-600 font-medium">Lorenza Henao</p>
//                 <p className="text-purple-400 text-sm">Mentora Certificada</p>
//               </div>
//             </div>
//           </div>

//           {/* Elementos decorativos alrededor de la imagen */}
//           <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-80 shadow-lg"></div>
//           <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-pink-400 to-red-400 rounded-full opacity-70 shadow-lg"></div>
//           <div className="absolute top-1/4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-60 shadow-lg"></div>
//           <div className="absolute bottom-1/3 -left-4 w-10 h-10 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-50 shadow-lg"></div>

//           {/* Forma orgánica de fondo */}
//           <div className="absolute -z-10 top-8 left-8 right-8 bottom-8 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-[3rem] transform rotate-3"></div>
//         </div>
//       </Container>
//     </section>
//   );
// }