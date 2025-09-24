import { Hero } from '../components/organisms/Hero';
import { AboutSection } from '../components/organisms/AboutSection';
import { TestimonialsSection } from '../components/organisms/TestimonialsSection';
import { ResourcesSection } from '../components/organisms/ResourcesSection';
import { ContactSection } from '../components/organisms/ContactSection';
import { MentoringSection } from '../components/organisms/MentoringSection';
import { SubscriptionSection } from '../components/organisms/SubscriptionSection';

export function Home() {
  return (
    <>
       {/* Sección Hero */}
      <section id="hero">
        <Hero />
      </section>

     {/* Sección Sobre Mí */}
      <section id="sobre-mi">
        <AboutSection />
      </section>

      {/* Sección de Mentorías */}
      <section id="mentorias">
        <MentoringSection />
      </section>

       {/* Sección Recursos */}
      <section id="recursos">
        <ResourcesSection />
        {/* La sección de suscripción se incluye dentro de recursos para mantener la navegación consistente */}
        <SubscriptionSection />
      </section>
      
      {/* Sección Testimonios */}
      <section id="testimonios">
        <TestimonialsSection />
      </section>
      
      {/* Sección Contact */}
      <section id="contacto">
        <ContactSection />
      </section>      
    </>
  );
}

// import { Hero } from '../components/organisms/Hero';
// import { AboutSection } from '../components/organisms/AboutSection';
// import { TestimonialsSection } from '../components/organisms/TestimonialsSection';
// import { ResourcesSection } from '../components/organisms/ResourcesSection';
// import { ContactSection } from '../components/organisms/ContactSection';
// import { MentoringSection } from '../components/organisms/MentoringSection';
// import { SubscriptionSection } from '../components/organisms/SubscriptionSection';

// export function Home() {
//   return (
//     <>
//        {/* Sección Sobre Mí */}
//       <section id="hero">
//         <Hero />
//       </section>

//      {/* Sección Sobre Mí */}
//       <section id="sobre-mi">
//         <AboutSection />
//       </section>

//       {/* Sección de Mentorías */}
//       <section id="mentorias">
//         <MentoringSection />
//       </section>

//        {/* Sección Recursos */}
//       <section id="recursos">
//         <ResourcesSection />
//       </section>

//        {/* Sección Suscripcion] */}
//       <section id="suscription">
//         <SubscriptionSection />
//       </section>  
     
      
//       {/* Sección Testimonios */}
//       <section id="testimonios">
//         <TestimonialsSection />
//       </section>
      
     
//       {/* Sección Contact */}
//       <section id="contacto">
//         <ContactSection />
//       </section>      

     
   
//     </>
//   )

  
//   ;
// }