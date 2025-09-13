import Container from '../components/atoms/Container';
import Heading from '../components/atoms/Heading';

export function Contact() {
  return (
    <main className="py-16">
      <Container>
        <Heading level={1}>Contacto</Heading>
        <p className="mt-4">Escríbenos y pronto te responderemos.</p>
      </Container>
    </main>
  );
}
