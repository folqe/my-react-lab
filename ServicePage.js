import React, { useState } from 'react';
import './css/ServicePage.css'; // Importera CSS för denna komponent

function ServicePage() {
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
          <h2>Våra Tjänster</h2>
          <p>Vi erbjuder en rad tjänster för att hjälpa dig med din motorcykel.</p>
          <ul>
            <li>Motorcykel service</li>
            <li>Reparation</li>
            <li>Uppgraderingar</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default ServicePage;
