import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './pages/Home';
import { Header } from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';
import { TallerNavidad } from './pages/TallerNavidad';

// Componente para controlar el scroll
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taller-navidad" element={<TallerNavidad />} />
      </Routes>
      <Footer />
    </Router>
  );
}


