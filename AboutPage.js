import React from 'react';
import './css/AboutPage.css'; // Importera CSS för denna komponent

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    this.setState((prevState) => ({
      menuActive: !prevState.menuActive,
    }));
  }

  render() {
    return (
      <div>
        <header className="site-header">
          <h1 className="title">Sango Bikes</h1>
        </header>

        <div
          className={`hamburger-menu ${this.state.menuActive ? 'active' : ''}`}
          aria-label="Menyn"
          onClick={this.handleMenuClick}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <nav className={`main-nav ${this.state.menuActive ? 'active' : ''}`}>
          <ul>
            <li><a href="SangoBikes.html">Hem</a></li>
            <li><a href="about.html">Om oss</a></li>
            <li><a href="services.html">Tjänster</a></li>
            <li><a href="contact.html">Kontakt</a></li>
            <li><a href="products.html">Produkter</a></li>
          </ul>
        </nav>

        <main className="content">
          <div className="overlay">
            <h2>Om Sango Bikes</h2>
            <p>Vi är generalagent i Sverige för TRS och Mecatecno trialmotorcyklar, samt Hebo, CSP, Kelley Carbon utrustning och tillbehör. Vi har även ett stort lager av reservdelar till Beta trialmotorcyklar. Vi tävlar mycket i trial och har många års tävlingserfarenhet på elitnivå, så du kan tryggt vända dig till oss när det gäller trial-produkter.</p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/IJuZQtsGv_c?si=Wlml5hoimTY003_X"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </main>
      </div>
    );
  }
}

export default About;
