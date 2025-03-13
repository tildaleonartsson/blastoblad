import React from 'react';
import './ContentGallery.css';

const ContentGallery = ({ mainImage, overlayText, galleryImages }) => {
  return (
    <>
    <div class="parent">
      <div class="div1"><img src="./images/boden/bodenpotatis.jpg" alt="" /> </div>
      <div class="div2"><img src="/images/boden/bodensallad.jpg" alt="" /> </div>
      <div class="div4"><img src={mainImage.src} alt={mainImage.alt} />
        <div className="overlay">
          <h2>Grönsaksboden</h2>
            <p>I boden varierar sortimentet daligen efter åtkomst. Allt är antigen odlat här hos oss eller av andra lokala bönder på Bjäre. </p>
            <h3>Närodlat</h3>
            <ul>
              <li>Potatis - Pether Jonzon i Vejbystrand</li>
              <li>Sallad - Anders Jansson i Västra Ljungby</li>
            </ul>
            <h3>Härodlat</h3>
            <ul>
              <li>Lök</li>
              <ul>
                <li>Gullök</li>
                <li>Rödlök</li>
                <li>Vitlök</li>
                <li>Shalottenlök</li>
                <li>Salladslök</li>
                <li>Purjolök</li>
              </ul>
              <li>Slanggurka</li>
              <ul>
                <li>Darwin</li>
                <li>Garpo</li>
              </ul>
              <li>Stora Tomater</li>
              
              <li>Små Tomater</li>

              <li>Chili</li>
              <li>Morötter</li>
              <li>Räddisor</li>
              <li>Paprika</li>
              <li>Färska kryddor</li>
              <ul>
                <li>Dill</li>
                <li>Krondill</li>
                <li>Persilja</li>
                <li>Gräslök</li>
                </ul>
              <li>Bönor</li>
              <ul>
                <li>Vaxbönor</li>
                <li>Brytbönor</li>
              </ul>
              <li>Rabarber</li>
            </ul>
        </div>
    </div>
    </div>
    </>
  );
};

export default ContentGallery;

