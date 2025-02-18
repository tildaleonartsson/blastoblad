import "./header.css";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="mobile-header">
        <button className="menu-button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
        <div className="logo">
          <img src="/images/logotyp/LoggaNoBackground.png" alt="Logga" />
        </div>
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Hem</a></li>
          <li><a href="#">Boden</a></li>
          <li><a href="#">Självplock</a></li>
          <li><a href="#">Om oss</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
