import { Hero } from '../components/organisms/Hero';
import { AboutSection } from '../components/organisms/AboutSection';
import { ServicesSection } from '../components/organisms/ServicesSection';
import { TestimonialsSection } from '../components/organisms/TestimonialsSection';
import { ResourcesSection } from '../components/organisms/ResourcesSection';
import { CTASection } from '../components/organisms/CTASection';
import { ContactSection } from '../components/organisms/ContactSection';
import { FeaturesSection } from '../components/organisms/FeaturesSection';


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

      {/* Sección de Características */}
      <section id="caracteristicas">
        <FeaturesSection />
      </section>

      {/* Sección Testimonios */}
      <section id="testimonios">
        <TestimonialsSection />
      </section>

       {/* Sección Blog */}
      <section id="blog">
        <ResourcesSection />
      </section>

      {/* Sección CTA */}
      <section id="cta">
        <CTASection />
      </section>
      
      {/* Sección Contact */}
      <section id="contacto">
        <ContactSection />
      </section>      
     
   
    </>
  )

  
  ;
}