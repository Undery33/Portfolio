import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Work from './pages/Work/Work';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Undery</Link>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/projects">Projects</Link>
      </nav>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
