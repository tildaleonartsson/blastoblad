import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./footer.css"; // Importera CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Vänster sektion */}
        <div className="footer-left">
          <div className="icon-text">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-footer"/>
          <p>Karstorpsvägen 256<br />269 42 BÅSTAD</p>
          </div>
          <div className="icon-text">
          <FontAwesomeIcon icon={faEnvelope} className="icon-footer"/>
          <p>blastoblad@gmail.com</p>
          </div>
          <div className="icon-text">
          <FontAwesomeIcon icon={faPhone} className="icon-footer"/>
          <p>0703 18 28 42</p>
          </div>          
        </div>

        {/* Höger sektion */}
        <div className="footer-right">
          <p>Blast & Blad är ett familjeföretag där tre generationer arbetar tillsammans för att ge dig det bästa från vår odling. Med kärlek till jorden och hantverket följer vi vår filosofi: "Från vår trädgård, till ert hem." </p>
          <p>Följ oss på våra sociala medier.</p>
          <div className="social-icons-footer">
            <FontAwesomeIcon icon={faFacebook} className="icon-footer" />
            <FontAwesomeIcon icon={faInstagram} className="icon-footer" />
          </div>
        </div>
      </div>
      <div className="footer-center">
        <small>©BLAST & BLAD 2025</small>
      </div>
    </footer>
  );
};

export default Footer;
