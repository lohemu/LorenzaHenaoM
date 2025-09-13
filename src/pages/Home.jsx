import Hero from '../components/organisms/Hero';
import Features from '../components/organisms/Features';

/* export function Home() {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
} */


export function Home() {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-dancing text-blue-600">
        Bienvenido a mi sitio ✨
      </h1>
      <p className="mt-4 font-montserrat text-gray-700">
        Este es un texto con Montserrat.
      </p>
    </div>
  );
}
