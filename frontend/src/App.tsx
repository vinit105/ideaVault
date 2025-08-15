import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from "./components/Footer"
import Home from './pages/Home';
import Ideas from './pages/Ideas';
import SubmitIdea from './pages/SubmitIdea';
import About from './pages/About';
import License from './pages/License';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/license/:id" element={<License />} />
            <Route path="/license" element={<License />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/about" element={<About />} />
            <Route path="/submit-idea" element={<SubmitIdea />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
