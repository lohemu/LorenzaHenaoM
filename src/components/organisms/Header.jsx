import { Link } from 'react-router-dom';
import Container from '../atoms/Container';
import Button from '../atoms/Button';
import NavItem from '../molecules/NavItem';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="font-bold text-lg">Lorenza</Link>
        <nav className="hidden md:flex items-center gap-2">
          <NavItem to="/">Inicio</NavItem>
          <NavItem to="/sobre-mi">Sobre mí</NavItem>
          <NavItem to="/mentorias">Mentorías</NavItem>
          <NavItem to="/recursos">Recursos</NavItem>
          <NavItem to="/contacto">Contacto</NavItem>
        </nav>
        <Button as={Link} to="/contacto" className="hidden md:inline-flex">Agenda</Button>
      </Container>
    </header>
  );
}
