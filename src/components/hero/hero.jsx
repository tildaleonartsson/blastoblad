import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./hero.css";

const Hero = ({ image, title, subtitle, linkText, linkUrl }) => {
  return (
    <div className="hero-container">
      {/* Sociala medier-ikoner */}
      <div className="social-icons-hero">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </div>

      {/* Dynamiskt innehåll */}
      <div className="hero-content">
        <img src={image} alt="Hero" className="hero-image" />
        <h2>{title}</h2>
        <p>{subtitle}</p>
        {linkUrl && <a href={linkUrl} className="hero-link">{linkText}</a>}
      </div>
    </div>
  );
};

export default Hero;