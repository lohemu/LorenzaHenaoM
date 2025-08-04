import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home';
import {AboutMe} from './pages/AboutMe';
import {Mentorships} from './pages/Mentorships';
import {Resources} from './pages/Resources';
import {Contact} from './pages/Contact';
import {Header} from './components/Header';
import {Footer} from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<AboutMe />} />
        <Route path="/mentorias" element={<Mentorships />} />
        <Route path="/recursos" element={<Resources />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
