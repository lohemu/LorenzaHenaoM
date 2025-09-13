import Container from '../components/atoms/Container';
import Heading from '../components/atoms/Heading';

export function AboutMe() {
  return (
    <main className="py-16">
      <Container>
        <Heading level={1}>Sobre mí</Heading>
        <p className="mt-4">Contenido de ejemplo para la página de Sobre mí.</p>
      </Container>
    </main>
  );
}
