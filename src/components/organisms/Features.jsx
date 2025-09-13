import Container from '../atoms/Container';
import Card from '../molecules/Card';
import Heading from '../atoms/Heading';

const features = [
  { title: 'Soporte 24/7', text: 'Siempre disponibles para ayudarte.' },
  { title: 'Propiedad del proyecto', text: 'Transparencia y control total.' },
  { title: 'Entrega rápida', text: 'Iteraciones semanales y demos.' },
];

export default function Features() {
  return (
    <section id="features" className="py-16 lg:py-24">
      <Container>
        <Heading level={2} className="mb-10">Características</Heading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => (
            <Card key={f.title} title={f.title}>
              <p>{f.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
