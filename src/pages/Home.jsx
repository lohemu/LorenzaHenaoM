import Hero from '../components/organisms/Hero';
import AboutSection from '../components/organisms/AboutSection';
import ServicesSection from '../components/organisms/ServicesSection';
import TestimonialsSection from '../components/organisms/TestimonialsSection';
import BlogSection from '../components/organisms/BlogSection';
import CTASection from '../components/organisms/CTASection';
import { ContactSection } from '../components/organisms/ContactSection';


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

      {/* Sección Servicios */}
      <section id="servicios">
        <ServicesSection />
      </section>

      {/* Sección Testimonios */}
      <section id="testimonios">
        <TestimonialsSection />
      </section>

       {/* Sección Blog */}
      <section id="blog">
        <BlogSection />
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