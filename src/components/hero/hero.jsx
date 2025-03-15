import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useParams } from "react-router-dom";
import "./hero.css";

const Hero = ({ heroId }) => {
  const { id: paramId } = useParams();
  const finalId = heroId || paramId; // Använd prop om den finns, annars URL-parametern

  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/hero/${finalId}`)
      .then((res) => res.json())
      .then((data) => setHeroData(data))
      .catch((err) => console.error("Fel vid hämtning av hero:", err));
  }, [finalId]);

  if (!heroData) return <p>Laddar...</p>;

  return (
    <div className="hero-container">
      <div className="social-icons-hero">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </div>

      <div className="hero-content">
        <img src={heroData.image} alt="Hero" className="hero-image" />
        <h2 className="h2hero">{heroData.title}</h2>
        <p className="phero">{heroData.subtitle}</p>
        {heroData.linkUrl && (
          <a href={heroData.linkUrl} className="hero-link">
            <p className="phero">{heroData.linkText}</p>
          </a>
        )}
      </div>
    </div>
  );
};

export default Hero;
