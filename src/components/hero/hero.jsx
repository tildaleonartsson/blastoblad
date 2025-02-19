import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Social media icons positioned top-left on desktop */}
      <div className="social-icons-hero">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </div>

      {/* Hero image and text */}
      <div className="hero-content">
        <img src="/images/blommor/dahliarosa.jpg" alt="Hero" className="hero-image" />
        <h2>"Från vår trädgård, till ert hem"</h2>
        <p>Hitta till oss</p>
      </div>
    </div>
  );
};

export default Hero;