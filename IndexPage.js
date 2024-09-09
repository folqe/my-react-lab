import React, { useState } from 'react'; // Importera useState
import './css/IndexPage.css'; // Rätt sökväg om css-mappen ligger i src/components

function IndexPage() {
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
          <li><a href="SangoBikes.html" className="nav-link">Hem</a></li>
          <li><a href="about.html" className="nav-link">Om oss</a></li>
          <li><a href="services.html" className="nav-link">Tjänster</a></li>
          <li><a href="contact.html" className="nav-link">Kontakt</a></li>
          <li><a href="products.html" className="nav-link">Produkter</a></li>
        </ul>
      </nav>

      <main className="content">
        <div className="overlay">
          <h2 className="welcome">TRRS ONE RR 2024</h2>
          <button className="explore-button">Upptäck mer</button>
        </div>
      </main>
    </div>
  );
}

export default IndexPage;
