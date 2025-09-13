import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="py-16 lg:py-24 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <Heading level={1} className="mb-4">Creamos experiencias web hermosas</Heading>
          <Text className="mb-8">UI/UX, desarrollo web y marketing digital con foco en resultados.</Text>
          <div className="flex items-center gap-4">
            <Button>Empezar ahora</Button>
            <a href="tel:+57123456789" className="underline">Llámanos (0123) 456 – 789</a>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-3xl border shadow-sm"></div>
      </Container>
    </section>
  );
}
