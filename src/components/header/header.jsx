import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './header.css';

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Bars icon for mobile */}
        <div className="bars-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
        <div className="bars-icon hidden">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>

        {/* Logo with image */}
        <div className="logo">
          <img src="/images/logotyp/LoggaNoBackground.png" alt="Logo" className="logo-img" />
        </div>

        {/* Social media icons */}
        <div className="social-icons">
          <a href="https://facebook.com" className="icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://instagram.com" className="icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>

      {/* Swipe-in menu for mobile */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
        <nav>
          <ul>
            <li><a href="/">Hem</a></li>
            <li><a href="/boden">Boden</a></li>
            <li><a href="/självplock">Självplock</a></li>
            <li><a href="/omoss">Om oss</a></li>
          </ul>
        </nav>
      </div>

      {/* Desktop navigation */}
      <div className="desktop-menu">
      <ul>
            <li><a href="/">Hem</a></li>
            <li><a href="/boden">Boden</a></li>
            <li><a href="/självplock">Självplock</a></li>
            <li><a href="/omoss">Om oss</a></li>
          </ul>
      </div>
    </header>
  );
};

export default HeaderNav;
