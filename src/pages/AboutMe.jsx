import Container from '../components/atoms/Container';
import Heading from '../components/atoms/Heading';

export function AboutMe() {
  return (
    <div className="p-8 space-y-6 text-center">
      <h1 className="text-4xl font-dancing text-pink-600">
        Hola, soy Lorenza 💜
      </h1>
      
      <p className="text-lg font-indie text-gray-700">
        Esta parte usa Indie Flower, se ve más relajada.
      </p>
      
      <p className="text-lg font-satisfy text-green-700">
        Esta frase usa Satisfy ✨
      </p>
      
      <p className="text-lg font-shadows text-blue-700">
        Y esta otra usa Shadows Into Light.
      </p>
      
      <p className="text-lg font-pacifico text-red-500">
        Finalmente, Pacifico para un estilo alegre.
      </p>
    </div>
  );
}


// export function AboutMe() {
//   return (
//     <main className="py-16">
//       <Container>
//         <Heading level={1}>Sobre mí</Heading>
//         <p className="mt-4">Contenido de ejemplo para la página de Sobre mí.</p>
//       </Container>
//     </main>
//   );
// }
