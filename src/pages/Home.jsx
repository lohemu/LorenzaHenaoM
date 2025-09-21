import { Hero } from '../components/organisms/Hero';
import { AboutSection } from '../components/organisms/AboutSection';
import { TestimonialsSection } from '../components/organisms/TestimonialsSection';
import { ResourcesSection } from '../components/organisms/ResourcesSection';
import { CTASection } from '../components/organisms/CTASection';
import { ContactSection } from '../components/organisms/ContactSection';
import { MentoringSection } from '../components/organisms/MentoringSection';


export function Home() {
  return (
    <>
       {/* Sección Sobre Mí */}
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
  )

  
  ;
}