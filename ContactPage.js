import React, { useState } from 'react';
import './css/ContactPage.css'; // Importera CSS för denna komponent

function ContactPage() {
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
          <h2>Kontakta Oss</h2>
          <p>Har du frågor eller behöver hjälp? Tveka inte att kontakta oss:</p>
          <form action="mailto:kontakt@sangobikes.com" method="post" encType="text/plain">
            <label htmlFor="name">Namn:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">E-post:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Meddelande:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <button type="submit">Skicka</button>
          </form>

          <img id="slump-banner" src="bild1.jpg" alt="Slumpmässig bild" />
        </div>
      </main>
    </div>
  );
}

export default ContactPage;
