import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

// Teammate Placeholders
const MenuPlaceholder = () => <div className="text-center mt-5"><h2>Menu Page (Teammate Work)</h2></div>;
const ContactPlaceholder = () => <div className="text-center mt-5"><h2>Contact Page (Teammate Work)</h2></div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<MenuPlaceholder />} />
        <Route path="/contact" element={<ContactPlaceholder />} />
      </Routes>
    </Router>
  );
}

export default App;