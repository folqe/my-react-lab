import React, { useState } from 'react';
import './css/ProductsPage.css'; // Importera CSS för denna komponent

function ProductsPage() {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <header className="site-header">
        <h1 className="title">Sango Bikes</h1>
      </header>

      <div
        className={`hamburger-menu ${menuActive ? 'active' : ''}`}
        aria-label="Menyn"
        onClick={handleMenuClick}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <nav className={`main-nav ${menuActive ? 'active' : ''}`}>
        <ul>
          <li><a href="/" className="nav-link">Hem</a></li>
          <li><a href="/about" className="nav-link">Om oss</a></li>
          <li><a href="/services" className="nav-link">Tjänster</a></li>
          <li><a href="/contact" className="nav-link">Kontakt</a></li>
          <li><a href="/products" className="nav-link">Produkter</a></li>
        </ul>
      </nav>

      <main className="content">
        <div className="overlay">
          <h2>Våra Produkter</h2>
          <p>Utforska vårt utbud av cyklar och tillbehör.</p>
          <div className="product-list">
            <div className="product-item">
              <p>TRS ONE 2024</p>
              <img src="ONE-2024_1.jpg" alt="Cykelmodell A" />
            </div>
            <div className="product-item">
              <p>TRS RACING 2024</p>
              <img src="01 CAM13552 copia 2.jpg" alt="Cykelmodell B" />
            </div>
            <div className="product-item">
              <p>TRS XTRACK 2024</p>
              <img src="XTrack One a.jpg" alt="Cykelmodell C" />
            </div>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <p>&copy; 2024 Sango Bikes. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ProductsPage;
