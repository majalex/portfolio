import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/portfolio/about" element={<About />} />
            <Route path="/portfolio/contact" element={<Contact />} />
            <Route path="/portfolio/projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
