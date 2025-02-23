import React from 'react';
import './ContentGallery.css';

const ContentGallery = ({ mainImage, overlayText, galleryImages }) => {
  return (
    <>
    <div class="parent">
      <div class="div1"><img src="./images/boden/bodenpotatis.jpg" alt="" /> </div>
      <div class="div2"><img src="/images/boden/bodensallad.jpg" alt="" /> </div>
      <div class="div3"><img src="/images/kossor/solnedgångkossor.jpg" alt="" /> </div>
      <div class="div4"><img src={mainImage.src} alt={mainImage.alt} />
        <div className="overlay">
          <h2>Grönsaksboden</h2>
            <p>I boden varierar sortimentet daligen efter åtkomst. Allt är antigen odlat här hos oss eller andra lokala bönder på Bjäre. </p>
            <h3>Närodlat</h3>
            <ul>
              <li>Potatis - Pether Jonzon i Vejbystrand</li>
              <li>Mini Spetskål - Anders Jansson i Västra Ljungby</li>
              <li>Sallad - Varierande storter</li>
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
              <ul>
                <li>Sevance</li>
                <li>Damaress</li>
                <li>Gourmet</li>
              </ul>
              <li>Små Tomater</li>
              <ul>
                <li>Delisher</li>
                <li>Leonisher</li>
               <li>Nightshade</li>
               <li>Kajsa</li>
               <li>Lotta</li>
               <li>Madicken</li>
               <li>Chocolate Cherry</li>
               <li>Artisan Lucky Tiger</li>
              </ul>
              <li>Chili</li>
              <ul>
                <li>Apache</li>
                <li>Cherry Bomb</li>
                <li>Chenzo</li>
                <li>Hungarian Hot</li>
                <li>Panama</li>
                <li>Japansk Lykta</li>
                <li>Gul Chili</li>
              </ul>
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

