import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import AboutPage from './components/AboutPage';
import ServicePage from './components/ServicePage';
import ContactPage from './components/ContactPage';
import ProductsPage from './components/ProductsPage';

// Importera CSS-filer
import './css/IndexPage.css'; // Rätt sökväg till CSS
import './css/AboutPage.css';
import './css/ServicePage.css';
import './css/ContactPage.css';
import './css/ProductsPage.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
