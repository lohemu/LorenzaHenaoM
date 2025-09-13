import Container from '../atoms/Container';

export default function Footer() {
  return (
    <footer className="border-t">
      <Container className="py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Lorenza Henao. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">Privacidad</a>
          <a href="#" className="hover:underline">Términos</a>
        </div>
      </Container>
    </footer>
  );
}
